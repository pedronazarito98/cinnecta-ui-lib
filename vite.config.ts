import { resolve } from "node:path";
import macrosPlugin from "vite-plugin-babel-macros";
import dts from "vite-plugin-dts";
import tsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import * as packageJson from "./package.json";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    macrosPlugin(),
    tsConfigPaths(),
    dts({
      include: ["src/components/"],
    }),
  ],

  build: {
    lib: {
      entry: "./src/components/index.ts",
      name: "cinnectaUiLib",
      formats: ["es", "umd"],
      fileName: (format) => `react-vite-library.${format}.js`,
    },
    rollupOptions: {
      external: [
        ...Object.keys(packageJson.peerDependencies),
        "react/jsx-runtime",
      ],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
});
