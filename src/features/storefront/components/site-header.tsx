import Link from "next/link";

import { Container } from "@/components/layout/container";
import type { NavigationItem } from "@/features/storefront/types/storefront";
import { joinClassNames } from "@/lib/class-names";

export type SiteHeaderProps = {
  navigation: NavigationItem[];
  theme?: "overlay" | "solid";
};

function SearchIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <circle cx="10.75" cy="10.75" r="6.25" stroke="currentColor" />
      <path d="m15.5 15.5 4 4" stroke="currentColor" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
      <path d="M5.5 8.5h13l-1 11h-11l-1-11Z" stroke="currentColor" />
      <path d="M9 9V6.5a3 3 0 0 1 6 0V9" stroke="currentColor" />
    </svg>
  );
}

export function SiteHeader({
  navigation,
  theme = "overlay",
}: SiteHeaderProps) {
  return (
    <header
      className={joinClassNames(
        "site-header",
        theme === "solid" && "site-header--solid",
      )}
    >
      <div className="site-header__announcement">
        Complimentary delivery and returns
      </div>
      <Container className="site-header__inner" width="wide">
        <details className="mobile-menu lg:hidden">
          <summary aria-label="Open navigation">
            <span aria-hidden="true" className="mobile-menu__icon" />
            <span className="sr-only">Menu</span>
          </summary>
          <div className="mobile-menu__panel">
            <nav aria-label="Mobile navigation">
              <ul>
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </details>

        <nav aria-label="Primary navigation" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navigation.slice(0, 2).map((item) => (
              <li key={item.href}>
                <Link className="nav-link" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link className="site-wordmark" href="/" aria-label="Atelier home">
          Atelier
        </Link>

        <div className="flex items-center justify-end gap-4 sm:gap-6">
          <nav aria-label="Secondary navigation" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {navigation.slice(2).map((item) => (
                <li key={item.href}>
                  <Link className="nav-link" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            className="icon-link"
            href="/#new-arrivals"
            aria-label="Search"
          >
            <SearchIcon />
          </Link>
          <Link className="icon-link" href="/#services" aria-label="Shopping bag">
            <BagIcon />
          </Link>
        </div>
      </Container>
    </header>
  );
}
