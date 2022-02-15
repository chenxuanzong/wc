import typescript from "@rollup/plugin-typescript";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import summary from "rollup-plugin-summary";
import cleaner from "rollup-plugin-cleaner";

export default {
  input: "./src/cxz-counter.ts",
  plugins: [
    cleaner({
      targets: ["./build/"],
    }),
    resolve({
      customResolveOptions: {
        moduleDirectory: "node_modules",
      },
    }),
    typescript(),
    terser({
      ecma: 2019,
      module: true,
    }),
    summary({}),
  ],
  output: {
    dir: "./build",
  },
  preserveEntrySignatures: "strict",
};
