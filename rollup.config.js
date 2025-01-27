import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

export default {
  input: "index.js", // Entry file
  output: [
    // {
    //   file: "dist/index.cjs.js", // CommonJS format
    //   format: "cjs",
    //   sourcemap: true,
    // },
    {
      file: "dist/index.esm.js", // ESM format
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Exclude peer dependencies like React
    resolve(), // Resolve node_modules
    //commonjs(), // Convert CommonJS modules to ES6
    json(), // Support for JSON files
    babel({
      exclude: "node_modules/**", // Exclude transpiling node_modules
      babelHelpers: "bundled",
      presets: ["@babel/preset-env", "@babel/preset-react"], // Babel presets
    }),
    terser(), // Minify the output
  ],
};
