export default async function handler(req, res) {
  const { dep, com } = req.query;

  const WEBFLOW_API_TOKEN = process.env.WEBFLOW_API_TOKEN;

  const depUrl = `https://api.webflow.com/v2/collections/${dep}/items/live`;
  const comUrl = `https://api.webflow.com/v2/collections/${com}/items/live`;

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
  const response1 = await fetch(comUrl, {
    headers: {
      Authorization: `Bearer ${WEBFLOW_API_TOKEN}`,
      "accept-version": "1.0.0",
    },
  });

  if (!response1.ok) {
    const errText = await response1.text();
    return res.status(response1.status).json({ error: errText });
  }

  function groupByDepartement(data) {
    return data.items.reduce((acc, item) => {
      const deptId = item.fieldData.departement;
      if (!acc[deptId]) {
        acc[deptId] = [];
      }
      acc[deptId].push(item);
      return acc;
    }, {});
  }

  const data = await response.json();
  const data1 = await response1.json();

  // CORS header so browser can access it
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.status(200).json({
    dep: data,
    com: data1,
    comByDep: groupByDepartement(data1),
  });
}
