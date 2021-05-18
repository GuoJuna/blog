(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{609:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-简介"}},[t._v("#")]),t._v(" git 简介")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://gitee.com/guojuna/images/raw/master/blog-img/2020/07/20200803163154.png",alt:"image-20200803163153939"}})]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("工作区(working directory)")]),t._v("，简言之就是你工作的区域。对于git而言，就是的本地工作目录。工作区的内容会包含提交到暂存区和版本库(当前提交点)的内容，同时也包含自己的修改内容。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("暂存区(stage area, 又称为索引区index)")]),t._v("，是git中一个非常重要的概念。是我们把修改提交版本库前的一个过渡阶段。查看GIT自带帮助手册的时候，通常以index来表示暂存区。在工作目录下有一个.git的目录，里面有个index文件，存储着关于暂存区的内容。git add命令将工作区内容添加到暂存区。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("本地仓库(local repository)，"),a("strong",[t._v("版本控制系统的仓库，存在于本地。当执行git commit命令后，会将暂存区内容提交到仓库之中。在工作区下面有.git的目录，这个目录下的内容不属于工作区，里面便是仓库的数据信息，暂存区相关内容也在其中。这里也可以使用merge或rebase将")]),t._v("远程仓库副本")]),t._v("合并到本地仓库。图中的只有merge，注意这里也可以使用rebase。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("远程版本库(remote repository)")]),t._v("，与本地仓库概念基本一致，不同之处在于一个存在远程，可用于远程协作，一个却是存在于本地。通过push/pull可实现本地与远程的交互；")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("远程仓库副本")]),t._v("，可以理解为存在于本地的远程仓库缓存。如需更新，可通过git fetch/pull命令获取远程仓库内容。使用fech获取时，并未合并到本地仓库，此时可使用git merge实现远程仓库副本与本地仓库的合并。git pull 根据配置的不同，可为git fetch + git merge 或 git fetch + git rebase。")])])]),t._v(" "),a("blockquote",[a("p",[t._v("rebase和merge的区别:")]),t._v(" "),a("ol",[a("li",[t._v("可以看出merge结果能够体现出时间线，但是rebase会打乱时间线。")])])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("而rebase看起来简洁，但是merge看起来不太简洁。")]),t._v(" "),a("li",[t._v("最终结果是都把代码合起来了，所以具体怎么使用这两个命令看项目需要")])]),t._v(" "),a("h2",{attrs:{id:"git-初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-初始化"}},[t._v("#")]),t._v(" git 初始化")]),t._v(" "),a("h3",{attrs:{id:"设置git全局信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置git全局信息"}},[t._v("#")]),t._v(" 设置git全局信息")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('git config --global user.name "Your Name"\ngit config --global user.email "email@example.com"\n\n# windows和Linux上都建议设置\ngit config --global push.default simple # 我们要求git 版本1.9.5 以上\ngit config --global core.autocrlf false # 让git 不要管Windows/Unix换行符转换的事\n\n# windows上还需要配置\ngit config --global core.ignorecase false # 设置大小写敏感\n\n# 查看配置是否正确\ngit config --global --list\n')])])]),a("p",[t._v("注: git config命令的--global参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用\n户名和Email地址。")]),t._v(" "),a("h3",{attrs:{id:"查看git全局设置信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看git全局设置信息"}},[t._v("#")]),t._v(" 查看Git全局设置信息")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git config -l\n")])])]),a("h3",{attrs:{id:"修改远程地址仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改远程地址仓库"}},[t._v("#")]),t._v(" 修改远程地址仓库")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git remote set-url origin [url]\n")])])]),a("h3",{attrs:{id:"创建ssh-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建ssh-key"}},[t._v("#")]),t._v(" 创建SSH KEY")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('ssh-keygen -t rsa -C "youremail@example.com"\n')])])]),a("p",[t._v("然后一路回车。这时你就会在用户下的.ssh目录里找到id_rsa和id_rsa.pub这两个文件,id_rsa.pub配置到github上")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#检查配置是否成功 \nssh -T git@github.com\n")])])]),a("p",[t._v("如果遇到 yes/no 的选项，输入yes。最后看到 “Hi ....”表示设置成功。")]),t._v(" "),a("h3",{attrs:{id:"创建版本库-初始化git仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建版本库-初始化git仓库"}},[t._v("#")]),t._v(" 创建版本库,初始化git仓库")]),t._v(" "),a("p",[t._v("通过"),a("strong",[t._v("git init")]),t._v("命令把这个目录变成Git可以管理的仓库")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git init\n")])])]),a("h3",{attrs:{id:"添加文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加文件"}},[t._v("#")]),t._v(" 添加文件")]),t._v(" "),a("p",[t._v("用命令git add告诉Git，把文件添加到仓库")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git add file.txt\n")])])]),a("h3",{attrs:{id:"提交文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交文件"}},[t._v("#")]),t._v(" 提交文件")]),t._v(" "),a("p",[t._v("用命令git commit告诉Git，把文件提交到仓库：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('git commit -m "first commit"\n')])])]),a("h3",{attrs:{id:"查看仓库状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看仓库状态"}},[t._v("#")]),t._v(" 查看仓库状态")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git status\n")])])]),a("h3",{attrs:{id:"查看修改内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看修改内容"}},[t._v("#")]),t._v(" 查看修改内容")]),t._v(" "),a("p",[t._v("虽然Git告诉我们readme.txt被修改了，但如果能看看具体修改了什么内容，自然是很好的。比如你休假两周从国外回来，第一天上班时，已经记\n不清上次怎么修改的readme.txt，所以，需要用git diff这个命令看看")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git diff\n")])])]),a("h2",{attrs:{id:"git-时光机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-时光机"}},[t._v("#")]),t._v(" git 时光机")]),t._v(" "),a("h3",{attrs:{id:"版本回退"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#版本回退"}},[t._v("#")]),t._v(" 版本回退")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#显示从最近到最远的提交日志\ngit log\n\n#如果嫌输出信息太多，看得眼花缭乱的，可以试试加上--pretty=oneline\ngit log --pretty=oneline\n")])])]),a("p",[t._v("在Git中，用HEAD表示当前版本，也就是最新的提交1094adb...（注意我的提交ID和你的肯定不一样），上一个版本就是HEAD^，上上一个版本\n就是HEAD^^，当然往上100个版本写100个^比较容易数不过来，所以写成HEAD~100")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#回到上一个版本")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard HEAD^\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#回到任意一个版本 commitId")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard commitId\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#你回退到了某个版本，关掉了电脑，第二天早上就后悔了，想恢复到新版本怎么办？找不到新版本的commit id怎么办？在Git中，总是有后悔药")]),t._v("\n可以吃的。当你用$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard HEAD^回退到上个版本时，再想恢复，就必须找到commit id。Git提供了一个命令git reflog用来记录\n你的每一次命令\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog\n")])])]),a("p",[t._v("commitId版本号没必要写全，前几位就可以了，Git会自动去找。当然也不能只写前一两位，因为Git可能会找到多个版本号，就无法确定是哪一个了。")]),t._v(" "),a("h3",{attrs:{id:"工作区和暂存区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#工作区和暂存区"}},[t._v("#")]),t._v(" 工作区和暂存区")]),t._v(" "),a("p",[t._v("工作区（Working Directory）\n就是你在电脑里能看到的目录，比如我的learnGit文件夹就是一个工作区")]),t._v(" "),a("p",[t._v("版本库（Repository）\n工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库。")]),t._v(" "),a("p",[t._v("Git的版本库里存了很多东西，其中最重要的就是称为stage（或者叫index）的暂存区，还有Git为我们自动创建的第一个分支master，以及指向\nmaster的一个指针叫HEAD。\n"),a("img",{attrs:{src:"/assets/images/2019/img/R7H$31U5%7BC9P~42B%7BS7AE$O.png",alt:""}})]),t._v(" "),a("p",[t._v("第一步是用git add把文件添加进去，实际上就是把文件修改添加到暂存区；\n第二步是用git commit提交更改，实际上就是把暂存区的所有内容提交到当前分支。")]),t._v(" "),a("h3",{attrs:{id:"撤消修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#撤消修改"}},[t._v("#")]),t._v(" 撤消修改")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#可以丢弃工作区的修改,回到最近一次git commit或git add时的状态")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -- "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#暂存区的修改撤销掉")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("h2",{attrs:{id:"分支管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支管理"}},[t._v("#")]),t._v(" 分支管理")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看本地分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看远程分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -r\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看所有分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -a\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建分支：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 切换分支：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("或者git switch "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建+切换分支：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("或者git switch -c "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并某分支到当前分支：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 复制一个特定的提交到当前分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" cherry-pick 4c805e2\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除分支：")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除远程分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --delete "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branchname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 分支合并图")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --graph\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看远程库信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看远程库详细信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从本地推送分支,如果推送失败，先用git pull抓取远程的新提交")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin branch-name\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在本地创建和远程分支对应的分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b branch-name origin/branch-name\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 建立本地分支和远程分支的关联")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --set-upstream branch-name origin/branch-name；\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#推送本地分支到远程")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin newbranch:newbranch\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从远程抓取分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull\n")])])]),a("h2",{attrs:{id:"搭建git服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#搭建git服务器"}},[t._v("#")]),t._v(" 搭建git服务器")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1.安装git")]),t._v("\nyum –y "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2.查看git版本")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" --version\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3.创建用户：在服务器中创建一个git专属用户")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useradd")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("passwd")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4.禁止该git用户使用shell登录系统（为了安全性，一般都禁止）,按i进入编辑模式，在最后一行将git用户修改成以下配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/passwd\ngit:x:1000:1000::/home/git:/usr/bin/git-shell\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5.创建证书登录")]),t._v("\n收集所有需要登录的用户的公钥，就是他们自己的id_rsa.pub文件，把所有公钥导入到/home/git/.ssh/authorized_keys文件里，没有可以创建一个。\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 6.初始化Git仓库 先选定一个目录作为Git仓库,假定是/srv/sample.git，在/srv目录下输入命令")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init --bare sample.git \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" -R git:git sample.git\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 7.克隆远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone git@server:/srv/sample.git\n")])])]),a("h2",{attrs:{id:"上传项目到github"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#上传项目到github"}},[t._v("#")]),t._v(" 上传项目到github")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1.初始化git项目")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2.添加文件到暂存区")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3.提交文件到本地仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"初始化提交"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 4.github创建仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 5.关联远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" origin git@github.com:guojuna/Taunt.git\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 6.提交文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 7.如果提示异常failed to push some refs to 'github.com:guojuna/Taunt.git',需要把远程仓库和本地同步，消除差异,然后重新第6步提交")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin master --allow-unrelated-histories\n\n")])])]),a("h2",{attrs:{id:"修改远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改远程仓库"}},[t._v("#")]),t._v(" 修改远程仓库")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git remote set-url origin https://gitee.com/GuoJuna/GenerateCode.git\n")])])]),a("p",[t._v("##问题")]),t._v(" "),a("ol",[a("li",[t._v("git pull的时候遇到这样的问题：The following untracked working tree files would be overwritten by merge")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git clean -d -fx\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);