/* eslint-disable @typescript-eslint/no-var-requires */
import { fileURLToPath, URL } from "node:url";
import { resolve } from "node:path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";

import AutoImport from "unplugin-auto-import/vite";
import VueComponents from "unplugin-vue-components/vite";
import Icons from "unplugin-icons/vite";

import IconsResolver from "unplugin-icons/resolver";
import {
  ElementPlusResolver,
  AntDesignVueResolver,
} from "unplugin-vue-components/resolvers";

import yaml from "@rollup/plugin-yaml";
import json from "@rollup/plugin-json";
import dataUrl from "@rollup/plugin-data-uri";
import dsv from "@rollup/plugin-dsv";
import graphql from "@rollup/plugin-graphql";
import url from "@rollup/plugin-url";
import wasm from "@rollup/plugin-wasm";

import { VitePWA as pwa } from "vite-plugin-pwa";
import monacoEditor from "vite-plugin-monaco-editor";
import prismjs from "vite-plugin-prismjs";
import vueMarkdown from "vite-plugin-vue-markdown";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueJsx(),
    legacy(),
    react(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        AntDesignVueResolver(),
        IconsResolver(),
      ],
    }),
    VueComponents({
      resolvers: [
        ElementPlusResolver(),
        AntDesignVueResolver(),
        IconsResolver(),
      ],
    }),
    Icons(),
    yaml(),
    json(),
    dataUrl(),
    dsv(),
    graphql(),
    url(),
    wasm(),
    pwa(),
    monacoEditor({}),
    prismjs({
      languages: [
        "javascript",
        "css",
        "markup",
        "typescript",
        "rust",
        "go",
        "python",
        "clike",
        "bash",
        "markdown",
      ],
      plugins: [
        "line-numbers",
        "line-highlight",
        "show-language",
        "copy-to-clipboard",
        "file-highlight",
      ],
      theme: "tomorrow",
      css: true,
    }),
    vueMarkdown({
      markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
      },
      markdownItSetup(md) {
        const plugins = require("./addons/vp-mdit-plugins-bundle/plugins.min.cjs");
        md.use(plugins.containerPlugin);
        md.use(plugins.linkPlugin);
        md.use(plugins.highlightLinePlugin);
        md.use(plugins.lineNumberPlugin);
        md.use(plugins.preWrapperPlugin);
        md.use(require("markdown-it-katex"));
        md.use(require("markdown-it-footnote"));
        md.use(require("markdown-it-deflist"));
        md.use(require("markdown-it-abbr"));
        md.use(require("markdown-it-attrs"));
        md.use(require("markdown-it-emoji"));
        md.use(require("markdown-it-sub"));
        md.use(require("markdown-it-sup"));
        md.use(require("markdown-it-ins"));
        md.use(require("markdown-it-mark"));
        md.use(require("markdown-it-task-lists"));
        md.use(require("markdown-it-imsize"), { autofill: true });
        md.use(require("markdown-it-plantuml"));
        md.use(require("markdown-it-mermaid").default);
        md.use(require("markdown-it-shiki").default);
      },
      wrapperClasses: "markdown-body vp-doc",
    }),
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
    preprocessorOptions: {
      sass: {
        includePaths: [resolve("node_modules")],
      },
    },
  },
  define: {
    "process.env": {},
  },
});
