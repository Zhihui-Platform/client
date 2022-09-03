var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/markdown-it-container@3.0.0/node_modules/markdown-it-container/index.js
var require_markdown_it_container = __commonJS({
  "node_modules/.pnpm/markdown-it-container@3.0.0/node_modules/markdown-it-container/index.js"(exports, module) {
    "use strict";
    module.exports = function container_plugin(md, name, options) {
      function validateDefault(params) {
        return params.trim().split(" ", 2)[0] === name;
      }
      function renderDefault(tokens, idx, _options, env, slf) {
        if (tokens[idx].nesting === 1) {
          tokens[idx].attrJoin("class", name);
        }
        return slf.renderToken(tokens, idx, _options, env, slf);
      }
      options = options || {};
      var min_markers = 3, marker_str = options.marker || ":", marker_char = marker_str.charCodeAt(0), marker_len = marker_str.length, validate = options.validate || validateDefault, render = options.render || renderDefault;
      function container2(state, startLine, endLine, silent) {
        var pos, nextLine, marker_count, markup, params, token, old_parent, old_line_max, auto_closed = false, start = state.bMarks[startLine] + state.tShift[startLine], max = state.eMarks[startLine];
        if (marker_char !== state.src.charCodeAt(start)) {
          return false;
        }
        for (pos = start + 1; pos <= max; pos++) {
          if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
            break;
          }
        }
        marker_count = Math.floor((pos - start) / marker_len);
        if (marker_count < min_markers) {
          return false;
        }
        pos -= (pos - start) % marker_len;
        markup = state.src.slice(start, pos);
        params = state.src.slice(pos, max);
        if (!validate(params, markup)) {
          return false;
        }
        if (silent) {
          return true;
        }
        nextLine = startLine;
        for (; ; ) {
          nextLine++;
          if (nextLine >= endLine) {
            break;
          }
          start = state.bMarks[nextLine] + state.tShift[nextLine];
          max = state.eMarks[nextLine];
          if (start < max && state.sCount[nextLine] < state.blkIndent) {
            break;
          }
          if (marker_char !== state.src.charCodeAt(start)) {
            continue;
          }
          if (state.sCount[nextLine] - state.blkIndent >= 4) {
            continue;
          }
          for (pos = start + 1; pos <= max; pos++) {
            if (marker_str[(pos - start) % marker_len] !== state.src[pos]) {
              break;
            }
          }
          if (Math.floor((pos - start) / marker_len) < marker_count) {
            continue;
          }
          pos -= (pos - start) % marker_len;
          pos = state.skipSpaces(pos);
          if (pos < max) {
            continue;
          }
          auto_closed = true;
          break;
        }
        old_parent = state.parentType;
        old_line_max = state.lineMax;
        state.parentType = "container";
        state.lineMax = nextLine;
        token = state.push("container_" + name + "_open", "div", 1);
        token.markup = markup;
        token.block = true;
        token.info = params;
        token.map = [startLine, nextLine];
        state.md.block.tokenize(state, startLine + 1, nextLine);
        token = state.push("container_" + name + "_close", "div", -1);
        token.markup = state.src.slice(start, pos);
        token.block = true;
        state.parentType = old_parent;
        state.lineMax = old_line_max;
        state.line = nextLine + (auto_closed ? 1 : 0);
        return true;
      }
      md.block.ruler.before("fence", "container_" + name, container2, {
        alt: ["paragraph", "reference", "blockquote", "list"]
      });
      md.renderer.rules["container_" + name + "_open"] = render;
      md.renderer.rules["container_" + name + "_close"] = render;
    };
  }
});

