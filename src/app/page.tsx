import { CollectionGrid } from "@/features/storefront/components/collection-grid";
import { EditorialFeature } from "@/features/storefront/components/editorial-feature";
import { EditorialHero } from "@/features/storefront/components/editorial-hero";
import { ProductGrid } from "@/features/storefront/components/product-grid";
import { ServiceNotes } from "@/features/storefront/components/service-notes";
import { SiteFooter } from "@/features/storefront/components/site-footer";
import { SiteHeader } from "@/features/storefront/components/site-header";
import {
  collections,
  navigation,
  serviceNotes,
} from "@/features/storefront/data/homepage";
import { listProducts } from "@/features/storefront/data/products";

export default async function Home() {
  const products = await listProducts();

  return (
    <>
      <SiteHeader navigation={navigation} />
      <main>
        <EditorialHero />
        <CollectionGrid collections={collections} />
        <ProductGrid products={products} />
        <EditorialFeature />
        <ServiceNotes items={serviceNotes} />
      </main>
      <SiteFooter navigation={navigation} />
    </>
  );
}
