import { createId } from '@paralleldrive/cuid2';
import { date, pgTable, text } from 'drizzle-orm/pg-core';

export const product = pgTable('product', {
  product_id: text('product_id').$defaultFn(() => createId()),
  name: text('name').notNull(),
  description: text('description').notNull(),
  image: text('image').notNull(),
  createId: date('createTimestamp').defaultNow()
});
