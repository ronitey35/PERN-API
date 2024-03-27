CREATE TABLE IF NOT EXISTS "product" (
	"product_id" text,
	"name" text NOT NULL,
	"description" text NOT NULL,
	"image" text NOT NULL,
	"createTimestamp" date DEFAULT now()
);
