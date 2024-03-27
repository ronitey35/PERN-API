import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';

const client = postgres(`postgresql://postgres:admin@localhost:5432/postgres`);
export const db = drizzle(client);

// mport { drizzle } from 'drizzle-orm/postgres-js';
// import postgres from 'postgres';
// import client = postgress(`postgres:/ postgress:admin@localhost:5432/db1`)
// const db = drizzle(client)i
