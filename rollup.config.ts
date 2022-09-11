import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import sucrase from "@rollup/plugin-sucrase";
import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import yaml from "@rollup/plugin-yaml";
import json from "@rollup/plugin-json";
import dsv from "@rollup/plugin-dsv";
import graphql from "@rollup/plugin-graphql";
import replace from "@rollup/plugin-replace";
import { terser } from "rollup-plugin-terser";

export default defineConfig([
  {
    input: "src/app/main.ts",
    output: [
      {
        file: "dist/zhihui-client.js",
        format: "cjs",
        plugins: [
          replace({
            "process.env.NODE_ENV": JSON.stringify("development"),
          }),
        ],
      },
      {
        file: "dist/zhihui-client.min.js",
        format: "cjs",
        plugins: [
          terser(),
          replace({
            "process.env.NODE_ENV": JSON.stringify("production"),
          }),
        ],
      },
    ],
    plugins: [
      typescript(),
      babel(),
      sucrase({
        transforms: ["typescript"],
        exclude: ["node_modules/**"],
      }),
      nodeResolve(),
      commonjs(),
      yaml(),
      json(),
      dsv(),
      graphql(),
    ],
    external: ["electron"],
  },
  {
    input: "src/app/preload.ts",
    output: [
      {
        file: "dist/zhihui-preload.js",
        format: "cjs",
        plugins: [
          replace({
            "process.env.NODE_ENV": JSON.stringify("development"),
          }),
        ],
      },
      {
        file: "dist/zhihui-preload.min.js",
        format: "cjs",
        plugins: [
          terser(),
          replace({
            "process.env.NODE_ENV": JSON.stringify("production"),
          }),
        ],
      },
    ],
    plugins: [
      typescript(),
      babel(),
      sucrase({
        transforms: ["typescript"],
        exclude: ["node_modules/**"],
      }),
      nodeResolve(),
      commonjs(),
      yaml(),
      json(),
      dsv(),
      graphql(),
    ],
    external: ["electron"],
  },
]);
