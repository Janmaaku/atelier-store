import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProductDetails } from "@/features/storefront/components/product-details";
import { RelatedProducts } from "@/features/storefront/components/related-products";
import { ServiceNotes } from "@/features/storefront/components/service-notes";
import { SiteFooter } from "@/features/storefront/components/site-footer";
import { SiteHeader } from "@/features/storefront/components/site-header";
import {
  navigation,
  serviceNotes,
} from "@/features/storefront/data/homepage";
import {
  getProductBySlug,
  listProductSlugs,
  listRelatedProducts,
} from "@/features/storefront/data/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await listProductSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return { title: "Product not found — Atelier" };
  }

  return {
    title: `${product.name} — Atelier`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = await listRelatedProducts(product.id, 3);

  return (
    <>
      <SiteHeader navigation={navigation} theme="solid" />
      <main className="product-page" id="top">
        <ProductDetails product={product} />
        <RelatedProducts products={relatedProducts} />
        <ServiceNotes items={serviceNotes} />
      </main>
      <SiteFooter navigation={navigation} />
    </>
  );
}