// node_modules/.pnpm/vscode-textmate@6.0.0/node_modules/vscode-textmate/release/main.js
var require_main = __commonJS({
  "node_modules/.pnpm/vscode-textmate@6.0.0/node_modules/vscode-textmate/release/main.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.vscodetextmate = t() : e.vscodetextmate = t();
    }(exports, function() {
      return (() => {
        "use strict";
        var e = { 350: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.UseOnigurumaFindOptions = t2.DebugFlags = void 0, t2.DebugFlags = { InDebugMode: "undefined" != typeof process && !!process.env.VSCODE_TEXTMATE_DEBUG }, t2.UseOnigurumaFindOptions = false;
        }, 527: (e2, t2, n) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.LocalStackElement = t2.StackElement = t2.ScopeListElement = t2.StackElementMetadata = t2.Grammar = t2.ScopeMetadata = t2.ScopeDependencyProcessor = t2.ScopeDependencyCollector = t2.PartialScopeDependency = t2.FullScopeDependency = t2.createGrammar = void 0;
          var r = n(878), o = n(792), i = n(736), s = n(350), a = "undefined" == typeof performance ? function() {
            return Date.now();
          } : function() {
            return performance.now();
          };
          t2.createGrammar = function(e3, t3, n2, r2, o2, i2, s2) {
            return new C(e3, t3, n2, r2, o2, i2, s2);
          };
          var c = function(e3) {
            this.scopeName = e3;
          };
          t2.FullScopeDependency = c;
          var u = function() {
            function e3(e4, t3) {
              this.scopeName = e4, this.include = t3;
            }
            return e3.prototype.toKey = function() {
              return this.scopeName + "#" + this.include;
            }, e3;
          }();
          t2.PartialScopeDependency = u;
          var l = function() {
            function e3() {
              this.full = [], this.partial = [], this.visitedRule = /* @__PURE__ */ new Set(), this._seenFull = /* @__PURE__ */ new Set(), this._seenPartial = /* @__PURE__ */ new Set();
            }
            return e3.prototype.add = function(e4) {
              e4 instanceof c ? this._seenFull.has(e4.scopeName) || (this._seenFull.add(e4.scopeName), this.full.push(e4)) : this._seenPartial.has(e4.toKey()) || (this._seenPartial.add(e4.toKey()), this.partial.push(e4));
            }, e3;
          }();
          function h(e3, t3, n2, o2, i2) {
            for (var s2 = 0, a2 = o2; s2 < a2.length; s2++) {
              var l2 = a2[s2];
              if (!e3.visitedRule.has(l2)) {
                e3.visitedRule.add(l2);
                var p2 = l2.repository ? r.mergeObjects({}, i2, l2.repository) : i2;
                Array.isArray(l2.patterns) && h(e3, t3, n2, l2.patterns, p2);
                var d2 = l2.include;
                if (d2)
                  if ("$base" === d2 || d2 === t3.scopeName)
                    g(e3, t3, t3);
                  else if ("$self" === d2 || d2 === n2.scopeName)
                    g(e3, t3, n2);
                  else if ("#" === d2.charAt(0))
                    f(e3, t3, n2, d2.substring(1), p2);
                  else {
                    var m2 = d2.indexOf("#");
                    if (m2 >= 0) {
                      var _2 = d2.substring(0, m2), y2 = d2.substring(m2 + 1);
                      _2 === t3.scopeName ? f(e3, t3, t3, y2, p2) : _2 === n2.scopeName ? f(e3, t3, n2, y2, p2) : e3.add(new u(_2, d2.substring(m2 + 1)));
                    } else
                      e3.add(new c(d2));
                  }
              }
            }
          }
          t2.ScopeDependencyCollector = l;
          var p = function() {
            function e3(e4, t3) {
              this.repo = e4, this.initialScopeName = t3, this.seenFullScopeRequests = /* @__PURE__ */ new Set(), this.seenPartialScopeRequests = /* @__PURE__ */ new Set(), this.seenFullScopeRequests.add(this.initialScopeName), this.Q = [new c(this.initialScopeName)];
            }
            return e3.prototype.processQueue = function() {
              var e4 = this.Q;
              this.Q = [];
              for (var t3 = new l(), n2 = 0, r2 = e4; n2 < r2.length; n2++) {
                var o2 = r2[n2];
                d(this.repo, this.initialScopeName, t3, o2);
              }
              for (var i2 = 0, s2 = t3.full; i2 < s2.length; i2++)
                o2 = s2[i2], this.seenFullScopeRequests.has(o2.scopeName) || (this.seenFullScopeRequests.add(o2.scopeName), this.Q.push(o2));
              for (var a2 = 0, c2 = t3.partial; a2 < c2.length; a2++)
                o2 = c2[a2], this.seenFullScopeRequests.has(o2.scopeName) || this.seenPartialScopeRequests.has(o2.toKey()) || (this.seenPartialScopeRequests.add(o2.toKey()), this.Q.push(o2));
            }, e3;
          }();
          function d(e3, t3, n2, r2) {
            var o2 = e3.lookup(r2.scopeName);
            if (o2) {
              r2 instanceof c ? g(n2, e3.lookup(t3), o2) : f(n2, e3.lookup(t3), o2, r2.include);
              var i2 = e3.injections(r2.scopeName);
              if (i2)
                for (var s2 = 0, a2 = i2; s2 < a2.length; s2++) {
                  var u2 = a2[s2];
                  n2.add(new c(u2));
                }
            } else if (r2.scopeName === t3)
              throw new Error("No grammar provided for <" + t3 + ">");
          }
          function f(e3, t3, n2, r2, o2) {
            void 0 === o2 && (o2 = n2.repository), o2 && o2[r2] && h(e3, t3, n2, [o2[r2]], o2);
          }
          function g(e3, t3, n2) {
            if (n2.patterns && Array.isArray(n2.patterns) && h(e3, t3, n2, n2.patterns, n2.repository), n2.injections) {
              var r2 = [];
              for (var o2 in n2.injections)
                r2.push(n2.injections[o2]);
              h(e3, t3, n2, r2, n2.repository);
            }
          }
          function m(e3, t3) {
            if (!e3)
              return false;
            if (e3 === t3)
              return true;
            var n2 = t3.length;
            return e3.length > n2 && e3.substr(0, n2) === t3 && "." === e3[n2];
          }
          function _(e3, t3) {
            if (t3.length < e3.length)
              return false;
            var n2 = 0;
            return e3.every(function(e4) {
              for (var r2 = n2; r2 < t3.length; r2++)
                if (m(t3[r2], e4))
                  return n2 = r2 + 1, true;
              return false;
            });
          }
          function y(e3, t3, n2, r2, s2) {
            for (var a2 = i.createMatchers(t3, _), c2 = o.RuleFactory.getCompiledRuleId(n2, r2, s2.repository), u2 = 0, l2 = a2; u2 < l2.length; u2++) {
              var h2 = l2[u2];
              e3.push({ debugSelector: t3, matcher: h2.matcher, ruleId: c2, grammar: s2, priority: h2.priority });
            }
          }
          t2.ScopeDependencyProcessor = p;
          var v = function(e3, t3, n2, r2) {
            this.scopeName = e3, this.languageId = t3, this.tokenType = n2, this.themeData = r2;
          };
          t2.ScopeMetadata = v;
          var b = function() {
            function e3(t3, n2, r2) {
              if (this._initialLanguage = t3, this._themeProvider = n2, this._cache = /* @__PURE__ */ new Map(), this._defaultMetaData = new v("", this._initialLanguage, 0, [this._themeProvider.getDefaults()]), this._embeddedLanguages = /* @__PURE__ */ Object.create(null), r2)
                for (var o2 = Object.keys(r2), i2 = 0, s2 = o2.length; i2 < s2; i2++) {
                  var a2 = o2[i2], c2 = r2[a2];
                  "number" == typeof c2 && 0 !== c2 ? this._embeddedLanguages[a2] = c2 : console.warn("Invalid embedded language found at scope " + a2 + ": <<" + c2 + ">>");
                }
              var u2 = Object.keys(this._embeddedLanguages).map(function(t4) {
                return e3._escapeRegExpCharacters(t4);
              });
              0 === u2.length ? this._embeddedLanguagesRegex = null : (u2.sort(), u2.reverse(), this._embeddedLanguagesRegex = new RegExp("^((" + u2.join(")|(") + "))($|\\.)", ""));
            }
            return e3.prototype.onDidChangeTheme = function() {
              this._cache = /* @__PURE__ */ new Map(), this._defaultMetaData = new v("", this._initialLanguage, 0, [this._themeProvider.getDefaults()]);
            }, e3.prototype.getDefaultMetadata = function() {
              return this._defaultMetaData;
            }, e3._escapeRegExpCharacters = function(e4) {
              return e4.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&");
            }, e3.prototype.getMetadataForScope = function(t3) {
              if (null === t3)
                return e3._NULL_SCOPE_METADATA;
              var n2 = this._cache.get(t3);
              return n2 || (n2 = this._doGetMetadataForScope(t3), this._cache.set(t3, n2), n2);
            }, e3.prototype._doGetMetadataForScope = function(e4) {
              var t3 = this._scopeToLanguage(e4), n2 = this._toStandardTokenType(e4), r2 = this._themeProvider.themeMatch(e4);
              return new v(e4, t3, n2, r2);
            }, e3.prototype._scopeToLanguage = function(e4) {
              if (!e4)
                return 0;
              if (!this._embeddedLanguagesRegex)
                return 0;
              var t3 = e4.match(this._embeddedLanguagesRegex);
              return t3 && (this._embeddedLanguages[t3[1]] || 0) || 0;
            }, e3.prototype._toStandardTokenType = function(t3) {
              var n2 = t3.match(e3.STANDARD_TOKEN_TYPE_REGEXP);
              if (!n2)
                return 0;
              switch (n2[1]) {
                case "comment":
                  return 1;
                case "string":
                  return 2;
                case "regex":
                  return 3;
                case "meta.embedded":
                  return 8;
              }
              throw new Error("Unexpected match for standard token type!");
            }, e3._NULL_SCOPE_METADATA = new v("", 0, 0, null), e3.STANDARD_TOKEN_TYPE_REGEXP = /\b(comment|string|regex|meta\.embedded)\b/, e3;
          }(), C = function() {
            function e3(e4, t3, n2, r2, o2, s2, a2) {
              if (this._scopeName = e4, this._scopeMetadataProvider = new b(n2, s2, r2), this._onigLib = a2, this._rootId = -1, this._lastRuleId = 0, this._ruleId2desc = [null], this._includedGrammars = {}, this._grammarRepository = s2, this._grammar = R(t3, null), this._injections = null, this._tokenTypeMatchers = [], o2)
                for (var c2 = 0, u2 = Object.keys(o2); c2 < u2.length; c2++)
                  for (var l2 = u2[c2], h2 = 0, p2 = i.createMatchers(l2, _); h2 < p2.length; h2++) {
                    var d2 = p2[h2];
                    this._tokenTypeMatchers.push({ matcher: d2.matcher, type: o2[l2] });
                  }
            }
            return e3.prototype.dispose = function() {
              for (var e4 = 0, t3 = this._ruleId2desc; e4 < t3.length; e4++) {
                var n2 = t3[e4];
                n2 && n2.dispose();
              }
            }, e3.prototype.createOnigScanner = function(e4) {
              return this._onigLib.createOnigScanner(e4);
            }, e3.prototype.createOnigString = function(e4) {
              return this._onigLib.createOnigString(e4);
            }, e3.prototype.onDidChangeTheme = function() {
              this._scopeMetadataProvider.onDidChangeTheme();
            }, e3.prototype.getMetadataForScope = function(e4) {
              return this._scopeMetadataProvider.getMetadataForScope(e4);
            }, e3.prototype._collectInjections = function() {
              var e4 = this, t3 = { lookup: function(t4) {
                return t4 === e4._scopeName ? e4._grammar : e4.getExternalGrammar(t4);
              }, injections: function(t4) {
                return e4._grammarRepository.injections(t4);
              } }, n2 = new p(t3, this._scopeName), r2 = [];
              return n2.seenFullScopeRequests.forEach(function(n3) {
                var o2 = t3.lookup(n3);
                if (o2) {
                  var i2 = o2.injections;
                  if (i2)
                    for (var s2 in i2)
                      y(r2, s2, i2[s2], e4, o2);
                  if (e4._grammarRepository) {
                    var a2 = e4._grammarRepository.injections(n3);
                    a2 && a2.forEach(function(t4) {
                      var n4 = e4.getExternalGrammar(t4);
                      if (n4) {
                        var o3 = n4.injectionSelector;
                        o3 && y(r2, o3, n4, e4, n4);
                      }
                    });
                  }
                }
              }), r2.sort(function(e5, t4) {
                return e5.priority - t4.priority;
              }), r2;
            }, e3.prototype.getInjections = function() {
              if (null === this._injections && (this._injections = this._collectInjections(), s.DebugFlags.InDebugMode && this._injections.length > 0)) {
                console.log("Grammar " + this._scopeName + " contains the following injections:");
                for (var e4 = 0, t3 = this._injections; e4 < t3.length; e4++) {
                  var n2 = t3[e4];
                  console.log("  - " + n2.debugSelector);
                }
              }
              return this._injections;
            }, e3.prototype.registerRule = function(e4) {
              var t3 = ++this._lastRuleId, n2 = e4(t3);
              return this._ruleId2desc[t3] = n2, n2;
            }, e3.prototype.getRule = function(e4) {
              return this._ruleId2desc[e4];
            }, e3.prototype.getExternalGrammar = function(e4, t3) {
              if (this._includedGrammars[e4])
                return this._includedGrammars[e4];
              if (this._grammarRepository) {
                var n2 = this._grammarRepository.lookup(e4);
                if (n2)
                  return this._includedGrammars[e4] = R(n2, t3 && t3.$base), this._includedGrammars[e4];
              }
            }, e3.prototype.tokenizeLine = function(e4, t3, n2) {
              void 0 === n2 && (n2 = 0);
              var r2 = this._tokenize(e4, t3, false, n2);
              return { tokens: r2.lineTokens.getResult(r2.ruleStack, r2.lineLength), ruleStack: r2.ruleStack, stoppedEarly: r2.stoppedEarly };
            }, e3.prototype.tokenizeLine2 = function(e4, t3, n2) {
              void 0 === n2 && (n2 = 0);
              var r2 = this._tokenize(e4, t3, true, n2);
              return { tokens: r2.lineTokens.getBinaryResult(r2.ruleStack, r2.lineLength), ruleStack: r2.ruleStack, stoppedEarly: r2.stoppedEarly };
            }, e3.prototype._tokenize = function(e4, t3, n2, r2) {
              var i2;
              if (-1 === this._rootId && (this._rootId = o.RuleFactory.getCompiledRuleId(this._grammar.repository.$self, this, this._grammar.repository)), t3 && t3 !== M.NULL)
                i2 = false, t3.reset();
              else {
                i2 = true;
                var s2 = this._scopeMetadataProvider.getDefaultMetadata(), a2 = s2.themeData[0], c2 = G.set(0, s2.languageId, s2.tokenType, a2.fontStyle, a2.foreground, a2.background), u2 = this.getRule(this._rootId).getName(null, null), l2 = this._scopeMetadataProvider.getMetadataForScope(u2), h2 = E.mergeMetadata(c2, null, l2), p2 = new E(null, null === u2 ? "unknown" : u2, h2);
                t3 = new M(null, this._rootId, -1, -1, false, null, p2, p2);
              }
              e4 += "\n";
              var d2 = this.createOnigString(e4), f2 = d2.content.length, g2 = new N(n2, e4, this._tokenTypeMatchers), m2 = T(this, d2, i2, 0, t3, g2, true, r2);
              return S(d2), { lineLength: f2, lineTokens: g2, ruleStack: m2.stack, stoppedEarly: m2.stoppedEarly };
            }, e3;
          }();
          function S(e3) {
            "function" == typeof e3.dispose && e3.dispose();
          }
          function R(e3, t3) {
            return (e3 = r.clone(e3)).repository = e3.repository || {}, e3.repository.$self = { $vscodeTextmateLocation: e3.$vscodeTextmateLocation, patterns: e3.patterns, name: e3.scopeName }, e3.repository.$base = t3 || e3.repository.$self, e3;
          }
          function k(e3, t3, n2, r2, o2, i2, s2) {
            if (0 !== i2.length) {
              for (var a2 = t3.content, c2 = Math.min(i2.length, s2.length), u2 = [], l2 = s2[0].end, h2 = 0; h2 < c2; h2++) {
                var p2 = i2[h2];
                if (null !== p2) {
                  var d2 = s2[h2];
                  if (0 !== d2.length) {
                    if (d2.start > l2)
                      break;
                    for (; u2.length > 0 && u2[u2.length - 1].endPos <= d2.start; )
                      o2.produceFromScopes(u2[u2.length - 1].scopes, u2[u2.length - 1].endPos), u2.pop();
                    if (u2.length > 0 ? o2.produceFromScopes(u2[u2.length - 1].scopes, d2.start) : o2.produce(r2, d2.start), p2.retokenizeCapturedWithRuleId) {
                      var f2 = p2.getName(a2, s2), g2 = r2.contentNameScopesList.push(e3, f2), m2 = p2.getContentName(a2, s2), _2 = g2.push(e3, m2), y2 = r2.push(p2.retokenizeCapturedWithRuleId, d2.start, -1, false, null, g2, _2), v2 = e3.createOnigString(a2.substring(0, d2.end));
                      T(e3, v2, n2 && 0 === d2.start, d2.start, y2, o2, false, 0), S(v2);
                    } else {
                      var b2 = p2.getName(a2, s2);
                      if (null !== b2) {
                        var C2 = (u2.length > 0 ? u2[u2.length - 1].scopes : r2.contentNameScopesList).push(e3, b2);
                        u2.push(new L(C2, d2.end));
                      }
                    }
                  }
                }
              }
              for (; u2.length > 0; )
                o2.produceFromScopes(u2[u2.length - 1].scopes, u2[u2.length - 1].endPos), u2.pop();
            }
          }
          function P(e3) {
            for (var t3 = [], n2 = 0, r2 = e3.rules.length; n2 < r2; n2++)
              t3.push("   - " + e3.rules[n2] + ": " + e3.debugRegExps[n2]);
            return t3.join("\n");
          }
          function w(e3, t3) {
            var n2 = 0;
            return e3 || (n2 |= 1), t3 || (n2 |= 4), n2;
          }
          function A(e3, t3, n2, r2, o2) {
            return s.UseOnigurumaFindOptions ? { ruleScanner: e3.compile(t3, n2), findOptions: w(r2, o2) } : { ruleScanner: e3.compileAG(t3, n2, r2, o2), findOptions: 0 };
          }
          function I(e3, t3, n2, r2, o2) {
            return s.UseOnigurumaFindOptions ? { ruleScanner: e3.compileWhile(t3, n2), findOptions: w(r2, o2) } : { ruleScanner: e3.compileWhileAG(t3, n2, r2, o2), findOptions: 0 };
          }
          t2.Grammar = C;
          var x = function(e3, t3) {
            this.stack = e3, this.stoppedEarly = t3;
          };
          function T(e3, t3, n2, r2, i2, c2, u2, l2) {
            var h2 = t3.content.length, p2 = false, d2 = -1;
            if (u2) {
              var f2 = function(e4, t4, n3, r3, i3, a2) {
                for (var c3 = i3.beginRuleCapturedEOL ? 0 : -1, u3 = [], l3 = i3; l3; l3 = l3.pop()) {
                  var h3 = l3.getRule(e4);
                  h3 instanceof o.BeginWhileRule && u3.push({ rule: h3, stack: l3 });
                }
                for (var p3 = u3.pop(); p3; p3 = u3.pop()) {
                  var d3 = I(p3.rule, e4, p3.stack.endRule, n3, r3 === c3), f3 = d3.ruleScanner, g3 = d3.findOptions, m3 = f3.scanner.findNextMatchSync(t4, r3, g3);
                  if (s.DebugFlags.InDebugMode && (console.log("  scanning for while rule"), console.log(P(f3))), !m3) {
                    s.DebugFlags.InDebugMode && console.log("  popping " + p3.rule.debugName + " - " + p3.rule.debugWhileRegExp), i3 = p3.stack.pop();
                    break;
                  }
                  if (-2 !== f3.rules[m3.index]) {
                    i3 = p3.stack.pop();
                    break;
                  }
                  m3.captureIndices && m3.captureIndices.length && (a2.produce(p3.stack, m3.captureIndices[0].start), k(e4, t4, n3, p3.stack, a2, p3.rule.whileCaptures, m3.captureIndices), a2.produce(p3.stack, m3.captureIndices[0].end), c3 = m3.captureIndices[0].end, m3.captureIndices[0].end > r3 && (r3 = m3.captureIndices[0].end, n3 = false));
                }
                return { stack: i3, linePos: r3, anchorPosition: c3, isFirstLine: n3 };
              }(e3, t3, n2, r2, i2, c2);
              i2 = f2.stack, r2 = f2.linePos, n2 = f2.isFirstLine, d2 = f2.anchorPosition;
            }
            for (var g2 = Date.now(); !p2; ) {
              if (0 !== l2 && Date.now() - g2 > l2)
                return new x(i2, true);
              m2();
            }
            return new x(i2, false);
            function m2() {
              s.DebugFlags.InDebugMode && (console.log(""), console.log("@@scanNext " + r2 + ": |" + t3.content.substr(r2).replace(/\n$/, "\\n") + "|"));
              var u3 = function(e4, t4, n3, r3, o2, i3) {
                var c3 = function(e5, t5, n4, r4, o3, i4) {
                  var c4 = o3.getRule(e5), u5 = A(c4, e5, o3.endRule, n4, r4 === i4), l5 = u5.ruleScanner, h4 = u5.findOptions, p4 = 0;
                  s.DebugFlags.InDebugMode && (p4 = a());
                  var d3 = l5.scanner.findNextMatchSync(t5, r4, h4);
                  if (s.DebugFlags.InDebugMode) {
                    var f4 = a() - p4;
                    f4 > 5 && console.warn("Rule " + c4.debugName + " (" + c4.id + ") matching took " + f4 + " against '" + t5 + "'"), console.log("  scanning for (linePos: " + r4 + ", anchorPosition: " + i4 + ")"), console.log(P(l5)), d3 && console.log("matched rule id: " + l5.rules[d3.index] + " from " + d3.captureIndices[0].start + " to " + d3.captureIndices[0].end);
                  }
                  return d3 ? { captureIndices: d3.captureIndices, matchedRuleId: l5.rules[d3.index] } : null;
                }(e4, t4, n3, r3, o2, i3), u4 = e4.getInjections();
                if (0 === u4.length)
                  return c3;
                var l4 = function(e5, t5, n4, r4, o3, i4, a2) {
                  for (var c4, u5 = Number.MAX_VALUE, l5 = null, h4 = 0, p4 = i4.contentNameScopesList.generateScopes(), d3 = 0, f4 = e5.length; d3 < f4; d3++) {
                    var g4 = e5[d3];
                    if (g4.matcher(p4)) {
                      var m4 = A(t5.getRule(g4.ruleId), t5, null, r4, o3 === a2), _3 = m4.ruleScanner, y3 = m4.findOptions, v3 = _3.scanner.findNextMatchSync(n4, o3, y3);
                      if (v3) {
                        s.DebugFlags.InDebugMode && (console.log("  matched injection: " + g4.debugSelector), console.log(P(_3)));
                        var b3 = v3.captureIndices[0].start;
                        if (!(b3 >= u5) && (u5 = b3, l5 = v3.captureIndices, c4 = _3.rules[v3.index], h4 = g4.priority, u5 === o3))
                          break;
                      }
                    }
                  }
                  return l5 ? { priorityMatch: -1 === h4, captureIndices: l5, matchedRuleId: c4 } : null;
                }(u4, e4, t4, n3, r3, o2, i3);
                if (!l4)
                  return c3;
                if (!c3)
                  return l4;
                var h3 = c3.captureIndices[0].start, p3 = l4.captureIndices[0].start;
                return p3 < h3 || l4.priorityMatch && p3 === h3 ? l4 : c3;
              }(e3, t3, n2, r2, i2, d2);
              if (!u3)
                return s.DebugFlags.InDebugMode && console.log("  no more matches."), c2.produce(i2, h2), void (p2 = true);
              var l3 = u3.captureIndices, f3 = u3.matchedRuleId, g3 = !!(l3 && l3.length > 0) && l3[0].end > r2;
              if (-1 === f3) {
                var m3 = i2.getRule(e3);
                s.DebugFlags.InDebugMode && console.log("  popping " + m3.debugName + " - " + m3.debugEndRegExp), c2.produce(i2, l3[0].start), i2 = i2.setContentNameScopesList(i2.nameScopesList), k(e3, t3, n2, i2, c2, m3.endCaptures, l3), c2.produce(i2, l3[0].end);
                var _2 = i2;
                if (i2 = i2.pop(), d2 = _2.getAnchorPos(), !g3 && _2.getEnterPos() === r2)
                  return s.DebugFlags.InDebugMode && console.error("[1] - Grammar is in an endless loop - Grammar pushed & popped a rule without advancing"), i2 = _2, c2.produce(i2, h2), void (p2 = true);
              } else {
                var y2 = e3.getRule(f3);
                c2.produce(i2, l3[0].start);
                var v2 = i2, b2 = y2.getName(t3.content, l3), C2 = i2.contentNameScopesList.push(e3, b2);
                if (i2 = i2.push(f3, r2, d2, l3[0].end === h2, null, C2, C2), y2 instanceof o.BeginEndRule) {
                  var S2 = y2;
                  s.DebugFlags.InDebugMode && console.log("  pushing " + S2.debugName + " - " + S2.debugBeginRegExp), k(e3, t3, n2, i2, c2, S2.beginCaptures, l3), c2.produce(i2, l3[0].end), d2 = l3[0].end;
                  var R2 = S2.getContentName(t3.content, l3), w2 = C2.push(e3, R2);
                  if (i2 = i2.setContentNameScopesList(w2), S2.endHasBackReferences && (i2 = i2.setEndRule(S2.getEndWithResolvedBackReferences(t3.content, l3))), !g3 && v2.hasSameRuleAs(i2))
                    return s.DebugFlags.InDebugMode && console.error("[2] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"), i2 = i2.pop(), c2.produce(i2, h2), void (p2 = true);
                } else if (y2 instanceof o.BeginWhileRule) {
                  if (S2 = y2, s.DebugFlags.InDebugMode && console.log("  pushing " + S2.debugName), k(e3, t3, n2, i2, c2, S2.beginCaptures, l3), c2.produce(i2, l3[0].end), d2 = l3[0].end, R2 = S2.getContentName(t3.content, l3), w2 = C2.push(e3, R2), i2 = i2.setContentNameScopesList(w2), S2.whileHasBackReferences && (i2 = i2.setEndRule(S2.getWhileWithResolvedBackReferences(t3.content, l3))), !g3 && v2.hasSameRuleAs(i2))
                    return s.DebugFlags.InDebugMode && console.error("[3] - Grammar is in an endless loop - Grammar pushed the same rule without advancing"), i2 = i2.pop(), c2.produce(i2, h2), void (p2 = true);
                } else {
                  var I2 = y2;
                  if (s.DebugFlags.InDebugMode && console.log("  matched " + I2.debugName + " - " + I2.debugMatchRegExp), k(e3, t3, n2, i2, c2, I2.captures, l3), c2.produce(i2, l3[0].end), i2 = i2.pop(), !g3)
                    return s.DebugFlags.InDebugMode && console.error("[4] - Grammar is in an endless loop - Grammar is not advancing, nor is it pushing/popping"), i2 = i2.safePop(), c2.produce(i2, h2), void (p2 = true);
                }
              }
              l3[0].end > r2 && (r2 = l3[0].end, n2 = false);
            }
          }
          var G = function() {
            function e3() {
            }
            return e3.toBinaryStr = function(e4) {
              for (var t3 = e4.toString(2); t3.length < 32; )
                t3 = "0" + t3;
              return t3;
            }, e3.printMetadata = function(t3) {
              var n2 = e3.getLanguageId(t3), r2 = e3.getTokenType(t3), o2 = e3.getFontStyle(t3), i2 = e3.getForeground(t3), s2 = e3.getBackground(t3);
              console.log({ languageId: n2, tokenType: r2, fontStyle: o2, foreground: i2, background: s2 });
            }, e3.getLanguageId = function(e4) {
              return (255 & e4) >>> 0;
            }, e3.getTokenType = function(e4) {
              return (768 & e4) >>> 8;
            }, e3.getFontStyle = function(e4) {
              return (15360 & e4) >>> 10;
            }, e3.getForeground = function(e4) {
              return (8372224 & e4) >>> 14;
            }, e3.getBackground = function(e4) {
              return (4286578688 & e4) >>> 23;
            }, e3.set = function(t3, n2, r2, o2, i2, s2) {
              var a2 = e3.getLanguageId(t3), c2 = e3.getTokenType(t3), u2 = e3.getFontStyle(t3), l2 = e3.getForeground(t3), h2 = e3.getBackground(t3);
              return 0 !== n2 && (a2 = n2), 0 !== r2 && (c2 = 8 === r2 ? 0 : r2), -1 !== o2 && (u2 = o2), 0 !== i2 && (l2 = i2), 0 !== s2 && (h2 = s2), (a2 << 0 | c2 << 8 | u2 << 10 | l2 << 14 | h2 << 23) >>> 0;
            }, e3;
          }();
          t2.StackElementMetadata = G;
          var E = function() {
            function e3(e4, t3, n2) {
              this.parent = e4, this.scope = t3, this.metadata = n2;
            }
            return e3._equals = function(e4, t3) {
              for (; ; ) {
                if (e4 === t3)
                  return true;
                if (!e4 && !t3)
                  return true;
                if (!e4 || !t3)
                  return false;
                if (e4.scope !== t3.scope || e4.metadata !== t3.metadata)
                  return false;
                e4 = e4.parent, t3 = t3.parent;
              }
            }, e3.prototype.equals = function(t3) {
              return e3._equals(this, t3);
            }, e3._matchesScope = function(e4, t3, n2) {
              return t3 === e4 || e4.substring(0, n2.length) === n2;
            }, e3._matches = function(e4, t3) {
              if (null === t3)
                return true;
              for (var n2 = t3.length, r2 = 0, o2 = t3[r2], i2 = o2 + "."; e4; ) {
                if (this._matchesScope(e4.scope, o2, i2)) {
                  if (++r2 === n2)
                    return true;
                  i2 = (o2 = t3[r2]) + ".";
                }
                e4 = e4.parent;
              }
              return false;
            }, e3.mergeMetadata = function(e4, t3, n2) {
              if (null === n2)
                return e4;
              var r2 = -1, o2 = 0, i2 = 0;
              if (null !== n2.themeData)
                for (var s2 = 0, a2 = n2.themeData.length; s2 < a2; s2++) {
                  var c2 = n2.themeData[s2];
                  if (this._matches(t3, c2.parentScopes)) {
                    r2 = c2.fontStyle, o2 = c2.foreground, i2 = c2.background;
                    break;
                  }
                }
              return G.set(e4, n2.languageId, n2.tokenType, r2, o2, i2);
            }, e3._push = function(t3, n2, r2) {
              for (var o2 = 0, i2 = r2.length; o2 < i2; o2++) {
                var s2 = r2[o2], a2 = n2.getMetadataForScope(s2), c2 = e3.mergeMetadata(t3.metadata, t3, a2);
                t3 = new e3(t3, s2, c2);
              }
              return t3;
            }, e3.prototype.push = function(t3, n2) {
              return null === n2 ? this : n2.indexOf(" ") >= 0 ? e3._push(this, t3, n2.split(/ /g)) : e3._push(this, t3, [n2]);
            }, e3._generateScopes = function(e4) {
              for (var t3 = [], n2 = 0; e4; )
                t3[n2++] = e4.scope, e4 = e4.parent;
              return t3.reverse(), t3;
            }, e3.prototype.generateScopes = function() {
              return e3._generateScopes(this);
            }, e3;
          }();
          t2.ScopeListElement = E;
          var M = function() {
            function e3(e4, t3, n2, r2, o2, i2, s2, a2) {
              this._stackElementBrand = void 0, this.parent = e4, this.depth = this.parent ? this.parent.depth + 1 : 1, this.ruleId = t3, this._enterPos = n2, this._anchorPos = r2, this.beginRuleCapturedEOL = o2, this.endRule = i2, this.nameScopesList = s2, this.contentNameScopesList = a2;
            }
            return e3._structuralEquals = function(e4, t3) {
              for (; ; ) {
                if (e4 === t3)
                  return true;
                if (!e4 && !t3)
                  return true;
                if (!e4 || !t3)
                  return false;
                if (e4.depth !== t3.depth || e4.ruleId !== t3.ruleId || e4.endRule !== t3.endRule)
                  return false;
                e4 = e4.parent, t3 = t3.parent;
              }
            }, e3._equals = function(e4, t3) {
              return e4 === t3 || !!this._structuralEquals(e4, t3) && e4.contentNameScopesList.equals(t3.contentNameScopesList);
            }, e3.prototype.clone = function() {
              return this;
            }, e3.prototype.equals = function(t3) {
              return null !== t3 && e3._equals(this, t3);
            }, e3._reset = function(e4) {
              for (; e4; )
                e4._enterPos = -1, e4._anchorPos = -1, e4 = e4.parent;
            }, e3.prototype.reset = function() {
              e3._reset(this);
            }, e3.prototype.pop = function() {
              return this.parent;
            }, e3.prototype.safePop = function() {
              return this.parent ? this.parent : this;
            }, e3.prototype.push = function(t3, n2, r2, o2, i2, s2, a2) {
              return new e3(this, t3, n2, r2, o2, i2, s2, a2);
            }, e3.prototype.getEnterPos = function() {
              return this._enterPos;
            }, e3.prototype.getAnchorPos = function() {
              return this._anchorPos;
            }, e3.prototype.getRule = function(e4) {
              return e4.getRule(this.ruleId);
            }, e3.prototype._writeString = function(e4, t3) {
              return this.parent && (t3 = this.parent._writeString(e4, t3)), e4[t3++] = "(" + this.ruleId + ", TODO-" + this.nameScopesList + ", TODO-" + this.contentNameScopesList + ")", t3;
            }, e3.prototype.toString = function() {
              var e4 = [];
              return this._writeString(e4, 0), "[" + e4.join(",") + "]";
            }, e3.prototype.setContentNameScopesList = function(e4) {
              return this.contentNameScopesList === e4 ? this : this.parent.push(this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, this.endRule, this.nameScopesList, e4);
            }, e3.prototype.setEndRule = function(t3) {
              return this.endRule === t3 ? this : new e3(this.parent, this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, t3, this.nameScopesList, this.contentNameScopesList);
            }, e3.prototype.hasSameRuleAs = function(e4) {
              for (var t3 = this; t3 && t3._enterPos === e4._enterPos; ) {
                if (t3.ruleId === e4.ruleId)
                  return true;
                t3 = t3.parent;
              }
              return false;
            }, e3.NULL = new e3(null, 0, 0, 0, false, null, null, null), e3;
          }();
          t2.StackElement = M;
          var L = function(e3, t3) {
            this.scopes = e3, this.endPos = t3;
          };
          t2.LocalStackElement = L;
          var N = function() {
            function e3(e4, t3, n2) {
              this._emitBinaryTokens = e4, this._tokenTypeOverrides = n2, s.DebugFlags.InDebugMode ? this._lineText = t3 : this._lineText = null, this._tokens = [], this._binaryTokens = [], this._lastTokenEndIndex = 0;
            }
            return e3.prototype.produce = function(e4, t3) {
              this.produceFromScopes(e4.contentNameScopesList, t3);
            }, e3.prototype.produceFromScopes = function(e4, t3) {
              if (!(this._lastTokenEndIndex >= t3)) {
                if (this._emitBinaryTokens) {
                  var n2 = e4.metadata;
                  if (this._tokenTypeOverrides.length > 0)
                    for (var r2 = e4.generateScopes(), o2 = 0, i2 = this._tokenTypeOverrides; o2 < i2.length; o2++) {
                      var a2 = i2[o2];
                      a2.matcher(r2) && (n2 = G.set(n2, 0, D(a2.type), -1, 0, 0));
                    }
                  if (this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === n2)
                    return void (this._lastTokenEndIndex = t3);
                  if (s.DebugFlags.InDebugMode) {
                    var c2 = e4.generateScopes();
                    console.log("  token: |" + this._lineText.substring(this._lastTokenEndIndex, t3).replace(/\n$/, "\\n") + "|");
                    for (var u2 = 0; u2 < c2.length; u2++)
                      console.log("      * " + c2[u2]);
                  }
                  return this._binaryTokens.push(this._lastTokenEndIndex), this._binaryTokens.push(n2), void (this._lastTokenEndIndex = t3);
                }
                var l2 = e4.generateScopes();
                if (s.DebugFlags.InDebugMode)
                  for (console.log("  token: |" + this._lineText.substring(this._lastTokenEndIndex, t3).replace(/\n$/, "\\n") + "|"), u2 = 0; u2 < l2.length; u2++)
                    console.log("      * " + l2[u2]);
                this._tokens.push({ startIndex: this._lastTokenEndIndex, endIndex: t3, scopes: l2 }), this._lastTokenEndIndex = t3;
              }
            }, e3.prototype.getResult = function(e4, t3) {
              return this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === t3 - 1 && this._tokens.pop(), 0 === this._tokens.length && (this._lastTokenEndIndex = -1, this.produce(e4, t3), this._tokens[this._tokens.length - 1].startIndex = 0), this._tokens;
            }, e3.prototype.getBinaryResult = function(e4, t3) {
              this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === t3 - 1 && (this._binaryTokens.pop(), this._binaryTokens.pop()), 0 === this._binaryTokens.length && (this._lastTokenEndIndex = -1, this.produce(e4, t3), this._binaryTokens[this._binaryTokens.length - 2] = 0);
              for (var n2 = new Uint32Array(this._binaryTokens.length), r2 = 0, o2 = this._binaryTokens.length; r2 < o2; r2++)
                n2[r2] = this._binaryTokens[r2];
              return n2;
            }, e3;
          }();
          function D(e3) {
            switch (e3) {
              case 3:
                return 3;
              case 2:
                return 2;
              case 1:
                return 1;
              case 0:
              default:
                return 8;
            }
          }
        }, 25: (e2, t2, n) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.parseRawGrammar = void 0;
          var r = n(69), o = n(350), i = n(974);
          t2.parseRawGrammar = function(e3, t3) {
            return void 0 === t3 && (t3 = null), null !== t3 && /\.json$/.test(t3) ? (n2 = e3, s = t3, o.DebugFlags.InDebugMode ? i.parse(n2, s, true) : JSON.parse(n2)) : function(e4, t4) {
              return o.DebugFlags.InDebugMode ? r.parseWithLocation(e4, t4, "$vscodeTextmateLocation") : r.parse(e4);
            }(e3, t3);
            var n2, s;
          };
        }, 974: (e2, t2) => {
          function n(e3, t3) {
            throw new Error("Near offset " + e3.pos + ": " + t3 + " ~~~" + e3.source.substr(e3.pos, 50) + "~~~");
          }
          Object.defineProperty(t2, "__esModule", { value: true }), t2.parse = void 0, t2.parse = function(e3, t3, s) {
            var a = new r(e3), c = new o(), u = 0, l = null, h = [], p = [];
            function d() {
              h.push(u), p.push(l);
            }
            function f() {
              u = h.pop(), l = p.pop();
            }
            function g(e4) {
              n(a, e4);
            }
            for (; i(a, c); ) {
              if (0 === u) {
                if (null !== l && g("too many constructs in root"), 3 === c.type) {
                  l = {}, s && (l.$vscodeTextmateLocation = c.toLocation(t3)), d(), u = 1;
                  continue;
                }
                if (2 === c.type) {
                  l = [], d(), u = 4;
                  continue;
                }
                g("unexpected token in root");
              }
              if (2 === u) {
                if (5 === c.type) {
                  f();
                  continue;
                }
                if (7 === c.type) {
                  u = 3;
                  continue;
                }
                g("expected , or }");
              }
              if (1 === u || 3 === u) {
                if (1 === u && 5 === c.type) {
                  f();
                  continue;
                }
                if (1 === c.type) {
                  var m = c.value;
                  if (i(a, c) && 6 === c.type || g("expected colon"), i(a, c) || g("expected value"), u = 2, 1 === c.type) {
                    l[m] = c.value;
                    continue;
                  }
                  if (8 === c.type) {
                    l[m] = null;
                    continue;
                  }
                  if (9 === c.type) {
                    l[m] = true;
                    continue;
                  }
                  if (10 === c.type) {
                    l[m] = false;
                    continue;
                  }
                  if (11 === c.type) {
                    l[m] = parseFloat(c.value);
                    continue;
                  }
                  if (2 === c.type) {
                    var _ = [];
                    l[m] = _, d(), u = 4, l = _;
                    continue;
                  }
                  if (3 === c.type) {
                    var y = {};
                    s && (y.$vscodeTextmateLocation = c.toLocation(t3)), l[m] = y, d(), u = 1, l = y;
                    continue;
                  }
                }
                g("unexpected token in dict");
              }
              if (5 === u) {
                if (4 === c.type) {
                  f();
                  continue;
                }
                if (7 === c.type) {
                  u = 6;
                  continue;
                }
                g("expected , or ]");
              }
              if (4 === u || 6 === u) {
                if (4 === u && 4 === c.type) {
                  f();
                  continue;
                }
                if (u = 5, 1 === c.type) {
                  l.push(c.value);
                  continue;
                }
                if (8 === c.type) {
                  l.push(null);
                  continue;
                }
                if (9 === c.type) {
                  l.push(true);
                  continue;
                }
                if (10 === c.type) {
                  l.push(false);
                  continue;
                }
                if (11 === c.type) {
                  l.push(parseFloat(c.value));
                  continue;
                }
                if (2 === c.type) {
                  _ = [], l.push(_), d(), u = 4, l = _;
                  continue;
                }
                if (3 === c.type) {
                  y = {}, s && (y.$vscodeTextmateLocation = c.toLocation(t3)), l.push(y), d(), u = 1, l = y;
                  continue;
                }
                g("unexpected token in array");
              }
              g("unknown state");
            }
            return 0 !== p.length && g("unclosed constructs"), l;
          };
          var r = function(e3) {
            this.source = e3, this.pos = 0, this.len = e3.length, this.line = 1, this.char = 0;
          }, o = function() {
            function e3() {
              this.value = null, this.type = 0, this.offset = -1, this.len = -1, this.line = -1, this.char = -1;
            }
            return e3.prototype.toLocation = function(e4) {
              return { filename: e4, line: this.line, char: this.char };
            }, e3;
          }();
          function i(e3, t3) {
            t3.value = null, t3.type = 0, t3.offset = -1, t3.len = -1, t3.line = -1, t3.char = -1;
            for (var r2, o2 = e3.source, i2 = e3.pos, s = e3.len, a = e3.line, c = e3.char; ; ) {
              if (i2 >= s)
                return false;
              if (32 !== (r2 = o2.charCodeAt(i2)) && 9 !== r2 && 13 !== r2) {
                if (10 !== r2)
                  break;
                i2++, a++, c = 0;
              } else
                i2++, c++;
            }
            if (t3.offset = i2, t3.line = a, t3.char = c, 34 === r2) {
              for (t3.type = 1, i2++, c++; ; ) {
                if (i2 >= s)
                  return false;
                if (r2 = o2.charCodeAt(i2), i2++, c++, 92 !== r2) {
                  if (34 === r2)
                    break;
                } else
                  i2++, c++;
              }
              t3.value = o2.substring(t3.offset + 1, i2 - 1).replace(/\\u([0-9A-Fa-f]{4})/g, function(e4, t4) {
                return String.fromCodePoint(parseInt(t4, 16));
              }).replace(/\\(.)/g, function(t4, r3) {
                switch (r3) {
                  case '"':
                    return '"';
                  case "\\":
                    return "\\";
                  case "/":
                    return "/";
                  case "b":
                    return "\b";
                  case "f":
                    return "\f";
                  case "n":
                    return "\n";
                  case "r":
                    return "\r";
                  case "t":
                    return "	";
                  default:
                    n(e3, "invalid escape sequence");
                }
                throw new Error("unreachable");
              });
            } else if (91 === r2)
              t3.type = 2, i2++, c++;
            else if (123 === r2)
              t3.type = 3, i2++, c++;
            else if (93 === r2)
              t3.type = 4, i2++, c++;
            else if (125 === r2)
              t3.type = 5, i2++, c++;
            else if (58 === r2)
              t3.type = 6, i2++, c++;
            else if (44 === r2)
              t3.type = 7, i2++, c++;
            else if (110 === r2) {
              if (t3.type = 8, i2++, c++, 117 !== (r2 = o2.charCodeAt(i2)))
                return false;
              if (i2++, c++, 108 !== (r2 = o2.charCodeAt(i2)))
                return false;
              if (i2++, c++, 108 !== (r2 = o2.charCodeAt(i2)))
                return false;
              i2++, c++;
            } else if (116 === r2) {
              if (t3.type = 9, i2++, c++, 114 !== (r2 = o2.charCodeAt(i2)))
                return false;
              if (i2++, c++, 117 !== (r2 = o2.charCodeAt(i2)))
                return false;
              if (i2++, c++, 101 !== (r2 = o2.charCodeAt(i2)))
                return false;
              i2++, c++;
            } else if (102 === r2) {
              if (t3.type = 10, i2++, c++, 97 !== (r2 = o2.charCodeAt(i2)))
                return false;
              if (i2++, c++, 108 !== (r2 = o2.charCodeAt(i2)))
                return false;
              if (i2++, c++, 115 !== (r2 = o2.charCodeAt(i2)))
                return false;
              if (i2++, c++, 101 !== (r2 = o2.charCodeAt(i2)))
                return false;
              i2++, c++;
            } else
              for (t3.type = 11; ; ) {
                if (i2 >= s)
                  return false;
                if (!(46 === (r2 = o2.charCodeAt(i2)) || r2 >= 48 && r2 <= 57 || 101 === r2 || 69 === r2 || 45 === r2 || 43 === r2))
                  break;
                i2++, c++;
              }
            return t3.len = i2 - t3.offset, null === t3.value && (t3.value = o2.substr(t3.offset, t3.len)), e3.pos = i2, e3.line = a, e3.char = c, true;
          }
        }, 787: function(e2, t2, n) {
          var r = this && this.__createBinding || (Object.create ? function(e3, t3, n2, r2) {
            void 0 === r2 && (r2 = n2), Object.defineProperty(e3, r2, { enumerable: true, get: function() {
              return t3[n2];
            } });
          } : function(e3, t3, n2, r2) {
            void 0 === r2 && (r2 = n2), e3[r2] = t3[n2];
          }), o = this && this.__exportStar || function(e3, t3) {
            for (var n2 in e3)
              "default" === n2 || Object.prototype.hasOwnProperty.call(t3, n2) || r(t3, e3, n2);
          }, i = this && this.__awaiter || function(e3, t3, n2, r2) {
            return new (n2 || (n2 = Promise))(function(o2, i2) {
              function s2(e4) {
                try {
                  c2(r2.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function a2(e4) {
                try {
                  c2(r2.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function c2(e4) {
                var t4;
                e4.done ? o2(e4.value) : (t4 = e4.value, t4 instanceof n2 ? t4 : new n2(function(e5) {
                  e5(t4);
                })).then(s2, a2);
              }
              c2((r2 = r2.apply(e3, t3 || [])).next());
            });
          }, s = this && this.__generator || function(e3, t3) {
            var n2, r2, o2, i2, s2 = { label: 0, sent: function() {
              if (1 & o2[0])
                throw o2[1];
              return o2[1];
            }, trys: [], ops: [] };
            return i2 = { next: a2(0), throw: a2(1), return: a2(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function a2(i3) {
              return function(a3) {
                return function(i4) {
                  if (n2)
                    throw new TypeError("Generator is already executing.");
                  for (; s2; )
                    try {
                      if (n2 = 1, r2 && (o2 = 2 & i4[0] ? r2.return : i4[0] ? r2.throw || ((o2 = r2.return) && o2.call(r2), 0) : r2.next) && !(o2 = o2.call(r2, i4[1])).done)
                        return o2;
                      switch (r2 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                        case 0:
                        case 1:
                          o2 = i4;
                          break;
                        case 4:
                          return s2.label++, { value: i4[1], done: false };
                        case 5:
                          s2.label++, r2 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = s2.ops.pop(), s2.trys.pop();
                          continue;
                        default:
                          if (!((o2 = (o2 = s2.trys).length > 0 && o2[o2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            s2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                            s2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && s2.label < o2[1]) {
                            s2.label = o2[1], o2 = i4;
                            break;
                          }
                          if (o2 && s2.label < o2[2]) {
                            s2.label = o2[2], s2.ops.push(i4);
                            break;
                          }
                          o2[2] && s2.ops.pop(), s2.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, s2);
                    } catch (e4) {
                      i4 = [6, e4], r2 = 0;
                    } finally {
                      n2 = o2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, a3]);
              };
            }
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.parseRawGrammar = t2.INITIAL = t2.Registry = void 0;
          var a = n(652), c = n(25), u = n(583), l = n(527);
          o(n(42), t2);
          var h = function() {
            function e3(e4) {
              this._options = e4, this._syncRegistry = new a.SyncRegistry(u.Theme.createFromRawTheme(e4.theme, e4.colorMap), e4.onigLib), this._ensureGrammarCache = /* @__PURE__ */ new Map();
            }
            return e3.prototype.dispose = function() {
              this._syncRegistry.dispose();
            }, e3.prototype.setTheme = function(e4, t3) {
              this._syncRegistry.setTheme(u.Theme.createFromRawTheme(e4, t3));
            }, e3.prototype.getColorMap = function() {
              return this._syncRegistry.getColorMap();
            }, e3.prototype.loadGrammarWithEmbeddedLanguages = function(e4, t3, n2) {
              return this.loadGrammarWithConfiguration(e4, t3, { embeddedLanguages: n2 });
            }, e3.prototype.loadGrammarWithConfiguration = function(e4, t3, n2) {
              return this._loadGrammar(e4, t3, n2.embeddedLanguages, n2.tokenTypes);
            }, e3.prototype.loadGrammar = function(e4) {
              return this._loadGrammar(e4, 0, null, null);
            }, e3.prototype._doLoadSingleGrammar = function(e4) {
              return i(this, void 0, void 0, function() {
                var t3, n2;
                return s(this, function(r2) {
                  switch (r2.label) {
                    case 0:
                      return [4, this._options.loadGrammar(e4)];
                    case 1:
                      return (t3 = r2.sent()) && (n2 = "function" == typeof this._options.getInjections ? this._options.getInjections(e4) : void 0, this._syncRegistry.addGrammar(t3, n2)), [2];
                  }
                });
              });
            }, e3.prototype._loadSingleGrammar = function(e4) {
              return i(this, void 0, void 0, function() {
                return s(this, function(t3) {
                  return this._ensureGrammarCache.has(e4) || this._ensureGrammarCache.set(e4, this._doLoadSingleGrammar(e4)), [2, this._ensureGrammarCache.get(e4)];
                });
              });
            }, e3.prototype._loadGrammar = function(e4, t3, n2, r2) {
              return i(this, void 0, void 0, function() {
                var o2, i2 = this;
                return s(this, function(s2) {
                  switch (s2.label) {
                    case 0:
                      o2 = new l.ScopeDependencyProcessor(this._syncRegistry, e4), s2.label = 1;
                    case 1:
                      return o2.Q.length > 0 ? [4, Promise.all(o2.Q.map(function(e5) {
                        return i2._loadSingleGrammar(e5.scopeName);
                      }))] : [3, 3];
                    case 2:
                      return s2.sent(), o2.processQueue(), [3, 1];
                    case 3:
                      return [2, this.grammarForScopeName(e4, t3, n2, r2)];
                  }
                });
              });
            }, e3.prototype.addGrammar = function(e4, t3, n2, r2) {
              return void 0 === t3 && (t3 = []), void 0 === n2 && (n2 = 0), void 0 === r2 && (r2 = null), i(this, void 0, void 0, function() {
                return s(this, function(o2) {
                  switch (o2.label) {
                    case 0:
                      return this._syncRegistry.addGrammar(e4, t3), [4, this.grammarForScopeName(e4.scopeName, n2, r2)];
                    case 1:
                      return [2, o2.sent()];
                  }
                });
              });
            }, e3.prototype.grammarForScopeName = function(e4, t3, n2, r2) {
              return void 0 === t3 && (t3 = 0), void 0 === n2 && (n2 = null), void 0 === r2 && (r2 = null), this._syncRegistry.grammarForScopeName(e4, t3, n2, r2);
            }, e3;
          }();
          t2.Registry = h, t2.INITIAL = l.StackElement.NULL, t2.parseRawGrammar = c.parseRawGrammar;
        }, 736: (e2, t2) => {
          function n(e3) {
            return !!e3 && !!e3.match(/[\w\.:]+/);
          }
          Object.defineProperty(t2, "__esModule", { value: true }), t2.createMatchers = void 0, t2.createMatchers = function(e3, t3) {
            for (var r, o, i, s = [], a = (i = (o = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g).exec(r = e3), { next: function() {
              if (!i)
                return null;
              var e4 = i[0];
              return i = o.exec(r), e4;
            } }), c = a.next(); null !== c; ) {
              var u = 0;
              if (2 === c.length && ":" === c.charAt(1)) {
                switch (c.charAt(0)) {
                  case "R":
                    u = 1;
                    break;
                  case "L":
                    u = -1;
                    break;
                  default:
                    console.log("Unknown priority " + c + " in scope selector");
                }
                c = a.next();
              }
              var l = p();
              if (s.push({ matcher: l, priority: u }), "," !== c)
                break;
              c = a.next();
            }
            return s;
            function h() {
              if ("-" === c) {
                c = a.next();
                var e4 = h();
                return function(t4) {
                  return !!e4 && !e4(t4);
                };
              }
              if ("(" === c) {
                c = a.next();
                var r2 = function() {
                  for (var e5 = [], t4 = p(); t4 && (e5.push(t4), "|" === c || "," === c); ) {
                    do {
                      c = a.next();
                    } while ("|" === c || "," === c);
                    t4 = p();
                  }
                  return function(t5) {
                    return e5.some(function(e6) {
                      return e6(t5);
                    });
                  };
                }();
                return ")" === c && (c = a.next()), r2;
              }
              if (n(c)) {
                var o2 = [];
                do {
                  o2.push(c), c = a.next();
                } while (n(c));
                return function(e5) {
                  return t3(o2, e5);
                };
              }
              return null;
            }
            function p() {
              for (var e4 = [], t4 = h(); t4; )
                e4.push(t4), t4 = h();
              return function(t5) {
                return e4.every(function(e5) {
                  return e5(t5);
                });
              };
            }
          };
        }, 69: (e2, t2) => {
          function n(e3, t3, n2) {
            var r = e3.length, o = 0, i = 1, s = 0;
            function a(t4) {
              if (null === n2)
                o += t4;
              else
                for (; t4 > 0; )
                  10 === e3.charCodeAt(o) ? (o++, i++, s = 0) : (o++, s++), t4--;
            }
            function c(e4) {
              null === n2 ? o = e4 : a(e4 - o);
            }
            function u() {
              for (; o < r; ) {
                var t4 = e3.charCodeAt(o);
                if (32 !== t4 && 9 !== t4 && 13 !== t4 && 10 !== t4)
                  break;
                a(1);
              }
            }
            function l(t4) {
              return e3.substr(o, t4.length) === t4 && (a(t4.length), true);
            }
            function h(t4) {
              var n3 = e3.indexOf(t4, o);
              c(-1 !== n3 ? n3 + t4.length : r);
            }
            function p(t4) {
              var n3 = e3.indexOf(t4, o);
              if (-1 !== n3) {
                var i2 = e3.substring(o, n3);
                return c(n3 + t4.length), i2;
              }
              return i2 = e3.substr(o), c(r), i2;
            }
            r > 0 && 65279 === e3.charCodeAt(0) && (o = 1);
            var d = 0, f = null, g = [], m = [], _ = null;
            function y(e4, t4) {
              g.push(d), m.push(f), d = e4, f = t4;
            }
            function v() {
              if (0 === g.length)
                return b("illegal state stack");
              d = g.pop(), f = m.pop();
            }
            function b(t4) {
              throw new Error("Near offset " + o + ": " + t4 + " ~~~" + e3.substr(o, 50) + "~~~");
            }
            var C, S, R, k, P, w = function() {
              if (null === _)
                return b("missing <key>");
              var e4 = {};
              null !== n2 && (e4[n2] = { filename: t3, line: i, char: s }), f[_] = e4, _ = null, y(1, e4);
            }, A = function() {
              if (null === _)
                return b("missing <key>");
              var e4 = [];
              f[_] = e4, _ = null, y(2, e4);
            };
            function I() {
              if (1 !== d)
                return b("unexpected </dict>");
              v();
            }
            function x() {
              return 1 === d || 2 !== d ? b("unexpected </array>") : void v();
            }
            function T(e4) {
              if (1 === d) {
                if (null === _)
                  return b("missing <key>");
                f[_] = e4, _ = null;
              } else
                2 === d ? f.push(e4) : f = e4;
            }
            function G(e4) {
              if (isNaN(e4))
                return b("cannot parse float");
              if (1 === d) {
                if (null === _)
                  return b("missing <key>");
                f[_] = e4, _ = null;
              } else
                2 === d ? f.push(e4) : f = e4;
            }
            function E(e4) {
              if (isNaN(e4))
                return b("cannot parse integer");
              if (1 === d) {
                if (null === _)
                  return b("missing <key>");
                f[_] = e4, _ = null;
              } else
                2 === d ? f.push(e4) : f = e4;
            }
            function M(e4) {
              if (1 === d) {
                if (null === _)
                  return b("missing <key>");
                f[_] = e4, _ = null;
              } else
                2 === d ? f.push(e4) : f = e4;
            }
            function L(e4) {
              if (1 === d) {
                if (null === _)
                  return b("missing <key>");
                f[_] = e4, _ = null;
              } else
                2 === d ? f.push(e4) : f = e4;
            }
            function N(e4) {
              if (1 === d) {
                if (null === _)
                  return b("missing <key>");
                f[_] = e4, _ = null;
              } else
                2 === d ? f.push(e4) : f = e4;
            }
            function D(e4) {
              if (e4.isClosed)
                return "";
              var t4 = p("</");
              return h(">"), t4.replace(/&#([0-9]+);/g, function(e5, t5) {
                return String.fromCodePoint(parseInt(t5, 10));
              }).replace(/&#x([0-9a-f]+);/g, function(e5, t5) {
                return String.fromCodePoint(parseInt(t5, 16));
              }).replace(/&amp;|&lt;|&gt;|&quot;|&apos;/g, function(e5) {
                switch (e5) {
                  case "&amp;":
                    return "&";
                  case "&lt;":
                    return "<";
                  case "&gt;":
                    return ">";
                  case "&quot;":
                    return '"';
                  case "&apos;":
                    return "'";
                }
                return e5;
              });
            }
            for (; o < r && (u(), !(o >= r)); ) {
              var O = e3.charCodeAt(o);
              if (a(1), 60 !== O)
                return b("expected <");
              if (o >= r)
                return b("unexpected end of input");
              var F = e3.charCodeAt(o);
              if (63 !== F)
                if (33 !== F) {
                  if (47 === F) {
                    if (a(1), u(), l("plist")) {
                      h(">");
                      continue;
                    }
                    if (l("dict")) {
                      h(">"), I();
                      continue;
                    }
                    if (l("array")) {
                      h(">"), x();
                      continue;
                    }
                    return b("unexpected closed tag");
                  }
                  var j = (S = void 0, R = void 0, R = false, 47 === (S = p(">")).charCodeAt(S.length - 1) && (R = true, S = S.substring(0, S.length - 1)), { name: S.trim(), isClosed: R });
                  switch (j.name) {
                    case "dict":
                      1 === d ? w() : 2 === d ? (P = void 0, P = {}, null !== n2 && (P[n2] = { filename: t3, line: i, char: s }), f.push(P), y(1, P)) : (f = {}, null !== n2 && (f[n2] = { filename: t3, line: i, char: s }), y(1, f)), j.isClosed && I();
                      continue;
                    case "array":
                      1 === d ? A() : 2 === d ? (k = void 0, k = [], f.push(k), y(2, k)) : y(2, f = []), j.isClosed && x();
                      continue;
                    case "key":
                      C = D(j), 1 !== d ? b("unexpected <key>") : null !== _ ? b("too many <key>") : _ = C;
                      continue;
                    case "string":
                      T(D(j));
                      continue;
                    case "real":
                      G(parseFloat(D(j)));
                      continue;
                    case "integer":
                      E(parseInt(D(j), 10));
                      continue;
                    case "date":
                      M(new Date(D(j)));
                      continue;
                    case "data":
                      L(D(j));
                      continue;
                    case "true":
                      D(j), N(true);
                      continue;
                    case "false":
                      D(j), N(false);
                      continue;
                  }
                  if (!/^plist/.test(j.name))
                    return b("unexpected opened tag " + j.name);
                } else {
                  if (a(1), l("--")) {
                    h("-->");
                    continue;
                  }
                  h(">");
                }
              else
                a(1), h("?>");
            }
            return f;
          }
          Object.defineProperty(t2, "__esModule", { value: true }), t2.parse = t2.parseWithLocation = void 0, t2.parseWithLocation = function(e3, t3, r) {
            return n(e3, t3, r);
          }, t2.parse = function(e3) {
            return n(e3, null, null);
          };
        }, 652: function(e2, t2, n) {
          var r = this && this.__awaiter || function(e3, t3, n2, r2) {
            return new (n2 || (n2 = Promise))(function(o2, i2) {
              function s2(e4) {
                try {
                  c(r2.next(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function a(e4) {
                try {
                  c(r2.throw(e4));
                } catch (e5) {
                  i2(e5);
                }
              }
              function c(e4) {
                var t4;
                e4.done ? o2(e4.value) : (t4 = e4.value, t4 instanceof n2 ? t4 : new n2(function(e5) {
                  e5(t4);
                })).then(s2, a);
              }
              c((r2 = r2.apply(e3, t3 || [])).next());
            });
          }, o = this && this.__generator || function(e3, t3) {
            var n2, r2, o2, i2, s2 = { label: 0, sent: function() {
              if (1 & o2[0])
                throw o2[1];
              return o2[1];
            }, trys: [], ops: [] };
            return i2 = { next: a(0), throw: a(1), return: a(2) }, "function" == typeof Symbol && (i2[Symbol.iterator] = function() {
              return this;
            }), i2;
            function a(i3) {
              return function(a2) {
                return function(i4) {
                  if (n2)
                    throw new TypeError("Generator is already executing.");
                  for (; s2; )
                    try {
                      if (n2 = 1, r2 && (o2 = 2 & i4[0] ? r2.return : i4[0] ? r2.throw || ((o2 = r2.return) && o2.call(r2), 0) : r2.next) && !(o2 = o2.call(r2, i4[1])).done)
                        return o2;
                      switch (r2 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                        case 0:
                        case 1:
                          o2 = i4;
                          break;
                        case 4:
                          return s2.label++, { value: i4[1], done: false };
                        case 5:
                          s2.label++, r2 = i4[1], i4 = [0];
                          continue;
                        case 7:
                          i4 = s2.ops.pop(), s2.trys.pop();
                          continue;
                        default:
                          if (!((o2 = (o2 = s2.trys).length > 0 && o2[o2.length - 1]) || 6 !== i4[0] && 2 !== i4[0])) {
                            s2 = 0;
                            continue;
                          }
                          if (3 === i4[0] && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                            s2.label = i4[1];
                            break;
                          }
                          if (6 === i4[0] && s2.label < o2[1]) {
                            s2.label = o2[1], o2 = i4;
                            break;
                          }
                          if (o2 && s2.label < o2[2]) {
                            s2.label = o2[2], s2.ops.push(i4);
                            break;
                          }
                          o2[2] && s2.ops.pop(), s2.trys.pop();
                          continue;
                      }
                      i4 = t3.call(e3, s2);
                    } catch (e4) {
                      i4 = [6, e4], r2 = 0;
                    } finally {
                      n2 = o2 = 0;
                    }
                  if (5 & i4[0])
                    throw i4[1];
                  return { value: i4[0] ? i4[1] : void 0, done: true };
                }([i3, a2]);
              };
            }
          };
          Object.defineProperty(t2, "__esModule", { value: true }), t2.SyncRegistry = void 0;
          var i = n(527), s = function() {
            function e3(e4, t3) {
              this._theme = e4, this._grammars = {}, this._rawGrammars = {}, this._injectionGrammars = {}, this._onigLibPromise = t3;
            }
            return e3.prototype.dispose = function() {
              for (var e4 in this._grammars)
                this._grammars.hasOwnProperty(e4) && this._grammars[e4].dispose();
            }, e3.prototype.setTheme = function(e4) {
              var t3 = this;
              this._theme = e4, Object.keys(this._grammars).forEach(function(e5) {
                t3._grammars[e5].onDidChangeTheme();
              });
            }, e3.prototype.getColorMap = function() {
              return this._theme.getColorMap();
            }, e3.prototype.addGrammar = function(e4, t3) {
              this._rawGrammars[e4.scopeName] = e4, t3 && (this._injectionGrammars[e4.scopeName] = t3);
            }, e3.prototype.lookup = function(e4) {
              return this._rawGrammars[e4];
            }, e3.prototype.injections = function(e4) {
              return this._injectionGrammars[e4];
            }, e3.prototype.getDefaults = function() {
              return this._theme.getDefaults();
            }, e3.prototype.themeMatch = function(e4) {
              return this._theme.match(e4);
            }, e3.prototype.grammarForScopeName = function(e4, t3, n2, s2) {
              return r(this, void 0, void 0, function() {
                var r2, a, c, u, l;
                return o(this, function(o2) {
                  switch (o2.label) {
                    case 0:
                      return this._grammars[e4] ? [3, 2] : (r2 = this._rawGrammars[e4]) ? (a = this._grammars, c = e4, u = i.createGrammar, l = [e4, r2, t3, n2, s2, this], [4, this._onigLibPromise]) : [2, null];
                    case 1:
                      a[c] = u.apply(void 0, l.concat([o2.sent()])), o2.label = 2;
                    case 2:
                      return [2, this._grammars[e4]];
                  }
                });
              });
            }, e3;
          }();
          t2.SyncRegistry = s;
        }, 792: function(e2, t2, n) {
          var r, o = this && this.__extends || (r = function(e3, t3) {
            return (r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e4, t4) {
              e4.__proto__ = t4;
            } || function(e4, t4) {
              for (var n2 in t4)
                Object.prototype.hasOwnProperty.call(t4, n2) && (e4[n2] = t4[n2]);
            })(e3, t3);
          }, function(e3, t3) {
            if ("function" != typeof t3 && null !== t3)
              throw new TypeError("Class extends value " + String(t3) + " is not a constructor or null");
            function n2() {
              this.constructor = e3;
            }
            r(e3, t3), e3.prototype = null === t3 ? Object.create(t3) : (n2.prototype = t3.prototype, new n2());
          });
          Object.defineProperty(t2, "__esModule", { value: true }), t2.RuleFactory = t2.BeginWhileRule = t2.BeginEndRule = t2.IncludeOnlyRule = t2.MatchRule = t2.RegExpSourceList = t2.RegExpSource = t2.CaptureRule = t2.Rule = t2.CompiledRule = void 0;
          var i = n(878), s = /\\(\d+)/, a = /\\(\d+)/g, c = function() {
            function e3(e4, t3, n2) {
              this.debugRegExps = t3, this.rules = n2, this.scanner = e4.createOnigScanner(t3);
            }
            return e3.prototype.dispose = function() {
              "function" == typeof this.scanner.dispose && this.scanner.dispose();
            }, e3;
          }();
          t2.CompiledRule = c;
          var u = function() {
            function e3(e4, t3, n2, r2) {
              this.$location = e4, this.id = t3, this._name = n2 || null, this._nameIsCapturing = i.RegexSource.hasCaptures(this._name), this._contentName = r2 || null, this._contentNameIsCapturing = i.RegexSource.hasCaptures(this._contentName);
            }
            return Object.defineProperty(e3.prototype, "debugName", { get: function() {
              var e4 = this.$location ? i.basename(this.$location.filename) + ":" + this.$location.line : "unknown";
              return this.constructor.name + "#" + this.id + " @ " + e4;
            }, enumerable: false, configurable: true }), e3.prototype.getName = function(e4, t3) {
              return this._nameIsCapturing && null !== this._name && null !== e4 && null !== t3 ? i.RegexSource.replaceCaptures(this._name, e4, t3) : this._name;
            }, e3.prototype.getContentName = function(e4, t3) {
              return this._contentNameIsCapturing && null !== this._contentName ? i.RegexSource.replaceCaptures(this._contentName, e4, t3) : this._contentName;
            }, e3;
          }();
          t2.Rule = u;
          var l = function(e3) {
            function t3(t4, n2, r2, o2, i2) {
              var s2 = e3.call(this, t4, n2, r2, o2) || this;
              return s2.retokenizeCapturedWithRuleId = i2, s2;
            }
            return o(t3, e3), t3.prototype.dispose = function() {
            }, t3.prototype.collectPatternsRecursive = function(e4, t4, n2) {
              throw new Error("Not supported!");
            }, t3.prototype.compile = function(e4, t4) {
              throw new Error("Not supported!");
            }, t3.prototype.compileAG = function(e4, t4, n2, r2) {
              throw new Error("Not supported!");
            }, t3;
          }(u);
          t2.CaptureRule = l;
          var h = function() {
            function e3(e4, t3, n2) {
              if (void 0 === n2 && (n2 = true), n2)
                if (e4) {
                  for (var r2 = e4.length, o2 = 0, i2 = [], a2 = false, c2 = 0; c2 < r2; c2++)
                    if ("\\" === e4.charAt(c2) && c2 + 1 < r2) {
                      var u2 = e4.charAt(c2 + 1);
                      "z" === u2 ? (i2.push(e4.substring(o2, c2)), i2.push("$(?!\\n)(?<!\\n)"), o2 = c2 + 2) : "A" !== u2 && "G" !== u2 || (a2 = true), c2++;
                    }
                  this.hasAnchor = a2, 0 === o2 ? this.source = e4 : (i2.push(e4.substring(o2, r2)), this.source = i2.join(""));
                } else
                  this.hasAnchor = false, this.source = e4;
              else
                this.hasAnchor = false, this.source = e4;
              this.hasAnchor ? this._anchorCache = this._buildAnchorCache() : this._anchorCache = null, this.ruleId = t3, this.hasBackReferences = s.test(this.source);
            }
            return e3.prototype.clone = function() {
              return new e3(this.source, this.ruleId, true);
            }, e3.prototype.setSource = function(e4) {
              this.source !== e4 && (this.source = e4, this.hasAnchor && (this._anchorCache = this._buildAnchorCache()));
            }, e3.prototype.resolveBackReferences = function(e4, t3) {
              var n2 = t3.map(function(t4) {
                return e4.substring(t4.start, t4.end);
              });
              return a.lastIndex = 0, this.source.replace(a, function(e5, t4) {
                return (n2[parseInt(t4, 10)] || "").replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&");
              });
            }, e3.prototype._buildAnchorCache = function() {
              var e4, t3, n2, r2, o2 = [], i2 = [], s2 = [], a2 = [];
              for (e4 = 0, t3 = this.source.length; e4 < t3; e4++)
                n2 = this.source.charAt(e4), o2[e4] = n2, i2[e4] = n2, s2[e4] = n2, a2[e4] = n2, "\\" === n2 && e4 + 1 < t3 && ("A" === (r2 = this.source.charAt(e4 + 1)) ? (o2[e4 + 1] = "\uFFFF", i2[e4 + 1] = "\uFFFF", s2[e4 + 1] = "A", a2[e4 + 1] = "A") : "G" === r2 ? (o2[e4 + 1] = "\uFFFF", i2[e4 + 1] = "G", s2[e4 + 1] = "\uFFFF", a2[e4 + 1] = "G") : (o2[e4 + 1] = r2, i2[e4 + 1] = r2, s2[e4 + 1] = r2, a2[e4 + 1] = r2), e4++);
              return { A0_G0: o2.join(""), A0_G1: i2.join(""), A1_G0: s2.join(""), A1_G1: a2.join("") };
            }, e3.prototype.resolveAnchors = function(e4, t3) {
              return this.hasAnchor && this._anchorCache ? e4 ? t3 ? this._anchorCache.A1_G1 : this._anchorCache.A1_G0 : t3 ? this._anchorCache.A0_G1 : this._anchorCache.A0_G0 : this.source;
            }, e3;
          }();
          t2.RegExpSource = h;
          var p = function() {
            function e3() {
              this._items = [], this._hasAnchors = false, this._cached = null, this._anchorCache = { A0_G0: null, A0_G1: null, A1_G0: null, A1_G1: null };
            }
            return e3.prototype.dispose = function() {
              this._disposeCaches();
            }, e3.prototype._disposeCaches = function() {
              this._cached && (this._cached.dispose(), this._cached = null), this._anchorCache.A0_G0 && (this._anchorCache.A0_G0.dispose(), this._anchorCache.A0_G0 = null), this._anchorCache.A0_G1 && (this._anchorCache.A0_G1.dispose(), this._anchorCache.A0_G1 = null), this._anchorCache.A1_G0 && (this._anchorCache.A1_G0.dispose(), this._anchorCache.A1_G0 = null), this._anchorCache.A1_G1 && (this._anchorCache.A1_G1.dispose(), this._anchorCache.A1_G1 = null);
            }, e3.prototype.push = function(e4) {
              this._items.push(e4), this._hasAnchors = this._hasAnchors || e4.hasAnchor;
            }, e3.prototype.unshift = function(e4) {
              this._items.unshift(e4), this._hasAnchors = this._hasAnchors || e4.hasAnchor;
            }, e3.prototype.length = function() {
              return this._items.length;
            }, e3.prototype.setSource = function(e4, t3) {
              this._items[e4].source !== t3 && (this._disposeCaches(), this._items[e4].setSource(t3));
            }, e3.prototype.compile = function(e4) {
              if (!this._cached) {
                var t3 = this._items.map(function(e5) {
                  return e5.source;
                });
                this._cached = new c(e4, t3, this._items.map(function(e5) {
                  return e5.ruleId;
                }));
              }
              return this._cached;
            }, e3.prototype.compileAG = function(e4, t3, n2) {
              return this._hasAnchors ? t3 ? n2 ? (this._anchorCache.A1_G1 || (this._anchorCache.A1_G1 = this._resolveAnchors(e4, t3, n2)), this._anchorCache.A1_G1) : (this._anchorCache.A1_G0 || (this._anchorCache.A1_G0 = this._resolveAnchors(e4, t3, n2)), this._anchorCache.A1_G0) : n2 ? (this._anchorCache.A0_G1 || (this._anchorCache.A0_G1 = this._resolveAnchors(e4, t3, n2)), this._anchorCache.A0_G1) : (this._anchorCache.A0_G0 || (this._anchorCache.A0_G0 = this._resolveAnchors(e4, t3, n2)), this._anchorCache.A0_G0) : this.compile(e4);
            }, e3.prototype._resolveAnchors = function(e4, t3, n2) {
              var r2 = this._items.map(function(e5) {
                return e5.resolveAnchors(t3, n2);
              });
              return new c(e4, r2, this._items.map(function(e5) {
                return e5.ruleId;
              }));
            }, e3;
          }();
          t2.RegExpSourceList = p;
          var d = function(e3) {
            function t3(t4, n2, r2, o2, i2) {
              var s2 = e3.call(this, t4, n2, r2, null) || this;
              return s2._match = new h(o2, s2.id), s2.captures = i2, s2._cachedCompiledPatterns = null, s2;
            }
            return o(t3, e3), t3.prototype.dispose = function() {
              this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
            }, Object.defineProperty(t3.prototype, "debugMatchRegExp", { get: function() {
              return "" + this._match.source;
            }, enumerable: false, configurable: true }), t3.prototype.collectPatternsRecursive = function(e4, t4, n2) {
              t4.push(this._match);
            }, t3.prototype.compile = function(e4, t4) {
              return this._getCachedCompiledPatterns(e4).compile(e4);
            }, t3.prototype.compileAG = function(e4, t4, n2, r2) {
              return this._getCachedCompiledPatterns(e4).compileAG(e4, n2, r2);
            }, t3.prototype._getCachedCompiledPatterns = function(e4) {
              return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new p(), this.collectPatternsRecursive(e4, this._cachedCompiledPatterns, true)), this._cachedCompiledPatterns;
            }, t3;
          }(u);
          t2.MatchRule = d;
          var f = function(e3) {
            function t3(t4, n2, r2, o2, i2) {
              var s2 = e3.call(this, t4, n2, r2, o2) || this;
              return s2.patterns = i2.patterns, s2.hasMissingPatterns = i2.hasMissingPatterns, s2._cachedCompiledPatterns = null, s2;
            }
            return o(t3, e3), t3.prototype.dispose = function() {
              this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
            }, t3.prototype.collectPatternsRecursive = function(e4, t4, n2) {
              var r2, o2;
              for (r2 = 0, o2 = this.patterns.length; r2 < o2; r2++)
                e4.getRule(this.patterns[r2]).collectPatternsRecursive(e4, t4, false);
            }, t3.prototype.compile = function(e4, t4) {
              return this._getCachedCompiledPatterns(e4).compile(e4);
            }, t3.prototype.compileAG = function(e4, t4, n2, r2) {
              return this._getCachedCompiledPatterns(e4).compileAG(e4, n2, r2);
            }, t3.prototype._getCachedCompiledPatterns = function(e4) {
              return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new p(), this.collectPatternsRecursive(e4, this._cachedCompiledPatterns, true)), this._cachedCompiledPatterns;
            }, t3;
          }(u);
          t2.IncludeOnlyRule = f;
          var g = function(e3) {
            function t3(t4, n2, r2, o2, i2, s2, a2, c2, u2, l2) {
              var p2 = e3.call(this, t4, n2, r2, o2) || this;
              return p2._begin = new h(i2, p2.id), p2.beginCaptures = s2, p2._end = new h(a2 || "\uFFFF", -1), p2.endHasBackReferences = p2._end.hasBackReferences, p2.endCaptures = c2, p2.applyEndPatternLast = u2 || false, p2.patterns = l2.patterns, p2.hasMissingPatterns = l2.hasMissingPatterns, p2._cachedCompiledPatterns = null, p2;
            }
            return o(t3, e3), t3.prototype.dispose = function() {
              this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
            }, Object.defineProperty(t3.prototype, "debugBeginRegExp", { get: function() {
              return "" + this._begin.source;
            }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "debugEndRegExp", { get: function() {
              return "" + this._end.source;
            }, enumerable: false, configurable: true }), t3.prototype.getEndWithResolvedBackReferences = function(e4, t4) {
              return this._end.resolveBackReferences(e4, t4);
            }, t3.prototype.collectPatternsRecursive = function(e4, t4, n2) {
              if (n2) {
                var r2, o2 = void 0;
                for (o2 = 0, r2 = this.patterns.length; o2 < r2; o2++)
                  e4.getRule(this.patterns[o2]).collectPatternsRecursive(e4, t4, false);
              } else
                t4.push(this._begin);
            }, t3.prototype.compile = function(e4, t4) {
              return this._getCachedCompiledPatterns(e4, t4).compile(e4);
            }, t3.prototype.compileAG = function(e4, t4, n2, r2) {
              return this._getCachedCompiledPatterns(e4, t4).compileAG(e4, n2, r2);
            }, t3.prototype._getCachedCompiledPatterns = function(e4, t4) {
              return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new p(), this.collectPatternsRecursive(e4, this._cachedCompiledPatterns, true), this.applyEndPatternLast ? this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end) : this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end)), this._end.hasBackReferences && (this.applyEndPatternLast ? this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, t4) : this._cachedCompiledPatterns.setSource(0, t4)), this._cachedCompiledPatterns;
            }, t3;
          }(u);
          t2.BeginEndRule = g;
          var m = function(e3) {
            function t3(t4, n2, r2, o2, i2, s2, a2, c2, u2) {
              var l2 = e3.call(this, t4, n2, r2, o2) || this;
              return l2._begin = new h(i2, l2.id), l2.beginCaptures = s2, l2.whileCaptures = c2, l2._while = new h(a2, -2), l2.whileHasBackReferences = l2._while.hasBackReferences, l2.patterns = u2.patterns, l2.hasMissingPatterns = u2.hasMissingPatterns, l2._cachedCompiledPatterns = null, l2._cachedCompiledWhilePatterns = null, l2;
            }
            return o(t3, e3), t3.prototype.dispose = function() {
              this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null), this._cachedCompiledWhilePatterns && (this._cachedCompiledWhilePatterns.dispose(), this._cachedCompiledWhilePatterns = null);
            }, Object.defineProperty(t3.prototype, "debugBeginRegExp", { get: function() {
              return "" + this._begin.source;
            }, enumerable: false, configurable: true }), Object.defineProperty(t3.prototype, "debugWhileRegExp", { get: function() {
              return "" + this._while.source;
            }, enumerable: false, configurable: true }), t3.prototype.getWhileWithResolvedBackReferences = function(e4, t4) {
              return this._while.resolveBackReferences(e4, t4);
            }, t3.prototype.collectPatternsRecursive = function(e4, t4, n2) {
              if (n2) {
                var r2, o2 = void 0;
                for (o2 = 0, r2 = this.patterns.length; o2 < r2; o2++)
                  e4.getRule(this.patterns[o2]).collectPatternsRecursive(e4, t4, false);
              } else
                t4.push(this._begin);
            }, t3.prototype.compile = function(e4, t4) {
              return this._getCachedCompiledPatterns(e4).compile(e4);
            }, t3.prototype.compileAG = function(e4, t4, n2, r2) {
              return this._getCachedCompiledPatterns(e4).compileAG(e4, n2, r2);
            }, t3.prototype._getCachedCompiledPatterns = function(e4) {
              return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new p(), this.collectPatternsRecursive(e4, this._cachedCompiledPatterns, true)), this._cachedCompiledPatterns;
            }, t3.prototype.compileWhile = function(e4, t4) {
              return this._getCachedCompiledWhilePatterns(e4, t4).compile(e4);
            }, t3.prototype.compileWhileAG = function(e4, t4, n2, r2) {
              return this._getCachedCompiledWhilePatterns(e4, t4).compileAG(e4, n2, r2);
            }, t3.prototype._getCachedCompiledWhilePatterns = function(e4, t4) {
              return this._cachedCompiledWhilePatterns || (this._cachedCompiledWhilePatterns = new p(), this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while)), this._while.hasBackReferences && this._cachedCompiledWhilePatterns.setSource(0, t4 || "\uFFFF"), this._cachedCompiledWhilePatterns;
            }, t3;
          }(u);
          t2.BeginWhileRule = m;
          var _ = function() {
            function e3() {
            }
            return e3.createCaptureRule = function(e4, t3, n2, r2, o2) {
              return e4.registerRule(function(e5) {
                return new l(t3, e5, n2, r2, o2);
              });
            }, e3.getCompiledRuleId = function(t3, n2, r2) {
              return t3.id || n2.registerRule(function(o2) {
                if (t3.id = o2, t3.match)
                  return new d(t3.$vscodeTextmateLocation, t3.id, t3.name, t3.match, e3._compileCaptures(t3.captures, n2, r2));
                if (void 0 === t3.begin) {
                  t3.repository && (r2 = i.mergeObjects({}, r2, t3.repository));
                  var s2 = t3.patterns;
                  return void 0 === s2 && t3.include && (s2 = [{ include: t3.include }]), new f(t3.$vscodeTextmateLocation, t3.id, t3.name, t3.contentName, e3._compilePatterns(s2, n2, r2));
                }
                return t3.while ? new m(t3.$vscodeTextmateLocation, t3.id, t3.name, t3.contentName, t3.begin, e3._compileCaptures(t3.beginCaptures || t3.captures, n2, r2), t3.while, e3._compileCaptures(t3.whileCaptures || t3.captures, n2, r2), e3._compilePatterns(t3.patterns, n2, r2)) : new g(t3.$vscodeTextmateLocation, t3.id, t3.name, t3.contentName, t3.begin, e3._compileCaptures(t3.beginCaptures || t3.captures, n2, r2), t3.end, e3._compileCaptures(t3.endCaptures || t3.captures, n2, r2), t3.applyEndPatternLast, e3._compilePatterns(t3.patterns, n2, r2));
              }), t3.id;
            }, e3._compileCaptures = function(t3, n2, r2) {
              var o2 = [];
              if (t3) {
                var i2 = 0;
                for (var s2 in t3)
                  "$vscodeTextmateLocation" !== s2 && (c2 = parseInt(s2, 10)) > i2 && (i2 = c2);
                for (var a2 = 0; a2 <= i2; a2++)
                  o2[a2] = null;
                for (var s2 in t3)
                  if ("$vscodeTextmateLocation" !== s2) {
                    var c2 = parseInt(s2, 10), u2 = 0;
                    t3[s2].patterns && (u2 = e3.getCompiledRuleId(t3[s2], n2, r2)), o2[c2] = e3.createCaptureRule(n2, t3[s2].$vscodeTextmateLocation, t3[s2].name, t3[s2].contentName, u2);
                  }
              }
              return o2;
            }, e3._compilePatterns = function(t3, n2, r2) {
              var o2 = [];
              if (t3)
                for (var i2 = 0, s2 = t3.length; i2 < s2; i2++) {
                  var a2 = t3[i2], c2 = -1;
                  if (a2.include)
                    if ("#" === a2.include.charAt(0)) {
                      var u2 = r2[a2.include.substr(1)];
                      u2 && (c2 = e3.getCompiledRuleId(u2, n2, r2));
                    } else if ("$base" === a2.include || "$self" === a2.include)
                      c2 = e3.getCompiledRuleId(r2[a2.include], n2, r2);
                    else {
                      var l2 = null, h2 = null, p2 = a2.include.indexOf("#");
                      p2 >= 0 ? (l2 = a2.include.substring(0, p2), h2 = a2.include.substring(p2 + 1)) : l2 = a2.include;
                      var d2 = n2.getExternalGrammar(l2, r2);
                      if (d2)
                        if (h2) {
                          var _2 = d2.repository[h2];
                          _2 && (c2 = e3.getCompiledRuleId(_2, n2, d2.repository));
                        } else
                          c2 = e3.getCompiledRuleId(d2.repository.$self, n2, d2.repository);
                    }
                  else
                    c2 = e3.getCompiledRuleId(a2, n2, r2);
                  if (-1 !== c2) {
                    var y = n2.getRule(c2), v = false;
                    if ((y instanceof f || y instanceof g || y instanceof m) && y.hasMissingPatterns && 0 === y.patterns.length && (v = true), v)
                      continue;
                    o2.push(c2);
                  }
                }
              return { patterns: o2, hasMissingPatterns: (t3 ? t3.length : 0) !== o2.length };
            }, e3;
          }();
          t2.RuleFactory = _;
        }, 583: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true }), t2.ThemeTrieElement = t2.ThemeTrieElementRule = t2.strArrCmp = t2.strcmp = t2.Theme = t2.ColorMap = t2.parseTheme = t2.ParsedThemeRule = void 0;
          var n = function(e3, t3, n2, r2, o2, i2) {
            this.scope = e3, this.parentScopes = t3, this.index = n2, this.fontStyle = r2, this.foreground = o2, this.background = i2;
          };
          function r(e3) {
            return !!(/^#[0-9a-f]{6}$/i.test(e3) || /^#[0-9a-f]{8}$/i.test(e3) || /^#[0-9a-f]{3}$/i.test(e3) || /^#[0-9a-f]{4}$/i.test(e3));
          }
          function o(e3) {
            if (!e3)
              return [];
            if (!e3.settings || !Array.isArray(e3.settings))
              return [];
            for (var t3 = e3.settings, o2 = [], i2 = 0, s2 = 0, a2 = t3.length; s2 < a2; s2++) {
              var c2 = t3[s2];
              if (c2.settings) {
                var u2 = void 0;
                u2 = "string" == typeof c2.scope ? c2.scope.replace(/^[,]+/, "").replace(/[,]+$/, "").split(",") : Array.isArray(c2.scope) ? c2.scope : [""];
                var l2 = -1;
                if ("string" == typeof c2.settings.fontStyle) {
                  l2 = 0;
                  for (var h2 = 0, p = (g = c2.settings.fontStyle.split(" ")).length; h2 < p; h2++)
                    switch (g[h2]) {
                      case "italic":
                        l2 |= 1;
                        break;
                      case "bold":
                        l2 |= 2;
                        break;
                      case "underline":
                        l2 |= 4;
                        break;
                      case "strikethrough":
                        l2 |= 8;
                    }
                }
                var d = null;
                "string" == typeof c2.settings.foreground && r(c2.settings.foreground) && (d = c2.settings.foreground);
                var f = null;
                for ("string" == typeof c2.settings.background && r(c2.settings.background) && (f = c2.settings.background), h2 = 0, p = u2.length; h2 < p; h2++) {
                  var g, m = (g = u2[h2].trim().split(" "))[g.length - 1], _ = null;
                  g.length > 1 && (_ = g.slice(0, g.length - 1)).reverse(), o2[i2++] = new n(m, _, s2, l2, d, f);
                }
              }
            }
            return o2;
          }
          function i(e3, t3) {
            e3.sort(function(e4, t4) {
              var n3 = c(e4.scope, t4.scope);
              return 0 !== n3 || 0 !== (n3 = u(e4.parentScopes, t4.parentScopes)) ? n3 : e4.index - t4.index;
            });
            for (var n2 = 0, r2 = "#000000", o2 = "#ffffff"; e3.length >= 1 && "" === e3[0].scope; ) {
              var i2 = e3.shift();
              -1 !== i2.fontStyle && (n2 = i2.fontStyle), null !== i2.foreground && (r2 = i2.foreground), null !== i2.background && (o2 = i2.background);
            }
            for (var p = new s(t3), d = new l(0, null, n2, p.getId(r2), p.getId(o2)), f = new h(new l(0, null, -1, 0, 0), []), g = 0, m = e3.length; g < m; g++) {
              var _ = e3[g];
              f.insert(0, _.scope, _.parentScopes, _.fontStyle, p.getId(_.foreground), p.getId(_.background));
            }
            return new a(p, d, f);
          }
          t2.ParsedThemeRule = n, t2.parseTheme = o;
          var s = function() {
            function e3(e4) {
              if (this._lastColorId = 0, this._id2color = [], this._color2id = /* @__PURE__ */ Object.create(null), Array.isArray(e4)) {
                this._isFrozen = true;
                for (var t3 = 0, n2 = e4.length; t3 < n2; t3++)
                  this._color2id[e4[t3]] = t3, this._id2color[t3] = e4[t3];
              } else
                this._isFrozen = false;
            }
            return e3.prototype.getId = function(e4) {
              if (null === e4)
                return 0;
              e4 = e4.toUpperCase();
              var t3 = this._color2id[e4];
              if (t3)
                return t3;
              if (this._isFrozen)
                throw new Error("Missing color in color map - " + e4);
              return t3 = ++this._lastColorId, this._color2id[e4] = t3, this._id2color[t3] = e4, t3;
            }, e3.prototype.getColorMap = function() {
              return this._id2color.slice(0);
            }, e3;
          }();
          t2.ColorMap = s;
          var a = function() {
            function e3(e4, t3, n2) {
              this._colorMap = e4, this._root = n2, this._defaults = t3, this._cache = {};
            }
            return e3.createFromRawTheme = function(e4, t3) {
              return this.createFromParsedTheme(o(e4), t3);
            }, e3.createFromParsedTheme = function(e4, t3) {
              return i(e4, t3);
            }, e3.prototype.getColorMap = function() {
              return this._colorMap.getColorMap();
            }, e3.prototype.getDefaults = function() {
              return this._defaults;
            }, e3.prototype.match = function(e4) {
              return this._cache.hasOwnProperty(e4) || (this._cache[e4] = this._root.match(e4)), this._cache[e4];
            }, e3;
          }();
          function c(e3, t3) {
            return e3 < t3 ? -1 : e3 > t3 ? 1 : 0;
          }
          function u(e3, t3) {
            if (null === e3 && null === t3)
              return 0;
            if (!e3)
              return -1;
            if (!t3)
              return 1;
            var n2 = e3.length, r2 = t3.length;
            if (n2 === r2) {
              for (var o2 = 0; o2 < n2; o2++) {
                var i2 = c(e3[o2], t3[o2]);
                if (0 !== i2)
                  return i2;
              }
              return 0;
            }
            return n2 - r2;
          }
          t2.Theme = a, t2.strcmp = c, t2.strArrCmp = u;
          var l = function() {
            function e3(e4, t3, n2, r2, o2) {
              this.scopeDepth = e4, this.parentScopes = t3, this.fontStyle = n2, this.foreground = r2, this.background = o2;
            }
            return e3.prototype.clone = function() {
              return new e3(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background);
            }, e3.cloneArr = function(e4) {
              for (var t3 = [], n2 = 0, r2 = e4.length; n2 < r2; n2++)
                t3[n2] = e4[n2].clone();
              return t3;
            }, e3.prototype.acceptOverwrite = function(e4, t3, n2, r2) {
              this.scopeDepth > e4 ? console.log("how did this happen?") : this.scopeDepth = e4, -1 !== t3 && (this.fontStyle = t3), 0 !== n2 && (this.foreground = n2), 0 !== r2 && (this.background = r2);
            }, e3;
          }();
          t2.ThemeTrieElementRule = l;
          var h = function() {
            function e3(e4, t3, n2) {
              void 0 === t3 && (t3 = []), void 0 === n2 && (n2 = {}), this._mainRule = e4, this._rulesWithParentScopes = t3, this._children = n2;
            }
            return e3._sortBySpecificity = function(e4) {
              return 1 === e4.length || e4.sort(this._cmpBySpecificity), e4;
            }, e3._cmpBySpecificity = function(e4, t3) {
              if (e4.scopeDepth === t3.scopeDepth) {
                var n2 = e4.parentScopes, r2 = t3.parentScopes, o2 = null === n2 ? 0 : n2.length, i2 = null === r2 ? 0 : r2.length;
                if (o2 === i2)
                  for (var s2 = 0; s2 < o2; s2++) {
                    var a2 = n2[s2].length, c2 = r2[s2].length;
                    if (a2 !== c2)
                      return c2 - a2;
                  }
                return i2 - o2;
              }
              return t3.scopeDepth - e4.scopeDepth;
            }, e3.prototype.match = function(t3) {
              if ("" === t3)
                return e3._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes));
              var n2, r2, o2 = t3.indexOf(".");
              return -1 === o2 ? (n2 = t3, r2 = "") : (n2 = t3.substring(0, o2), r2 = t3.substring(o2 + 1)), this._children.hasOwnProperty(n2) ? this._children[n2].match(r2) : e3._sortBySpecificity([].concat(this._mainRule).concat(this._rulesWithParentScopes));
            }, e3.prototype.insert = function(t3, n2, r2, o2, i2, s2) {
              if ("" !== n2) {
                var a2, c2, u2, h2 = n2.indexOf(".");
                -1 === h2 ? (a2 = n2, c2 = "") : (a2 = n2.substring(0, h2), c2 = n2.substring(h2 + 1)), this._children.hasOwnProperty(a2) ? u2 = this._children[a2] : (u2 = new e3(this._mainRule.clone(), l.cloneArr(this._rulesWithParentScopes)), this._children[a2] = u2), u2.insert(t3 + 1, c2, r2, o2, i2, s2);
              } else
                this._doInsertHere(t3, r2, o2, i2, s2);
            }, e3.prototype._doInsertHere = function(e4, t3, n2, r2, o2) {
              if (null !== t3) {
                for (var i2 = 0, s2 = this._rulesWithParentScopes.length; i2 < s2; i2++) {
                  var a2 = this._rulesWithParentScopes[i2];
                  if (0 === u(a2.parentScopes, t3))
                    return void a2.acceptOverwrite(e4, n2, r2, o2);
                }
                -1 === n2 && (n2 = this._mainRule.fontStyle), 0 === r2 && (r2 = this._mainRule.foreground), 0 === o2 && (o2 = this._mainRule.background), this._rulesWithParentScopes.push(new l(e4, t3, n2, r2, o2));
              } else
                this._mainRule.acceptOverwrite(e4, n2, r2, o2);
            }, e3;
          }();
          t2.ThemeTrieElement = h;
        }, 42: (e2, t2) => {
          Object.defineProperty(t2, "__esModule", { value: true });
        }, 878: (e2, t2) => {
          function n(e3) {
            return Array.isArray(e3) ? function(e4) {
              for (var t3 = [], r2 = 0, o2 = e4.length; r2 < o2; r2++)
                t3[r2] = n(e4[r2]);
              return t3;
            }(e3) : "object" == typeof e3 ? function(e4) {
              var t3 = {};
              for (var r2 in e4)
                t3[r2] = n(e4[r2]);
              return t3;
            }(e3) : e3;
          }
          Object.defineProperty(t2, "__esModule", { value: true }), t2.RegexSource = t2.basename = t2.mergeObjects = t2.clone = void 0, t2.clone = function(e3) {
            return n(e3);
          }, t2.mergeObjects = function(e3) {
            for (var t3 = [], n2 = 1; n2 < arguments.length; n2++)
              t3[n2 - 1] = arguments[n2];
            return t3.forEach(function(t4) {
              for (var n3 in t4)
                e3[n3] = t4[n3];
            }), e3;
          }, t2.basename = function e3(t3) {
            var n2 = ~t3.lastIndexOf("/") || ~t3.lastIndexOf("\\");
            return 0 === n2 ? t3 : ~n2 == t3.length - 1 ? e3(t3.substring(0, t3.length - 1)) : t3.substr(1 + ~n2);
          };
          var r = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g, o = function() {
            function e3() {
            }
            return e3.hasCaptures = function(e4) {
              return null !== e4 && (r.lastIndex = 0, r.test(e4));
            }, e3.replaceCaptures = function(e4, t3, n2) {
              return e4.replace(r, function(e5, r2, o2, i) {
                var s = n2[parseInt(r2 || o2, 10)];
                if (!s)
                  return e5;
                for (var a = t3.substring(s.start, s.end); "." === a[0]; )
                  a = a.substring(1);
                switch (i) {
                  case "downcase":
                    return a.toLowerCase();
                  case "upcase":
                    return a.toUpperCase();
                  default:
                    return a;
                }
              });
            }, e3;
          }();
          t2.RegexSource = o;
        } }, t = {};
        return function n(r) {
          var o = t[r];
          if (void 0 !== o)
            return o.exports;
          var i = t[r] = { exports: {} };
          return e[r].call(i.exports, i, i.exports, n), i.exports;
        }(787);
      })();
    });
  }
});

