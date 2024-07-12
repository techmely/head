import isolatedDecl from "bun-plugin-isolated-decl";

await Bun.build({
  entrypoints: ["./src/index.ts"],
  outdir: "./dist",
  minify: false,
  plugins: [isolatedDecl()],
  target: "bun",
  sourcemap: "inline",
  external: ["*"],
});
