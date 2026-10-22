import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ButtonLink } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import type { StorefrontProduct } from "@/features/storefront/types/storefront";

const stockClasses: Record<StorefrontProduct["stock"]["state"], string> = {
  "in-stock": "product-stock--available",
  "low-stock": "product-stock--limited",
  "out-of-stock": "product-stock--unavailable",
};

export type ProductDetailsProps = {
  product: StorefrontProduct;
};

export function ProductDetails({ product }: ProductDetailsProps) {
  const inquiryHref = `mailto:studio@example.com?subject=${encodeURIComponent(
    `Product enquiry: ${product.name}`,
  )}`;

  return (
    <>
      <Container className="pb-8 pt-6 md:pb-10 md:pt-8" width="wide">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-[0.625rem] tracking-[0.12em] text-ink-muted uppercase">
            <li>
              <Link className="hover:text-ink" href="/">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link className="hover:text-ink" href="/#new-arrivals">
                {product.category}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page" className="text-ink">
              {product.name}
            </li>
          </ol>
        </nav>
      </Container>

      <Container className="product-detail" width="wide">
        <div className="product-detail__primary-media">
          <Image
            alt={product.images[0].alt}
            className="object-cover"
            fill
            preload
            sizes="(min-width: 1024px) 62vw, 100vw"
            src={product.images[0].src}
          />
        </div>

        <aside className="product-detail__information" aria-label="Product information">
          <div className="flex items-center justify-between gap-5">
            <p className="eyebrow text-ink-muted">{product.category}</p>
            <p className={`product-stock ${stockClasses[product.stock.state]}`}>
              {product.stock.label}
            </p>
          </div>

          <h1 className="mt-7 font-display text-[clamp(2.75rem,5vw,5.5rem)] leading-[0.92] tracking-[-0.04em]">
            {product.name}
          </h1>
          <p className="mt-5 text-sm tracking-[0.05em]">{product.price}</p>
          <p className="mt-8 max-w-lg text-sm leading-7 text-ink-muted">
            {product.description}
          </p>

          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-y py-6 text-xs">
            <div>
              <dt className="eyebrow mb-2 text-ink-muted">Colour</dt>
              <dd>{product.color}</dd>
            </div>
            <div>
              <dt className="eyebrow mb-2 text-ink-muted">Reference</dt>
              <dd className="uppercase">AT-{product.slug}</dd>
            </div>
          </dl>

          <ButtonLink className="mt-8 w-full" href={inquiryHref}>
            Request this piece
          </ButtonLink>
          <TextLink className="mt-5" href="/#services">
            Delivery and returns
          </TextLink>

          <div className="mt-10 border-t">
            <details className="product-disclosure" open>
              <summary>Product details</summary>
              <ul className="grid gap-2 pb-6 text-xs leading-6 text-ink-muted">
                {product.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </details>
            <details className="product-disclosure">
              <summary>Care and assistance</summary>
              <p className="pb-6 text-xs leading-6 text-ink-muted">
                Store in a cool, dry place and follow the care instructions
                supplied with the piece. Our advisors can provide individual
                guidance.
              </p>
            </details>
          </div>
        </aside>
      </Container>

      <Container className="py-section" width="wide">
        <div className="product-detail__secondary-media">
          <Image
            alt={product.images[1].alt}
            className="object-cover"
            fill
            sizes="100vw"
            src={product.images[1].src}
          />
        </div>
        <div className="mt-5 flex items-center justify-between gap-6">
          <p className="eyebrow text-ink-muted">Material study</p>
          <p className="max-w-md text-right text-xs leading-6 text-ink-muted">
            Form, finish, and detail viewed at a slower pace.
          </p>
        </div>
      </Container>
    </>
  );
}
