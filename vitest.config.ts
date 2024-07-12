import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      reporter: ["lcovonly"],
    },
    include: ["**/*.test.?(m)ts?(x)"],
  },
});
