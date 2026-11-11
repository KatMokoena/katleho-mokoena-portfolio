import { cpSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const site = dirname(fileURLToPath(import.meta.url));
const dist = resolve(site, "dist");
const root = resolve(site, "..");

rmSync(resolve(root, "assets"), { recursive: true, force: true });
cpSync(resolve(dist, "index.html"), resolve(root, "index.html"));
cpSync(resolve(dist, "assets"), resolve(root, "assets"), { recursive: true });
cpSync(resolve(dist, "Katleho-Mokoena-CV.pdf"), resolve(root, "Katleho-Mokoena-CV.pdf"));
cpSync(resolve(dist, ".nojekyll"), resolve(root, ".nojekyll"));
