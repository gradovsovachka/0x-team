import { neon } from '@neondatabase/serverless';

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req, res) {
  const cookies = req.headers.cookie || '';
  if (!cookies.includes('auth=1')) {
    res.status(401).end('Unauthorized');
    return;
  }

  const { query } = JSON.parse(req.body || '{}');

  try {
    const result = await sql(query);
    res.status(200).send(JSON.stringify(result, null, 2));
  } catch (e) {
    res.status(500).send(e.message);
  }
}
