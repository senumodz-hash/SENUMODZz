export default function handler(req, res) {
  const { username, password } = req.query;

  if (username === "admin" && password === "senu123") {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
}