// node_modules/.pnpm/shiki@0.11.1/node_modules/shiki/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/shiki@0.11.1/node_modules/shiki/dist/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var vscodeOniguruma = __require("vscode-oniguruma");
    var vscodeTextmate = require_main();
    var themes = [
      "css-variables",
      "dark-plus",
      "dracula-soft",
      "dracula",
      "github-dark-dimmed",
      "github-dark",
      "github-light",
      "hc_light",
      "light-plus",
      "material-darker",
      "material-default",
      "material-lighter",
      "material-ocean",
      "material-palenight",
      "min-dark",
      "min-light",
      "monokai",
      "nord",
      "one-dark-pro",
      "poimandres",
      "rose-pine-dawn",
      "rose-pine-moon",
      "rose-pine",
      "slack-dark",
      "slack-ochin",
      "solarized-dark",
      "solarized-light",
      "vitesse-dark",
      "vitesse-light"
    ];
    var languages = [
      {
        id: "abap",
        scopeName: "source.abap",
        path: "abap.tmLanguage.json",
        samplePath: "abap.sample"
      },
      {
        id: "actionscript-3",
        scopeName: "source.actionscript.3",
        path: "actionscript-3.tmLanguage.json",
        samplePath: "actionscript-3.sample"
      },
      {
        id: "ada",
        scopeName: "source.ada",
        path: "ada.tmLanguage.json",
        samplePath: "ada.sample"
      },
      {
        id: "apache",
        scopeName: "source.apacheconf",
        path: "apache.tmLanguage.json"
      },
      {
        id: "apex",
        scopeName: "source.apex",
        path: "apex.tmLanguage.json",
        samplePath: "apex.sample"
      },
      {
        id: "apl",
        scopeName: "source.apl",
        path: "apl.tmLanguage.json",
        embeddedLangs: ["html", "xml", "css", "javascript", "json"]
      },
      {
        id: "applescript",
        scopeName: "source.applescript",
        path: "applescript.tmLanguage.json",
        samplePath: "applescript.sample"
      },
      {
        id: "asm",
        scopeName: "source.asm.x86_64",
        path: "asm.tmLanguage.json",
        samplePath: "asm.sample"
      },
      {
        id: "astro",
        scopeName: "source.astro",
        path: "astro.tmLanguage.json",
        samplePath: "astro.sample",
        embeddedLangs: ["json", "javascript", "typescript", "tsx", "css", "less", "sass", "scss", "stylus"]
      },
      {
        id: "awk",
        scopeName: "source.awk",
        path: "awk.tmLanguage.json",
        samplePath: "awk.sample"
      },
      {
        id: "ballerina",
        scopeName: "source.ballerina",
        path: "ballerina.tmLanguage.json",
        samplePath: "ballerina.sample"
      },
      {
        id: "bat",
        scopeName: "source.batchfile",
        path: "bat.tmLanguage.json",
        samplePath: "bat.sample",
        aliases: ["batch"]
      },
      {
        id: "berry",
        scopeName: "source.berry",
        path: "berry.tmLanguage.json",
        samplePath: "berry.sample",
        aliases: ["be"]
      },
      {
        id: "bibtex",
        scopeName: "text.bibtex",
        path: "bibtex.tmLanguage.json"
      },
      {
        id: "bicep",
        scopeName: "source.bicep",
        path: "bicep.tmLanguage.json",
        samplePath: "bicep.sample"
      },
      {
        id: "blade",
        scopeName: "text.html.php.blade",
        path: "blade.tmLanguage.json",
        samplePath: "blade.sample",
        embeddedLangs: ["html", "xml", "sql", "javascript", "json", "css"]
      },
      {
        id: "c",
        scopeName: "source.c",
        path: "c.tmLanguage.json",
        samplePath: "c.sample"
      },
      {
        id: "cadence",
        scopeName: "source.cadence",
        path: "cadence.tmLanguage.json",
        samplePath: "cadence.sample",
        aliases: ["cdc"]
      },
      {
        id: "clarity",
        scopeName: "source.clar",
        path: "clarity.tmLanguage.json",
        samplePath: "clarity.sample"
      },
      {
        id: "clojure",
        scopeName: "source.clojure",
        path: "clojure.tmLanguage.json",
        samplePath: "clojure.sample",
        aliases: ["clj"]
      },
      {
        id: "cmake",
        scopeName: "source.cmake",
        path: "cmake.tmLanguage.json",
        samplePath: "cmake.sample"
      },
      {
        id: "cobol",
        scopeName: "source.cobol",
        path: "cobol.tmLanguage.json",
        samplePath: "cobol.sample",
        embeddedLangs: ["sql", "html", "java"]
      },
      {
        id: "codeql",
        scopeName: "source.ql",
        path: "codeql.tmLanguage.json",
        samplePath: "codeql.sample",
        aliases: ["ql"]
      },
      {
        id: "coffee",
        scopeName: "source.coffee",
        path: "coffee.tmLanguage.json",
        samplePath: "coffee.sample",
        embeddedLangs: ["javascript"]
      },
      {
        id: "cpp",
        scopeName: "source.cpp",
        path: "cpp.tmLanguage.json",
        samplePath: "cpp.sample",
        embeddedLangs: ["glsl", "sql"]
      },
      {
        id: "crystal",
        scopeName: "source.crystal",
        path: "crystal.tmLanguage.json",
        samplePath: "crystal.sample",
        embeddedLangs: ["html", "sql", "css", "c", "javascript", "shellscript"]
      },
      {
        id: "csharp",
        scopeName: "source.cs",
        path: "csharp.tmLanguage.json",
        samplePath: "csharp.sample",
        aliases: ["c#"]
      },
      {
        id: "css",
        scopeName: "source.css",
        path: "css.tmLanguage.json",
        samplePath: "css.sample"
      },
      {
        id: "cue",
        scopeName: "source.cue",
        path: "cue.tmLanguage.json",
        samplePath: "cue.sample"
      },
      {
        id: "d",
        scopeName: "source.d",
        path: "d.tmLanguage.json",
        samplePath: "d.sample"
      },
      {
        id: "dart",
        scopeName: "source.dart",
        path: "dart.tmLanguage.json",
        samplePath: "dart.sample"
      },
      {
        id: "diff",
        scopeName: "source.diff",
        path: "diff.tmLanguage.json",
        samplePath: "diff.sample"
      },
      {
        id: "docker",
        scopeName: "source.dockerfile",
        path: "docker.tmLanguage.json",
        samplePath: "docker.sample"
      },
      {
        id: "dream-maker",
        scopeName: "source.dm",
        path: "dream-maker.tmLanguage.json"
      },
      {
        id: "elixir",
        scopeName: "source.elixir",
        path: "elixir.tmLanguage.json",
        samplePath: "elixir.sample",
        embeddedLangs: ["html"]
      },
      {
        id: "elm",
        scopeName: "source.elm",
        path: "elm.tmLanguage.json",
        samplePath: "elm.sample",
        embeddedLangs: ["glsl"]
      },
      {
        id: "erb",
        scopeName: "text.html.erb",
        path: "erb.tmLanguage.json",
        samplePath: "erb.sample",
        embeddedLangs: ["html", "ruby"]
      },
      {
        id: "erlang",
        scopeName: "source.erlang",
        path: "erlang.tmLanguage.json",
        samplePath: "erlang.sample"
      },
      {
        id: "fish",
        scopeName: "source.fish",
        path: "fish.tmLanguage.json",
        samplePath: "fish.sample"
      },
      {
        id: "fsharp",
        scopeName: "source.fsharp",
        path: "fsharp.tmLanguage.json",
        samplePath: "fsharp.sample",
        aliases: ["f#"],
        embeddedLangs: ["markdown"]
      },
      {
        id: "gherkin",
        scopeName: "text.gherkin.feature",
        path: "gherkin.tmLanguage.json"
      },
      {
        id: "git-commit",
        scopeName: "text.git-commit",
        path: "git-commit.tmLanguage.json",
        embeddedLangs: ["diff"]
      },
      {
        id: "git-rebase",
        scopeName: "text.git-rebase",
        path: "git-rebase.tmLanguage.json",
        embeddedLangs: ["shellscript"]
      },
      {
        id: "glsl",
        scopeName: "source.glsl",
        path: "glsl.tmLanguage.json",
        samplePath: "glsl.sample",
        embeddedLangs: ["c"]
      },
      {
        id: "gnuplot",
        scopeName: "source.gnuplot",
        path: "gnuplot.tmLanguage.json"
      },
      {
        id: "go",
        scopeName: "source.go",
        path: "go.tmLanguage.json",
        samplePath: "go.sample"
      },
      {
        id: "graphql",
        scopeName: "source.graphql",
        path: "graphql.tmLanguage.json",
        embeddedLangs: ["javascript", "typescript", "jsx", "tsx"]
      },
      {
        id: "groovy",
        scopeName: "source.groovy",
        path: "groovy.tmLanguage.json"
      },
      {
        id: "hack",
        scopeName: "source.hack",
        path: "hack.tmLanguage.json",
        embeddedLangs: ["html", "sql"]
      },
      {
        id: "haml",
        scopeName: "text.haml",
        path: "haml.tmLanguage.json",
        embeddedLangs: ["ruby", "javascript", "sass", "coffee", "markdown", "css"]
      },
      {
        id: "handlebars",
        scopeName: "text.html.handlebars",
        path: "handlebars.tmLanguage.json",
        aliases: ["hbs"],
        embeddedLangs: ["html", "css", "javascript", "yaml"]
      },
      {
        id: "haskell",
        scopeName: "source.haskell",
        path: "haskell.tmLanguage.json"
      },
      {
        id: "hcl",
        scopeName: "source.hcl",
        path: "hcl.tmLanguage.json"
      },
      {
        id: "hlsl",
        scopeName: "source.hlsl",
        path: "hlsl.tmLanguage.json"
      },
      {
        id: "html",
        scopeName: "text.html.basic",
        path: "html.tmLanguage.json",
        samplePath: "html.sample",
        embeddedLangs: ["javascript", "css"]
      },
      {
        id: "ini",
        scopeName: "source.ini",
        path: "ini.tmLanguage.json"
      },
      {
        id: "java",
        scopeName: "source.java",
        path: "java.tmLanguage.json",
        samplePath: "java.sample"
      },
      {
        id: "javascript",
        scopeName: "source.js",
        path: "javascript.tmLanguage.json",
        samplePath: "javascript.sample",
        aliases: ["js"]
      },
      {
        id: "jinja-html",
        scopeName: "text.html.jinja",
        path: "jinja-html.tmLanguage.json",
        embeddedLangs: ["html"]
      },
      {
        id: "json",
        scopeName: "source.json",
        path: "json.tmLanguage.json"
      },
      {
        id: "jsonc",
        scopeName: "source.json.comments",
        path: "jsonc.tmLanguage.json"
      },
      {
        id: "jsonnet",
        scopeName: "source.jsonnet",
        path: "jsonnet.tmLanguage.json"
      },
      {
        id: "jssm",
        scopeName: "source.jssm",
        path: "jssm.tmLanguage.json",
        samplePath: "jssm.sample",
        aliases: ["fsl"]
      },
      {
        id: "jsx",
        scopeName: "source.js.jsx",
        path: "jsx.tmLanguage.json"
      },
      {
        id: "julia",
        scopeName: "source.julia",
        path: "julia.tmLanguage.json",
        embeddedLangs: ["cpp", "python", "javascript", "r", "sql"]
      },
      {
        id: "kotlin",
        scopeName: "source.kotlin",
        path: "kotlin.tmLanguage.json"
      },
      {
        id: "latex",
        scopeName: "text.tex.latex",
        path: "latex.tmLanguage.json",
        embeddedLangs: ["tex", "css", "haskell", "html", "xml", "java", "lua", "julia", "ruby", "javascript", "typescript", "python", "yaml", "scala", "gnuplot"]
      },
      {
        id: "less",
        scopeName: "source.css.less",
        path: "less.tmLanguage.json",
        embeddedLangs: ["css"]
      },
      {
        id: "liquid",
        scopeName: "text.html.liquid",
        path: "liquid.tmLanguage.json",
        samplePath: "liquid.sample",
        embeddedLangs: ["html", "css", "json", "javascript"]
      },
      {
        id: "lisp",
        scopeName: "source.lisp",
        path: "lisp.tmLanguage.json"
      },
      {
        id: "logo",
        scopeName: "source.logo",
        path: "logo.tmLanguage.json"
      },
      {
        id: "lua",
        scopeName: "source.lua",
        path: "lua.tmLanguage.json",
        embeddedLangs: ["c"]
      },
      {
        id: "make",
        scopeName: "source.makefile",
        path: "make.tmLanguage.json",
        aliases: ["makefile"]
      },
      {
        id: "markdown",
        scopeName: "text.html.markdown",
        path: "markdown.tmLanguage.json",
        aliases: ["md"],
        embeddedLangs: ["css", "html", "ini", "java", "lua", "make", "perl", "r", "ruby", "php", "sql", "vb", "xml", "xsl", "yaml", "bat", "clojure", "coffee", "c", "cpp", "diff", "docker", "git-commit", "git-rebase", "go", "groovy", "pug", "javascript", "json", "jsonc", "less", "objective-c", "swift", "scss", "raku", "powershell", "python", "julia", "rust", "scala", "shellscript", "typescript", "tsx", "csharp", "fsharp", "dart", "handlebars", "erlang", "elixir", "latex", "bibtex"]
      },
      {
        id: "marko",
        scopeName: "text.marko",
        path: "marko.tmLanguage.json",
        embeddedLangs: ["css", "less", "scss", "typescript"]
      },
      {
        id: "matlab",
        scopeName: "source.matlab",
        path: "matlab.tmLanguage.json"
      },
      {
        id: "mdx",
        scopeName: "text.html.markdown.jsx",
        path: "mdx.tmLanguage.json",
        embeddedLangs: ["jsx", "markdown"]
      },
      {
        id: "mermaid",
        scopeName: "source.mermaid",
        path: "mermaid.tmLanguage.json"
      },
      {
        id: "nginx",
        scopeName: "source.nginx",
        path: "nginx.tmLanguage.json",
        embeddedLangs: ["lua"]
      },
      {
        id: "nim",
        scopeName: "source.nim",
        path: "nim.tmLanguage.json",
        embeddedLangs: ["c", "html", "xml", "javascript", "css", "glsl", "markdown"]
      },
      {
        id: "nix",
        scopeName: "source.nix",
        path: "nix.tmLanguage.json"
      },
      {
        id: "objective-c",
        scopeName: "source.objc",
        path: "objective-c.tmLanguage.json",
        aliases: ["objc"]
      },
      {
        id: "objective-cpp",
        scopeName: "source.objcpp",
        path: "objective-cpp.tmLanguage.json"
      },
      {
        id: "ocaml",
        scopeName: "source.ocaml",
        path: "ocaml.tmLanguage.json"
      },
      {
        id: "pascal",
        scopeName: "source.pascal",
        path: "pascal.tmLanguage.json"
      },
      {
        id: "perl",
        scopeName: "source.perl",
        path: "perl.tmLanguage.json",
        embeddedLangs: ["html", "xml", "css", "javascript", "sql"]
      },
      {
        id: "php",
        scopeName: "source.php",
        path: "php.tmLanguage.json",
        embeddedLangs: ["html", "xml", "sql", "javascript", "json", "css"]
      },
      {
        id: "plsql",
        scopeName: "source.plsql.oracle",
        path: "plsql.tmLanguage.json"
      },
      {
        id: "postcss",
        scopeName: "source.css.postcss",
        path: "postcss.tmLanguage.json"
      },
      {
        id: "powershell",
        scopeName: "source.powershell",
        path: "powershell.tmLanguage.json",
        aliases: ["ps", "ps1"]
      },
      {
        id: "prisma",
        scopeName: "source.prisma",
        path: "prisma.tmLanguage.json",
        samplePath: "prisma.sample"
      },
      {
        id: "prolog",
        scopeName: "source.prolog",
        path: "prolog.tmLanguage.json"
      },
      {
        id: "pug",
        scopeName: "text.pug",
        path: "pug.tmLanguage.json",
        aliases: ["jade"],
        embeddedLangs: ["javascript", "css", "sass", "stylus", "coffee", "html"]
      },
      {
        id: "puppet",
        scopeName: "source.puppet",
        path: "puppet.tmLanguage.json"
      },
      {
        id: "purescript",
        scopeName: "source.purescript",
        path: "purescript.tmLanguage.json"
      },
      {
        id: "python",
        scopeName: "source.python",
        path: "python.tmLanguage.json",
        samplePath: "python.sample",
        aliases: ["py"]
      },
      {
        id: "r",
        scopeName: "source.r",
        path: "r.tmLanguage.json"
      },
      {
        id: "raku",
        scopeName: "source.perl.6",
        path: "raku.tmLanguage.json",
        aliases: ["perl6"]
      },
      {
        id: "razor",
        scopeName: "text.aspnetcorerazor",
        path: "razor.tmLanguage.json",
        embeddedLangs: ["html", "csharp"]
      },
      {
        id: "rel",
        scopeName: "source.rel",
        path: "rel.tmLanguage.json",
        samplePath: "rel.sample"
      },
      {
        id: "riscv",
        scopeName: "source.riscv",
        path: "riscv.tmLanguage.json"
      },
      {
        id: "rst",
        scopeName: "source.rst",
        path: "rst.tmLanguage.json",
        embeddedLangs: ["cpp", "python", "javascript", "shellscript", "yaml", "cmake", "ruby"]
      },
      {
        id: "ruby",
        scopeName: "source.ruby",
        path: "ruby.tmLanguage.json",
        samplePath: "ruby.sample",
        aliases: ["rb"],
        embeddedLangs: ["html", "xml", "sql", "css", "c", "javascript", "shellscript", "lua"]
      },
      {
        id: "rust",
        scopeName: "source.rust",
        path: "rust.tmLanguage.json",
        aliases: ["rs"]
      },
      {
        id: "sas",
        scopeName: "source.sas",
        path: "sas.tmLanguage.json",
        embeddedLangs: ["sql"]
      },
      {
        id: "sass",
        scopeName: "source.sass",
        path: "sass.tmLanguage.json"
      },
      {
        id: "scala",
        scopeName: "source.scala",
        path: "scala.tmLanguage.json"
      },
      {
        id: "scheme",
        scopeName: "source.scheme",
        path: "scheme.tmLanguage.json"
      },
      {
        id: "scss",
        scopeName: "source.css.scss",
        path: "scss.tmLanguage.json",
        embeddedLangs: ["css"]
      },
      {
        id: "shaderlab",
        scopeName: "source.shaderlab",
        path: "shaderlab.tmLanguage.json",
        aliases: ["shader"],
        embeddedLangs: ["hlsl"]
      },
      {
        id: "shellscript",
        scopeName: "source.shell",
        path: "shellscript.tmLanguage.json",
        aliases: ["shell", "bash", "sh", "zsh"],
        embeddedLangs: ["ruby", "python", "applescript", "html", "markdown"]
      },
      {
        id: "smalltalk",
        scopeName: "source.smalltalk",
        path: "smalltalk.tmLanguage.json"
      },
      {
        id: "solidity",
        scopeName: "source.solidity",
        path: "solidity.tmLanguage.json"
      },
      {
        id: "sparql",
        scopeName: "source.sparql",
        path: "sparql.tmLanguage.json",
        samplePath: "sparql.sample",
        embeddedLangs: ["turtle"]
      },
      {
        id: "sql",
        scopeName: "source.sql",
        path: "sql.tmLanguage.json"
      },
      {
        id: "ssh-config",
        scopeName: "source.ssh-config",
        path: "ssh-config.tmLanguage.json"
      },
      {
        id: "stata",
        scopeName: "source.stata",
        path: "stata.tmLanguage.json",
        samplePath: "stata.sample",
        embeddedLangs: ["sql"]
      },
      {
        id: "stylus",
        scopeName: "source.stylus",
        path: "stylus.tmLanguage.json",
        aliases: ["styl"]
      },
      {
        id: "svelte",
        scopeName: "source.svelte",
        path: "svelte.tmLanguage.json",
        embeddedLangs: ["javascript", "typescript", "coffee", "stylus", "sass", "css", "scss", "less", "postcss", "pug", "markdown"]
      },
      {
        id: "swift",
        scopeName: "source.swift",
        path: "swift.tmLanguage.json"
      },
      {
        id: "system-verilog",
        scopeName: "source.systemverilog",
        path: "system-verilog.tmLanguage.json"
      },
      {
        id: "tasl",
        scopeName: "source.tasl",
        path: "tasl.tmLanguage.json",
        samplePath: "tasl.sample"
      },
      {
        id: "tcl",
        scopeName: "source.tcl",
        path: "tcl.tmLanguage.json"
      },
      {
        id: "tex",
        scopeName: "text.tex",
        path: "tex.tmLanguage.json",
        embeddedLangs: ["r"]
      },
      {
        id: "toml",
        scopeName: "source.toml",
        path: "toml.tmLanguage.json"
      },
      {
        id: "tsx",
        scopeName: "source.tsx",
        path: "tsx.tmLanguage.json",
        samplePath: "tsx.sample"
      },
      {
        id: "turtle",
        scopeName: "source.turtle",
        path: "turtle.tmLanguage.json",
        samplePath: "turtle.sample"
      },
      {
        id: "twig",
        scopeName: "text.html.twig",
        path: "twig.tmLanguage.json",
        embeddedLangs: ["css", "javascript", "php", "python", "ruby"]
      },
      {
        id: "typescript",
        scopeName: "source.ts",
        path: "typescript.tmLanguage.json",
        aliases: ["ts"]
      },
      {
        id: "vb",
        scopeName: "source.asp.vb.net",
        path: "vb.tmLanguage.json",
        aliases: ["cmd"]
      },
      {
        id: "verilog",
        scopeName: "source.verilog",
        path: "verilog.tmLanguage.json"
      },
      {
        id: "vhdl",
        scopeName: "source.vhdl",
        path: "vhdl.tmLanguage.json"
      },
      {
        id: "viml",
        scopeName: "source.viml",
        path: "viml.tmLanguage.json",
        aliases: ["vim", "vimscript"]
      },
      {
        id: "vue-html",
        scopeName: "text.html.vue-html",
        path: "vue-html.tmLanguage.json",
        embeddedLangs: ["vue", "javascript"]
      },
      {
        id: "vue",
        scopeName: "source.vue",
        path: "vue.tmLanguage.json",
        embeddedLangs: ["json", "markdown", "pug", "haml", "liquid", "vue-html", "sass", "scss", "less", "stylus", "postcss", "css", "typescript", "coffee", "javascript"]
      },
      {
        id: "wasm",
        scopeName: "source.wat",
        path: "wasm.tmLanguage.json"
      },
      {
        id: "wenyan",
        scopeName: "source.wenyan",
        path: "wenyan.tmLanguage.json",
        aliases: ["\u6587\u8A00"]
      },
      {
        id: "xml",
        scopeName: "text.xml",
        path: "xml.tmLanguage.json",
        embeddedLangs: ["java"]
      },
      {
        id: "xsl",
        scopeName: "text.xml.xsl",
        path: "xsl.tmLanguage.json",
        embeddedLangs: ["xml"]
      },
      {
        id: "yaml",
        scopeName: "source.yaml",
        path: "yaml.tmLanguage.json"
      },
      {
        id: "zenscript",
        scopeName: "source.zenscript",
        path: "zenscript.tmLanguage.json",
        samplePath: "zenscript.sample"
      }
    ];
    var FontStyle = /* @__PURE__ */ ((FontStyle2) => {
      FontStyle2[FontStyle2["NotSet"] = -1] = "NotSet";
      FontStyle2[FontStyle2["None"] = 0] = "None";
      FontStyle2[FontStyle2["Italic"] = 1] = "Italic";
      FontStyle2[FontStyle2["Bold"] = 2] = "Bold";
      FontStyle2[FontStyle2["Underline"] = 4] = "Underline";
      return FontStyle2;
    })(FontStyle || {});
    var StackElementMetadata = class {
      static toBinaryStr(metadata) {
        let r = metadata.toString(2);
        while (r.length < 32) {
          r = "0" + r;
        }
        return r;
      }
      static printMetadata(metadata) {
        let languageId = StackElementMetadata.getLanguageId(metadata);
        let tokenType = StackElementMetadata.getTokenType(metadata);
        let fontStyle = StackElementMetadata.getFontStyle(metadata);
        let foreground = StackElementMetadata.getForeground(metadata);
        let background = StackElementMetadata.getBackground(metadata);
        console.log({
          languageId,
          tokenType,
          fontStyle,
          foreground,
          background
        });
      }
      static getLanguageId(metadata) {
        return (metadata & 255) >>> 0;
      }
      static getTokenType(metadata) {
        return (metadata & 1792) >>> 8;
      }
      static getFontStyle(metadata) {
        return (metadata & 14336) >>> 11;
      }
      static getForeground(metadata) {
        return (metadata & 8372224) >>> 14;
      }
      static getBackground(metadata) {
        return (metadata & 4286578688) >>> 23;
      }
      static set(metadata, languageId, tokenType, fontStyle, foreground, background) {
        let _languageId = StackElementMetadata.getLanguageId(metadata);
        let _tokenType = StackElementMetadata.getTokenType(metadata);
        let _fontStyle = StackElementMetadata.getFontStyle(metadata);
        let _foreground = StackElementMetadata.getForeground(metadata);
        let _background = StackElementMetadata.getBackground(metadata);
        if (languageId !== 0) {
          _languageId = languageId;
        }
        if (tokenType !== 0) {
          _tokenType = tokenType === 8 ? 0 : tokenType;
        }
        if (fontStyle !== -1) {
          _fontStyle = fontStyle;
        }
        if (foreground !== 0) {
          _foreground = foreground;
        }
        if (background !== 0) {
          _background = background;
        }
        return (_languageId << 0 | _tokenType << 8 | _fontStyle << 11 | _foreground << 14 | _background << 23) >>> 0;
      }
    };
    function trimEndSlash(str) {
      if (str.endsWith("/") || str.endsWith("\\"))
        return str.slice(0, -1);
      return str;
    }
    function trimStartDot(str) {
      if (str.startsWith("./"))
        return str.slice(2);
      return str;
    }
    function dirpathparts(str) {
      const parts = str.split(/[\/\\]/g);
      return parts.slice(0, parts.length - 1);
    }
    function join(...parts) {
      return parts.map(trimEndSlash).map(trimStartDot).join("/");
    }
    function groupBy(elements, keyGetter) {
      const map = /* @__PURE__ */ new Map();
      for (const element of elements) {
        const key = keyGetter(element);
        if (map.has(key)) {
          const group = map.get(key);
          group.push(element);
        } else {
          map.set(key, [element]);
        }
      }
      return map;
    }
    function createScanner(text, ignoreTrivia) {
      if (ignoreTrivia === void 0) {
        ignoreTrivia = false;
      }
      var len = text.length;
      var pos = 0, value = "", tokenOffset = 0, token = 16, lineNumber = 0, lineStartOffset = 0, tokenLineStartOffset = 0, prevTokenLineStartOffset = 0, scanError = 0;
      function scanHexDigits(count, exact) {
        var digits = 0;
        var value2 = 0;
        while (digits < count || !exact) {
          var ch = text.charCodeAt(pos);
          if (ch >= 48 && ch <= 57) {
            value2 = value2 * 16 + ch - 48;
          } else if (ch >= 65 && ch <= 70) {
            value2 = value2 * 16 + ch - 65 + 10;
          } else if (ch >= 97 && ch <= 102) {
            value2 = value2 * 16 + ch - 97 + 10;
          } else {
            break;
          }
          pos++;
          digits++;
        }
        if (digits < count) {
          value2 = -1;
        }
        return value2;
      }
      function setPosition(newPosition) {
        pos = newPosition;
        value = "";
        tokenOffset = 0;
        token = 16;
        scanError = 0;
      }
      function scanNumber() {
        var start = pos;
        if (text.charCodeAt(pos) === 48) {
          pos++;
        } else {
          pos++;
          while (pos < text.length && isDigit(text.charCodeAt(pos))) {
            pos++;
          }
        }
        if (pos < text.length && text.charCodeAt(pos) === 46) {
          pos++;
          if (pos < text.length && isDigit(text.charCodeAt(pos))) {
            pos++;
            while (pos < text.length && isDigit(text.charCodeAt(pos))) {
              pos++;
            }
          } else {
            scanError = 3;
            return text.substring(start, pos);
          }
        }
        var end = pos;
        if (pos < text.length && (text.charCodeAt(pos) === 69 || text.charCodeAt(pos) === 101)) {
          pos++;
          if (pos < text.length && text.charCodeAt(pos) === 43 || text.charCodeAt(pos) === 45) {
            pos++;
          }
          if (pos < text.length && isDigit(text.charCodeAt(pos))) {
            pos++;
            while (pos < text.length && isDigit(text.charCodeAt(pos))) {
              pos++;
            }
            end = pos;
          } else {
            scanError = 3;
          }
        }
        return text.substring(start, end);
      }
      function scanString() {
        var result = "", start = pos;
        while (true) {
          if (pos >= len) {
            result += text.substring(start, pos);
            scanError = 2;
            break;
          }
          var ch = text.charCodeAt(pos);
          if (ch === 34) {
            result += text.substring(start, pos);
            pos++;
            break;
          }
          if (ch === 92) {
            result += text.substring(start, pos);
            pos++;
            if (pos >= len) {
              scanError = 2;
              break;
            }
            var ch2 = text.charCodeAt(pos++);
            switch (ch2) {
              case 34:
                result += '"';
                break;
              case 92:
                result += "\\";
                break;
              case 47:
                result += "/";
                break;
              case 98:
                result += "\b";
                break;
              case 102:
                result += "\f";
                break;
              case 110:
                result += "\n";
                break;
              case 114:
                result += "\r";
                break;
              case 116:
                result += "	";
                break;
              case 117:
                var ch3 = scanHexDigits(4, true);
                if (ch3 >= 0) {
                  result += String.fromCharCode(ch3);
                } else {
                  scanError = 4;
                }
                break;
              default:
                scanError = 5;
            }
            start = pos;
            continue;
          }
          if (ch >= 0 && ch <= 31) {
            if (isLineBreak(ch)) {
              result += text.substring(start, pos);
              scanError = 2;
              break;
            } else {
              scanError = 6;
            }
          }
          pos++;
        }
        return result;
      }
      function scanNext() {
        value = "";
        scanError = 0;
        tokenOffset = pos;
        lineStartOffset = lineNumber;
        prevTokenLineStartOffset = tokenLineStartOffset;
        if (pos >= len) {
          tokenOffset = len;
          return token = 17;
        }
        var code = text.charCodeAt(pos);
        if (isWhiteSpace(code)) {
          do {
            pos++;
            value += String.fromCharCode(code);
            code = text.charCodeAt(pos);
          } while (isWhiteSpace(code));
          return token = 15;
        }
        if (isLineBreak(code)) {
          pos++;
          value += String.fromCharCode(code);
          if (code === 13 && text.charCodeAt(pos) === 10) {
            pos++;
            value += "\n";
          }
          lineNumber++;
          tokenLineStartOffset = pos;
          return token = 14;
        }
        switch (code) {
          case 123:
            pos++;
            return token = 1;
          case 125:
            pos++;
            return token = 2;
          case 91:
            pos++;
            return token = 3;
          case 93:
            pos++;
            return token = 4;
          case 58:
            pos++;
            return token = 6;
          case 44:
            pos++;
            return token = 5;
          case 34:
            pos++;
            value = scanString();
            return token = 10;
          case 47:
            var start = pos - 1;
            if (text.charCodeAt(pos + 1) === 47) {
              pos += 2;
              while (pos < len) {
                if (isLineBreak(text.charCodeAt(pos))) {
                  break;
                }
                pos++;
              }
              value = text.substring(start, pos);
              return token = 12;
            }
            if (text.charCodeAt(pos + 1) === 42) {
              pos += 2;
              var safeLength = len - 1;
              var commentClosed = false;
              while (pos < safeLength) {
                var ch = text.charCodeAt(pos);
                if (ch === 42 && text.charCodeAt(pos + 1) === 47) {
                  pos += 2;
                  commentClosed = true;
                  break;
                }
                pos++;
                if (isLineBreak(ch)) {
                  if (ch === 13 && text.charCodeAt(pos) === 10) {
                    pos++;
                  }
                  lineNumber++;
                  tokenLineStartOffset = pos;
                }
              }
              if (!commentClosed) {
                pos++;
                scanError = 1;
              }
              value = text.substring(start, pos);
              return token = 13;
            }
            value += String.fromCharCode(code);
            pos++;
            return token = 16;
          case 45:
            value += String.fromCharCode(code);
            pos++;
            if (pos === len || !isDigit(text.charCodeAt(pos))) {
              return token = 16;
            }
          case 48:
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            value += scanNumber();
            return token = 11;
          default:
            while (pos < len && isUnknownContentCharacter(code)) {
              pos++;
              code = text.charCodeAt(pos);
            }
            if (tokenOffset !== pos) {
              value = text.substring(tokenOffset, pos);
              switch (value) {
                case "true":
                  return token = 8;
                case "false":
                  return token = 9;
                case "null":
                  return token = 7;
              }
              return token = 16;
            }
            value += String.fromCharCode(code);
            pos++;
            return token = 16;
        }
      }
      function isUnknownContentCharacter(code) {
        if (isWhiteSpace(code) || isLineBreak(code)) {
          return false;
        }
        switch (code) {
          case 125:
          case 93:
          case 123:
          case 91:
          case 34:
          case 58:
          case 44:
          case 47:
            return false;
        }
        return true;
      }
      function scanNextNonTrivia() {
        var result;
        do {
          result = scanNext();
        } while (result >= 12 && result <= 15);
        return result;
      }
      return {
        setPosition,
        getPosition: function() {
          return pos;
        },
        scan: ignoreTrivia ? scanNextNonTrivia : scanNext,
        getToken: function() {
          return token;
        },
        getTokenValue: function() {
          return value;
        },
        getTokenOffset: function() {
          return tokenOffset;
        },
        getTokenLength: function() {
          return pos - tokenOffset;
        },
        getTokenStartLine: function() {
          return lineStartOffset;
        },
        getTokenStartCharacter: function() {
          return tokenOffset - prevTokenLineStartOffset;
        },
        getTokenError: function() {
          return scanError;
        }
      };
    }
    function isWhiteSpace(ch) {
      return ch === 32 || ch === 9 || ch === 11 || ch === 12 || ch === 160 || ch === 5760 || ch >= 8192 && ch <= 8203 || ch === 8239 || ch === 8287 || ch === 12288 || ch === 65279;
    }
    function isLineBreak(ch) {
      return ch === 10 || ch === 13 || ch === 8232 || ch === 8233;
    }
    function isDigit(ch) {
      return ch >= 48 && ch <= 57;
    }
    var ParseOptions;
    (function(ParseOptions2) {
      ParseOptions2.DEFAULT = {
        allowTrailingComma: false
      };
    })(ParseOptions || (ParseOptions = {}));
    function parse$1(text, errors, options) {
      if (errors === void 0) {
        errors = [];
      }
      if (options === void 0) {
        options = ParseOptions.DEFAULT;
      }
      var currentProperty = null;
      var currentParent = [];
      var previousParents = [];
      function onValue(value) {
        if (Array.isArray(currentParent)) {
          currentParent.push(value);
        } else if (currentProperty !== null) {
          currentParent[currentProperty] = value;
        }
      }
      var visitor = {
        onObjectBegin: function() {
          var object = {};
          onValue(object);
          previousParents.push(currentParent);
          currentParent = object;
          currentProperty = null;
        },
        onObjectProperty: function(name) {
          currentProperty = name;
        },
        onObjectEnd: function() {
          currentParent = previousParents.pop();
        },
        onArrayBegin: function() {
          var array = [];
          onValue(array);
          previousParents.push(currentParent);
          currentParent = array;
          currentProperty = null;
        },
        onArrayEnd: function() {
          currentParent = previousParents.pop();
        },
        onLiteralValue: onValue,
        onError: function(error, offset, length) {
          errors.push({ error, offset, length });
        }
      };
      visit(text, visitor, options);
      return currentParent[0];
    }
    function visit(text, visitor, options) {
      if (options === void 0) {
        options = ParseOptions.DEFAULT;
      }
      var _scanner = createScanner(text, false);
      function toNoArgVisit(visitFunction) {
        return visitFunction ? function() {
          return visitFunction(_scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter());
        } : function() {
          return true;
        };
      }
      function toOneArgVisit(visitFunction) {
        return visitFunction ? function(arg) {
          return visitFunction(arg, _scanner.getTokenOffset(), _scanner.getTokenLength(), _scanner.getTokenStartLine(), _scanner.getTokenStartCharacter());
        } : function() {
          return true;
        };
      }
      var onObjectBegin = toNoArgVisit(visitor.onObjectBegin), onObjectProperty = toOneArgVisit(visitor.onObjectProperty), onObjectEnd = toNoArgVisit(visitor.onObjectEnd), onArrayBegin = toNoArgVisit(visitor.onArrayBegin), onArrayEnd = toNoArgVisit(visitor.onArrayEnd), onLiteralValue = toOneArgVisit(visitor.onLiteralValue), onSeparator = toOneArgVisit(visitor.onSeparator), onComment = toNoArgVisit(visitor.onComment), onError = toOneArgVisit(visitor.onError);
      var disallowComments = options && options.disallowComments;
      var allowTrailingComma = options && options.allowTrailingComma;
      function scanNext() {
        while (true) {
          var token = _scanner.scan();
          switch (_scanner.getTokenError()) {
            case 4:
              handleError(14);
              break;
            case 5:
              handleError(15);
              break;
            case 3:
              handleError(13);
              break;
            case 1:
              if (!disallowComments) {
                handleError(11);
              }
              break;
            case 2:
              handleError(12);
              break;
            case 6:
              handleError(16);
              break;
          }
          switch (token) {
            case 12:
            case 13:
              if (disallowComments) {
                handleError(10);
              } else {
                onComment();
              }
              break;
            case 16:
              handleError(1);
              break;
            case 15:
            case 14:
              break;
            default:
              return token;
          }
        }
      }
      function handleError(error, skipUntilAfter, skipUntil) {
        if (skipUntilAfter === void 0) {
          skipUntilAfter = [];
        }
        if (skipUntil === void 0) {
          skipUntil = [];
        }
        onError(error);
        if (skipUntilAfter.length + skipUntil.length > 0) {
          var token = _scanner.getToken();
          while (token !== 17) {
            if (skipUntilAfter.indexOf(token) !== -1) {
              scanNext();
              break;
            } else if (skipUntil.indexOf(token) !== -1) {
              break;
            }
            token = scanNext();
          }
        }
      }
      function parseString(isValue) {
        var value = _scanner.getTokenValue();
        if (isValue) {
          onLiteralValue(value);
        } else {
          onObjectProperty(value);
        }
        scanNext();
        return true;
      }
      function parseLiteral() {
        switch (_scanner.getToken()) {
          case 11:
            var tokenValue = _scanner.getTokenValue();
            var value = Number(tokenValue);
            if (isNaN(value)) {
              handleError(2);
              value = 0;
            }
            onLiteralValue(value);
            break;
          case 7:
            onLiteralValue(null);
            break;
          case 8:
            onLiteralValue(true);
            break;
          case 9:
            onLiteralValue(false);
            break;
          default:
            return false;
        }
        scanNext();
        return true;
      }
      function parseProperty() {
        if (_scanner.getToken() !== 10) {
          handleError(3, [], [2, 5]);
          return false;
        }
        parseString(false);
        if (_scanner.getToken() === 6) {
          onSeparator(":");
          scanNext();
          if (!parseValue()) {
            handleError(4, [], [2, 5]);
          }
        } else {
          handleError(5, [], [2, 5]);
        }
        return true;
      }
      function parseObject() {
        onObjectBegin();
        scanNext();
        var needsComma = false;
        while (_scanner.getToken() !== 2 && _scanner.getToken() !== 17) {
          if (_scanner.getToken() === 5) {
            if (!needsComma) {
              handleError(4, [], []);
            }
            onSeparator(",");
            scanNext();
            if (_scanner.getToken() === 2 && allowTrailingComma) {
              break;
            }
          } else if (needsComma) {
            handleError(6, [], []);
          }
          if (!parseProperty()) {
            handleError(4, [], [2, 5]);
          }
          needsComma = true;
        }
        onObjectEnd();
        if (_scanner.getToken() !== 2) {
          handleError(7, [2], []);
        } else {
          scanNext();
        }
        return true;
      }
      function parseArray() {
        onArrayBegin();
        scanNext();
        var needsComma = false;
        while (_scanner.getToken() !== 4 && _scanner.getToken() !== 17) {
          if (_scanner.getToken() === 5) {
            if (!needsComma) {
              handleError(4, [], []);
            }
            onSeparator(",");
            scanNext();
            if (_scanner.getToken() === 4 && allowTrailingComma) {
              break;
            }
          } else if (needsComma) {
            handleError(6, [], []);
          }
          if (!parseValue()) {
            handleError(4, [], [4, 5]);
          }
          needsComma = true;
        }
        onArrayEnd();
        if (_scanner.getToken() !== 4) {
          handleError(8, [4], []);
        } else {
          scanNext();
        }
        return true;
      }
      function parseValue() {
        switch (_scanner.getToken()) {
          case 3:
            return parseArray();
          case 1:
            return parseObject();
          case 10:
            return parseString(true);
          default:
            return parseLiteral();
        }
      }
      scanNext();
      if (_scanner.getToken() === 17) {
        if (options.allowEmptyContent) {
          return true;
        }
        handleError(4, [], []);
        return false;
      }
      if (!parseValue()) {
        handleError(4, [], []);
        return false;
      }
      if (_scanner.getToken() !== 17) {
        handleError(9, [], []);
      }
      return true;
    }
    var parse = parse$1;
    var __defProp$1 = Object.defineProperty;
    var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
    var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
    var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
    var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __spreadValues$1 = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp$1.call(b, prop))
          __defNormalProp$1(a, prop, b[prop]);
      if (__getOwnPropSymbols$1)
        for (var prop of __getOwnPropSymbols$1(b)) {
          if (__propIsEnum$1.call(b, prop))
            __defNormalProp$1(a, prop, b[prop]);
        }
      return a;
    };
    var isWebWorker = typeof self !== "undefined" && typeof self.WorkerGlobalScope !== "undefined";
    var isNode = "process" in globalThis && typeof process !== "undefined" && typeof process.release !== "undefined" && process.release.name === "node";
    var isBrowser = isWebWorker || !isNode;
    var CDN_ROOT = "";
    var WASM = "";
    function setCDN(root) {
      CDN_ROOT = root;
    }
    function setWasm(path2) {
      WASM = path2;
    }
    var _onigurumaPromise = null;
    async function getOniguruma() {
      if (!_onigurumaPromise) {
        let loader;
        if (isBrowser) {
          if (typeof WASM === "string") {
            loader = vscodeOniguruma.loadWASM({
              data: await fetch(_resolvePath("dist/onig.wasm")).then((r) => r.arrayBuffer())
            });
          } else {
            loader = vscodeOniguruma.loadWASM(WASM);
          }
        } else {
          const path2 = __require("path");
          const wasmPath = path2.join(__require.resolve("vscode-oniguruma"), "../onig.wasm");
          const fs2 = __require("fs");
          const wasmBin = fs2.readFileSync(wasmPath).buffer;
          loader = vscodeOniguruma.loadWASM(wasmBin);
        }
        _onigurumaPromise = loader.then(() => {
          return {
            createOnigScanner(patterns) {
              return vscodeOniguruma.createOnigScanner(patterns);
            },
            createOnigString(s) {
              return vscodeOniguruma.createOnigString(s);
            }
          };
        });
      }
      return _onigurumaPromise;
    }
    function _resolvePath(filepath) {
      if (isBrowser) {
        if (!CDN_ROOT) {
          console.warn("[Shiki] no CDN provider found, use `setCDN()` to specify the CDN for loading the resources before calling `getHighlighter()`");
        }
        return `${CDN_ROOT}${filepath}`;
      } else {
        const path2 = __require("path");
        if (path2.isAbsolute(filepath)) {
          return filepath;
        } else {
          return path2.resolve(__dirname, "..", filepath);
        }
      }
    }
    async function _fetchAssets(filepath) {
      const path2 = _resolvePath(filepath);
      if (isBrowser) {
        return await fetch(path2).then((r) => r.text());
      } else {
        const fs2 = __require("fs");
        return await fs2.promises.readFile(path2, "utf-8");
      }
    }
    async function _fetchJSONAssets(filepath) {
      const errors = [];
      const rawTheme = parse(await _fetchAssets(filepath), errors, {
        allowTrailingComma: true
      });
      if (errors.length) {
        throw errors[0];
      }
      return rawTheme;
    }
    async function fetchTheme(themePath) {
      let theme = await _fetchJSONAssets(themePath);
      const shikiTheme = toShikiTheme(theme);
      if (shikiTheme.include) {
        const includedTheme = await fetchTheme(join(...dirpathparts(themePath), shikiTheme.include));
        if (includedTheme.settings) {
          shikiTheme.settings = includedTheme.settings.concat(shikiTheme.settings);
        }
        if (includedTheme.bg && !shikiTheme.bg) {
          shikiTheme.bg = includedTheme.bg;
        }
        if (includedTheme.colors) {
          shikiTheme.colors = __spreadValues$1(__spreadValues$1({}, includedTheme.colors), shikiTheme.colors);
        }
        delete shikiTheme.include;
      }
      return shikiTheme;
    }
    async function fetchGrammar(filepath) {
      return await _fetchJSONAssets(filepath);
    }
    function repairTheme(theme) {
      if (!theme.settings)
        theme.settings = [];
      if (theme.settings[0] && theme.settings[0].settings && !theme.settings[0].scope) {
        return;
      }
      theme.settings.unshift({
        settings: {
          foreground: theme.fg,
          background: theme.bg
        }
      });
    }
    function toShikiTheme(rawTheme) {
      const type = rawTheme.type || "dark";
      const shikiTheme = __spreadValues$1(__spreadValues$1({
        name: rawTheme.name,
        type
      }, rawTheme), getThemeDefaultColors(rawTheme));
      if (rawTheme.include) {
        shikiTheme.include = rawTheme.include;
      }
      if (rawTheme.tokenColors) {
        shikiTheme.settings = rawTheme.tokenColors;
        delete shikiTheme.tokenColors;
      }
      repairTheme(shikiTheme);
      return shikiTheme;
    }
    var VSCODE_FALLBACK_EDITOR_FG = { light: "#333333", dark: "#bbbbbb" };
    var VSCODE_FALLBACK_EDITOR_BG = { light: "#fffffe", dark: "#1e1e1e" };
    function getThemeDefaultColors(theme) {
      var _a, _b, _c, _d;
      let fg, bg;
      let settings = theme.settings ? theme.settings : theme.tokenColors;
      const globalSetting = settings ? settings.find((s) => {
        return !s.name && !s.scope;
      }) : void 0;
      if ((_a = globalSetting == null ? void 0 : globalSetting.settings) == null ? void 0 : _a.foreground) {
        fg = globalSetting.settings.foreground;
      }
      if ((_b = globalSetting == null ? void 0 : globalSetting.settings) == null ? void 0 : _b.background) {
        bg = globalSetting.settings.background;
      }
      if (!fg && ((_c = theme == null ? void 0 : theme.colors) == null ? void 0 : _c["editor.foreground"])) {
        fg = theme.colors["editor.foreground"];
      }
      if (!bg && ((_d = theme == null ? void 0 : theme.colors) == null ? void 0 : _d["editor.background"])) {
        bg = theme.colors["editor.background"];
      }
      if (!fg) {
        fg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_FG.light : VSCODE_FALLBACK_EDITOR_FG.dark;
      }
      if (!bg) {
        bg = theme.type === "light" ? VSCODE_FALLBACK_EDITOR_BG.light : VSCODE_FALLBACK_EDITOR_BG.dark;
      }
      return {
        fg,
        bg
      };
    }
    var Resolver = class {
      constructor(onigLibPromise, onigLibName) {
        this.languagesPath = "languages/";
        this.languageMap = {};
        this.scopeToLangMap = {};
        this._onigLibPromise = onigLibPromise;
        this._onigLibName = onigLibName;
      }
      get onigLib() {
        return this._onigLibPromise;
      }
      getOnigLibName() {
        return this._onigLibName;
      }
      getLangRegistration(langIdOrAlias) {
        return this.languageMap[langIdOrAlias];
      }
      async loadGrammar(scopeName) {
        const lang = this.scopeToLangMap[scopeName];
        if (!lang) {
          return null;
        }
        if (lang.grammar) {
          return lang.grammar;
        }
        const g = await fetchGrammar(languages.includes(lang) ? `${this.languagesPath}${lang.path}` : lang.path);
        lang.grammar = g;
        return g;
      }
      addLanguage(l) {
        this.languageMap[l.id] = l;
        if (l.aliases) {
          l.aliases.forEach((a) => {
            this.languageMap[a] = l;
          });
        }
        this.scopeToLangMap[l.scopeName] = l;
      }
    };
    function tokenizeWithTheme(theme, colorMap, fileContents, grammar, options) {
      let lines = fileContents.split(/\r\n|\r|\n/);
      let ruleStack = vscodeTextmate.INITIAL;
      let actual = [];
      let final = [];
      for (let i = 0, len = lines.length; i < len; i++) {
        let line = lines[i];
        if (line === "") {
          actual = [];
          final.push([]);
          continue;
        }
        let resultWithScopes;
        let tokensWithScopes;
        let tokensWithScopesIndex;
        if (options.includeExplanation) {
          resultWithScopes = grammar.tokenizeLine(line, ruleStack);
          tokensWithScopes = resultWithScopes.tokens;
          tokensWithScopesIndex = 0;
        }
        let result = grammar.tokenizeLine2(line, ruleStack);
        let tokensLength = result.tokens.length / 2;
        for (let j = 0; j < tokensLength; j++) {
          let startIndex = result.tokens[2 * j];
          let nextStartIndex = j + 1 < tokensLength ? result.tokens[2 * j + 2] : line.length;
          if (startIndex === nextStartIndex) {
            continue;
          }
          let metadata = result.tokens[2 * j + 1];
          let foreground = StackElementMetadata.getForeground(metadata);
          let foregroundColor = colorMap[foreground];
          let fontStyle = StackElementMetadata.getFontStyle(metadata);
          let explanation = [];
          if (options.includeExplanation) {
            let offset = 0;
            while (startIndex + offset < nextStartIndex) {
              let tokenWithScopes = tokensWithScopes[tokensWithScopesIndex];
              let tokenWithScopesText = line.substring(tokenWithScopes.startIndex, tokenWithScopes.endIndex);
              offset += tokenWithScopesText.length;
              explanation.push({
                content: tokenWithScopesText,
                scopes: explainThemeScopes(theme, tokenWithScopes.scopes)
              });
              tokensWithScopesIndex++;
            }
          }
          actual.push({
            content: line.substring(startIndex, nextStartIndex),
            color: foregroundColor,
            fontStyle,
            explanation
          });
        }
        final.push(actual);
        actual = [];
        ruleStack = result.ruleStack;
      }
      return final;
    }
    function explainThemeScopes(theme, scopes) {
      let result = [];
      for (let i = 0, len = scopes.length; i < len; i++) {
        let parentScopes = scopes.slice(0, i);
        let scope = scopes[i];
        result[i] = {
          scopeName: scope,
          themeMatches: explainThemeScope(theme, scope, parentScopes)
        };
      }
      return result;
    }
    function matchesOne(selector, scope) {
      let selectorPrefix = selector + ".";
      if (selector === scope || scope.substring(0, selectorPrefix.length) === selectorPrefix) {
        return true;
      }
      return false;
    }
    function matches(selector, selectorParentScopes, scope, parentScopes) {
      if (!matchesOne(selector, scope)) {
        return false;
      }
      let selectorParentIndex = selectorParentScopes.length - 1;
      let parentIndex = parentScopes.length - 1;
      while (selectorParentIndex >= 0 && parentIndex >= 0) {
        if (matchesOne(selectorParentScopes[selectorParentIndex], parentScopes[parentIndex])) {
          selectorParentIndex--;
        }
        parentIndex--;
      }
      if (selectorParentIndex === -1) {
        return true;
      }
      return false;
    }
    function explainThemeScope(theme, scope, parentScopes) {
      let result = [], resultLen = 0;
      for (let i = 0, len = theme.settings.length; i < len; i++) {
        let setting = theme.settings[i];
        let selectors;
        if (typeof setting.scope === "string") {
          selectors = setting.scope.split(/,/).map((scope2) => scope2.trim());
        } else if (Array.isArray(setting.scope)) {
          selectors = setting.scope;
        } else {
          continue;
        }
        for (let j = 0, lenJ = selectors.length; j < lenJ; j++) {
          let rawSelector = selectors[j];
          let rawSelectorPieces = rawSelector.split(/ /);
          let selector = rawSelectorPieces[rawSelectorPieces.length - 1];
          let selectorParentScopes = rawSelectorPieces.slice(0, rawSelectorPieces.length - 1);
          if (matches(selector, selectorParentScopes, scope, parentScopes)) {
            result[resultLen++] = setting;
            j = lenJ;
          }
        }
      }
      return result;
    }
    var __defProp2 = Object.defineProperty;
    var __defProps = Object.defineProperties;
    var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
    var __getOwnPropSymbols = Object.getOwnPropertySymbols;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __propIsEnum = Object.prototype.propertyIsEnumerable;
    var __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    var __spreadValues = (a, b) => {
      for (var prop in b || (b = {}))
        if (__hasOwnProp2.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b)) {
          if (__propIsEnum.call(b, prop))
            __defNormalProp(a, prop, b[prop]);
        }
      return a;
    };
    var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
    var defaultElements = {
      pre({ className, style, children }) {
        return `<pre class="${className}" style="${style}">${children}</pre>`;
      },
      code({ children }) {
        return `<code>${children}</code>`;
      },
      line({ className, children }) {
        return `<span class="${className}">${children}</span>`;
      },
      token({ style, children }) {
        return `<span style="${style}">${children}</span>`;
      }
    };
    function renderToHtml(lines, options = {}) {
      var _a;
      const bg = options.bg || "#fff";
      const optionsByLineNumber = groupBy((_a = options.lineOptions) != null ? _a : [], (option) => option.line);
      const userElements = options.elements || {};
      function h(type = "", props = {}, children) {
        const element = userElements[type] || defaultElements[type];
        if (element) {
          children = children.filter(Boolean);
          return element(__spreadProps(__spreadValues({}, props), {
            children: type === "code" ? children.join("\n") : children.join("")
          }));
        }
        return "";
      }
      return h("pre", { className: "shiki", style: `background-color: ${bg}` }, [
        options.langId ? `<div class="language-id">${options.langId}</div>` : "",
        h("code", {}, lines.map((line, index) => {
          var _a2;
          const lineNumber = index + 1;
          const lineOptions = (_a2 = optionsByLineNumber.get(lineNumber)) != null ? _a2 : [];
          const lineClasses = getLineClasses(lineOptions).join(" ");
          return h("line", {
            className: lineClasses,
            lines,
            line,
            index
          }, line.map((token, index2) => {
            const cssDeclarations = [`color: ${token.color || options.fg}`];
            if (token.fontStyle & FontStyle.Italic) {
              cssDeclarations.push("font-style: italic");
            }
            if (token.fontStyle & FontStyle.Bold) {
              cssDeclarations.push("font-weight: bold");
            }
            if (token.fontStyle & FontStyle.Underline) {
              cssDeclarations.push("text-decoration: underline");
            }
            return h("token", {
              style: cssDeclarations.join("; "),
              tokens: line,
              token,
              index: index2
            }, [escapeHtml(token.content)]);
          }));
        }))
      ]);
    }
    var htmlEscapes = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    function escapeHtml(html) {
      return html.replace(/[&<>"']/g, (chr) => htmlEscapes[chr]);
    }
    function getLineClasses(lineOptions) {
      var _a;
      const lineClasses = /* @__PURE__ */ new Set(["line"]);
      for (const lineOption of lineOptions) {
        for (const lineClass of (_a = lineOption.classes) != null ? _a : []) {
          lineClasses.add(lineClass);
        }
      }
      return Array.from(lineClasses);
    }
    var Registry = class extends vscodeTextmate.Registry {
      constructor(_resolver) {
        super(_resolver);
        this._resolver = _resolver;
        this.themesPath = "themes/";
        this._resolvedThemes = {};
        this._resolvedGrammars = {};
      }
      getTheme(theme) {
        if (typeof theme === "string") {
          return this._resolvedThemes[theme];
        } else {
          return theme;
        }
      }
      async loadTheme(theme) {
        if (typeof theme === "string") {
          if (!this._resolvedThemes[theme]) {
            this._resolvedThemes[theme] = await fetchTheme(`${this.themesPath}${theme}.json`);
          }
          return this._resolvedThemes[theme];
        } else {
          theme = toShikiTheme(theme);
          if (theme.name) {
            this._resolvedThemes[theme.name] = theme;
          }
          return theme;
        }
      }
      async loadThemes(themes2) {
        return await Promise.all(themes2.map((theme) => this.loadTheme(theme)));
      }
      getLoadedThemes() {
        return Object.keys(this._resolvedThemes);
      }
      getGrammar(name) {
        return this._resolvedGrammars[name];
      }
      async loadLanguage(lang) {
        const g = await this.loadGrammar(lang.scopeName);
        this._resolvedGrammars[lang.id] = g;
        if (lang.aliases) {
          lang.aliases.forEach((la) => {
            this._resolvedGrammars[la] = g;
          });
        }
      }
      async loadLanguages(langs) {
        for (const lang of langs) {
          this._resolver.addLanguage(lang);
        }
        for (const lang of langs) {
          await this.loadLanguage(lang);
        }
      }
      getLoadedLanguages() {
        return Object.keys(this._resolvedGrammars);
      }
    };
    function resolveLang(lang) {
      return typeof lang === "string" ? languages.find((l) => {
        var _a;
        return l.id === lang || ((_a = l.aliases) == null ? void 0 : _a.includes(lang));
      }) : lang;
    }
    function resolveOptions(options) {
      let _languages = languages;
      let _themes = options.themes || [];
      if (options.langs) {
        _languages = options.langs.map(resolveLang);
      }
      if (options.theme) {
        _themes.unshift(options.theme);
      }
      if (!_themes.length) {
        _themes = ["nord"];
      }
      return { _languages, _themes };
    }
    async function getHighlighter2(options) {
      var _a, _b;
      const { _languages, _themes } = resolveOptions(options);
      const _resolver = new Resolver(getOniguruma(), "vscode-oniguruma");
      const _registry = new Registry(_resolver);
      if ((_a = options.paths) == null ? void 0 : _a.themes) {
        _registry.themesPath = options.paths.themes;
      }
      if ((_b = options.paths) == null ? void 0 : _b.languages) {
        _resolver.languagesPath = options.paths.languages;
      }
      const themes2 = await _registry.loadThemes(_themes);
      const _defaultTheme = themes2[0];
      let _currentTheme;
      await _registry.loadLanguages(_languages);
      let COLOR_REPLACEMENTS = {
        "#000001": "var(--shiki-color-text)",
        "#000002": "var(--shiki-color-background)",
        "#000004": "var(--shiki-token-constant)",
        "#000005": "var(--shiki-token-string)",
        "#000006": "var(--shiki-token-comment)",
        "#000007": "var(--shiki-token-keyword)",
        "#000008": "var(--shiki-token-parameter)",
        "#000009": "var(--shiki-token-function)",
        "#000010": "var(--shiki-token-string-expression)",
        "#000011": "var(--shiki-token-punctuation)",
        "#000012": "var(--shiki-token-link)"
      };
      function setColorReplacements(map) {
        COLOR_REPLACEMENTS = map;
      }
      function fixCssVariablesTheme(theme, colorMap) {
        theme.bg = COLOR_REPLACEMENTS[theme.bg] || theme.bg;
        theme.fg = COLOR_REPLACEMENTS[theme.fg] || theme.fg;
        colorMap.forEach((val, i) => {
          colorMap[i] = COLOR_REPLACEMENTS[val] || val;
        });
      }
      function getTheme(theme) {
        const _theme = theme ? _registry.getTheme(theme) : _defaultTheme;
        if (!_theme) {
          throw Error(`No theme registration for ${theme}`);
        }
        if (!_currentTheme || _currentTheme.name !== _theme.name) {
          _registry.setTheme(_theme);
          _currentTheme = _theme;
        }
        const _colorMap = _registry.getColorMap();
        if (_theme.type === "css") {
          fixCssVariablesTheme(_theme, _colorMap);
        }
        return { _theme, _colorMap };
      }
      function getGrammar(lang) {
        const _grammar = _registry.getGrammar(lang);
        if (!_grammar) {
          throw Error(`No language registration for ${lang}`);
        }
        return { _grammar };
      }
      function codeToThemedTokens(code, lang = "text", theme, options2 = { includeExplanation: true }) {
        if (isPlaintext(lang)) {
          const lines = code.split(/\r\n|\r|\n/);
          return [...lines.map((line) => [{ content: line }])];
        }
        const { _grammar } = getGrammar(lang);
        const { _theme, _colorMap } = getTheme(theme);
        return tokenizeWithTheme(_theme, _colorMap, code, _grammar, options2);
      }
      function codeToHtml(code, arg1 = "text", arg2) {
        let options2;
        if (typeof arg1 === "object") {
          options2 = arg1;
        } else {
          options2 = {
            lang: arg1,
            theme: arg2
          };
        }
        const tokens = codeToThemedTokens(code, options2.lang, options2.theme, {
          includeExplanation: false
        });
        const { _theme } = getTheme(options2.theme);
        return renderToHtml(tokens, {
          fg: _theme.fg,
          bg: _theme.bg,
          lineOptions: options2 == null ? void 0 : options2.lineOptions
        });
      }
      async function loadTheme(theme) {
        await _registry.loadTheme(theme);
      }
      async function loadLanguage(lang) {
        const _lang = resolveLang(lang);
        _resolver.addLanguage(_lang);
        await _registry.loadLanguage(_lang);
      }
      function getLoadedThemes() {
        return _registry.getLoadedThemes();
      }
      function getLoadedLanguages() {
        return _registry.getLoadedLanguages();
      }
      function getBackgroundColor(theme) {
        const { _theme } = getTheme(theme);
        return _theme.bg;
      }
      function getForegroundColor(theme) {
        const { _theme } = getTheme(theme);
        return _theme.fg;
      }
      return {
        codeToThemedTokens,
        codeToHtml,
        getTheme: (theme) => {
          return getTheme(theme)._theme;
        },
        loadTheme,
        loadLanguage,
        getBackgroundColor,
        getForegroundColor,
        getLoadedThemes,
        getLoadedLanguages,
        setColorReplacements
      };
    }
    function isPlaintext(lang) {
      return !lang || ["plaintext", "txt", "text"].includes(lang);
    }
    function setOnigasmWASM(path2) {
      setWasm(path2);
    }
    exports.BUNDLED_LANGUAGES = languages;
    exports.BUNDLED_THEMES = themes;
    exports.FontStyle = FontStyle;
    exports.getHighlighter = getHighlighter2;
    exports.loadTheme = fetchTheme;
    exports.renderToHtml = renderToHtml;
    exports.setCDN = setCDN;
    exports.setOnigasmWASM = setOnigasmWASM;
    exports.setWasm = setWasm;
    exports.toShikiTheme = toShikiTheme;
  }
});

