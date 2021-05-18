(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{545:function(t,s,v){"use strict";v.r(s);var _=v(4),a=Object(_.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"背景"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" 背景")]),t._v(" "),v("p",[t._v("http 通信存在以下问题：")]),t._v(" "),v("ul",[v("li",[t._v("通信使用明文可能会被窃听")]),t._v(" "),v("li",[t._v("不验证通信方的身份可能遭遇伪装")]),t._v(" "),v("li",[t._v("无法证明报文的完整型，可能已遭篡改")])]),t._v(" "),v("h2",{attrs:{id:"什么是https"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是https"}},[t._v("#")]),t._v(" 什么是https")]),t._v(" "),v("p",[t._v("简单来说， https 是 http + ssl，对 http  通信内容进行加密，是HTTP的安全版，是使用TLS/SSL加密的HTTP协议\nHttps的作用：")]),t._v(" "),v("ul",[v("li",[t._v("内容加密 建立一个信息安全通道，来保证数据传输的安全；")]),t._v(" "),v("li",[t._v("身份认证 确认网站的真实性")]),t._v(" "),v("li",[t._v("数据完整性 防止内容被第三方冒充或者篡改")])]),t._v(" "),v("h2",{attrs:{id:"什么是ssl"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是ssl"}},[t._v("#")]),t._v(" 什么是SSL")]),t._v(" "),v("p",[t._v("SSL 由 Netscape 公司于1994年创建，它旨在通过Web创建安全的Internet通信。它是一种标准协议，用于加密浏览器和服务器之间的通信。它允许通过Internet安全轻松地传输账号密码、银行卡、手机号等私密信息。")]),t._v(" "),v("p",[t._v("SSL证书就是遵守SSL协议，由受信任的CA机构颁发的数字证书。")]),t._v(" "),v("p",[t._v("SSL/TLS的工作原理:")]),t._v(" "),v("p",[t._v("需要理解SSL/TLS的工作原理，我们需要掌握加密算法。加密算法有两种：对称加密和非对称加密：")]),t._v(" "),v("ul",[v("li",[t._v("对称加密：通信双方使用相同的密钥进行加密。特点是加密速度快，但是缺点是需要保护好密钥，如果密钥泄露的话，那么加密就会被别人pojie。常见的对称加密有AES，DES算法。")]),t._v(" "),v("li",[t._v("非对称加密：它需要生成两个密钥：公钥(Public Key)和私钥(Private Key)。")])]),t._v(" "),v("h2",{attrs:{id:"https的连接过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https的连接过程"}},[t._v("#")]),t._v(" Https的连接过程")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/guojuna/images/raw/master/blog-img/2020/08/20200810095453.png",alt:"image-20200810095453900"}})]),t._v(" "),v("p",[t._v("https 的连接过程大概分为两个阶段，证书验证阶段和数据传输阶段")]),t._v(" "),v("h4",{attrs:{id:"证书验证阶段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#证书验证阶段"}},[t._v("#")]),t._v(" 证书验证阶段")]),t._v(" "),v("p",[t._v("大概分为三个步骤")]),t._v(" "),v("ol",[v("li",[t._v("浏览器发起请求")]),t._v(" "),v("li",[t._v("服务器接收到请求之后，会返回证书，包括公钥")]),t._v(" "),v("li",[t._v("浏览器接收到证书之后，会检验证书是否合法，不合法的话，会弹出告警提示（怎样验证合法，下文会详细解析，这里先忽略）")])]),t._v(" "),v("h4",{attrs:{id:"数据传输阶段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据传输阶段"}},[t._v("#")]),t._v(" 数据传输阶段")]),t._v(" "),v("p",[t._v("证书验证合法之后")]),t._v(" "),v("ol",[v("li",[t._v("浏览器会生成一个随机数，")]),t._v(" "),v("li",[t._v("使用公钥进行加密，发送给服务端")]),t._v(" "),v("li",[t._v("服务器收到浏览器发来的值，使用私钥进行解密")]),t._v(" "),v("li",[t._v("解析成功之后，使用对称加密算法进行加密，传输给客户端\n之后双方通信就使用第一步生成的随机数进行加密通信。")])]),t._v(" "),v("h2",{attrs:{id:"https的加密方式是怎样的，对称加密和非对称加密，为什么要这样设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https的加密方式是怎样的，对称加密和非对称加密，为什么要这样设计"}},[t._v("#")]),t._v(" https的加密方式是怎样的，对称加密和非对称加密，为什么要这样设计?")]),t._v(" "),v("p",[t._v("在证书验证阶段，使用非对称加密。\n在数据传输阶段，使用对称机密。")]),t._v(" "),v("p",[t._v("这样设计有一个好处，能最大程度得兼顾安全效率。")]),t._v(" "),v("p",[t._v("在证书验证阶段，使用非对称加密，需要公钥和私钥，假如浏览器的公钥泄漏了，我们还是能够确保随机数的安全，因为加密的数据只有用私钥才能解密。这样能最大程度确保随机数的安全。\n在内容传输阶段，使用对称机密，可以大大提高加解密的效率。")]),t._v(" "),v("h4",{attrs:{id:"内容传输为什么要使用对称机密"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内容传输为什么要使用对称机密"}},[t._v("#")]),t._v(" 内容传输为什么要使用对称机密")]),t._v(" "),v("ol",[v("li",[t._v("对称加密效率比较高")]),t._v(" "),v("li",[t._v("一对公私钥只能实现单向的加解密。只有服务端保存了私钥。如果使用非对称机密，相当于客户端必须有自己的私钥，这样设计的话，每个客户端都有自己的私钥，这很明显是不合理的，因为私钥是需要申请的。")])]),t._v(" "),v("h4",{attrs:{id:"https是绝对安全的吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https是绝对安全的吗"}},[t._v("#")]),t._v(" Https是绝对安全的吗")]),t._v(" "),v("p",[t._v("不是绝对安全的，可以通过中间人攻击。")]),t._v(" "),v("h4",{attrs:{id:"什么是中间人攻击"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是中间人攻击"}},[t._v("#")]),t._v(" 什么是中间人攻击")]),t._v(" "),v("p",[t._v("中间人攻击是指攻击者与通讯的两端分别创建独立的联系，并交换其所收到的数据，使通讯的两端认为他们正在通过一个私密的连接与对方直接对话，但事实上整个会话都被攻击者完全控制。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://gitee.com/guojuna/images/raw/master/blog-img/2020/08/20200810152122.png",alt:"image-20200810152122337"}})]),t._v(" "),v("h4",{attrs:{id:"https-是如何防止中间人攻击的"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https-是如何防止中间人攻击的"}},[t._v("#")]),t._v(" https 是如何防止中间人攻击的")]),t._v(" "),v("p",[t._v('在https中需要证书，证书的作用是为了防止"中间人攻击"的。 如果有个中间人M拦截客户端请求,然后M向客户端提供自己的公钥，M再向服务端请求公钥,作为"中介者" 这样客户端和服务端都不知道,信息已经被拦截获取了。这时候就需要证明服务端的公钥是正确的.')]),t._v(" "),v("p",[t._v("怎么证明呢?")]),t._v(" "),v("p",[t._v("就需要权威第三方机构来公正了.这个第三方机构就是CA. 也就是说CA是专门对公钥进行认证，进行担保的，也就是专门给公钥做担保的担保公司。 全球知名的CA也就100多个，这些CA都是全球都认可的，比如VeriSign、GlobalSign等，国内知名的CA有WoSign。")]),t._v(" "),v("h2",{attrs:{id:"https-可以抓包吗"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#https-可以抓包吗"}},[t._v("#")]),t._v(" https 可以抓包吗")]),t._v(" "),v("p",[t._v("HTTPS 的数据是加密的，常规下抓包工具代理请求后抓到的包内容是加密状态，无法直接查看。")]),t._v(" "),v("p",[t._v("HTTPS 可以防止用户在不知情的情况下通信链路被监听，对于主动授信的抓包操作是不提供防护的，因为这个场景用户是已经对风险知情。要防止被抓包，需要采用应用级的安全防护，例如采用私有的对称加密，同时做好移动端的防反编译加固，防止本地算法被破解。")])])}),[],!1,null,null,null);s.default=a.exports}}]);