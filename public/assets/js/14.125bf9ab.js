(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{489:function(a,s,e){"use strict";e.r(s);var t=e(4),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"docker-环境安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-环境安装"}},[a._v("#")]),a._v(" Docker 环境安装")]),a._v(" "),e("ul",[e("li",[a._v("安装yum-utils：")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("yum install -y yum-utils device-mapper-persistent-data lvm2\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("为yum源添加docker仓库位置")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("安装docker")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("yum install docker-ce\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("启动docker")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("systemctl start docker\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"docker-镜像常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-镜像常用命令"}},[a._v("#")]),a._v(" Docker 镜像常用命令")]),a._v(" "),e("h3",{attrs:{id:"搜索镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搜索镜像"}},[a._v("#")]),a._v(" 搜索镜像")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker search java\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"下载镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载镜像"}},[a._v("#")]),a._v(" 下载镜像")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker pull java:8\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"如何查找镜像支持的版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何查找镜像支持的版本"}},[a._v("#")]),a._v(" 如何查找镜像支持的版本")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("由于docker search命令只能查找出是否有该镜像，不能找到该镜像支持的版本，所以我们需要通过docker hub来搜索支持的版本。\n进入docker hub的官网，地址：https://hub.docker.com\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h3",{attrs:{id:"列出镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#列出镜像"}},[a._v("#")]),a._v(" 列出镜像")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker images\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"删除镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除镜像"}},[a._v("#")]),a._v(" 删除镜像")]),a._v(" "),e("ul",[e("li",[a._v("指定名称删除镜像")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker rmi java:8\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("指定名称删除镜像（强制）")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker rmi -f java:8\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("强制删除所有镜像")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker rmi -f $(docker images)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h2",{attrs:{id:"docker-容器常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-容器常用命令"}},[a._v("#")]),a._v(" Docker 容器常用命令")]),a._v(" "),e("h3",{attrs:{id:"新建并启动容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建并启动容器"}},[a._v("#")]),a._v(" 新建并启动容器")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker run -p 80:80 --name nginx -d nginx:1.17.0\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("-d选项：表示后台运行")]),a._v(" "),e("li",[a._v("--name选项：指定运行后容器的名字为nginx,之后可以通过名字来操作容器")]),a._v(" "),e("li",[a._v("-p选项：指定端口映射，格式为：hostPort:containerPort")])]),a._v(" "),e("h3",{attrs:{id:"列出容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#列出容器"}},[a._v("#")]),a._v(" 列出容器")]),a._v(" "),e("ul",[e("li",[a._v("列出运行中的容器")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker ps\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("列出所有容器")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker ps -a\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"停止容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#停止容器"}},[a._v("#")]),a._v(" 停止容器")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# $ContainerName及$ContainerId可以用docker ps命令查询出来")]),a._v("\ndocker stop "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ContainerName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("或者"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ContainerId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\ndocker stop nginx\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#或者")]),a._v("\ndocker stop c5f5d5125587\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br")])]),e("h3",{attrs:{id:"强制停止容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#强制停止容器"}},[a._v("#")]),a._v(" 强制停止容器")]),a._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("docker "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("kill")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ContainerName")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("或者"),e("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ContainerId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"启动已停止的容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动已停止的容器"}},[a._v("#")]),a._v(" 启动已停止的容器")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker start $ContainerName(或者$ContainerId)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"进入容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进入容器"}},[a._v("#")]),a._v(" 进入容器")]),a._v(" "),e("ul",[e("li",[a._v("先查询出容器的pid")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('docker inspect --format "{{.State.Pid}}" $ContainerName(或者$ContainerId)\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("根据容器的pid进入容器")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('nsenter --target "$pid" --mount --uts --ipc --net --pid\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"删除容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#删除容器"}},[a._v("#")]),a._v(" 删除容器")]),a._v(" "),e("ul",[e("li",[a._v("删除指定容器")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker rm $ContainerName(或者$ContainerId)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("强制删除所有容器")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker rm -f $(docker ps -a -q)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"查看容器的日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看容器的日志"}},[a._v("#")]),a._v(" 查看容器的日志")]),a._v(" "),e("ul",[e("li",[a._v("查看当前全部日志")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker logs $ContainerName(或者$ContainerId)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("动态查看日志")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker logs -f $ContainerName(或者$ContainerId) \n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"查看容器的ip地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看容器的ip地址"}},[a._v("#")]),a._v(" 查看容器的IP地址")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker inspect --format '{{ .NetworkSettings.IPAddress }}' $ContainerName(或者$ContainerId)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"同步宿主机时间到容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#同步宿主机时间到容器"}},[a._v("#")]),a._v(" 同步宿主机时间到容器")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker cp /etc/localtime $ContainerName(或者$ContainerId):/etc/\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"在宿主机查看docker使用cpu、内存、网络、io情况"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在宿主机查看docker使用cpu、内存、网络、io情况"}},[a._v("#")]),a._v(" 在宿主机查看docker使用cpu、内存、网络、io情况")]),a._v(" "),e("ul",[e("li",[a._v("查看指定容器情况")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker stats $ContainerName(或者$ContainerId)\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("查看所有容器情况")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker stats -a\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"进入docker容器内部的bash"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进入docker容器内部的bash"}},[a._v("#")]),a._v(" 进入Docker容器内部的bash")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("docker exec -it $ContainerName /bin/bash\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"修改docker镜像的存放位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改docker镜像的存放位置"}},[a._v("#")]),a._v(" 修改Docker镜像的存放位置")]),a._v(" "),e("ul",[e("li",[a._v("查看Docker镜像的存放位置")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('docker info | grep "Docker Root Dir"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("关闭Docker服务")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("systemctl stop docker\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("移动目录到目标路径")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("mv /var/lib/docker /mydata/docker\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("建立软连接")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("ln -s /mydata/docker /var/lib/docker\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);