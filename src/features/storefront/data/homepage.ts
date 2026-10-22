import type {
  Collection,
  NavigationItem,
  ServiceNote,
} from "@/features/storefront/types/storefront";

export const navigation: NavigationItem[] = [
  { href: "/#new-arrivals", label: "New arrivals" },
  { href: "/#collections", label: "Collections" },
  { href: "/#journal", label: "Journal" },
  { href: "/#services", label: "Services" },
];

export const collections: Collection[] = [
  {
    alt: "Woman in a sculptural black dress in a warm studio",
    description:
      "Fluid tailoring and precise silhouettes designed for late light and long evenings.",
    href: "/#new-arrivals",
    id: "after-dark",
    image:
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1600&q=85",
    kicker: "Collection 01",
    title: "After Dark",
  },
  {
    alt: "Neutral garments arranged on a minimal clothing rail",
    description:
      "Natural texture, softened structure, and a restrained palette for everyday dressing.",
    href: "/#new-arrivals",
    id: "quiet-form",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1600&q=85",
    kicker: "Collection 02",
    title: "Quiet Form",
  },
];

export const serviceNotes: ServiceNote[] = [
  {
    description: "Complimentary delivery and returns on every order.",
    title: "Delivery",
  },
  {
    description: "Our advisors are available Monday through Saturday.",
    title: "Client services",
  },
  {
    description: "Each piece arrives in our signature recyclable packaging.",
    title: "Our packaging",
  },
];
