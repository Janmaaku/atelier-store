INSERT INTO "categories" ("slug", "name")
VALUES
	('leather-goods', 'Leather goods'),
	('shoes', 'Shoes'),
	('fragrance', 'Fragrance'),
	('ready-to-wear', 'Ready to wear')
ON CONFLICT ("slug") DO UPDATE SET "name" = EXCLUDED."name";
--> statement-breakpoint
INSERT INTO "products" (
	"category_id",
	"slug",
	"name",
	"description",
	"color",
	"price_cents",
	"primary_image_url",
	"primary_image_alt",
	"secondary_image_url",
	"secondary_image_alt",
	"details",
	"display_order"
)
SELECT
	"categories"."id",
	"seed"."slug",
	"seed"."name",
	"seed"."description",
	"seed"."color",
	"seed"."price_cents",
	"seed"."primary_image_url",
	"seed"."primary_image_alt",
	"seed"."secondary_image_url",
	"seed"."secondary_image_alt",
	"seed"."details",
	"seed"."display_order"
FROM (
	VALUES
		(
			'leather-goods',
			'arc-bag',
			'Arc Shoulder Bag',
			'A quietly structured shoulder bag with a softly curved profile, designed to hold the essentials without losing its line.',
			'Cognac',
			69000,
			'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1800&q=90',
			'Structured tan leather shoulder bag',
			'https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&w=2200&q=88',
			'Tan leather bag shown with a neutral wardrobe',
			ARRAY['Full-grain leather exterior', 'Cotton twill lining', 'Adjustable shoulder strap', 'Made in Italy']::text[],
			1
		),
		(
			'shoes',
			'line-pump',
			'Line Slingback',
			'A refined slingback balanced on a sculpted heel, with an elongated line and a softly squared toe.',
			'Black',
			54000,
			'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=1800&q=90',
			'Minimal black high heel shoe',
			'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=2200&q=88',
			'Black footwear arranged in an editorial composition',
			ARRAY['Calfskin upper', 'Leather sole and lining', '75 mm sculpted heel', 'Made in Italy']::text[],
			2
		),
		(
			'fragrance',
			'cedar-eau',
			'Cedar No. 04',
			'A dry, enveloping fragrance built around cedarwood, iris, and the mineral warmth of sunlit stone.',
			'50 ml',
			14500,
			'https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=1800&q=90',
			'Amber perfume bottle on a neutral surface',
			'https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=2200&q=88',
			'Perfume bottle in a warm minimal still life',
			ARRAY['Eau de parfum', 'Notes of cedarwood, iris, and amber', '50 ml spray bottle', 'Blended in France']::text[],
			3
		),
		(
			'ready-to-wear',
			'soft-knit',
			'Soft Rib Knit',
			'A relaxed rib-knit layer in a soft wool blend, finished with dropped shoulders and a clean rolled edge.',
			'Natural',
			38000,
			'https://images.unsplash.com/photo-1608234807905-4466023792f5?auto=format&fit=crop&w=1800&q=90',
			'Cream knit sweater folded on a light surface',
			'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=2200&q=88',
			'Neutral knitwear styled in a quiet wardrobe',
			ARRAY['Merino wool and cashmere blend', 'Relaxed unisex fit', 'Hand-finished ribbed edges', 'Made in Portugal']::text[],
			4
		)
) AS "seed" (
	"category_slug",
	"slug",
	"name",
	"description",
	"color",
	"price_cents",
	"primary_image_url",
	"primary_image_alt",
	"secondary_image_url",
	"secondary_image_alt",
	"details",
	"display_order"
)
INNER JOIN "categories" ON "categories"."slug" = "seed"."category_slug"
ON CONFLICT ("slug") DO UPDATE SET
	"category_id" = EXCLUDED."category_id",
	"name" = EXCLUDED."name",
	"description" = EXCLUDED."description",
	"color" = EXCLUDED."color",
	"price_cents" = EXCLUDED."price_cents",
	"primary_image_url" = EXCLUDED."primary_image_url",
	"primary_image_alt" = EXCLUDED."primary_image_alt",
	"secondary_image_url" = EXCLUDED."secondary_image_url",
	"secondary_image_alt" = EXCLUDED."secondary_image_alt",
	"details" = EXCLUDED."details",
	"display_order" = EXCLUDED."display_order";
--> statement-breakpoint
INSERT INTO "product_stock" (
	"product_id",
	"quantity",
	"low_stock_threshold",
	"policy"
)
SELECT
	"products"."id",
	"seed"."quantity",
	"seed"."low_stock_threshold",
	"seed"."policy"
FROM (
	VALUES
		('arc-bag', 12, 3, 'standard'),
		('line-pump', 2, 3, 'standard'),
		('cedar-eau', 18, 3, 'standard'),
		('soft-knit', 0, 3, 'made_to_order')
) AS "seed" ("slug", "quantity", "low_stock_threshold", "policy")
INNER JOIN "products" ON "products"."slug" = "seed"."slug"
ON CONFLICT ("product_id") DO UPDATE SET
	"quantity" = EXCLUDED."quantity",
	"low_stock_threshold" = EXCLUDED."low_stock_threshold",
	"policy" = EXCLUDED."policy";
