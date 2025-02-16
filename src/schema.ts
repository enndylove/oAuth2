import { pgTable, uuid, text } from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: uuid('id').notNull().defaultRandom(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
});