// node_modules/.pnpm/diacritics@1.3.0/node_modules/diacritics/index.js
var require_diacritics = __commonJS({
  "node_modules/.pnpm/diacritics@1.3.0/node_modules/diacritics/index.js"(exports) {
    exports.remove = removeDiacritics2;
    var replacementList = [
      {
        base: " ",
        chars: "\xA0"
      },
      {
        base: "0",
        chars: "\u07C0"
      },
      {
        base: "A",
        chars: "\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
      },
      {
        base: "AA",
        chars: "\uA732"
      },
      {
        base: "AE",
        chars: "\xC6\u01FC\u01E2"
      },
      {
        base: "AO",
        chars: "\uA734"
      },
      {
        base: "AU",
        chars: "\uA736"
      },
      {
        base: "AV",
        chars: "\uA738\uA73A"
      },
      {
        base: "AY",
        chars: "\uA73C"
      },
      {
        base: "B",
        chars: "\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0181"
      },
      {
        base: "C",
        chars: "\u24B8\uFF23\uA73E\u1E08\u0106C\u0108\u010A\u010C\xC7\u0187\u023B"
      },
      {
        base: "D",
        chars: "\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018A\u0189\u1D05\uA779"
      },
      {
        base: "Dh",
        chars: "\xD0"
      },
      {
        base: "DZ",
        chars: "\u01F1\u01C4"
      },
      {
        base: "Dz",
        chars: "\u01F2\u01C5"
      },
      {
        base: "E",
        chars: "\u025B\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E\u1D07"
      },
      {
        base: "F",
        chars: "\uA77C\u24BB\uFF26\u1E1E\u0191\uA77B"
      },
      {
        base: "G",
        chars: "\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E\u0262"
      },
      {
        base: "H",
        chars: "\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
      },
      {
        base: "I",
        chars: "\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
      },
      {
        base: "J",
        chars: "\u24BF\uFF2A\u0134\u0248\u0237"
      },
      {
        base: "K",
        chars: "\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
      },
      {
        base: "L",
        chars: "\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
      },
      {
        base: "LJ",
        chars: "\u01C7"
      },
      {
        base: "Lj",
        chars: "\u01C8"
      },
      {
        base: "M",
        chars: "\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C\u03FB"
      },
      {
        base: "N",
        chars: "\uA7A4\u0220\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u019D\uA790\u1D0E"
      },
      {
        base: "NJ",
        chars: "\u01CA"
      },
      {
        base: "Nj",
        chars: "\u01CB"
      },
      {
        base: "O",
        chars: "\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
      },
      {
        base: "OE",
        chars: "\u0152"
      },
      {
        base: "OI",
        chars: "\u01A2"
      },
      {
        base: "OO",
        chars: "\uA74E"
      },
      {
        base: "OU",
        chars: "\u0222"
      },
      {
        base: "P",
        chars: "\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
      },
      {
        base: "Q",
        chars: "\u24C6\uFF31\uA756\uA758\u024A"
      },
      {
        base: "R",
        chars: "\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
      },
      {
        base: "S",
        chars: "\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
      },
      {
        base: "T",
        chars: "\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
      },
      {
        base: "Th",
        chars: "\xDE"
      },
      {
        base: "TZ",
        chars: "\uA728"
      },
      {
        base: "U",
        chars: "\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
      },
      {
        base: "V",
        chars: "\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
      },
      {
        base: "VY",
        chars: "\uA760"
      },
      {
        base: "W",
        chars: "\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
      },
      {
        base: "X",
        chars: "\u24CD\uFF38\u1E8A\u1E8C"
      },
      {
        base: "Y",
        chars: "\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
      },
      {
        base: "Z",
        chars: "\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
      },
      {
        base: "a",
        chars: "\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250\u0251"
      },
      {
        base: "aa",
        chars: "\uA733"
      },
      {
        base: "ae",
        chars: "\xE6\u01FD\u01E3"
      },
      {
        base: "ao",
        chars: "\uA735"
      },
      {
        base: "au",
        chars: "\uA737"
      },
      {
        base: "av",
        chars: "\uA739\uA73B"
      },
      {
        base: "ay",
        chars: "\uA73D"
      },
      {
        base: "b",
        chars: "\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253\u0182"
      },
      {
        base: "c",
        chars: "\uFF43\u24D2\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
      },
      {
        base: "d",
        chars: "\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\u018B\u13E7\u0501\uA7AA"
      },
      {
        base: "dh",
        chars: "\xF0"
      },
      {
        base: "dz",
        chars: "\u01F3\u01C6"
      },
      {
        base: "e",
        chars: "\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u01DD"
      },
      {
        base: "f",
        chars: "\u24D5\uFF46\u1E1F\u0192"
      },
      {
        base: "ff",
        chars: "\uFB00"
      },
      {
        base: "fi",
        chars: "\uFB01"
      },
      {
        base: "fl",
        chars: "\uFB02"
      },
      {
        base: "ffi",
        chars: "\uFB03"
      },
      {
        base: "ffl",
        chars: "\uFB04"
      },
      {
        base: "g",
        chars: "\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\uA77F\u1D79"
      },
      {
        base: "h",
        chars: "\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
      },
      {
        base: "hv",
        chars: "\u0195"
      },
      {
        base: "i",
        chars: "\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
      },
      {
        base: "j",
        chars: "\u24D9\uFF4A\u0135\u01F0\u0249"
      },
      {
        base: "k",
        chars: "\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
      },
      {
        base: "l",
        chars: "\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747\u026D"
      },
      {
        base: "lj",
        chars: "\u01C9"
      },
      {
        base: "m",
        chars: "\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
      },
      {
        base: "n",
        chars: "\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5\u043B\u0509"
      },
      {
        base: "nj",
        chars: "\u01CC"
      },
      {
        base: "o",
        chars: "\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\uA74B\uA74D\u0275\u0254\u1D11"
      },
      {
        base: "oe",
        chars: "\u0153"
      },
      {
        base: "oi",
        chars: "\u01A3"
      },
      {
        base: "oo",
        chars: "\uA74F"
      },
      {
        base: "ou",
        chars: "\u0223"
      },
      {
        base: "p",
        chars: "\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755\u03C1"
      },
      {
        base: "q",
        chars: "\u24E0\uFF51\u024B\uA757\uA759"
      },
      {
        base: "r",
        chars: "\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
      },
      {
        base: "s",
        chars: "\u24E2\uFF53\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B\u0282"
      },
      {
        base: "ss",
        chars: "\xDF"
      },
      {
        base: "t",
        chars: "\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
      },
      {
        base: "th",
        chars: "\xFE"
      },
      {
        base: "tz",
        chars: "\uA729"
      },
      {
        base: "u",
        chars: "\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
      },
      {
        base: "v",
        chars: "\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
      },
      {
        base: "vy",
        chars: "\uA761"
      },
      {
        base: "w",
        chars: "\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
      },
      {
        base: "x",
        chars: "\u24E7\uFF58\u1E8B\u1E8D"
      },
      {
        base: "y",
        chars: "\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
      },
      {
        base: "z",
        chars: "\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
      }
    ];
    var diacriticsMap = {};
    for (i = 0; i < replacementList.length; i += 1) {
      chars = replacementList[i].chars;
      for (j = 0; j < chars.length; j += 1) {
        diacriticsMap[chars[j]] = replacementList[i].base;
      }
    }
    var chars;
    var j;
    var i;
    function removeDiacritics2(str) {
      return str.replace(/[^\u0000-\u007e]/g, function(c) {
        return diacriticsMap[c] || c;
      });
    }
    exports.replacementList = replacementList;
    exports.diacriticsMap = diacriticsMap;
  }
});

