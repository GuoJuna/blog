(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{633:function(t,a,s){"use strict";s.r(a);var e=s(4),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"一-简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#一-简介"}},[t._v("#")]),t._v(" 一.简介")]),t._v(" "),s("h4",{attrs:{id:"什么是node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是node-js"}},[t._v("#")]),t._v(" 什么是Node.js")]),t._v(" "),s("p",[t._v("简单的说 Node.js 就是运行在服务端的 JavaScript。\nNode.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度\n非常快，性能非常好。")]),t._v(" "),s("h4",{attrs:{id:"node-js有什么用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#node-js有什么用"}},[t._v("#")]),t._v(" Node.js有什么用")]),t._v(" "),s("p",[t._v("如果你是一个前端程序员，你不懂得像PHP、Python或Ruby等动态编程语言，然后你想创建自己的服\n务，那么Node.js是一个非常好的选择。\nNode.js 是运行在服务端的 JavaScript，如果你熟悉Javascript，那么你将会很容易的学会Node.js。\n当然，如果你是后端程序员，想部署一些高性能的服务，那么学习Node.js也是一个非常好的选择。")]),t._v(" "),s("h2",{attrs:{id:"二-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-安装"}},[t._v("#")]),t._v(" 二.安装")]),t._v(" "),s("h4",{attrs:{id:"下载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[t._v("#")]),t._v(" 下载")]),t._v(" "),s("ul",[s("li",[t._v("官网：https://nodejs.org/en/")]),t._v(" "),s("li",[t._v("中文网：http://nodejs.cn/")]),t._v(" "),s("li",[t._v("LTS：长期支持版本")]),t._v(" "),s("li",[t._v("Current：最新版")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("下载安装包")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("wget https://nodejs.org/dist/v14.15.1/node-v14.15.1-linux-x64.tar.xz\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("解压安装包")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("tar -zxvf node-v14.15.1-linux-x64.tar.xz\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("配置环境变量")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("vi /etc/profile\n")])])]),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("NODE_HOME=/deploy/dev/node-v14.15.1-linux-x64\nexport NODE_HOME\nexport PATH=${PATH}:${NODR_HOME}/bin\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("刷新环境变量")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("source /etc/profile\n")])])]),s("ol",{attrs:{start:"5"}},[s("li",[t._v("检查版本")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("node -v\n")])])]),s("ol",{attrs:{start:"6"}},[s("li",[t._v("使用淘宝镜像")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm install -g cnpm --registry=https://registry.npm.taobao.org\n")])])])])]),t._v(" "),s("h2",{attrs:{id:"三-快速入门"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-快速入门"}},[t._v("#")]),t._v(" 三.快速入门")]),t._v(" "),s("h4",{attrs:{id:"简单示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简单示例"}},[t._v("#")]),t._v(" 简单示例")]),t._v(" "),s("p",[t._v("创建01.js文件")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("console.log('Hello Node.js')\n")])])]),s("p",[t._v("然后终端输入")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("node 01.js\n")])])]),s("h4",{attrs:{id:"服务器端应用开发"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务器端应用开发"}},[t._v("#")]),t._v(" 服务器端应用开发")]),t._v(" "),s("p",[t._v("创建server-app.js")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("const http = require('http');\nhttp.createServer(function (request, response) {\n // 发送 HTTP 头部\n // HTTP 状态值: 200 : OK\n // 内容类型: text/plain\n response.writeHead(200, {'Content-Type': 'text/plain'});\n // 发送响应数据 \"Hello World\"\n response.end('Hello Server');\n}).listen(8888);\n// 终端打印如下信息\nconsole.log('Server running at http://127.0.0.1:8888/');\n")])])]),s("p",[t._v("运行服务器程序")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("node server-app.js\n")])])]),s("p",[t._v("服务器启动成功后，在浏览器中输入：http://localhost:8888/ 查看webserver成功运行，并输出html页面\n停止服务：ctrl + c")])])}),[],!1,null,null,null);a.default=r.exports}}]);