(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{635:function(s,a,t){"use strict";t.r(a);var e=t(4),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"一-什么事webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一-什么事webpack"}},[s._v("#")]),s._v(" 一. 什么事Webpack")]),s._v(" "),t("p",[s._v("Webpack 是一个前端资源加载/打包工具。它将根据模块的依赖关系进行静态分析，然后将这些模块按\n照指定的规则生成对应的静态资源。\nWebpack 可以将多种静态资源 js、css、less 转换成一个静态文件，减少了页面的\n请求。")]),s._v(" "),t("h2",{attrs:{id:"二-webpack-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二-webpack-安装"}},[s._v("#")]),s._v(" 二. Webpack 安装")]),s._v(" "),t("ol",[t("li",[s._v("全局安装")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm install -g webpack webpack-cli\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("安装后查看版本号")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("webpack -v\n")])])]),t("h2",{attrs:{id:"三-初始化项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三-初始化项目"}},[s._v("#")]),s._v(" 三. 初始化项目")]),s._v(" "),t("ol",[t("li",[s._v("创建webpack文件夹\n进入webpack目录,执行命令")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm init -y\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[t("p",[s._v("创建src文件夹")])]),s._v(" "),t("li",[t("p",[s._v("src下创建common.js")])])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("exports.info = function (str) {\n    document.write(str)\n}\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("src下创建utils.js")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("exports.add = function(a, b) {\n    return a + b\n}\n")])])]),t("ol",{attrs:{start:"5"}},[t("li",[s._v("src下创建main.js")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("const common = require('./common')\nconst utils = require('./utils')\n\ncommon.info('Hello world!' + utils.add(100, 200))\n")])])]),t("h2",{attrs:{id:"四-js打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#四-js打包"}},[s._v("#")]),s._v(" 四. JS打包")]),s._v(" "),t("ol",[t("li",[s._v("webpack目录下创建配置文件webpack.config.js"),t("br"),s._v("\n以下配置的意思是：读取当前项目目录下src文件夹中的main.js（入口文件）内容，分析资源依赖，把相\n关的js文件打包，打包后的文件放入当前目录的dist文件夹下，打包后的js文件名为bundle.js")])]),s._v(" "),t("div",{staticClass:"language-javascript 1.8 extra-class"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"path"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//Node.js内置模块")]),s._v("\nmodule"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n entry"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/main.js'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//配置入口文件")]),s._v("\n output"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n path"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./dist'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输出路径，__dirname：当前文件所在路径")]),s._v("\n filename"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'bundle.js'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//输出文件")]),s._v("\n "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("命令行执行编译命令")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("webpack #有黄色警告\nwebpack --mode=development #没有警告\n#执行后查看bundle.js 里面包含了上面两个js文件的内容并惊醒了代码压缩\n")])])]),t("p",[s._v("也可以配置项目的npm运行命令,修改package.json文件")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('"scripts" : {\n //...,\n "dev": "webpack --mode=development"\n }\n')])])]),t("p",[s._v("运行npm命令打包")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm run dev\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("webpack目录下创建index.html\n引用bundle.js")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<body>\n <script src="dist/bundle.js"><\/script>\n</body>\n')])])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("浏览器中查看index.html")])]),s._v(" "),t("h2",{attrs:{id:"五-css打包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#五-css打包"}},[s._v("#")]),s._v(" 五. CSS打包")]),s._v(" "),t("ol",[t("li",[s._v("安装style-loader和css-loader\nWebpack 本身只能处理 JavaScript 模块，如果要处理其他类型的文件，就需要使用 loader 进行转换。\nLoader 可以理解为是模块和资源的转换器。\n首先我们需要安装相关Loader插件，css-loader 是将 css 装载到 javascript；style-loader 是让 javascript\n认识css")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("npm install --save-dev style-loader css-loader\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("修改webpack.config.js")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("const path = require(\"path\"); //Node.js内置模块\n\nmodule.exports = {\n    //...,\n    module: {\n        rules: [\n            {\n                text: /\\.css$/,\n                use: ['style-loader', 'css-loader']\n            }\n        ]\n    }\n}\n'''\n\n3. 在src文件夹创建style.css\nbody{\n    background: pink\n}\n\n4. 修改main.js\n在一行引入style.css\n")])])]),t("p",[s._v("require('./style.css)")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\n5. 浏览器中查看index.html\n\n\n\n\n\n\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);