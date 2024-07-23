import { execSync } from "node:child_process";
import json from "./package.json";

execSync("rm -rf dist");
await Bun.build({
  entrypoints: ["src/index.ts"],
  outdir: "dist",
  target: "bun",
  format: "esm",
  splitting: true,
  sourcemap: "inline",
});

execSync("bun run tsc --emitDeclarationOnly --outDir dist");
execSync("mv dist/src/* dist");
execSync("rm -rf dist/src");
execSync("rm -rf dist/tsconfig.tsbuildinfo");
