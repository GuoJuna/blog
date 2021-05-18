(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{576:function(t,r,e){"use strict";e.r(r);var o=e(4),a=Object(o.a)({},(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("在信息爆炸时代，如何避免持续性信息过剩，使自己变得专注而不是被纷繁的信息所累？每天会看到各种各样的新闻，各种新潮的技术层出不穷，如何筛选出自己所关心的？")]),t._v(" "),e("p",[t._v("各位看官会想，我们是来看开源软件的，你给我扯什么信息干嘛，别着急，听我慢慢道来。")]),t._v(" "),e("h2",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),e("p",[t._v("浏览器收藏夹应该是我们在收藏文章、网站的第一个利器，平时遇到喜欢的网站或者文章很方便的收藏到收藏夹中；很快我们的收藏夹就满了，于是就像我这样,创建文件夹来分组两层、三层都有：")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://www.guojuna.github.io/assets/images/2016/favorites_chrome.jpg",alt:"favorites_chrome"}})]),t._v(" "),e("p",[t._v("有的也会借助百度首页导航这样的一些功能来整理自己收藏的网站，以前我记得 QQ 还有一款产品叫做网络收藏夹，用过一段时间，后来 QQ 也把这款产品给淘汰了；也尝试了去用印象笔记、有道笔记这些产品，这些产品都偏向收藏一些具体的文章或者自己整理的日志信息方面。")]),t._v(" "),e("p",[t._v("当浏览器收藏夹收藏的网站或者文章在一百份以内的时候收藏和查找问题都不是特别大。当收藏大于1000份的时候，去查找自己收藏的内容绝对是个体力活，另外还有一些文章我仅仅只是暂时保存下来，准备随后找时间看看就行，也需要收藏、整理、删除的时候就很麻烦。")]),t._v(" "),e("h2",{attrs:{id:"产品介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#产品介绍"}},[t._v("#")]),t._v(" 产品介绍")]),t._v(" "),e("p",[t._v("于是在这样的背景下，我就想着需要做这么一款产品，可以方便随时随地的收藏我喜欢的文章或者网站，方便整理，我日后需要的时候非常方便的去检索，另外如果可以的话，我是否可以分享我自己收藏的文章或者网站，同时也可以看看大牛们或者是同行都收藏了什么文章我是否感兴趣，于是就开发了这么一款产品:"),e("strong",[t._v("云收藏")])]),t._v(" "),e("p",[t._v("核心功能点：")]),t._v(" "),e("ul",[e("li",[t._v("收藏、分类、检索文章")]),t._v(" "),e("li",[t._v("导出、导出（包活从浏览器中）")]),t._v(" "),e("li",[t._v("可以点赞、分享、讨论")]),t._v(" "),e("li",[t._v("注册、登录、个人账户")]),t._v(" "),e("li",[t._v("临时收藏、查看别人收藏")]),t._v(" "),e("li",[t._v("其它...")])]),t._v(" "),e("p",[t._v("放产品一些截图:")]),t._v(" "),e("p",[t._v("主页"),e("br"),t._v(" "),e("img",{attrs:{src:"https://www.guojuna.github.io/assets/images/2016/favorites_index.png",alt:"favorites_chrome"}})]),t._v(" "),e("p",[t._v("注册"),e("br"),t._v(" "),e("img",{attrs:{src:"https://www.guojuna.github.io/assets/images/2016/favorites_register.png",alt:"favorites_chrome"}})]),t._v(" "),e("p",[t._v("首页"),e("br"),t._v(" "),e("img",{attrs:{src:"https://www.guojuna.github.io/assets/images/2016/favorites_home.png",alt:"favorites_chrome"}})]),t._v(" "),e("p",[t._v("收藏"),e("br"),t._v(" "),e("img",{attrs:{src:"https://www.guojuna.github.io/assets/images/2016/favorites_collect.png",alt:"favorites_chrome"}})]),t._v(" "),e("h2",{attrs:{id:"技术点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#技术点"}},[t._v("#")]),t._v(" 技术点")]),t._v(" "),e("p",[t._v("这段时间我们团队主要在学习 Spring Boot,这个开源项目也就成了我们的练习新技术的一个非常好的产品，主要的技术都是和 Spring Boot相关，可以参考我以前文章 "),e("a",{attrs:{href:"https://www.guojuna.github.io/spring-boot.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Boot 系列文章"),e("OutboundLink")],1)]),t._v(" "),e("h3",{attrs:{id:"网页端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网页端"}},[t._v("#")]),t._v(" 网页端")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://cloudfavorites.github.io/favorites-web/",target:"_blank",rel:"noopener noreferrer"}},[t._v("网页端收藏夹主页"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[t._v("收藏快捷图标")])]),t._v(" "),e("p",[t._v("这个是收藏的最关键一步，一段js代码，拖入到浏览器的收藏夹，每次点击收藏的时候负责读取网站的 title、描述、网址等信息，并且提交到收藏的页面")]),t._v(" "),e("p",[e("strong",[t._v("前端")])]),t._v(" "),e("p",[t._v("前端页面由"),e("a",{attrs:{href:"https://wrapbootstrap.com/theme/angle-bootstrap-admin-template-WB04HF123",target:"_blank",rel:"noopener noreferrer"}},[t._v("Angle - Bootstrap Admin theme"),e("OutboundLink")],1),t._v("这套主题改造而来;模版引擎使用了"),e("code",[t._v("thymeleaf")]),t._v("，可以参考这篇文章："),e("a",{attrs:{href:"https://www.guojuna.github.io/SpringBoot/2016/05/01/spring-boot-thymeleaf.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Boot(四)：Thymeleaf 使用详解"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[t._v("持久层")])]),t._v(" "),e("p",[t._v("数据库主要使用了 Spring Data Jpa 模版来实现，可以参考这篇文章："),e("a",{attrs:{href:"https://www.guojuna.github.io/SpringBoot/2016/08/20/spring-boo-jpa.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Boot(五)：Spring Data Jpa 的使用"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[t._v("session")])]),t._v(" "),e("p",[t._v("session 使用持久化技术来保存登录状态，登录一次保持需要会话30天，主要是依赖 Redis 来实现，参考："),e("a",{attrs:{href:"https://www.guojuna.github.io/SpringBoot/2016/03/06/spring-boot-redis.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring Boot(三)：Spring Boot 中 Redis 的使用"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[t._v("其它")])]),t._v(" "),e("p",[t._v("使用"),e("code",[t._v("grade")]),t._v("做为项目的构建工具、使用了一点"),e("code",[t._v("webjars")]),t._v("、"),e("code",[t._v("vuejs")]),t._v("、"),e("code",[t._v("Jsoup")]),t._v("、"),e("code",[t._v("Scheduled")]),t._v(" ...")]),t._v(" "),e("h3",{attrs:{id:"客户端"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#客户端"}},[t._v("#")]),t._v(" 客户端")]),t._v(" "),e("p",[t._v("客户端技术使用 react native 来开发安卓和 IOS 的 app，目前还在开发中，完成之后也会开源出来。")]),t._v(" "),e("h2",{attrs:{id:"未来计划做的内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#未来计划做的内容"}},[t._v("#")]),t._v(" 未来计划做的内容")]),t._v(" "),e("p",[t._v("这个开源产品暂时只是开源了我们 Web 端产品，安卓端、IOS 端内容的开发还在进行中。")]),t._v(" "),e("p",[t._v("未来我们还会持续的来完善这些产品，做一些有意思的小功能，以下可能是我们近期准备要做的")]),t._v(" "),e("ul",[e("li",[t._v("可以自定义个人收藏页面")]),t._v(" "),e("li",[t._v("无登录可以查看热门收藏内容")]),t._v(" "),e("li",[t._v("首页展示热门收藏家")]),t._v(" "),e("li",[t._v("小纸条")]),t._v(" "),e("li",[t._v("智能推荐")]),t._v(" "),e("li",[t._v("其它...")])]),t._v(" "),e("p",[t._v("大家有什么更好玩想法，也可以在建议给我们")]),t._v(" "),e("p",[e("strong",[t._v("产品主页")])]),t._v(" "),e("p",[e("a",{attrs:{href:"https://favorites.ren/",target:"_blank",rel:"noopener noreferrer"}},[t._v("产品地址"),e("OutboundLink")],1),e("br"),t._v(" "),e("a",{attrs:{href:"https://cloudfavorites.github.io/favorites-web/",target:"_blank",rel:"noopener noreferrer"}},[t._v("源码地址"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("strong",[e("a",{attrs:{href:"https://github.com/cloudfavorites/favorites-web",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例代码-github"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("strong",[e("a",{attrs:{href:"https://gitee.com/ityouknow/favorites-web",target:"_blank",rel:"noopener noreferrer"}},[t._v("示例代码-码云"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=a.exports}}]);