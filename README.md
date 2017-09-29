## collection everyday
- 2017 前端面试知识点整理
	- [整理的面挺全的：https://segmentfault.com/a/1190000011091907](https://segmentfault.com/a/1190000011091907)
	- [腾讯校招面试题 https://juejin.im/post/59c907d46fb9a00a4746e2db](https://juejin.im/post/59c907d46fb9a00a4746e2db)
	- [es6 面试题 https://juejin.im/post/59c8aec0f265da065c5e965e](https://juejin.im/post/59c8aec0f265da065c5e965e)
	- [深入理解 js this 绑定 https://segmentfault.com/a/1190000011194676](https://segmentfault.com/a/1190000011194676)
	- [知识点探讨 https://github.com/xufei/blog/issues](https://github.com/xufei/blog/issues)
	- [前端资料群集 https://github.com/nicejade/Front-end-tutorial](https://github.com/nicejade/Front-end-tutorial)
- 银联开发学习
	- [http://www.cnblogs.com/abcwt112/p/4768390.html](http://www.cnblogs.com/abcwt112/p/4768390.html)	
	- 银联商家技术服务官网
		- https://open.unionpay.com/ajweb/help/apiTool?cateid=38
- 支付宝支付开发
	- https://mobiless.alipay.com/
- 正则学习
	- [常用正则：http://jingyan.baidu.com/article/624e74599410d634e8ba5a0a.html](http://jingyan.baidu.com/article/624e74599410d634e8ba5a0a.html)
	- [正则图形化解析工具 https://regexper.com/](https://regexper.com/)
	- [正则学习小书，**推荐** https://juejin.im/post/5965943ff265da6c30653879](https://juejin.im/post/5965943ff265da6c30653879) 
- fiddler使用
	- [pc windows开启https抓包，提示证书安装失败，解决方案](http://blog.csdn.net/qq_31666147/article/details/51488063)
		1. 删除IE内容里的证书
		2. 删除：C:\Users\<UserName>\AppData\Roaming\Microsoft\Crypto\RSA\  （**这个路径下的文件就行了。不过我建议大家先备份里面的文件，否则出了问题，则无法恢复**）
		3. 执行命令（cd 到fiddler安装目录）：cd d:\Program Files\Fiddler
		
				makecert.exe -r -ss my -n "CN=DO_NOT_TRUST_FiddlerRoot, O=DO_NOT_TRUST, OU=Created by http://www.fiddler2.com" -sky signature -eku 1.3.6.1.5.5.7.3.1 -h 1 -cy authority -a sha1 -m 120 -b 09/05/2012

	- [配置手机抓包https教程](http://blog.csdn.net/songer_xing/article/details/53841401)
		- ios出现https抓包tunnel to ，或者抓包失败处理
			- iOS 10.3升级之后，安装的证书默认是不启用的，需要手动去开启。

					设置 –> 通用 –> 关于本机 –> 证书信息设置; 将Fiddler的证书开关打开就行了
	- 其他优秀教程推荐
		- http://blog.csdn.net/htdeyanlei/article/details/52874248
	

- 本地址配置一个http文件服务器

		anywhere
		http-server
- [e6箭头函数使用说明](https://segmentfault.com/a/1190000010946164)
- 小程序案例
	- [云档 https://github.com/SmallRuralDog/cloud-doc](https://github.com/SmallRuralDog/cloud-doc)

- 书单

		/**书单 （s 11:14 2016/4/21）**/
		
		《javascript高级程序设计》
		
		《javascript权威指南》
		
		/**书单 （e 11:14 2016/4/21）**/

- gulp + webpack 构建多页面前端项目


		1、[微信调试](http://mp.weixin.qq.com/wiki/10/e5f772f4521da17fa0d7304f68b97d7e.html)	
		
			（1）wxdebugger_0.4.0_x64.exe  微信开发着工具 模拟微信客户端
				http://mp.weixin.qq.com/wiki/10/e5f772f4521da17fa0d7304f68b97d7e.html#.E4.B8.8B.E8.BD.BD.E5.9C.B0.E5.9D.80
			
			（2）fiddler 抓包工具
			
			（3） http://blog.qqbrowser.cc/kai-qi-wang-ye-diao-shi-jiao-cheng/
		
			
		2、Chair是支付宝前端团队推出的，基于Node.js的Web框架，适用于大部分的Web应用
		
		http://www.html5cn.org/article-9285-1.html   开启网页调试教程   （微信调试工具）


3、node.js学习（http://www.runoob.com/nodejs/nodejs-repl.html）

	常用指令:

	查看当前node的版本		node -v
	
	查看npm的版本			npm -v

	nmp升级版本			npm install npm -g

	npm安装Node.js模块语法		npm install 模块名称（例如：express） 

	本地安装与全局安装：

	本地安装（即项目当前环境）	npm install 模块名称   

	全局安装（window）		npm install 模块名称  -g   
 
	全局安装模块查看		npm ls -g

	Node.js模块卸载			npm uninstall 模块名称
	
	模块更新			npm update 模块名称

	搜索模块			npm search 模块名称

	创建模块package.json		npm init

	Jade 是 Node 的一个模板引擎，一句话就是让我们能够更快更简便地写HTML
	$ npm install jade -g



	artTemplate前端模板引擎
	

	gulp插件命安装，并写入package 

					npm install --save-dev 插件名称



	gulp 插件  http://www.cnblogs.com/2050/p/4198792.html

	https://github.com/fmal/gulp-inline-source    gulp-inline-source 
	Inline all <script>, <link> and <img> tags that contain the inline attribute with inline-source.






4、JSON.parse()和JSON.stringify()

	（1）JSON.parse()   从一字符串中解析出json对象
	
	例如：var srt="{"name":"name_text","age":"18"}";

		JSON.parse(str); 
	
	Object
	
		age:"18",

		name: "name_text"

		__proto__: Object

	（2）JSON.stringify()   从一个对象解析出字符串

	例如： var a={a:1,b:2};

	JSON.stringify(a);
	
	结果：

	"{"a":"1","b":"2"}"

5、React  学习
	
	(1) 一个简单demo

		https://github.com/ruanyf/react-demos



6、MVC框架  http://www.csdn.net/article/2014-08-27/2821409-javascript-framework-comparison

	（1） AngularJS
	
		（two-way）双向数据绑定，HTML扩展能力
		http://www.ngnice.com/

	（2） Backbone.js
		
		轻量级的MVC框架
		
		https://github.com/Maluen/Backbone-Debugger        backbone的dubug调试工具
	
		推荐学习网站API http://www.css88.com/doc/backbone/
		
		今日学习 http://www.css88.com/doc/backbone/#Model

	（3） Ember.js


	MV*  框架  http://todomvc.com/

		vue，angular，avalon

		http://cn.vuejs.org/guide/

		http://www.yyyweb.com/ctools/demo.php?t=http%3A%2F%2Fvuejs.org%2F&h=1000&c=&n=vuejs


7、视口单位vh vw

	vw：viewpoint width，视窗宽度，1vw等于视窗宽度的1%。

	vh：viewpoint height，视窗高度，1vh等于视窗高度的1%。

	vmin：vw和vh中较小的那个。

	vmax：vw和vh中较大的那个。

	vw, vh, vmin, vmax：IE9+局部支持，chrome/firefox/safari/opera支持，iOS safari 8+支持，Android browser4.4+支持，chrome for android389支持



8、为什么网易淘宝等大型网站要把css和js直接写在页面内呢？

	http://bbs.blueidea.com/thread-2950645-1-1.html

	总结：
		（1）减少链接数
	
		（2）防止出现外部调用css，js没有加载完毕的问题出现

		（3）重要的栏目或者说叫分类、频道什么的这种的首页才这样做，首页的访问量大，可以减少连接数，也可以防止css没有加载完毕出现页面乱的现象，用户体验好


9、打包压缩工具 webpack


10、chorm 调试学习
	
	http://umaar.github.io/devtools-animated-2016/#/88

	http://blog.csdn.net/freshlover/article/details/42528643

  移动端Web开发调试之Weinre调试教程

   http://note.youdao.com/share/?id=9720dabd97e862ceee46af141ad4c4ac&type=note#/




11、touch slide

	（1） swiper

	（2）

12、css参考手册  http://css.doyoe.com/

	前端手册 https://leohxj.gitbooks.io/front-end-database/content/javascript-basic/scoping-and-hoisting.html


13、推荐博客 https://github.com/doyoe


14、IT问答网站 http://stackoverflow.com/

15、LayUi http://www.layui.com/   前端插件 模板引擎

16、常用正则
	http://www.w3cfuns.com/notes/17707/90260f5f78cf25a9d922ea5dc2097165.html

17、移动端传感器
	http://www.w3cfuns.com/notes/14332/77c4fb52b5b6db04929fdb619c8e5692.html

18、创建SSH Key连接github或gitlab

	http://blog.csdn.net/troy__/article/details/40082657?utm_source=tuicool&utm_medium=referral


19、百度H5 http://h5.baidu.com/

expressJs学习（基于node） http://www.th7.cn/web/js/201404/29836.shtml

	http://www.expressjs.com.cn/4x/api.html#res.send

20、git 指令

	http://www.oschina.net/question/565065_86025

21、sublime text 3 代码校验插件的安装（包括js、css）

	http://gaohaoyang.github.io/2015/03/26/sublimeLinter/
	http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/0013745374151782eb658c5a5ca454eaa451661275886c6000





		1.app.set(name,value)
		
		　　把名字为name的项的值设为value，用于设置参数
		
		　　app.set('views', path.join(__dirname, 'views'));   设置了模版文件夹的路径；主要清楚__dirname的意思就可以了，它是node.js中的全局变量，表示取当前执行文件的路径
		
		　　app.set('view engine', 'ejs');  设置使用的模版引擎，我们使用的ejs
		
		2.app.use([path], function)
		
		 　   用这个方法来使用中间件，因为express依赖于connect，有大量的中间件，可以通过app.use来使用；path参数可以不填，默认为'/'  (项目中用到的就不分别解释了，用到的时候自已查一API的中间件部分)
		
		　　app.use(express.static(path.join(__dirname, 'public'))); 这一句中可能要注意一下，express.static( )是处理静态请求的，设置了public文件，public下所有文件都会以静态资料文件形式返回（如样式、脚本、图片素材等文件）
		
		var routes = require('./routes/index');var users = require('./routes/users');app.use('/', routes);app.use('/users', users);
		　　上面代码表示当用户使用/访问时，调用routes，即routes目录下的index.js文件，其中.js后缀省略，用/users访问时，调用routes目录下users.js文件
		3.app.get(name)
		
		　　获取名为name的项的值
		
		if (app.get('env') === 'development') {    app.use(function(err, req, res, next) {        res.status(err.status || 500);        res.render('error', {            message: err.messag       });    });}
		　　表示如果是开发环境，处理error时会输出堆栈信息



- [node 模板（第一个）](http://www.imooc.com/view/590)





- [git之https或http方式设置记住用户名和密码的方法](http://www.cnblogs.com/wish123/p/3937851.html)
- [效果不错的动画](https://googlechrome.github.io/ui-element-samples/)



- 在javascript中, false, null, 0, "", undefined 和 NaN 都是false值.

- 关于动画的性能优化，可以参考几个内容

		总的指导文章：
		http://www.html5rocks.com/en/tutorials/speed/high-performance-animations/
		
		这是 uc 一个项目的优化文章
		https://xinranliu.me/2015-05-22-qiqu-performance/
		
		加上youtube 上 chrome developer 的 supercharged 开头几个将性能优化的例子
		
		加起来看，基本就入门了


- [r.js配置参数含义（require打包压缩）](http://www.chenliqiang.cn/node/22)

- [JS性能优化笔记](http://blog.csdn.net/huanghui8030/article/details/10148291)
- JavaScript

		JavaScript Promise迷你书
		http://liubin.org/promises-book/#ch2-promise-all
	
		ES6-Promise (subset of rsvp.js)
		https://github.com/stefanpenner/es6-promise/blob/master/README.md
		https://github.com/onestraw/ebook  电子书
		

- 动画的执行速度

		http://cubic-bezier.com/  贝塞尔曲线 （动画的执行速度）
	
		http://yisibl.github.io/cubic-bezier/


- 淘宝 已使用 （检测浏览器 对ie）技术图谱

		webp  http://isux.tencent.com/introduction-of-webp.html#comment-form
	
- gulp安装

		https://segmentfault.com/a/1190000000372547  gulp安装

- [flex布局使用](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html )
- uc移动端调试

		http://plus.uc.cn/document/webapp/doc5.html  

- 前端知识点收集（一般够用）

		http://www.tuicool.com/articles/F7JrMjj
		https://cnodejs.org/topic/56ef3edd532839c33a99d00e

	

- MV*框架
	- [http://bingojs2.mydoc.io/   bingoJS API官网](http://bingojs2.mydoc.io/)

- web端的自适应  rem css pixel与device pixels （device-width viewport DevicePixelRadio）
	- [http://www.cnblogs.com/koukouyifan/p/4066567.html](http://www.cnblogs.com/koukouyifan/p/4066567.html)
	- [http://web.jobbole.com/87267/](http://web.jobbole.com/87267/)	

- [百度地图API http://lbsyun.baidu.com/index.php?title=webcomponent](http://lbsyun.baidu.com/index.php?title=webcomponent)

- [node之ueditor编辑器 http://www.cnblogs.com/Chen-xy/p/4466425.html  ](http://www.cnblogs.com/Chen-xy/p/4466425.html)

- [JavaScript设计模式系列的文章：](http://www.codingserf.com/)
	- [JavaScript设计模式：单例模式](http://www.codingserf.com/index.php/2015/05/javascript-design-patterns-singleton/)
	
	- 单例模式（Singleton Pattern）
	- 桥接模式（Bridge Pattern）
	- 组合模式（Composite Pattern）
	- 外观模式（Facade Pattern）
	- 适配器模式（Adapter Pattern）
	- 装饰者模式（Decorator Pattern）
	- 工厂模式（一）（Factory Pattern Part 1）
	- 工厂模式（二）（Factory Pattern Part 2）
	- 代理模式（Proxy Pattern）
	- 观察者模式（Observer Pattern）
	- 命令模式（Command Pattern）
	- 责任链模式（Chain of Responsibility Pattern）
- 模拟器（电脑）
	- 安卓 ：夜神模拟器，BlueStacks
	- 苹果： iPadian



- 图表插件库
	- http://echarts.baidu.com/   echarts

	- https://g2.alipay.com/start/		G2

	- http://www.highcharts.com/		highcharts


- 集成测试相关文章
	
	- http://taobaofed.org/blog/2015/12/10/frontend-test-platform/	
	- Nightwatch  WEB UI测试 http://nightwatchjs.org/
		- http://stackoverflow.com/questions/tagged/nightwatch.js
		- https://github.com/nightwatchjs/nightwatch
	- Karma
	- phantom
- 翻墙 
	- lantern （蓝灯）
		- lantern下载
			- http://www.bcoder.cn/?s=%E8%93%9D%E7%81%AF

	- 申请试用一天
		- http://www.92tao.com/
	- UltraSurf Security, Privacy & Unblock VPN
	- Shadowsocks
 	- 谷歌翻墙插件

- 教程 测试
	- http://teahour.fm/2015/08/16/vuejs-creator-evan-you.html
	
	- 云测试
		- https://saucelabs.com/
		- http://www.cnblogs.com/sparkling-ly/p/5653402.html (教程)

	- 阿里前端测试 （主要针对页面死链接、浏览器截图。。。。没有多大的实用性）
		- http://fts.aliyun.com/index.htm?spm=0.0.0.0.8SeQ8F
	
- app chrome 调试
	- 模拟器(BlueStacks、夜神、海马)+真实手机
- 插件编写 chrome	
	- https://segmentfault.com/a/1190000006949838

- 前端学习方向	
	- http://www.w3school.com.cn/js/pro_js_object_defining.asp
	- http://www.cnblogs.com/sanshi/archive/2009/07/08/1519036.html
	- http://www.cnblogs.com/TomXu/tag/JavaScript/
	- 《JavaScript面向对象编程指南（第2版）》
	- 《JavaScript设计模式与开发实践》
	- https://www.zhihu.com/question/22146521
- 常用页面效果demo
	http://web.jobbole.com/88005/
- git辅助工具:souceTree
	https://www.sourcetreeapp.com/
	
- 各种学习视频
	- [https://www.youtube.com/user/thenewboston/playlists](https://www.youtube.com/user/thenewboston/playlists)


- iconfont文字icon	
	- http://lib.h-ui.net/Hui-iconfont/1.0.7/demo.html
	- http://fontawesome.dashgame.com/

- 可视化编辑
	- http://egret.com/products/wing.html
	

- 一些不错的UI成套组件库	
	- [sui 就是css的写法有些老  http://m.sui.taobao.org/](http://m.sui.taobao.org/)
	- [weiui 一套贴合微信开发的UI组件    https://mp.weixin.qq.com/wiki/2/ae9782fb42e47ad79eb7b361c2149d16.html](https://mp.weixin.qq.com/wiki/2/ae9782fb42e47ad79eb7b361c2149d16.html)

- [web中的url中的http协议与https，相对协议地址](https://segmentfault.com/q/1010000000368868)
	
- webpack学习地址	
	- https://github.com/slashhuang/blog/issues/1
	- https://www.zhihu.com/question/39290543


- css写各种常用的icon（强烈推荐）	
	- [http://cssicon.space/#/icon/snow](http://cssicon.space/#/icon/snow)

- 原生与h5的交互	
	- http://blog.csdn.net/ggh990640782/article/details/44598097


- 前端资料新手手册	
	- [http://f2er.club/](http://f2er.club/)
- 微信小程序	
	- [http://www.wxappclub.com/   微信小程序俱乐部](http://www.wxappclub.com/)
	
	- [https://mp.weixin.qq.com/debug/wxadoc/dev/index.html 小程序文档](https://mp.weixin.qq.com/debug/wxadoc/dev/index.html)
	- [https://mp.weixin.qq.com/wiki 微信公众平台 · 小程序文档](https://mp.weixin.qq.com/wiki)
	- [https://minapp.com/miniapp/  小程序应用商店](https://minapp.com/miniapp/)
	- [https://github.com/shuncaigao/BS 小例子](https://github.com/shuncaigao/BS)

>>>>>>
	千库网，一个免费下载图片素材的网站
	http://588ku.com/

	Unsplash分享免费高质量照片的网站，照片分辨率都挺大，而且都是真实的摄影师作品，图片多是风和静物
	https://unsplash.com/

	有字库，一个免下载字体，直接在线引用字体的网站
	http://www.youziku.com/onlinefont/index

	前端工程师必备实用网站
	http://www.jianshu.com/p/53a7da454057?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io

<<<<<<


>>>>>>
	微信小程序模块开发
	https://segmentfault.com/a/1190000008094596

	https://github.com/maichong/labrador（推荐使用）
	
	https://github.com/wepyjs/wepy

<<<<<

>>>>>
	https://csstriggers.com/ css性能分析
	减少GPU的占用
	https://developers.google.com/web/updates/2016/07/infinite-scroller
<<<<<

>>>>>
	图片压缩 gulp-tinypng-compress
	https://tinypng.com/developers

<<<<<

>>>>>>
	es6 http://es6.ruanyifeng.com/#docs/function

- 学习要点：箭头函数,类,import, const, let

<<<<<<

>>>>>>

vuex 的测试。。
https://vuex.vuejs.org/en/testing.html

实用技巧：
https://zhuanlan.zhihu.com/p/25589193

<<<<<<

>>>>>>
window7常用快捷键
http://jingyan.baidu.com/article/90bc8fc8060df4f653640c13.html?st=&net_type=&bd_page_type=1&os=&rst=
<<<<<<

>>>>>>
	window环境下安装多个版本的node管理工具nvmw
	http://www.jianshu.com/p/82c5f3a39559

<<<<<



>>>>>>

	编辑器 visual Studio Code
	官网 https://code.visualstudio.com/
	中文官网 http://www.vscode.org/

	手动安装插件(具体教程链接  http://blog.csdn.net/wangwei703/article/details/54020712)
	- 下载链接配置
	https:// ${publisher}.gallery.vsassets.io/_apis/public/gallery/publisher/${publisher}/extension/${extension name}/${version}/assetbyname/Microsoft.VisualStudio.Services.VSIXPackage

	插件介绍链接页： https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome

	${publisher} ：msjsdiag

	${version}：页面版本信息（eg: 1.0.0）

	${extension name}: debugger-for-chrome

	- 修改下载的扩展插件名为(后缀一定是.visx)  extension name.visx

	- 本地cmd.exe安装指令

	code --install-extension debugger-for-chrome.visx

<<<<<<

>>>>>>
	学习计划
	npm 
	yarn （javascript包管理工具 https://yarnpkg.com/zh-Hans/）

	react.js,vue.js,redux.js,mobx

<<<<<<
	range slider 组件可通过拖动的方式来设置一个给定范围内的数值
	https://refreshless.com/nouislider/behaviour-option/
>>>>>>
	

<<<<<<

https://segmentfault.com/a/1190000008755782


推荐书：你不知道的JavaScript

>>>>>>
	http://caniuse.com/#  浏览器兼容性查询

<<<<<<

>>>>>>
	git中vim命令 http://blog.csdn.net/u010918847/article/details/51900073
<<<<<<


>>>>>
	http://editor.method.ac/  绘制路径，导出svg图，查看具体参数信息source
<<<<<

>>>>>
	vscode 一些推荐的插件~~
		https://segmentfault.com/a/1190000006697219
		https://juejin.im/post/58a691f461ff4b006c4981a0
		https://github.com/viatsko/awesome-vscode
<<<<<

>>>>>
	es6资料
	http://www.jianshu.com/p/cfb0893c34f1
<<<<<


>>>>>

	设计稿px与rem之间的转换
	http://www.jianshu.com/p/b00cd3506782

<<<<<

>>>>>
	Progress Web App 前端缓存技术 渐进式网页应用
	https://zhuanlan.zhihu.com/p/25800461
	http://www.jianshu.com/p/fda430412c16
<<<<<
>>>>>
	利用视口实现适配（移动端）
	http://web.jobbole.com/91190/
<<<<<

>>>>>
	https://surmon-china.github.io/vue-awesome-swiper/   vue滑块组件demo
<<<<<

>>>>>
	来来来 改npm镜像了 消灭那些老是半路卡住你的npm install吧
下面是命令行命令 自己按需set 

# node-gyp 编译依赖的 node 源码镜像
$ npm set disturl https://npm.taobao.org/dist 

# chromedriver 二进制包镜像
$ npm set chromedriver_cdnurl http://cdn.npm.taobao.org/dist/chromedriver 

# operadriver 二进制包镜像
$ npm set operadriver_cdnurl http://cdn.npm.taobao.org/dist/operadriver 

# phantomjs 二进制包镜像
$ npm set phantomjs_cdnurl http://cdn.npm.taobao.org/dist/phantomjs 

# fsevents 二进制包
$ npm set fse_binary_host_mirror https://npm.taobao.org/mirrors/fsevents 

# node-sass 二进制包镜像
$ npm set sass_binary_site http://cdn.npm.taobao.org/dist/node-sass 

# electron 二进制包镜像
$ npm set electron_mirror http://cdn.npm.taobao.org/dist/electron/ 
<<<<<

>>>>>
切换依赖安装源
http://www.jianshu.com/p/0e332d34d345
<<<<<

>>>>>
vr 全景
http://blog.csdn.net/tencent_bugly/article/details/52414003
<<<<<

>>>>
webpack 3
http://www.css88.com/doc/webpack/
<<<<

	
