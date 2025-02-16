import { pgTable, uuid, text } from 'drizzle-orm/pg-core';

export const posts = pgTable('users', {
  id: uuid('id').defaultRandom(),
  name: text('name'),
  password: text('password'),
});
