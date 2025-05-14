export default async function handler(req, res) {
  const method = req.method;

  if (method === "GET") {
    const { prod } = req.query;

    const WEBFLOW_API_TOKEN = process.env.WEBFLOW_API_TOKEN;

    const depUrl = `https://api.webflow.com/v2/collections/${prod}/items/live`;

    const response = await fetch(depUrl, {
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
    res.status(200).json({
      products: data,
    });
  } else if (method === "POST") {
    const { fieldData } = JSON.parse(req.body);
    //console.log(fieldData);
    const WEBFLOW_API_TOKEN = process.env.WEBFLOW_API_TOKEN;

    const depUrl = `https://api.webflow.com/v2/collections/682441c9a9f0d4094483031d/items/live`;
    function generateUUID() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
        /[xy]/g,
        function (c) {
          const r = (Math.random() * 16) | 0;
          const v = c === "x" ? r : (r & 0x3) | 0x8;
          return v.toString(16);
        }
      );
    }
    let uuid = generateUUID();

    const response = await fetch(depUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${WEBFLOW_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isArchived: false,
        isDraft: false,
        fieldData: { ...fieldData, slug: uuid },
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(response.status).json({ error: errText });
    }

    const data = await response.json();
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).json({
      data,
    });
  }
}
