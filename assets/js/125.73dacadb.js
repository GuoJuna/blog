(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{624:function(s,t,a){"use strict";a.r(t);var e=a(4),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[s._v("#")]),s._v(" 快速上手")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("创建并进入一个新目录")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" blog-vue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" blog-vue\n")])])])]),s._v(" "),a("li",[a("p",[s._v("使用你喜欢的包管理器进行初始化")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" init "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm init")]),s._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://gitee.com/guojuna/images/raw/master/blog-img/2020/07/20200716143842.png",alt:"image-20200716142433430"}})])]),s._v(" "),a("li",[a("p",[s._v("将 VuePress 安装为本地依赖")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -D vuepress "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm install -D vuepress")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("创建你的第一篇文档")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" docs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'# Hello VuePress'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" docs/README.md\n")])])])]),s._v(" "),a("li",[a("p",[s._v("在 "),a("code",[s._v("package.json")]),s._v(" 中添加一些 "),a("a",{attrs:{href:"https://classic.yarnpkg.com/zh-Hans/docs/package-json#toc-scripts",target:"_blank",rel:"noopener noreferrer"}},[s._v("scripts"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('{\n  "scripts": {\n    "docs:dev": "vuepress dev docs",\n    "docs:build": "vuepress build docs"\n  }\n}\n')])])])]),s._v(" "),a("li",[a("p",[s._v("在本地启动服务器")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" docs:dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm run docs:dev")]),s._v("\n")])])]),a("p",[s._v("VuePress 会在 "),a("a",{attrs:{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://localhost:8080"),a("OutboundLink")],1),s._v(" 启动一个热重载的开发服务器。")])]),s._v(" "),a("li",[a("p",[s._v("创建目录结构")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/guojuna/images/raw/master/blog-img/2020/07/20200716145724.png",alt:"image-20200716145724569"}})])]),s._v(" "),a("li",[a("p",[s._v("安装主题(https://vuepress-theme-reco.recoluan.com/views/1.x/)")]),s._v(" "),a("ul",[a("li",[s._v("安装")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" vuepress-theme-reco --save-dev\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yarn")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" vuepress-theme-reco\n")])])]),a("ul",[a("li",[s._v("引用并添加博客配置")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// .vuepress/config.js")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  theme"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'reco'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  themeConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 博客配置")]),s._v("\n    blogConfig"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      category"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        location"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在导航栏菜单中所占的位置，默认2")]),s._v("\n        text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Category'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认文案 “分类”")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      tag"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        location"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 在导航栏菜单中所占的位置，默认3")]),s._v("\n        text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Tag'")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 默认文案 “标签”")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" \n")])])])])]),s._v(" "),a("h2",{attrs:{id:"直接使用vuepress-theme-reco"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直接使用vuepress-theme-reco"}},[s._v("#")]),s._v(" 直接使用"),a("a",{attrs:{href:"https://github.com/vuepress-reco/vuepress-theme-reco",target:"_blank",rel:"noopener noreferrer"}},[s._v("vuepress-theme-reco"),a("OutboundLink")],1)]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @vuepress-reco/theme-cli -g\n\ntheme-cli init\n")])])]),a("h2",{attrs:{id:"添加评论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加评论"}},[s._v("#")]),s._v(" 添加评论")]),s._v(" "),a("ul",[a("li",[s._v("Vssue")])]),s._v(" "),a("div",{staticClass:"language-shell script extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("module.exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  theme: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'reco'")]),s._v(",\n  themeConfig: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n      vssueConfig: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        platform: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'github'")]),s._v(",\n        owner: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'OWNER_OF_REPO'")]),s._v(",\n        repo: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'NAME_OF_REPO'")]),s._v(",\n        clientId: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'YOUR_CLIENT_ID'")]),s._v(",\n        clientSecret: "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'YOUR_CLIENT_SECRET'")]),s._v(",\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("   \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("p",[s._v("其他参数参考"),a("a",{attrs:{href:"https://vssue.js.org/zh/options/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vssue官网"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);