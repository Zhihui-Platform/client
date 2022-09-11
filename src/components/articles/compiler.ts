// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/// @ts-nocheck
import * as MarkdownIt from "markdown-it";
import * as sub from "markdown-it-sub";
import * as sup from "markdown-it-sup";
import * as ins from "markdown-it-ins";
import * as mark from "markdown-it-mark";
import * as taskLists from "markdown-it-task-lists";
import * as katex from "markdown-it-katex";
import * as footnote from "markdown-it-footnote";
import * as deflist from "markdown-it-deflist";
import * as abbr from "markdown-it-abbr";
import * as attrs from "markdown-it-attrs";
import * as emoji from "markdown-it-emoji";
import * as container from "markdown-it-container";
import xss from "./xss";
import Prismjs from "prismjs";

export function compile(str: string) {
  const md: MarkdownIt = MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
    highlight: (str, lang) => {
      if (lang && Prismjs.languages[lang]) {
        try {
          return (
            '<pre class="language-' +
            lang +
            ' line-numbers data-line" style="border-radius: 18px"><code>' +
            Prismjs.highlight(str, Prismjs.languages[lang], lang) +
            "</code></pre>"
          );
        } catch (__) {}
      }

      return (
        '<pre class="language-"><code>' +
        md.utils.escapeHtml(str) +
        "</code></pre>"
      );
    },
  });
  md.use(container, "tip", {
    validate: (params) => params.trim().match(/^tip\s+(.*)$/),
    render: (tokens, idx) => {
      const m = tokens[idx].info.trim().match(/^tip\s+(.*)$/);
      if (tokens[idx].nesting === 1) {
        return `<div class="custom-block tip"><p class="custom-block-title">${md.utils.escapeHtml(
          m![1]
        )}</p>\n`;
      } else {
        return "</div>\n";
      }
    },
  });
  md.use(container, "warning", {
    validate: (params) => params.trim().match(/^warning\s+(.*)$/),
    render: (tokens, idx) => {
      const m = tokens[idx].info.trim().match(/^warning\s+(.*)$/);
      if (tokens[idx].nesting === 1) {
        return `<div class="custom-block warning"><p class="custom-block-title">${md.utils.escapeHtml(
          m![1]
        )}</p>\n`;
      } else {
        return "</div>\n";
      }
    },
  });
  md.use(container, "danger", {
    validate: (params) => params.trim().match(/^danger\s+(.*)$/),
    render: (tokens, idx) => {
      const m = tokens[idx].info.trim().match(/^danger\s+(.*)$/);
      if (tokens[idx].nesting === 1) {
        return `<div class="custom-block danger"><p class="custom-block-title">${md.utils.escapeHtml(
          m![1]
        )}</p>\n`;
      } else {
        return "</div>\n";
      }
    },
  });
  md.use(container, "info", {
    validate: (params) => params.trim().match(/^info\s+(.*)$/),
    render: (tokens, idx) => {
      const m = tokens[idx].info.trim().match(/^info\s+(.*)$/);
      if (tokens[idx].nesting === 1) {
        return `<div class="custom-block info"><p class="custom-block-title">${md.utils.escapeHtml(
          m![1]
        )}</p>\n`;
      } else {
        return "</div>\n";
      }
    },
  });
  md.use(container, "details", {
    validate: (params) => params.trim().match(/^details\s+(.*)$/),
    render: (tokens, idx) => {
      const m = tokens[idx].info.trim().match(/^details\s+(.*)$/);
      if (tokens[idx].nesting === 1) {
        return `<details class="custom-block details"><summary>${md.utils.escapeHtml(
          m![1]
        )}</summary>\n`;
      } else {
        return "</details>\n";
      }
    },
  });
  md.use(katex);
  md.use(footnote);
  md.use(deflist);
  md.use(abbr);
  md.use(attrs);
  md.use(emoji);
  md.use(sub);
  md.use(sup);
  md.use(ins);
  md.use(mark);
  md.use(taskLists);
  const str_c = md.render(str);
  return xss.process(str_c);
}
