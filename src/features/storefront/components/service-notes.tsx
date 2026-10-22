import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import type { ServiceNote } from "@/features/storefront/types/storefront";

export type ServiceNotesProps = {
  items: ServiceNote[];
};

export function ServiceNotes({ items }: ServiceNotesProps) {
  return (
    <Section compact id="services">
      <Container width="wide">
        <div className="grid border-y md:grid-cols-3 md:divide-x">
          {items.map((item, index) => (
            <article
              className="grid gap-3 border-b py-8 last:border-b-0 md:border-b-0 md:px-8 md:first:pl-0 md:last:pr-0"
              key={item.title}
            >
              <p className="eyebrow text-ink-muted">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="font-display text-2xl">{item.title}</h2>
              <p className="max-w-xs text-xs leading-6 text-ink-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
