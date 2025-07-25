import { readFileSync } from "fs";
import { join } from "path";

export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const filePath = join(
    process.cwd(),
    "datasets",
    "modified_crypto_exchange_countries.geojson"
  );
  const data = readFileSync(filePath, "utf8");
  res.status(200).json(JSON.parse(data));
}
