import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";

import AutoImport from "unplugin-auto-import/vite";
import VueComponents from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import yaml from "@rollup/plugin-yaml";
import json from "@rollup/plugin-json";
import dataUrl from "@rollup/plugin-data-uri";
import dsv from "@rollup/plugin-dsv";
import graphql from "@rollup/plugin-graphql";
import url from "@rollup/plugin-url";
import wasm from "@rollup/plugin-wasm";

import { VitePWA as pwa } from "vite-plugin-pwa";
import prismjs from "vite-plugin-prismjs";
import monacoEditor from "vite-plugin-monaco-editor";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    legacy(),
    react(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    VueComponents({
      resolvers: [ElementPlusResolver()],
    }),
    yaml(),
    json(),
    dataUrl(),
    dsv(),
    graphql(),
    url(),
    wasm(),
    pwa(),
    prismjs(),
    monacoEditor({}),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
});
