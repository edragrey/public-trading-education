import fs from "node:fs";
import path from "node:path";
let name;
export function siteName() {
  if (!name) {
    try { name = JSON.parse(fs.readFileSync(path.join(process.cwd(), "site.config.json"), "utf8")).name; } catch { name = "Trading Basics"; }
  }
  return name;
}
