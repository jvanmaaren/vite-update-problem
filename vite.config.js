import reactRefresh from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { checker } from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  root: "./src", // Root location of index.tsx
  base: "/dev_static/", // This is prepended during developent
  publicDir: "../static", // Custom public dir folder, that is copied entirely upon build (relative to root)
  plugins: [
    reactRefresh(),
    svgr(),
    tsconfigPaths(),
    checker({
      typescript: true,
      enableBuild: true,
    }),
  ],
  server: {
    origin: "http://localhost:8000",
    port: 8080,
  },
  css: {
    devSourcemap: true,
  },
});
