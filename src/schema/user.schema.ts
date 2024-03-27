import { createId } from '@paralleldrive/cuid2';
import { pgTable, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: text('id')
    .notNull()
    .primaryKey()
    .$defaultFn(() => createId()),
  password: text('password').notNull(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  image: text('image')
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
export type UpdateUser = typeof users.$inferSelect;
