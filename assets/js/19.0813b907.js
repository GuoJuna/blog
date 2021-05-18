(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{520:function(t,e,a){"use strict";a.r(e);var r=a(4),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("在互联网领域，每个信息资源都有统一的且在网上唯一的地址，该地址就叫 URL（Uniform Resource Locator，统一资源定位符），它是互联网的统一资源定位标志，也就是指网络地址。")]),t._v(" "),a("p",[t._v("URL 本质上就是一个特殊格式的字符串。一个标准的 URL 格式可以包含如下的几个部分：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("protocol://username:password@host:port/path?key=value&key=value\n")])])]),a("ul",[a("li",[a("p",[t._v("protocol：URL 的协议。我们常见的就是 HTTP 协议和 HTTPS 协议，当然，还有其他协议，如 FTP 协议、SMTP 协议等。")])]),t._v(" "),a("li",[a("p",[t._v("username/password：用户名/密码。 HTTP Basic Authentication 中多会使用在 URL 的协议之后直接携带用户名和密码的方式。")])]),t._v(" "),a("li",[a("p",[t._v("host/port：主机/端口。在实践中一般会使用域名，而不是使用具体的 host 和 port。")])]),t._v(" "),a("li",[a("p",[t._v("path：请求的路径。")])]),t._v(" "),a("li",[a("p",[t._v("parameters：参数键值对。一般在 GET 请求中会将参数放到 URL 中，POST 请求会将参数放到请求体中。")])])]),t._v(" "),a("p",[t._v("URL 是整个 Dubbo 中非常基础，也是非常核心的一个组件，阅读源码的过程中你会发现很多方法都是以 URL 作为参数的，在方法内部解析传入的 URL 得到有用的参数，所以有人将 URL 称为Dubbo 的配置总线。")]),t._v(" "),a("h2",{attrs:{id:"dubbo-中的-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dubbo-中的-url"}},[t._v("#")]),t._v(" Dubbo 中的 URL")]),t._v(" "),a("p",[t._v("Dubbo 中任意的一个实现都可以抽象为一个 URL，Dubbo 使用 URL 来统一描述了所有对象和配置信息，并贯穿在整个 Dubbo 框架之中。这里我们来看 Dubbo 中一个典型 URL 的示例，如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dubbo://172.17.32.91:20880/org.apache.dubbo.demo.DemoService?anyhost=true&application=dubbo-demo-api-provider&dubbo=2.0.2&interface=org.apache.dubbo.demo.DemoService&methods=sayHello,sayHelloAsync&pid=32508&release=&side=provider&timestamp=1593253404714dubbo://172.17.32.91:20880/org.apache.dubbo.demo.DemoService?anyhost=true&application=dubbo-demo-api-provider&dubbo=2.0.2&interface=org.apache.dubbo.demo.DemoService&methods=sayHello,sayHelloAsync&pid=32508&release=&side=provider&timestamp=1593253404714\n")])])]),a("ul",[a("li",[a("p",[t._v("protocol：dubbo 协议。")])]),t._v(" "),a("li",[a("p",[t._v("username/password：没有用户名和密码。")])]),t._v(" "),a("li",[a("p",[t._v("host/port：172.17.32.91:20880。")])]),t._v(" "),a("li",[a("p",[t._v("path：org.apache.dubbo.demo.DemoService。")])]),t._v(" "),a("li",[a("p",[t._v("parameters：参数键值对，这里是问号后面的参数。\n下面是 URL 的构造方法，你可以看到其核心字段与前文分析的 URL 基本一致：")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('public URL(String protocol, \n            String username, \n            String password, \n            String host, \n            int port, \n            String path, \n            Map<String, String> parameters, \n            Map<String, Map<String, String>> methodParameters) { \n    if (StringUtils.isEmpty(username) \n            && StringUtils.isNotEmpty(password)) { \n        throw new IllegalArgumentException("Invalid url"); \n    } \n    this.protocol = protocol; \n    this.username = username; \n    this.password = password; \n    this.host = host; \n    this.port = Math.max(port, 0); \n    this.address = getAddress(this.host, this.port); \n    while (path != null && path.startsWith("/")) { \n        path = path.substring(1); \n    } \n    this.path = path; \n    if (parameters == null) { \n        parameters = new HashMap<>(); \n    } else { \n        parameters = new HashMap<>(parameters); \n    } \n    this.parameters = Collections.unmodifiableMap(parameters); \n    this.methodParameters = Collections.unmodifiableMap(methodParameters); \n}\n')])])]),a("p",[t._v("另外，在 dubbo-common 包中还提供了 URL 的辅助类：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("URLBuilder， 辅助构造 URL；")])]),t._v(" "),a("li",[a("p",[t._v("URLStrParser， 将字符串解析成 URL 对象。")])])]),t._v(" "),a("blockquote",[a("p",[t._v("对于 Dubbo 中的 URL，很多人称之为“配置总线”，也有人称之为“统一配置模型”。虽然说法不同，但都是在表达一个意思，URL 在 Dubbo 中被当作是“公共的契约”。一个 URL 可以包含非常多的扩展点参数，URL 作为上下文信息贯穿整个扩展点设计体系。")])]),t._v(" "),a("h2",{attrs:{id:"dubbo-中的-url-示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dubbo-中的-url-示例"}},[t._v("#")]),t._v(" Dubbo 中的 URL 示例")]),t._v(" "),a("h4",{attrs:{id:"_1-url-在-spi-中的应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-url-在-spi-中的应用"}},[t._v("#")]),t._v(" 1. URL 在 SPI 中的应用")]),t._v(" "),a("p",[t._v("Dubbo SPI 中有一个依赖 URL 的重要场景——适配器方法，是被 @Adaptive 注解标注的， URL 一个很重要的作用就是与 @Adaptive 注解一起选择合适的扩展实现类。")])])}),[],!1,null,null,null);e.default=s.exports}}]);