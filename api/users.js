import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  // ❗ защита
  const apiKey = req.headers["x-api-key"];
  if (apiKey !== process.env.ADMIN_API_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const { query, params = [] } = req.body;

    if (!query) {
      return res.status(400).json({ error: "SQL query is required" });
    }

    // ⚠️ Полный контроль над БД
    const result = await sql(query, params);

    res.json({
      ok: true,
      rows: result,
    });
  } catch (err) {
    res.status(500).json({
      ok: false,
      error: err.message,
    });
  }
}
