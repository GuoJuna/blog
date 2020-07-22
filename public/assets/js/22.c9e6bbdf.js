(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{498:function(_,v,e){"use strict";e.r(v);var t=e(4),o=Object(t.a)({},(function(){var _=this,v=_.$createElement,e=_._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("p",[_._v("1.抽象类命名使用 Abstract 或 Base 开头； 异常类命名使用 Exception 结尾； 测试类命名以它要测试的类的名称开始，以 Test 结尾。")]),_._v(" "),e("p",[_._v("2.POJO 类中布尔类型的变量，都不要加 is，否则部分框架解析会引起序列化错误。")]),_._v(" "),e("blockquote",[e("p",[_._v("反例： 定义为基本数据类型 boolean isSuccess； 的属性，它的方法也是 isSuccess()， RPC框架在反向解析的时候， “以为”对应的属性名称是 success，导致属性获取不到，进而抛出异常。")])]),_._v(" "),e("p",[_._v("3.任何运算符左右必须加一个空格。")]),_._v(" "),e("blockquote",[e("p",[_._v("说明： 运算符包括赋值运算符=、逻辑运算符&&、加减乘除符号、三目运行符等。")])]),_._v(" "),e("p",[_._v("4.单行字符数限制不超过 120 个，超出需要换行，换行时遵循如下原则：")]),_._v(" "),e("blockquote",[e("p",[_._v("1） 第二行相对第一行缩进 4 个空格，从第三行开始，不再继续缩进，参考示例。")]),_._v(" "),e("p",[_._v("2） 运算符与下文一起换行。")])]),_._v(" "),e("blockquote",[e("p",[_._v("3） 方法调用的点符号与下文一起换行。")])]),_._v(" "),e("blockquote",[e("p",[_._v("4） 在多个参数超长，逗号后进行换行。")])]),_._v(" "),e("blockquote",[e("p",[_._v("5） 在括号前不要换行，见反例")])]),_._v(" "),e("p",[_._v("5.构造方法里面禁止加入任何业务逻辑，如果有初始化逻辑，请放在 init 方法中。同理getter setter")]),_._v(" "),e("p",[_._v("6.类、类属性、类方法的注释必须使用 Javadoc 规范，使用/*"),e("em",[_._v("内容")]),_._v("/格式，不得使用//xxx 方式。")]),_._v(" "),e("blockquote",[e("p",[_._v("说明： 在 IDE 编辑窗口中， Javadoc 方式会提示相关注释，生成 Javadoc 可以正确输出相应注释； 在 IDE 中，工程调用方法时，不进入方法即可悬浮提示方法、参数、返回值的意义，提高阅读效率。")])]),_._v(" "),e("p",[_._v("7.应用中不可直接使用日志系统（Log4j、 Logback） 中的 API，而应依赖使用日志框架SLF4J 中的 API，使用门面模式的日志框架，有利于维护和各个类的日志处理方式统一。")]),_._v(" "),e("p",[_._v("8.可以使用 warn 日志级别来记录用户输入参数错误的情况，避免用户投诉时，无所适从。注意日志输出的级别， error 级别只记录系统逻辑出错、异常等重要的错误信息。如非必要，请不要在此场景打出 error 级别")]),_._v(" "),e("p",[_._v("9.字段允许适当冗余，以提高性能，但是必须考虑数据同步的情况。冗余字段应遵循：")]),_._v(" "),e("blockquote",[e("p",[_._v("1） 不是频繁修改的字段。\n2） 不是 varchar 超长字段，更不能是 text 字段。")])]),_._v(" "),e("p",[_._v("10.单表行数超过 500 万行或者单表容量超过 2GB，才推荐进行分库分表。")]),_._v(" "),e("blockquote",[e("p",[_._v("说明： 如果预计三年后的数据量根本达不到这个级别，请不要在创建表时就分库分表。")])]),_._v(" "),e("p",[_._v("11.如果有 order by 的场景，请注意利用索引的有序性。 order by 最后的字段是组合索引的一部分，并且放在索引组合顺序的最后，避免出现 file_sort 的情况，影响查询性能。")]),_._v(" "),e("blockquote",[e("p",[_._v("正例： where a=? and b=? order by c; 索引： a_b_c")])]),_._v(" "),e("p",[_._v("12.利用延迟关联或者子查询优化超多分页场景。")]),_._v(" "),e("blockquote",[e("p",[_._v("正例： 先快速定位需要获取的 id 段，然后再关联：\nSELECT a.* FROM 表 1 a, (select id from 表 1 where 条件 LIMIT 100000,20 ) b where a.id=b.id")])]),_._v(" "),e("p",[_._v("13.不得使用外键与级联，一切外键概念必须在应用层解决。")]),_._v(" "),e("blockquote",[e("p",[_._v("说明： （概念解释） 学生表中的 student_id 是主键，那么成绩表中的 student_id 则为外键。如果更新学生表中的 student_id，同时触发成绩表中的 student_id 更新，则为级联更新。外键与级联更新适用于单机低并发，不适合分布式、高并发集群； 级联更新是强阻塞，存在数据库更新风暴的风险； 外键影响数据库的插入速度。")])]),_._v(" "),e("p",[_._v("14.禁止使用存储过程，存储过程难以调试和扩展，更没有移植性。")]),_._v(" "),e("p",[_._v("15.数据订正时，删除和修改记录时，要先 select，避免出现误删除，确认无误才能执行更新语句。")]),_._v(" "),e("p",[_._v("16.在表查询中，一律不要使用 * 作为查询的字段列表，需要哪些字段必须明确写明。")]),_._v(" "),e("blockquote",[e("p",[_._v("说明： 1） 增加查询分析器解析成本。 2） 增减字段容易与 resultMap 配置不一致。")])]),_._v(" "),e("p",[_._v("17.POJO 类的 boolean 属性不能加 is，而数据库字段必须加 is_，要求在 resultMap 中进行字段与属性之间的映射。")]),_._v(" "),e("blockquote",[e("p",[_._v("说明： 参见定义 POJO 类以及数据库字段定义规定，在 sql.xml 增加映射，是必须的。")])]),_._v(" "),e("p",[_._v("18.xml 配置中参数注意使用： #{}， #param# 不要使用${} 此种方式容易出现 SQL 注入。")]),_._v(" "),e("p",[_._v("19.分层领域模型规约：")]),_._v(" "),e("ul",[e("li",[_._v("DO（Data Object） ：与数据库表结构一一对应，通过 DAO 层向上传输数据源对象。")]),_._v(" "),e("li",[_._v("DTO（Data Transfer Object） ：数据传输对象， Service 和 Manager 向外传输的对象。")]),_._v(" "),e("li",[_._v("BO（Business Object） ：业务对象。 可以由 Service 层输出的封装业务逻辑的对象。")]),_._v(" "),e("li",[_._v("QUERY：数据查询对象，各层接收上层的查询请求。 注：超过 2 个参数的查询封装，禁止\n使用 Map 类来传输。")]),_._v(" "),e("li",[_._v("VO（View Object） ：显示层对象，通常是 Web 向模板渲染引擎层传输的对象。")])]),_._v(" "),e("p",[_._v("20.用户输入的 SQL 参数严格使用参数绑定或者 METADATA 字段值限定，防止 SQL 注入，禁止字符串拼接 SQL 访问数据库。")]),_._v(" "),e("p",[_._v("21.表单、 AJAX 提交必须执行 CSRF 安全过滤。")]),_._v(" "),e("blockquote",[e("p",[_._v("说明： CSRF(Cross-site request forgery)跨站请求伪造是一类常见编程漏洞。对于存在CSRF 漏洞的应用/网站，攻击者可以事先构造好 URL，只要受害者用户一访问，后台便在用户不知情情况下对数据库中用户参数进行相应修改。")])])])}),[],!1,null,null,null);v.default=o.exports}}]);