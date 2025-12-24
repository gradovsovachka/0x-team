export default async function handler(req, res) {
  const { password } = JSON.parse(req.body || '{}');
  if (password === process.env.ADMIN_PASSWORD) {
    res.setHeader(
      'Set-Cookie',
      'auth=1; Path=/; HttpOnly; Secure; SameSite=Strict'
    );
    res.status(200).end();
  } else {
    res.status(401).end();
  }
}
