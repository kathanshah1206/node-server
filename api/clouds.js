import { readFileSync } from "fs";
import { join } from "path";

export default function handler(req, res) {
  const filePath = join(process.cwd(), "datasets", "cloud_regions.geojson");
  const data = readFileSync(filePath, "utf8");
  res.status(200).json(JSON.parse(data));
}
