import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  const [{ now }] = await sql`SELECT now()`;
  res.json({ status: "ok", time: now });
}