// src/node/markdown/plugins/containers.ts
var import_markdown_it_container = __toESM(require_markdown_it_container(), 1);
var containerPlugin = (md) => {
  md.use(...createContainer("tip", "TIP", md)).use(...createContainer("info", "INFO", md)).use(...createContainer("warning", "WARNING", md)).use(...createContainer("danger", "DANGER", md)).use(...createContainer("details", "Details", md)).use(import_markdown_it_container.default, "v-pre", {
    render: (tokens, idx) => tokens[idx].nesting === 1 ? `<div v-pre>
` : `</div>
`
  }).use(import_markdown_it_container.default, "raw", {
    render: (tokens, idx) => tokens[idx].nesting === 1 ? `<div class="vp-raw">
` : `</div>
`
  });
};
function createContainer(klass, defaultTitle, md) {
  return [
    import_markdown_it_container.default,
    klass,
    {
      render(tokens, idx) {
        const token = tokens[idx];
        const info = token.info.trim().slice(klass.length).trim();
        if (token.nesting === 1) {
          const title = md.renderInline(info || defaultTitle);
          if (klass === "details") {
            return `<details class="${klass} custom-block"><summary>${title}</summary>
`;
          }
          return `<div class="${klass} custom-block"><p class="custom-block-title">${title}</p>
`;
        } else {
          return klass === "details" ? `</details>
` : `</div>
`;
        }
      }
    }
  ];
}

