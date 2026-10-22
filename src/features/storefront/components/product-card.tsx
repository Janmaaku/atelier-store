import Image from "next/image";
import Link from "next/link";

import type { StorefrontProduct } from "@/features/storefront/types/storefront";

export type ProductCardProps = {
  index: number;
  product: StorefrontProduct;
};

export function ProductCard({ index, product }: ProductCardProps) {
  return (
    <article className="product-card">
      <Link
        aria-label={`View ${product.name}`}
        className="media-frame bg-surface"
        href={product.href}
      >
        <span className="product-card__index">
          {String(index + 1).padStart(2, "0")}
        </span>
        <Image
          alt={product.alt}
          className="object-cover"
          fill
          sizes="(min-width: 1200px) 25vw, (min-width: 768px) 33vw, 50vw"
          src={product.image}
        />
      </Link>
      <div className="product-card__details">
        <p className="product-card__note">{product.category}</p>
        <div className="flex items-start justify-between gap-3">
          <h3 className="product-card__name">
            <Link href={product.href}>{product.name}</Link>
          </h3>
          <p className="product-card__price">{product.price}</p>
        </div>
      </div>
    </article>
  );
}
