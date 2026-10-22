import Image from "next/image";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { TextLink } from "@/components/ui/text-link";
import type { Collection } from "@/features/storefront/types/storefront";

export type CollectionGridProps = {
  collections: Collection[];
};

export function CollectionGrid({ collections }: CollectionGridProps) {
  return (
    <Section id="collections">
      <Container width="wide">
        <div className="mb-10 grid gap-5 border-b pb-8 md:mb-14 md:grid-cols-2 md:items-end">
          <div>
            <p className="eyebrow mb-4 text-ink-muted">Featured collections</p>
            <h2 className="heading-2">Two moods, one point of view.</h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-ink-muted md:justify-self-end">
            An editorial wardrobe built through contrast: exacting form beside
            a softer, instinctive ease.
          </p>
        </div>

        <div className="grid gap-x-5 gap-y-14 md:grid-cols-2">
          {collections.map((collection, index) => (
            <article
              className={index === 1 ? "md:pt-[12%]" : undefined}
              key={collection.id}
            >
              <div className="media-frame aspect-[4/5]">
                <Image
                  alt={collection.alt}
                  className="object-cover"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  src={collection.image}
                />
              </div>
              <div className="grid gap-4 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="eyebrow mb-3 text-ink-muted">
                    {collection.kicker}
                  </p>
                  <h3 className="heading-3">{collection.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-ink-muted">
                    {collection.description}
                  </p>
                </div>
                <TextLink href={collection.href}>Discover</TextLink>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
