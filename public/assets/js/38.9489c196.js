(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{514:function(s,a,n){"use strict";n.r(a);var e=n(4),t=Object(e.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("p",[s._v("这一篇文件主要记录了一些linux的基础命令。^`^.")]),s._v(" "),n("h2",{attrs:{id:"一、命令的基本格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、命令的基本格式"}},[s._v("#")]),s._v(" 一、命令的基本格式")]),s._v(" "),n("blockquote",[n("p",[s._v("[root@localhost~]")]),s._v(" "),n("p",[s._v("root为用户名")]),s._v(" "),n("p",[s._v("～表示当前所在位置")]),s._v(" "),n("p",[s._v("localhost主机名")]),s._v(" "),n("p",[s._v("‘#’超级用户")]),s._v(" "),n("p",[s._v("'$\"  普通用户")])]),s._v(" "),n("p",[s._v("命令的基本格式：")]),s._v(" "),n("blockquote",[n("p",[s._v("命令  [选项]  [参数]")])]),s._v(" "),n("h2",{attrs:{id:"二、查询目录的内容"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、查询目录的内容"}},[s._v("#")]),s._v(" 二、查询目录的内容")]),s._v(" "),n("p",[s._v("命令格式：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ls [选项][文件或目录]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("选项：")]),s._v(" "),n("p",[s._v("-a 所有文件")]),s._v(" "),n("p",[s._v("-l  查看详情")]),s._v(" "),n("p",[s._v("-d查看目录属性")]),s._v(" "),n("p",[s._v("-h显示文件大小")])]),s._v(" "),n("h2",{attrs:{id:"三、文件处理命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、文件处理命令"}},[s._v("#")]),s._v(" 三、文件处理命令")]),s._v(" "),n("p",[s._v("1、建立目录")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mkdir -p [目录名]\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("blockquote",[n("p",[s._v("-p表述递归建文件夹")])]),s._v(" "),n("p",[s._v("举例：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mkdir japan\n\nmkdir -p japan/cangjk\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("2.切换目录")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cd [目录]\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("简化操作：")]),s._v(" "),n("blockquote",[n("p",[s._v("cd~  进入当前用户目录")]),s._v(" "),n("p",[s._v("cd- 上次目录")]),s._v(" "),n("p",[s._v("cd.. 进入上一级目录")]),s._v(" "),n("p",[s._v("pwd查看当前目录所在位置")])]),s._v(" "),n("p",[s._v("3.删除目录")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("rmdir [目录]  \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("删除所有文件")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("rm -rf [目录]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("删除目录所有文件")])]),s._v(" "),n("p",[s._v("4.复制目录")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cp[选项][原文件目录][目标目录]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("blockquote",[n("p",[s._v("选项：")]),s._v(" "),n("p",[s._v("-r复制目录")]),s._v(" "),n("p",[s._v("-p连文件属性一起复制")]),s._v(" "),n("p",[s._v("-a 相当于-pdr")])]),s._v(" "),n("p",[s._v("5.剪切、改名")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("mv[原文件目录][目标文件目录]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("6.常见目录作用")]),s._v(" "),n("blockquote",[n("p",[s._v("/ 根目录")]),s._v(" "),n("p",[s._v("/bin 命令保存目录")]),s._v(" "),n("p",[s._v("/boot  启动目录")]),s._v(" "),n("p",[s._v("/dev  设备文件命令")]),s._v(" "),n("p",[s._v("/etc  配置文件保存目录")]),s._v(" "),n("p",[s._v("/home  家目录")]),s._v(" "),n("p",[s._v("/lib  系统库保存命令")]),s._v(" "),n("p",[s._v("/mnt  系统挂载目录")])]),s._v(" "),n("h2",{attrs:{id:"四、文件搜索命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、文件搜索命令"}},[s._v("#")]),s._v(" 四、文件搜索命令")]),s._v(" "),n("p",[s._v("1.locate")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("locate [文件名]\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("blockquote",[n("p",[s._v("在系统数据库中查找文件的")])]),s._v(" "),n("blockquote",[n("p",[s._v("新建的文件，要执行updatedb操作之后才能搜到")])]),s._v(" "),n("p",[s._v("2.命令搜索")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("whereis [选项] [命令名]\n\n或者\n\nwhich [选项][命令名]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("blockquote",[n("p",[s._v("选项：")]),s._v(" "),n("p",[s._v("-b 只查找可执行文件")]),s._v(" "),n("p",[s._v("-m 只查找帮助文件")])]),s._v(" "),n("p",[s._v("3.文件搜索")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("find [搜索范围][选项][条件]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("直接举例子：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("find  /  -name install.log  \n在根目录下查找名为install.log文件\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("find /root  -inname install.log\n忽略大小写查找文件\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("find /var/log -mtime +10\n\n其中-mtime 文件修改时间\n-atime 文件访问时间\n-ctime 改变文件属性时间\n\n+10 10天前\n10  10天\n-10 10天内\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("find /etc -size +20M\n\n查找文件大于20M的文件\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"五、压缩与解压缩命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、压缩与解压缩命令"}},[s._v("#")]),s._v(" 五、压缩与解压缩命令")]),s._v(" "),n("p",[s._v("常见压缩格式：.zip  、 .gz 、 .bz2、\n.tar.gz  、 .tar.bz2")]),s._v(" "),n("p",[s._v("1.zip格式")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("//压缩文件\nzip [压缩文件名][原文件]\n//压缩目录\nzip -r  [压缩文件名][原文件]\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("p",[s._v("举例子：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("touch jp/cangls\n\ntouch jp/longls\n\nzip -r jp.zip jp\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#解压：\nunzip [压缩文件名]\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[s._v("gz格式")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 压缩为gz格式，原文件不保留\ngzip [原文件]\n\n#压缩.gz格式，原文件保留\n\ngzip -c 原文件 > 压缩文件\n# 压缩目录：\ngzip -r  目录\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("p",[s._v("解压：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("guzip [文件]\n\nguzip -r [目录]\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("3.tar")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("# 打包\ntar -cvf  打包文件名 原文件\n\n# 解压\n\ntar -xvf jp.tar\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("4.tar.gz")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("#打包\ntar -zcvf 压缩包名.tar.gz  原文件\n\n#解压\ntar -zxvf  压缩包名.tar.gz\n  \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"六、关机和重启"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#六、关机和重启"}},[s._v("#")]),s._v(" 六、关机和重启")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("shutdown [选项][时间]\n\n#选项：\n-c 取消前一个关机命令\n-h 关机\n-r 重启\n\n\ninit 6重启\n\ninit 0关机\n\nlogout退出登陆\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("h2",{attrs:{id:"七、查看用户信息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#七、查看用户信息"}},[s._v("#")]),s._v(" 七、查看用户信息")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("w\nwho\nlast\nlastlog\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h2",{attrs:{id:"八、shell基础"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#八、shell基础"}},[s._v("#")]),s._v(" 八、shell基础")]),s._v(" "),n("p",[s._v("1.什么是shell\nshell是命令行解释器。")]),s._v(" "),n("p",[s._v("2.echo 输出命令")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("echo[选项][输出内容]\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("选项：")]),s._v(" "),n("blockquote",[n("p",[s._v("-e:支持转义")])]),s._v(" "),n("p",[s._v("３.创建一个脚本")]),s._v(" "),n("p",[s._v("创建hello.sh")]),s._v(" "),n("blockquote",[n("p",[s._v("vim hello.sh\n进入编辑：")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('   #!/bin/bash\n   # the first program\necho "hello world!"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("执行：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("chmod 755 hello.sh\n\n./hello.sh    \n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("或者：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("bash hello.sh\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("h2",{attrs:{id:"九、历史命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#九、历史命令"}},[s._v("#")]),s._v(" 九、历史命令")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("history 查看历史命令\nhistory [选项][历史保存文件]\n选项：\n-c清空历史\n-w把缓存中的历史写入历史命令保存文件\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("h2",{attrs:{id:"十、输出重定向"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#十、输出重定向"}},[s._v("#")]),s._v(" 十、输出重定向")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("命令>文件   以覆盖的方式，把正确的命令输出到指定文件\n命令>>文件  以追加的方式，把正确的命令输出到指定文件、\n错误命令 2> 文件  以覆盖的方式把错误的命令覆盖到指定文件\n错误命令 2>> 文件  以追击的方式把错误的命令覆盖到指定文件\n\n 命令>>文件 2>&1  同时追加正确命令和错误命令到 指定文件\n命令 >>文件1 2>>文件2   把正确的命令输出到文件1错误的文件2\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("p",[s._v("举个例子:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('#/bin/bash\nwhile command\ndo\ncurl -d "userid=123343,action=getuserinfo" https://app.testasss.com.cn/ >test.txt\ntime=$(date)\ncat=$(cat test.txt |cut -d \\: -f 3|cut -d \\" -f 2)\necho "$time $cat" >>test.log\nsleep 15s\ndone\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br")])]),n("h2",{attrs:{id:"十一、网络相关"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#十一、网络相关"}},[s._v("#")]),s._v(" 十一、网络相关")]),s._v(" "),n("p",[s._v("1.ifconfig查看ip")]),s._v(" "),n("p",[s._v("举个例子：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ifconfig>> ip.log\ncat ip.log\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("2.查看网络状态")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("netstat [选项]\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("选项：")]),s._v(" "),n("blockquote",[n("p",[s._v("-t: 列出tcp 协议端口\n-u: 列出upd协议端口\n-n  ip地址个端口号\n-l 列出监听状态的\n-a 所有")])]),s._v(" "),n("p",[s._v("3.查看路由列表")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("netstat -rn\n或者\nroute -n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("4.查看某域名与自己的电脑的网络状态")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ping www.baodu.com\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("###十一、vi编辑器\nvi的升级版是vim")]),s._v(" "),n("p",[s._v("1.vim的操作模式")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("commond mode  命令模式\ninser tmode  编辑模式\nlastline mode  底行模式\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("2.模式切换\ni  进入编辑模式\nesc  进入命令行模式")]),s._v(" "),n("p",[s._v("3.命令模式")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("vim [文件]         进入文件或者创建文件（文件不存在的情况下）\nvim + [文件名]   进入文件尾部\nvim +/[字符串] [文件名]  光标定位到文件第一次出现该字符串的位置\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("4.底行模式")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v(":w  保存\n:q 退出\n:! 强制\n:15  定位的第15行\n/[字符串]  光标位置向后搜索该字符串\n?[字符串]  光标位置向前搜索该字符串\ndd  删除光标所在行\n\nctr+f   向下翻页\nctr+b  向上翻页\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h2",{attrs:{id:"十二、常用操作快捷键"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#十二、常用操作快捷键"}},[s._v("#")]),s._v(" 十二、常用操作快捷键")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("ctr+c  终止当前命令\nctr+l 清屏  相当于 clear\nctr+a  光标移到行首\nctr+e  光标移到行尾\nctr+u  把光标所在位置删除到行首\nctr+z  把命令放入后台\nctr+r  在历史命令中搜索\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("h2",{attrs:{id:"十三、其他"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#十三、其他"}},[s._v("#")]),s._v(" 十三、其他")]),s._v(" "),n("p",[s._v("常用工具：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("Vmware  虚拟机\ncentos.iso   centos系统镜像 ,绝大多数服务器是这个系统\nSecureCRT  远程登陆工具\nXshell 远程登陆工具\nwinscp copy文件工具\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("p",[s._v("我的springCloud专栏："),n("a",{attrs:{href:"http://blog.csdn.net/column/details/15197.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://blog.csdn.net/column/details/15197.html"),n("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=t.exports}}]);