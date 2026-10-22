import Link from "next/link";

import { Container } from "@/components/layout/container";
import type { NavigationItem } from "@/features/storefront/types/storefront";

export type SiteFooterProps = {
  navigation: NavigationItem[];
};

const supportLinks: NavigationItem[] = [
  { href: "/#services", label: "Contact" },
  { href: "/#services", label: "Shipping & returns" },
  { href: "/#services", label: "Care guide" },
];

export function SiteFooter({ navigation }: SiteFooterProps) {
  return (
    <footer className="bg-ink py-12 text-on-dark md:py-16">
      <Container width="wide">
        <div className="grid gap-14 border-b border-white/20 pb-16 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
          <div className="max-w-xl">
            <p className="eyebrow text-white/55">Private correspondence</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4vw,4rem)] leading-[0.98] tracking-[-0.025em]">
              Notes from the atelier.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
              Seasonal stories, new arrivals, and private previews, delivered
              occasionally.
            </p>
            <Link
              className="mt-8 inline-flex border-b border-white pb-2 text-xs tracking-[0.12em] uppercase"
              href="mailto:studio@example.com?subject=Atelier%20newsletter"
            >
              Join the list
            </Link>
          </div>

          <nav aria-label="Footer shop navigation">
            <p className="eyebrow mb-6 text-white/45">Explore</p>
            <ul className="grid gap-4 text-sm text-white/75">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link className="footer-link" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Customer support navigation">
            <p className="eyebrow mb-6 text-white/45">Assistance</p>
            <ul className="grid gap-4 text-sm text-white/75">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <Link className="footer-link" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-8 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <Link className="site-wordmark text-4xl" href="/">
            Atelier
          </Link>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-[0.625rem] tracking-[0.1em] text-white/45 uppercase">
            <span>© 2026 Atelier</span>
            <Link href="/#services">Privacy</Link>
            <Link href="/#services">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
