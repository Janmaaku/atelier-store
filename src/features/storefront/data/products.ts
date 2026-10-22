import { asc, eq, ne } from "drizzle-orm";
import { cacheLife, cacheTag } from "next/cache";
import { cache } from "react";

import { getDatabase } from "@/db";
import { categories, products, productStock } from "@/db/schema";
import type {
  ProductStock,
  StorefrontProduct,
} from "@/features/storefront/types/storefront";

const productSelection = {
  id: products.id,
  slug: products.slug,
  name: products.name,
  category: categories.name,
  description: products.description,
  color: products.color,
  priceCents: products.priceCents,
  primaryImageUrl: products.primaryImageUrl,
  primaryImageAlt: products.primaryImageAlt,
  secondaryImageUrl: products.secondaryImageUrl,
  secondaryImageAlt: products.secondaryImageAlt,
  details: products.details,
  quantity: productStock.quantity,
  lowStockThreshold: productStock.lowStockThreshold,
  stockPolicy: productStock.policy,
};

type ProductRow = {
  id: number;
  slug: string;
  name: string;
  category: string;
  description: string;
  color: string;
  priceCents: number;
  primaryImageUrl: string;
  primaryImageAlt: string;
  secondaryImageUrl: string;
  secondaryImageAlt: string;
  details: string[];
  quantity: number | null;
  lowStockThreshold: number | null;
  stockPolicy: "standard" | "made_to_order" | null;
};

const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

function getStockPresentation(row: ProductRow): ProductStock {
  if (row.stockPolicy === "made_to_order") {
    return { label: "Made to order", state: "low-stock" };
  }

  if (row.quantity === null || row.quantity === 0) {
    return { label: "Out of stock", state: "out-of-stock" };
  }

  if (
    row.lowStockThreshold !== null &&
    row.quantity <= row.lowStockThreshold
  ) {
    return { label: "Only a few left", state: "low-stock" };
  }

  return { label: "In stock", state: "in-stock" };
}

function toStorefrontProduct(row: ProductRow): StorefrontProduct {
  return {
    alt: row.primaryImageAlt,
    category: row.category,
    color: row.color,
    description: row.description,
    details: row.details,
    href: `/products/${row.slug}`,
    id: row.id,
    image: row.primaryImageUrl,
    images: [
      { alt: row.primaryImageAlt, src: row.primaryImageUrl },
      { alt: row.secondaryImageAlt, src: row.secondaryImageUrl },
    ],
    name: row.name,
    price: priceFormatter.format(row.priceCents / 100),
    slug: row.slug,
    stock: getStockPresentation(row),
  };
}

function selectProducts() {
  return getDatabase()
    .select(productSelection)
    .from(products)
    .innerJoin(categories, eq(products.categoryId, categories.id))
    .leftJoin(productStock, eq(products.id, productStock.productId));
}

export async function listProducts(): Promise<StorefrontProduct[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag("products");

  const rows = await selectProducts().orderBy(
    asc(products.displayOrder),
    asc(products.id),
  );

  return rows.map(toStorefrontProduct);
}

async function getCachedProductBySlug(
  slug: string,
): Promise<StorefrontProduct | undefined> {
  "use cache";
  cacheLife("minutes");
  cacheTag("products", `product:${slug}`);

  const [row] = await selectProducts().where(eq(products.slug, slug)).limit(1);

  return row ? toStorefrontProduct(row) : undefined;
}

export const getProductBySlug = cache(getCachedProductBySlug);

export async function listRelatedProducts(
  excludedProductId: number,
  limit: number,
): Promise<StorefrontProduct[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag("products");

  const rows = await selectProducts()
    .where(ne(products.id, excludedProductId))
    .orderBy(asc(products.displayOrder), asc(products.id))
    .limit(limit);

  return rows.map(toStorefrontProduct);
}

export async function listProductSlugs(): Promise<string[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag("products");

  const rows = await getDatabase()
    .select({ slug: products.slug })
    .from(products)
    .orderBy(asc(products.displayOrder), asc(products.id));

  return rows.map(({ slug }) => slug);
}
