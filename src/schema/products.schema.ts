import { pgTable, text } from 'drizzle-orm/pg-core';

export const products = pgTable('products', {
  category: text('category').notNull(),
  image: text('image')
});
