(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{532:function(t,e,a){"use strict";a.r(e);var n=a(4),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"什么是线程封闭"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是线程封闭"}},[t._v("#")]),t._v(" 什么是线程封闭")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://fangzhipeng.oss-cn-hangzhou.aliyuncs.com/WechatIMG1.jpeg",alt:"测试"}}),t._v("\n当访问共享变量时，往往需要加锁来保证数据同步。一种避免使用同步的方式就是不共享数据。如果仅在单线程中访问数据，就不需要同步了。这种技术称为线程封闭。在Java语言中，提供了一些类库和机制来维护线程的封闭性，例如局部变量和ThreadLocal类，本文主要深入讲解如何使用ThreadLocal类来保证线程封闭。")]),t._v(" "),a("h2",{attrs:{id:"理解threadlocal类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#理解threadlocal类"}},[t._v("#")]),t._v(" 理解ThreadLocal类")]),t._v(" "),a("p",[t._v("ThreadLocal类能使线程中的某个值与保存值的对象关联起来，它提供了get、set方法，这些方法为每个使用该变量的线程保存一份独立的副本，因此get总是set当前线程的set最新值。")]),t._v(" "),a("p",[t._v("首先我们来看个例子，这个例子来自于http://www.cnblogs.com/dolphin0520/p/3920407.html")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\npublic class Test1 {\n\n    ThreadLocal<Long> longLocal = new ThreadLocal<Long>();\n    ThreadLocal<String> stringLocal = new ThreadLocal<String>();\n\n\n    public void set() {\n        longLocal.set(Thread.currentThread().getId());\n        stringLocal.set(Thread.currentThread().getName());\n    }\n\n    public long getLong() {\n        return longLocal.get();\n    }\n\n    public String getString() {\n        return stringLocal.get();\n    }\n    public static void main(String[] args) throws InterruptedException {\n        final Test1 test = new Test1();\n\n\n        test.set();\n        System.out.println(test.getLong());\n        System.out.println(test.getString());\n\n\n        Thread thread1 = new Thread(() -> {\n            test.set();\n            System.out.println(test.getLong());\n            System.out.println(test.getString());\n        });\n        thread1.start();\n        thread1.join();\n\n        System.out.println(test.getLong());\n        System.out.println(test.getString());\n    }\n}\n\n")])])]),a("p",[t._v("运行该程序，代码输出的结果为：")]),t._v(" "),a("blockquote",[a("p",[t._v("1")]),t._v(" "),a("p",[t._v("main")]),t._v(" "),a("p",[t._v("10")]),t._v(" "),a("p",[t._v("Thread-0")]),t._v(" "),a("p",[t._v("1")]),t._v(" "),a("p",[t._v("main")])]),t._v(" "),a("p",[t._v("从这段代码可以看出在mian线程和thread1线程确实都保存着各自的副本，它们的副本各自不干扰。")]),t._v(" "),a("h2",{attrs:{id:"threadlocal源码解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#threadlocal源码解析"}},[t._v("#")]),t._v(" ThreadLocal源码解析")]),t._v(" "),a("p",[t._v("来从源码的角度来解析ThreadLocal这个类，这个类存放在Java.lang包，这个类有很多方法。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://upload-images.jianshu.io/upload_images/2279594-903e2b9e3a60cee5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/300",alt:"image.png"}})]),t._v(" "),a("p",[t._v("它内部又个ThreadLocalMap类，主要有set()、get()、setInitialValue 等方法。")]),t._v(" "),a("p",[t._v("首先来看下set方法，获取当前Thread的 map，如果不存在则新建一个并设置值，如果存在设置值，源码如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("public void set(T value) {\n        Thread t = Thread.currentThread();\n        ThreadLocalMap map = getMap(t);\n        if (map != null)\n            map.set(this, value);\n        else\n            createMap(t, value);\n    }\n")])])]),a("p",[t._v("跟踪createMap，可以发现它根据Thread创建来一个ThreadLocalMap。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  void createMap(Thread t, T firstValue) {\n        t.threadLocals = new ThreadLocalMap(this, firstValue);\n    }\n\n")])])]),a("p",[t._v("t.threadLocals为当前线程的一个变量，也就是ThreadLocal的数据都是存放在当前线程的threadLocals变量里面的，由此可见用ThreadLocal存放的数据是线程安全的。因为它对于不同的线程来，使用ThreadLocal的set方法都会根据线程判断该线程是否存在它的threadLocals成员变量，如果没有就建一个，有的话就存下数据。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("ThreadLocal.ThreadLocalMap threadLocals = null;\n\n")])])]),a("p",[t._v("ThreadLocalMap为ThreadLocal的一个内部类，源码如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" static class ThreadLocalMap {\n\n        static class Entry extends WeakReference<ThreadLocal<?>> {\n            /** The value associated with this ThreadLocal. */\n            Object value;\n\n            Entry(ThreadLocal<?> k, Object v) {\n                super(k);\n                value = v;\n            }\n        }\n\n")])])]),a("p",[t._v("可以看到ThreadLocalMap的Entry继承了WeakReference，并且使用ThreadLocal作为键值。")]),t._v(" "),a("p",[t._v("在使用ThreadLocal的get方法之前一定要先set，要不然会报空指针异常。还有一种方式就是在初始化的时候调用initialValue（）方法赋值。改造下之前的例子，代码如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("public class Test2 {\n\n    ThreadLocal<Long> longLocal = new ThreadLocal<Long>(){\n\n        @Override\n        protected Long initialValue() {\n            return Thread.currentThread().getId();\n        }\n    };\n    ThreadLocal<String> stringLocal = new ThreadLocal<String>(){\n        @Override\n        protected String initialValue() {\n            return Thread.currentThread().getName();\n        }\n    };\n\n    public long getLong() {\n        return longLocal.get();\n    }\n\n    public String getString() {\n        return stringLocal.get();\n    }\n\n    public static void main(String[] args) throws InterruptedException {\n        final Test2 test = new Test2();\n\n\n\n        System.out.println(test.getLong());\n        System.out.println(test.getString());\n\n\n        Thread thread1 = new Thread(() -> {\n          \n            System.out.println(test.getLong());\n            System.out.println(test.getString());\n        });\n        thread1.start();\n        thread1.join();\n\n        System.out.println(test.getLong());\n        System.out.println(test.getString());\n    }\n}\n\n")])])]),a("p",[t._v("运行该程序，代码输出的结果为：")]),t._v(" "),a("blockquote",[a("p",[t._v("1")]),t._v(" "),a("p",[t._v("main")]),t._v(" "),a("p",[t._v("10")]),t._v(" "),a("p",[t._v("Thread-0")]),t._v(" "),a("p",[t._v("1")]),t._v(" "),a("p",[t._v("main")])]),t._v(" "),a("h2",{attrs:{id:"threadlocal常用的使用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#threadlocal常用的使用场景"}},[t._v("#")]),t._v(" ThreadLocal常用的使用场景")]),t._v(" "),a("p",[t._v("通常讲JDBC连接保存在ThreadLocal对象中，每个对象都有属于自己的连接，代码如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("private static ThreadLocal<Connection> connectionHolder\n= new ThreadLocal<Connection>() {\n    public Connection initialValue() {\n       return DriverManager.getConnection(DB_URL);\n    }\n};\n \npublic static Connection getConnection() {\n    return connectionHolder.get();\n}\n\n")])])]),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("p",[t._v("《Java并发编程实战》")]),t._v(" "),a("p",[t._v("《深入理解JVM》")])])}),[],!1,null,null,null);e.default=r.exports}}]);