export type NavigationItem = {
  href: string;
  label: string;
};

export type Collection = {
  alt: string;
  description: string;
  href: string;
  id: string;
  image: string;
  kicker: string;
  title: string;
};

export type StorefrontProduct = {
  alt: string;
  category: string;
  color: string;
  description: string;
  details: string[];
  href: string;
  id: number;
  image: string;
  images: ProductImage[];
  name: string;
  price: string;
  slug: string;
  stock: ProductStock;
};

export type ProductImage = {
  alt: string;
  src: string;
};

export type ProductStock = {
  label: string;
  state: "in-stock" | "low-stock" | "out-of-stock";
};

export type ServiceNote = {
  description: string;
  title: string;
};
