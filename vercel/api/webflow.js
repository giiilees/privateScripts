export default async function handler(req, res) {
  const { collectionId } = req.query;

  const WEBFLOW_API_TOKEN = process.env.WEBFLOW_API_TOKEN;

  const url = `https://api.webflow.com/v2/collections/${collectionId}/items/live`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${WEBFLOW_API_TOKEN}`,
      "accept-version": "1.0.0",
    },
  });

  if (!response.ok) {
    const errText = await response.text();
    return res.status(response.status).json({ error: errText });
  }

  const data = await response.json();

  // CORS header so browser can access it
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json(data);
}