// src/node/markdown/plugins/highlight.ts
var import_shiki = __toESM(require_dist(), 1);
var attrsToLines = (attrs) => {
  const result = [];
  if (!attrs.trim()) {
    return [];
  }
  attrs.split(",").map((v) => v.split("-").map((v2) => parseInt(v2, 10))).forEach(([start, end]) => {
    if (start && end) {
      result.push(
        ...Array.from({ length: end - start + 1 }, (_, i) => start + i)
      );
    } else {
      result.push(start);
    }
  });
  return result.map((v) => ({
    line: v,
    classes: ["highlighted"]
  }));
};
async function highlight(theme = "material-palenight") {
  const hasSingleTheme = typeof theme === "string" || "name" in theme;
  const getThemeName = (themeValue) => typeof themeValue === "string" ? themeValue : themeValue.name;
  const highlighter = await (0, import_shiki.getHighlighter)({
    themes: hasSingleTheme ? [theme] : [theme.dark, theme.light]
  });
  const preRE = /^<pre.*?>/;
  const vueRE = /-vue$/;
  return (str, lang, attrs) => {
    const vPre = vueRE.test(lang) ? "" : "v-pre";
    lang = lang.replace(vueRE, "").toLowerCase();
    const lineOptions = attrsToLines(attrs);
    if (hasSingleTheme) {
      return highlighter.codeToHtml(str, { lang, lineOptions, theme: getThemeName(theme) }).replace(preRE, `<pre ${vPre}>`);
    }
    const dark = highlighter.codeToHtml(str, { lang, lineOptions, theme: getThemeName(theme.dark) }).replace(preRE, `<pre ${vPre} class="vp-code-dark">`);
    const light = highlighter.codeToHtml(str, { lang, lineOptions, theme: getThemeName(theme.light) }).replace(preRE, `<pre ${vPre} class="vp-code-light">`);
    return dark + light;
  };
}

