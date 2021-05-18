(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{543:function(e,n,a){"use strict";a.r(n);var t=a(4),s=Object(t.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("Boxx"),e._v(" "),a("h2",{attrs:{id:"vue文件下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue文件下载"}},[e._v("#")]),e._v(" Vue文件下载")]),e._v(" "),a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[e._v('    downloadTemp() {\n      this.handleGetBlob("http://oss.com/upload/20200831/a7a9e323f6304c5e8f7c091abe72d39a.xls").then(blob => {\n        this.handleSaveAs(blob, "模板");\n      }).catch(err=>{\n        this.$message.warning(\'下载错误\')\n      })\n\n    },\n\n    //将文件以流文件的形式下载下来\n    handleGetBlob(url) {\n      return new Promise(resolve => {\n        const xhr = new XMLHttpRequest();\n        xhr.open("GET", url, true);\n        xhr.responseType = "blob";\n        xhr.onload = () => {\n          if (xhr.status === 200) {\n            resolve(xhr.response);\n          }\n        };\n        xhr.send();\n      });\n    },\n\n    //下载文件并重新命名\n    handleSaveAs(blob, filename) {\n      if (window.navigator.msSaveOrOpenBlob) {\n        navigator.msSaveBlob(blob, filename);\n      } else {\n        const link = document.createElement("a");\n        const body = document.querySelector("body");\n        link.href = window.URL.createObjectURL(blob);\n        link.download = filename;\n        // fix Firefox\n        link.style.display = "none";\n        body.appendChild(link);\n        link.click();\n        body.removeChild(link);\n        window.URL.revokeObjectURL(link.href);\n      }\n    },\n')])])]),a("h2",{attrs:{id:"java文件下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java文件下载"}},[e._v("#")]),e._v(" Java文件下载")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    /**\n     *\n     * @param response rsp\n     * @param path 下载地址\n     * @param fileName 文件名\n     */\n    @RequestMapping("downloadFile")\n    public void downloadFile(HttpServletResponse response,@RequestParam String path, @RequestParam String fileName)  {\n        try {\n            response.setContentType("application/force-download");\n            response.setHeader("Content-Disposition", "attachment; filename="+ URLEncoder.encode(fileName, "UTF-8"));\n            HttpUtil.download(path,response.getOutputStream(),true);\n        } catch (IOException e) {\n            e.printStackTrace();\n        }\n    }\n')])])]),a("h2",{attrs:{id:"java文件上传"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java文件上传"}},[e._v("#")]),e._v(" Java文件上传")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('public void upload(){\n    HashMap<String, Object> paramMap = new HashMap<>();\n    //文件上传只需将参数中的键指定（默认file），值设为文件对象即可，对于使用者来说，文件上传与普通表单提交并无区别\n    paramMap.put("file", FileUtil.file("D:\\\\face.jpg"));\n    \n    String result= HttpUtil.post("https://www.baidu.com", paramMap);\n}\n\n\n')])])]),a("blockquote",[a("p",[e._v("主要基于Hutools中HttpUtil工具类简化操作")])])],1)}),[],!1,null,null,null);n.default=s.exports}}]);