import { execSync } from "node:child_process";

execSync("rm -rf dist");
await Bun.build({
  entrypoints: ["src/index.ts"],
  outdir: "dist",
  target: "bun",
  sourcemap: "inline",
});

execSync("bun run tsc --emitDeclarationOnly --outDir dist");
execSync("mv dist/src/* dist");
execSync("rm -rf dist/tsconfig.tsbuildinfo");