// src/node/markdown/plugins/highlightLines.ts
var RE = /{([\d,-]+)}/;
var highlightLinePlugin = (md) => {
  const fence = md.renderer.rules.fence;
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args;
    const token = tokens[idx];
    const attr = token.attrs && token.attrs[0];
    let lines = null;
    if (!attr) {
      const rawInfo = token.info;
      if (!rawInfo || !RE.test(rawInfo)) {
        return fence(...args);
      }
      const langName = rawInfo.replace(RE, "").trim();
      token.info = langName;
      lines = RE.exec(rawInfo)[1];
    }
    if (!lines) {
      lines = attr[0];
      if (!lines || !/[\d,-]+/.test(lines)) {
        return fence(...args);
      }
    }
    token.info += " " + lines;
    return fence(...args);
  };
};

// src/node/markdown/plugins/lineNumbers.ts
var lineNumberPlugin = (md) => {
  const fence = md.renderer.rules.fence;
  md.renderer.rules.fence = (...args) => {
    const rawCode = fence(...args);
    const code = rawCode.slice(
      rawCode.indexOf("<code>"),
      rawCode.indexOf("</code>")
    );
    const lines = code.split("\n");
    const lineNumbersCode = [...Array(lines.length - 1)].map((line, index) => `<span class="line-number">${index + 1}</span><br>`).join("");
    const lineNumbersWrapperCode = `<div class="line-numbers-wrapper">${lineNumbersCode}</div>`;
    const finalCode = rawCode.replace(/<\/div>$/, `${lineNumbersWrapperCode}</div>`).replace(/"(language-[-\w]*)"/, '"$1 line-numbers-mode"');
    return finalCode;
  };
};

