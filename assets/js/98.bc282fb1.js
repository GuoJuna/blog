(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{597:function(o,t,r){"use strict";r.r(t);var n=r(4),i=Object(n.a)({},(function(){var o=this,t=o.$createElement,r=o._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":o.$parent.slotKey}},[r("h2",{attrs:{id:"微服务架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构"}},[o._v("#")]),o._v(" 微服务架构")]),o._v(" "),r("p",[o._v("微服务的诞生并非偶然，它是在互联网高速发展，技术日新月异的变化以及传统架构无法适应快速变化等多重因素的推动下诞生的产物。互联网时代的产品通常有两类特点：需求变化快和用户群体庞大，在这种情况下，如何从系统架构的角度出发，构建灵活、易扩展的系统，快速应对需求的变化；同时，随着用户的增加，如何保证系统的可伸缩性、高可用性，成为系统架构面临的挑战。")]),o._v(" "),r("p",[o._v("如果还按照以前传统开发模式，开发一个大型而全的系统已经很难满足市场对技术的需求，这时候分而治之的思想被提了出来，于是我们从单独架构发展到分布式架构，又从分布式架构发展到 SOA 架构，服务不断的被拆分和分解，粒度也越来越小，直到微服务架构的诞生。")]),o._v(" "),r("p",[o._v("微服务架构是 SOA 架构的传承，但一个最本质的区别就在于微服务是真正的分布式的、去中心化的。把所有的“思考”逻辑包括路由、消息解析等放在服务内部，去掉一个大一统的 ESB，服务间轻通信，是比 SOA 更彻底的拆分。微服务架构强调的重点是业务系统需要彻底的组件化和服务化，原有的单个业务系统会拆分为多个可以独立开发，设计，运行和运维的小应用，这些小应用之间通过服务完成交互和集成。")]),o._v(" "),r("p",[o._v("大约 2009 年开始，Netflix 完全重新定义了它的应用程序开发和操作模型，拉开了微服务探索的第一步，直到2014年3月 Martin Fowler 写的一篇文章 "),r("a",{attrs:{href:"https://martinfowler.com/articles/microservices.html",target:"_blank",rel:"noopener noreferrer"}},[o._v("Microservices"),r("OutboundLink")],1),o._v(" 以更加通俗易懂的形式为大家定义了什么是微服务架构。Martin Fowler 在文中阐述了对微服务架构的设想，认为微服务架构是一种架构模式，它提倡将单一应用程序划分成一组小的服务，服务之间互相协调、互相配合，为用户提供最终价值。")]),o._v(" "),r("p",[o._v("每个服务运行在其独立的进程中，服务和服务间采用轻量级的通信机制互相沟通（通常是基于 https 的 RESTful API）。每个服务都围绕着具体业务进行构建，并且能够被独立地部署到生产环境、类生产环境等。另外，应尽量避免统一的、集中式的服务管理机制，对具体的一个服务而言，应根据业务上下文，选择合适的语言、工具对其进行构建。")]),o._v(" "),r("h2",{attrs:{id:"微服务架构和数据治理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构和数据治理"}},[o._v("#")]),o._v(" 微服务架构和数据治理")]),o._v(" "),r("p",[o._v("随着微服务架构的落地，人们发现微服务架构虽然改进了开发模式，但同时也引入了一些问题，在这所有的问题中，最重要的也是马上要面临的一个问题就是数据的问题。在微服务架构中我们强调彻底的组件化和服务化，每个微服务都可以独立的部署和投产，其实也就意味着很多的微服务有自己独立的数据库。")]),o._v(" "),r("p",[o._v("整个业务数据被分散在各个子服务之后会带来两个最明显的问题：1、业务管理系统对数据完整的查询，比如分页查询、多条件查询等，数据被割裂后如何来整合？2、如何对数据进一步的分析挖掘？这些需求可能需要分析全量的数据，并且在分析时不能影响到当前业务。")]),o._v(" "),r("p",[o._v("从技术方案来讲，我们一般有两种选择来处理这些问题，第一种是在线处理数据，第二种是离线处理数据。")]),o._v(" "),r("p",[o._v("在线处理数据的方案就是按照微服务的标准接口来进行，后端需要哪个系统的数据就去调用某个微服务提供的接口来获取。后端管理平台根据前端的需求去不同的微服务系统去获取数据，然后将返回的数据进行处理后将数据返回。这种方案有两个弊端：1）一方面微服务数据方需要提供数据接口，一方面数据的使用者需要去写调用方法，并且调用者需要编写大量的代码进行数据处理；2）在对各个微服务进行调取数据时会影响微服务的正常业务处理性能。")]),o._v(" "),r("p",[o._v("离线处理数据方案，就是将业务数据准实时的同步到另外一个数据库中，在同步的过程中进行数据整合处理，以满足业务方对数据的需求，数据同步过来后，再提供另外一个服务接口专业负责对外输出数据信息。这种方案有两个特点：1）数据同步方案是关键，技术选型有很多，如何选择切合公司业务的技术方案；2）离线数据处理对微服务正常业务处理没有影响。")]),o._v(" "),r("p",[o._v("在我以往的工作中两种方案都实施过，个人更倾向于使用第二种方案。")]),o._v(" "),r("h2",{attrs:{id:"mongdb-和数据分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mongdb-和数据分析"}},[o._v("#")]),o._v(" MongDB 和数据分析")]),o._v(" "),r("p",[o._v("MongoDB 称之为对开发人员最友好的数据库，不再强调传统关系数据库中的行和列，整个表可以看作一个 Json 文档，MongoDB 也被认为在 Nosql 中最像关系数据库的 Nosql 数据库，保留了类似关系数据库的数据库（DataBase）、集合（Collection）、文档对象（Document）。")]),o._v(" "),r("p",[o._v("MongoDB 是目前最热门非关系数据库的之一，在最新的数据库排行榜中 MongoDB 排名第五，在所有的非关系数据库中排名第一，非常广泛的应用于国内外的互联网公司。")]),o._v(" "),r("p",[o._v("MongoDB 最大的特点是支持的查询语言非常强大，其语法有点类似于面向对象的查询语言，几乎可以实现类似关系数据库单表查询的绝大部分功能，而且还支持对数据建立索引。MongoDB 在高可用和读写负载均衡上的实现非常简洁和友好，MongoDB 自带了副本集的概念，通过设计恰当的副本集和驱动程序，可以非常便地实现高可用、读写负载均衡。")]),o._v(" "),r("p",[o._v("MongoDB 的这些特性非常方便对数据进行高性能查询，MongoDB 支持 Aggregate 和 Mapreduce 利用分而治之的理念来处理大规模数据分析。Spring Boot 对 MongoDB 的支持非常友好，使用 Spring Boot 非常便利的处理对 MongoDB 查询和操作，Spring Boot 也提供了组件包来支持对 MongoDB的使用。")]),o._v(" "),r("p",[o._v("MongoDB 4.0 宣布将正式支持 ACID 事务，未来 MongoDB 的想象空间更加巨大！因此 MongDB + Spring Boot 是微服务架构中数据分析的理想选择之一。")]),o._v(" "),r("h2",{attrs:{id:"再来聊聊-spring-boot"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#再来聊聊-spring-boot"}},[o._v("#")]),o._v(" 再来聊聊 Spring Boot")]),o._v(" "),r("p",[o._v("Spring Boot 是由 Pivotal 团队提供的全新框架，其设计目的是用来简化新 Spring 应用的初始搭建以及开发过程。该框架使用了特定的方式来进行配置，从而使开发人员不再需要定义样板化的配置。采用 Spring Boot 可以大大的简化开发模式，所有你想集成的常用框架，它都有对应的组件支持。")]),o._v(" "),r("p",[o._v("Spring Boot 基于 Spring 开发，Spring Boot 本身并不提供 Spring 框架的核心特性以及扩展功能，只是用于快速、敏捷地开发新一代基于 Spring 框架的应用程序。也就是说，它并不是用来替代 Spring 的解决方案，而是和 Spring 框架紧密结合用于提升 Spring 开发者体验的工具。同时它集成了大量常用的第三方库配置（例如 Redis、MongoDB、Jpa、RabbitMQ、Quartz 等等），Spring Boot 应用中这些第三方库几乎可以零配置的开箱即用，大部分的 Spring Boot 应用都只需要非常少量的配置代码，开发者能够更加专注于业务逻辑。")]),o._v(" "),r("p",[o._v("Spring Boot 一经推出就受到开源社区的追捧，Spring Boot 官方提供了很多 Starters 方便集成第三方产品，很多主流的框架也纷纷进行了主动的集成，比如 Mybatis。Spring 官方非常重视 Spring Boot 的发展，在 Spring 官网首页进行重点推荐介绍，是目前 Spring 官方重点发展的项目之一。")]),o._v(" "),r("p",[r("img",{attrs:{src:"https://www.itmind.net/assets/images/2017/chat/spring.png",alt:""}})]),o._v(" "),r("p",[o._v("Spring Boot 本身发展特别快，自从 2014 年 4 月发布 Spring Boot 1.0 之后，版本更新非常频繁，我在 2016 年使用的时候是 1.3.X，到现在 Spring Boot 已经发布了 Spring Boot 2.0，Spring Boot 2.0 集成了很多最新优秀的技术和新特性，并且对 Spring Boot 1.0 的 API 进行了大幅优化。Spring Boot 一经推出就迅速的成为一门热门的技术，从下图也可以看出这个结论：")]),o._v(" "),r("p",[r("img",{attrs:{src:"https://www.itmind.net/assets/images/2018/SpringBoot/SpringBoot-hot.png",alt:""}})]),o._v(" "),r("p",[o._v("上图为2014年到2018年 Spring Boot 的百度指数，可以看出 Spring Boot 2.0 的推出引发了搜索高峰。")]),o._v(" "),r("h2",{attrs:{id:"spring-boot-和-微服务架构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-和-微服务架构"}},[o._v("#")]),o._v(" Spring Boot 和 微服务架构")]),o._v(" "),r("p",[o._v("随着 Spring 不断的发展，涉及的领域越来越多，项目整合开发需要配合各种各样的文件，慢慢变得不那么易用简单，违背了最初的理念，甚至人称配置地狱。Spring Boot 正是在这样的一个背景下被抽象出来的开发框架，目的为了让大家更容易的使用 Spring 、更容易的集成各种常用的中间件、开源软件；另一方面，Spring Boot 诞生时，正处于微服务概念在慢慢酝酿中，Spring Boot 的研发融合了微服务架构的理念，实现了在 Java 领域内微服务架构落地的技术支撑。")]),o._v(" "),r("p",[o._v("Spring Boot 作为一套全新的框架，来源于 Spring 大家族，因此 Spring 所有具备的功能它都有，而且更容易使用；Spring Boot 以约定大于配置的核心思想，默认帮我们进行了很多设置，多数 Spring Boot 应用只需要很少的 Spring 配置。Spring Boot 开发了很多的应用集成包，支持绝大多数开源软件，让我们以很低的成本去集成其他主流开源软件。")]),o._v(" "),r("p",[o._v("Spring Boot 特性：")]),o._v(" "),r("ul",[r("li",[o._v("使用 Spring 项目引导页面可以在几秒构建一个项目")]),o._v(" "),r("li",[o._v("方便对外输出各种形式的服务，如 REST API、WebSocket、Web、Streaming、Tasks")]),o._v(" "),r("li",[o._v("非常简洁的安全策略集成")]),o._v(" "),r("li",[o._v("支持关系数据库和非关系数据库")]),o._v(" "),r("li",[o._v("支持运行期内嵌容器，如 Tomcat、Jetty")]),o._v(" "),r("li",[o._v("强大的开发包，支持热启动")]),o._v(" "),r("li",[o._v("自动管理依赖")]),o._v(" "),r("li",[o._v("自带应用监控")]),o._v(" "),r("li",[o._v("支持各种 IED，如 IntelliJ IDEA 、NetBeans")])]),o._v(" "),r("p",[o._v("Spring Boot 的这些特性非常方便、快速构建独立的微服务。所以我们使用 Spring Boot 开发项目，会给我们传统开发带来非常大的便利度，可以说如果你使用过 Spring Boot 开发过项目，就不会再愿意以以前的方式去开发项目了。")]),o._v(" "),r("p",[o._v("总结一下，使用 Spring Boot  至少可以给我们带来以下几方面的改进：")]),o._v(" "),r("ul",[r("li",[o._v("Spring Boot 使编码变简单，Spring Boot 提供了丰富的解决方案，快速集成各种解决方案提升开发效率。")]),o._v(" "),r("li",[o._v("Spring Boot 使配置变简单，Spring Boot 提供了丰富的 Starters，集成主流开源产品往往只需要简单的配置即可。")]),o._v(" "),r("li",[o._v("Spring Boot 使部署变简单，Spring Boot 本身内嵌启动容器，仅仅需要一个命令即可启动项目，结合 Jenkins 、Docker 自动化运维非常容易实现。")]),o._v(" "),r("li",[o._v("Spring Boot 使监控变简单，Spring Boot 自带监控组件，使用 Actuator 轻松监控服务各项状态。")])]),o._v(" "),r("p",[o._v("总结，Spring Boot 是 Java 领域最优秀的微服务架构落地技术，没有之一。")]),o._v(" "),r("h2",{attrs:{id:"三者之间的纠葛"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三者之间的纠葛"}},[o._v("#")]),o._v(" 三者之间的纠葛")]),o._v(" "),r("p",[o._v("了解完微服务架构、Spring Boot、大数据治理之后，我们就发现这样一个有趣的事情：微服务架构是一种架构思想，是架构不断发展的必然结果，具有构建灵活、易扩展、快速应用、可伸缩性、高可用等特点；微服务架构思想的推出对技术有了更高的要求，在这样的背景下 Spring Boot 孕育而生，Spring Boot 出生名门，从一开始就站在一个比较高的起点，又经过这几年的发展，生态足够完善，Spring Boot 已经当之无愧成为 Java 领域最热门的技术。")]),o._v(" "),r("p",[o._v("微服务架构下，数据被分隔到 N 个独立的微服务中，如何应对市场、业务对大量数据的查询、分析就变的非常急迫，利用 Spring Boot 和 MongoDB 可以轻松的解决这个问题，通过技术手段将分裂到 N 个微服务的数据同步到 MongoDB 集群中，在同步的过程中进行数据清洗，来满足公司的各项业务需求。Spring Boot 对 MongoDB 的支持非常友好，一方面 Spring Data 技术预生成很多常用方法便于使用，另一方面 Spring Boot 封装了分布式计算的相关函数，可以让我们以较简洁的方式来实现统计查询。")]),o._v(" "),r("p",[o._v("Spring Boot 是 Java 领域微服务架构最优落地技术，Spring Boot+MongoDB 方案是在微服务架构下数据治理的最佳方案之一。")]),o._v(" "),r("p",[o._v("当然如果我们对微服务架构、Spring Boot 、MongoDB 不熟悉的话，可能需要走很多的弯路。错误的技术方案会对后期的微服务落地带来非常大的困扰，增加额外的开发工作量，我自己深有体会，合适的技术方案可以节省60%以上的工作量。")]),o._v(" "),r("p",[o._v("为此我特意写了一个专栏《微服务技术架构和大数据治理实战》，讲解微服务架构和大数据治理的技术落地。将工作中实践过最具实战代表性的一些内容整理出来，以 51CTO 专栏的形式来展现。课程内容将站在全局的角度去看待微服务实践和数据分析，讲解微服务架构、Spring Boot、MongoDB、同步方案、数据分析等内容，帮助广大的技术朋友们少走弯路，掌握微服务和数据分析的技术。")]),o._v(" "),r("p",[o._v("本专栏共18节课程，围绕四大块内容：")]),o._v(" "),r("ul",[r("li",[o._v("一、微服务架构和 Spring Boot；")]),o._v(" "),r("li",[o._v("二、Spring Boot 和 MongoDB 实战详解，介绍实战中遇到的典型问题；")]),o._v(" "),r("li",[o._v("三、微服务架构下的数据治理，数据同步、实时变更；")]),o._v(" "),r("li",[o._v("四、微服务架构实践的经验和教训。")])]),o._v(" "),r("p",[o._v("认真学完此专栏之后，会对微服务架构实践、Spring Boot 和 MongoDB 使用、微服务架构下数据处理有进一步的了解，具备使用 Spring Boot 开发微服务项目、利用相关技术解决微服务架构中数据治理的疼点。")]),o._v(" "),r("p",[r("strong",[o._v("专栏地址:"),r("a",{attrs:{href:"https://blog.51cto.com/cloumn/detail/4",target:"_blank",rel:"noopener noreferrer"}},[o._v("微服务技术架构和大数据治理实战"),r("OutboundLink")],1)])]),o._v(" "),r("p",[r("img",{attrs:{src:"https://www.itmind.net/assets/images/2018/SpringBoot/51cto-spring-boot.jpg",alt:""}})])])}),[],!1,null,null,null);t.default=i.exports}}]);