import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { TextLink } from "@/components/ui/text-link";
import { ProductCard } from "@/features/storefront/components/product-card";
import type { StorefrontProduct } from "@/features/storefront/types/storefront";

export type ProductGridProps = {
  products: StorefrontProduct[];
};

export function ProductGrid({ products }: ProductGridProps) {
  return (
    <Section id="new-arrivals" tone="muted">
      <Container width="wide">
        <div className="mb-10 flex items-end justify-between gap-6 md:mb-14">
          <div>
            <p className="eyebrow mb-4 text-ink-muted">The latest edit</p>
            <h2 className="heading-2">New arrivals</h2>
          </div>
          <TextLink className="hidden sm:inline-flex" href="#new-arrivals">
            View all pieces
          </TextLink>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <ProductCard index={index} key={product.id} product={product} />
          ))}
        </div>
        <TextLink className="mt-10 sm:hidden" href="#new-arrivals">
          View all pieces
        </TextLink>
      </Container>
    </Section>
  );
}