// src/node/markdown/plugins/image.ts
var EXTERNAL_URL_RE = /^[a-z]+:/i;
var imagePlugin = (md) => {
  const imageRule = md.renderer.rules.image;
  md.renderer.rules.image = (tokens, idx, options, env, self2) => {
    const token = tokens[idx];
    let url = token.attrGet("src");
    if (url && !EXTERNAL_URL_RE.test(url)) {
      if (!/^\.?\//.test(url))
        url = "./" + url;
      token.attrSet("src", decodeURIComponent(url));
    }
    return imageRule(tokens, idx, options, env, self2);
  };
};

// src/node/markdown/plugins/link.ts
import { URL } from "url";
var EXTERNAL_URL_RE2 = /^[a-z]+:/i;
var indexRE = /(^|.*\/)index.md(#?.*)$/i;
var linkPlugin = (md, externalAttrs, base) => {
  md.renderer.rules.link_open = (tokens, idx, options, env, self2) => {
    const token = tokens[idx];
    const hrefIndex = token.attrIndex("href");
    if (hrefIndex >= 0) {
      const hrefAttr = token.attrs[hrefIndex];
      const url = hrefAttr[1];
      const isExternal = EXTERNAL_URL_RE2.test(url);
      if (isExternal) {
        Object.entries(externalAttrs).forEach(([key, val]) => {
          token.attrSet(key, val);
        });
        if (url.replace(EXTERNAL_URL_RE2, "").startsWith("//localhost:")) {
          pushLink(url, env);
        }
      } else if (!url.startsWith("#") && !url.startsWith("mailto:") && !/\.(?!html|md)\w+($|\?)/i.test(url)) {
        normalizeHref(hrefAttr, env);
      }
      hrefAttr[1] = hrefAttr[1].replace(/\bimport\.meta/g, "import%2Emeta").replace(/\bprocess\.env/g, "process%2Eenv");
    }
    return self2.renderToken(tokens, idx, options);
  };
  function normalizeHref(hrefAttr, env) {
    let url = hrefAttr[1];
    const indexMatch = url.match(indexRE);
    if (indexMatch) {
      const [, path2, hash] = indexMatch;
      url = path2 + hash;
    } else {
      let cleanUrl = url.replace(/[?#].*$/, "");
      if (cleanUrl.endsWith(".md")) {
        cleanUrl = cleanUrl.replace(
          /\.md$/,
          env.cleanUrls === "disabled" ? ".html" : ""
        );
      }
      if (env.cleanUrls === "disabled" && !cleanUrl.endsWith(".html") && !cleanUrl.endsWith("/")) {
        cleanUrl += ".html";
      }
      const parsed = new URL(url, "http://a.com");
      url = cleanUrl + parsed.search + parsed.hash;
    }
    if (!url.startsWith("/") && !/^\.\//.test(url)) {
      url = "./" + url;
    }
    pushLink(url.replace(/\.html$/, ""), env);
    if (url.startsWith("/")) {
      url = `${base}${url}`.replace(/\/+/g, "/");
    }
    hrefAttr[1] = decodeURI(url);
  }
  function pushLink(link, env) {
    const links = env.links || (env.links = []);
    links.push(link);
  }
};

// src/node/markdown/plugins/preWrapper.ts
var preWrapperPlugin = (md) => {
  const fence = md.renderer.rules.fence;
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx] = args;
    const lang = tokens[idx].info.trim().replace(/-vue$/, "");
    const rawCode = fence(...args);
    return `<div class="language-${lang}"><button class="copy"></button><span class="lang">${lang === "vue-html" ? "template" : lang}</span>${rawCode}</div>`;
  };
};

// src/node/markdown/plugins/slugify.ts
var import_diacritics = __toESM(require_diacritics(), 1);
var rControl = /[\u0000-\u001f]/g;
var rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'<>,.?/]+/g;
var slugify = (str) => {
  return (0, import_diacritics.remove)(str).replace(rControl, "").replace(rSpecial, "-").replace(/\-{2,}/g, "-").replace(/^\-+|\-+$/g, "").replace(/^(\d)/, "_$1").toLowerCase();
};

// src/node/markdown/plugins/snippet.ts
import fs from "fs";
import path from "path";
function dedent(text) {
  const wRegexp = /^([ \t]*)(.*)\n/gm;
  let match;
  let minIndentLength = null;
  while ((match = wRegexp.exec(text)) !== null) {
    const [indentation, content] = match.slice(1);
    if (!content)
      continue;
    const indentLength = indentation.length;
    if (indentLength > 0) {
      minIndentLength = minIndentLength !== null ? Math.min(minIndentLength, indentLength) : indentLength;
    } else
      break;
  }
  if (minIndentLength) {
    text = text.replace(
      new RegExp(`^[ 	]{${minIndentLength}}(.*)`, "gm"),
      "$1"
    );
  }
  return text;
}
function testLine(line, regexp, regionName, end = false) {
  const [full, tag, name] = regexp.exec(line.trim()) || [];
  return full && tag && name === regionName && tag.match(end ? /^[Ee]nd ?[rR]egion$/ : /^[rR]egion$/);
}
function findRegion(lines, regionName) {
  const regionRegexps = [
    /^\/\/ ?#?((?:end)?region) ([\w*-]+)$/,
    /^\/\* ?#((?:end)?region) ([\w*-]+) ?\*\/$/,
    /^#pragma ((?:end)?region) ([\w*-]+)$/,
    /^<!-- #?((?:end)?region) ([\w*-]+) -->$/,
    /^#((?:End )Region) ([\w*-]+)$/,
    /^::#((?:end)region) ([\w*-]+)$/,
    /^# ?((?:end)?region) ([\w*-]+)$/
  ];
  let regexp = null;
  let start = -1;
  for (const [lineId, line] of lines.entries()) {
    if (regexp === null) {
      for (const reg of regionRegexps) {
        if (testLine(line, reg, regionName)) {
          start = lineId + 1;
          regexp = reg;
          break;
        }
      }
    } else if (testLine(line, regexp, regionName, true)) {
      return { start, end: lineId, regexp };
    }
  }
  return null;
}
var snippetPlugin = (md, srcDir) => {
  const parser = (state, startLine, endLine, silent) => {
    const CH = "<".charCodeAt(0);
    const pos = state.bMarks[startLine] + state.tShift[startLine];
    const max = state.eMarks[startLine];
    if (state.sCount[startLine] - state.blkIndent >= 4) {
      return false;
    }
    for (let i = 0; i < 3; ++i) {
      const ch = state.src.charCodeAt(pos + i);
      if (ch !== CH || pos + i >= max)
        return false;
    }
    if (silent) {
      return true;
    }
    const start = pos + 3;
    const end = state.skipSpacesBack(max, pos);
    const rawPathRegexp = /^(.+(?:\.([a-z]+)))(?:(#[\w-]+))?(?: ?(?:{(\d+(?:[,-]\d+)*)? ?(\S+)?}))?$/;
    const rawPath = state.src.slice(start, end).trim().replace(/^@/, srcDir).trim();
    const [filename = "", extension = "", region = "", lines = "", lang = ""] = (rawPathRegexp.exec(rawPath) || []).slice(1);
    state.line = startLine + 1;
    const token = state.push("fence", "code", 0);
    token.info = `${lang || extension}${lines ? `{${lines}}` : ""}`;
    token.src = path.resolve(filename) + region;
    token.markup = "```";
    token.map = [startLine, startLine + 1];
    return true;
  };
  const fence = md.renderer.rules.fence;
  md.renderer.rules.fence = (...args) => {
    const [tokens, idx, , { loader }] = args;
    const token = tokens[idx];
    const tokenSrc = token.src;
    const [src, regionName] = tokenSrc ? tokenSrc.split("#") : [""];
    if (src) {
      if (loader) {
        loader.addDependency(src);
      }
      const isAFile = fs.lstatSync(src).isFile();
      if (fs.existsSync(src) && isAFile) {
        let content = fs.readFileSync(src, "utf8");
        if (regionName) {
          const lines = content.split(/\r?\n/);
          const region = findRegion(lines, regionName);
          if (region) {
            content = dedent(
              lines.slice(region.start, region.end).filter((line) => !region.regexp.test(line.trim())).join("\n")
            );
          }
        }
        token.content = content;
      } else {
        token.content = isAFile ? `Code snippet path not found: ${src}` : `Invalid code snippet option`;
        token.info = "";
      }
    }
    return fence(...args);
  };
  md.block.ruler.before("fence", "snippet", parser);
};
export {
  containerPlugin,
  highlight,
  highlightLinePlugin,
  imagePlugin,
  lineNumberPlugin,
  linkPlugin,
  preWrapperPlugin,
  slugify,
  snippetPlugin
};
