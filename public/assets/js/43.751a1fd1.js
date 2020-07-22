(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{520:function(s,t,n){"use strict";n.r(t);var a=n(4),e=Object(a.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"需求"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#需求"}},[s._v("#")]),s._v(" 需求")]),s._v(" "),n("p",[s._v("A邀请B  B邀请C C邀请D D邀请E 无限邀请层级\n想根据A查出 BCD\n根据B 查出CD\n根据C 查出D")]),s._v(" "),n("h2",{attrs:{id:"解决方案"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("邻接表:依赖父节点")])]),s._v(" "),n("li",[n("p",[s._v("路径枚举")])]),s._v(" "),n("li",[n("p",[s._v("嵌套集")])]),s._v(" "),n("li",[n("p",[s._v("闭包表")])])]),s._v(" "),n("h2",{attrs:{id:"总结"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[s._v("#")]),s._v(" 总结")]),s._v(" "),n("p",[s._v("最后选择领接表的方案")]),s._v(" "),n("ul",[n("li",[s._v("表数量少")]),s._v(" "),n("li",[s._v("表设计简单")])]),s._v(" "),n("h3",{attrs:{id:"创建表"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#创建表"}},[s._v("#")]),s._v(" 创建表")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("CREATE TABLE `sp_member_relation` (\n  `p_open_id` varchar(50) NOT NULL COMMENT '邀请人openId',\n  `p_tel` varchar(11) DEFAULT NULL COMMENT '邀请人电话',\n  `open_id` varchar(50) NOT NULL COMMENT '被邀请人openId',\n  `tel` varchar(11) DEFAULT NULL COMMENT '被邀请人tel',\n  `create_time` datetime DEFAULT NULL COMMENT '创建时间',\n  PRIMARY KEY (`p_open_id`,`open_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='会员关系';\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("h3",{attrs:{id:"获取所有子节点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取所有子节点"}},[s._v("#")]),s._v(" 获取所有子节点")]),s._v(" "),n("p",[s._v("创建mysql 函数获取所有子节点")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("DELIMITER $$\nUSE `pv_web2`$$\n\nDROP FUNCTION\nIF EXISTS `getChildList`$$\n\nCREATE DEFINER = `root`@`%` FUNCTION `getChildList` (rootId VARCHAR(50)) RETURNS VARCHAR (4000) CHARSET utf8\nBEGIN\n\tDECLARE\n\t\tsChildList VARCHAR (4000) ; DECLARE\n\t\t\tsChildTemp VARCHAR (4000) ;\n\t\tSET sChildTemp = rootId;\n\t\tWHILE sChildTemp IS NOT NULL DO\n\n\t\tIF (sChildList IS NOT NULL) THEN\n\n\t\tSET sChildList = CONCAT(sChildList, ',', sChildTemp) ;\n\t\tELSE\n\n\t\tSET sChildList = CONCAT(sChildTemp) ;\n\t\tEND\n\t\tIF ; SELECT\n\t\t\tGROUP_CONCAT(open_id) INTO sChildTemp\n\t\tFROM\n\t\t\tsp_member_relation\n\t\tWHERE\n\t\t\tFIND_IN_SET(p_open_id, sChildTemp) > 0 ;\n\t\tEND\n\t\tWHILE ; RETURN sChildList ; END$$\n\nDELIMITER ;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])]),n("p",[s._v("使用函数")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("select * from sp_member_relation where FIND_IN_SET(p_open_id, getChildList(#{openId,jdbcType=VARCHAR}))\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h3",{attrs:{id:"获取所有父节点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#获取所有父节点"}},[s._v("#")]),s._v(" 获取所有父节点")]),s._v(" "),n("p",[s._v("创建函数")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("DELIMITER $$\nUSE `pv_web2`$$\n\nDROP FUNCTION\nIF EXISTS `getSupList`$$\n\nCREATE DEFINER = `root`@`%` FUNCTION `getSupList` (rootId VARCHAR(50)) RETURNS VARCHAR (4000) CHARSET utf8\nBEGIN\n\tDECLARE\n\t\tsChildList VARCHAR (4000) ; DECLARE\n\t\t\tsChildTemp VARCHAR (4000) ;\n\t\tSET sChildTemp = rootId;\n\t\tWHILE sChildTemp IS NOT NULL DO\n\n\t\tIF (sChildList IS NOT NULL) THEN\n\n\t\tSET sChildList = CONCAT(sChildList, ',', sChildTemp) ;\n\t\tELSE\n\n\t\tSET sChildList = CONCAT(sChildTemp) ;\n\t\tEND\n\t\tIF ; SELECT\n\t\t\tGROUP_CONCAT(p_open_id) INTO sChildTemp\n\t\tFROM\n\t\t\tsp_member_relation\n\t\tWHERE\n\t\t\tFIND_IN_SET(open_id, sChildTemp) > 0 ;\n\t\tEND\n\t\tWHILE ; RETURN sChildList ; END$$\n\nDELIMITER ;\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])]),n("p",[s._v("使用函数")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('select * from sp_member_relation where FIND_IN_SET(open_id, getSupList("44"));\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"问题"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" 问题")]),s._v(" "),n("ul",[n("li",[s._v("如果数据链成环,会产出死循环问题")]),s._v(" "),n("li",[s._v("导入阿里云会提示"),n("strong",[s._v("Access denied; you need (at least one of) the SUPER privilege(s) for this operation")]),s._v(" 阿里云这边不支持 这样的操作 把代码"),n("strong",[s._v("DEFINER=root@%")]),s._v(" 去掉之后，重新导入。")])]),s._v(" "),n("blockquote",[n("p",[s._v("https://blog.csdn.net/sinat_33261247/article/details/91492396")])]),s._v(" "),n("ul",[n("li",[s._v("会缺少数据 group_concat_max_len默认1024")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SET GLOBAL group_concat_max_len = 400000\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);