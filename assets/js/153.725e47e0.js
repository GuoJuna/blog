(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{652:function(n,e,i){"use strict";i.r(e);var _=i(4),t=Object(_.a)({},(function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[i("ol",[i("li",[i("p",[i("em",[i("strong",[n._v("【强制】")])]),n._v(" 表达是与否概念的字段，必须使用is_xxx的方式命名，数据类型是unsigned tinyint\n（ 1 表示是， 0 表示否）。\n说明：任何字段如果为非负数，必须是unsigned。\n注意：POJO类中的任何布尔类型的变量，都不要加is前缀，所以，需要在<resultMap>设置从is_xxx到\nXxx的映射关系。数据库表示是与否的值，使用tinyint类型，坚持is_xxx的命名方式是为了明确其取值含\n义与取值范围。\n正例：表达逻辑删除的字段名is_deleted， 1 表示删除， 0 表示未删除。")])]),n._v(" "),i("li",[i("p",[i("em",[i("strong",[n._v("【强制】")])]),n._v(" 表名、字段名必须使用小写字母或数字，禁止出现数字开头，禁止两个下划线中间只\n出现数字。数据库字段名的修改代价很大，因为无法进行预发布，所以字段名称需要慎重考虑。\n说明：MySQL在Windows下不区分大小写，但在Linux下默认是区分大小写。因此，数据库名、表名、\n字段名，都不允许出现任何大写字母，避免节外生枝。\n正例：aliyun_admin，rdc_config，level3_name\n反例：AliyunAdmin，rdcConfig，level_3_name")])]),n._v(" "),i("li",[i("p",[i("em",[i("strong",[n._v("【强制】")])]),n._v(" 表名不使用复数名词。\n说明：表名应该仅仅表示表里面的实体内容，不应该表示实体数量，对应于DO类名也是单数形式，符合\n表达习惯。")])]),n._v(" "),i("li",[i("p",[i("em",[i("strong",[n._v("【强制】")])]),n._v(" 禁用保留字，如desc、range、match、delayed等，请参考MySQL官方保留字。")])]),n._v(" "),i("li",[i("p",[i("em",[i("strong",[n._v("【强制】")])]),n._v(" 主键索引名为pk_字段名；唯一索引名为uk_字段名；普通索引名则为idx_字段名。\n说明：pk_ 即primary key；uk_ 即 unique key；idx_ 即index的简称。")])]),n._v(" "),i("li",[i("p",[i("em",[i("strong",[n._v("【强制】")])]),n._v(" 小数类型为decimal，禁止使用float和double。\n说明：在存储的时候，float 和 double 都存在精度损失的问题，很可能在比较值的时候，得到不正确的\n结果。如果存储的数据范围超过 decimal 的范围，建议将数据拆成整数和小数并分开存储。")])]),n._v(" "),i("li",[i("p",[i("em",[i("strong",[n._v("【强制】")])]),n._v(" 如果存储的字符串长度几乎相等，使用char定长字符串类型。")])]),n._v(" "),i("li",[i("p",[i("em",[i("strong",[n._v("【强制】")])]),n._v(" varchar是可变长字符串，不预先分配存储空间，长度不要超过 5000 ，如果存储长度\n大于此值，定义字段类型为text，独立出来一张表，用主键来对应，避免影响其它字段索引效\n率。")])]),n._v(" "),i("li",[i("p",[i("em",[i("strong",[n._v("【强制】")])]),n._v(" 表必备三字段：id, create_time, update_time。\n说明：其中id必为主键，类型为bigint unsigned、单表时自增、步长为 1 。create_time, update_time\n的类型均为datetime类型，前者现在时表示主动式创建，后者过去分词表示被动式更新。")])]),n._v(" "),i("li",[i("p",[i("strong",[n._v("【推荐】")]),n._v(" 表的命名最好是遵循“业务名称_表的作用”。\n正例：alipay_task / force_project / trade_config")])]),n._v(" "),i("li",[i("p",[i("strong",[n._v("【推荐】")]),n._v(" 库名与应用名称尽量一致。")])]),n._v(" "),i("li",[i("p",[i("strong",[n._v("【推荐】")]),n._v(" 如果修改字段含义或对字段表示的状态追加时，需要及时更新字段注释。")])]),n._v(" "),i("li",[i("p",[i("strong",[n._v("【推荐】")]),n._v(" 字段允许适当冗余，以提高查询性能，但必须考虑数据一致。冗余字段应遵循：\n1 ） 不是频繁修改的字段。\n2 ） 不是唯一索引的字段。\n3 ） 不是varchar超长字段，更不能是text字段。\n正例：各业务线经常冗余存储商品名称，避免查询时需要调用IC服务获取。")])]),n._v(" "),i("li",[i("p",[i("strong",[n._v("【推荐】")]),n._v(" 单表行数超过 500 万行或者单表容量超过 2 GB，才推荐进行分库分表。\n说明：如果预计三年后的数据量根本达不到这个级别，请不要在创建表时就分库分表。")])]),n._v(" "),i("li",[i("p",[i("em",[n._v("【参考】")]),n._v(" 合适的字符存储长度，不但节约数据库表空间、节约索引存储，更重要的是提升检索\n速度。\n正例：无符号值可以避免误存负数，且扩大了表示范围。")])])]),n._v(" "),i("blockquote",[i("p",[n._v("对象 年龄区间 类型 字节 表示范围\n人 150 岁之内 tinyint unsigned 1 无符号值： 0 到 255\n龟 数百岁 smallint unsigned 2 无符号值： 0 到 65535\n恐龙化石 数千万年 int unsigned 4 无符号值： 0 到约 43 亿\n太阳 约 50 亿年 bigint unsigned 8 无符号值： 0 到约 10 的 19 次方")])])])}),[],!1,null,null,null);e.default=t.exports}}]);