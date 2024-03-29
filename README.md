## collection everyday
- 编辑器选型比较 quill (https://juejin.cn/post/6966993945973194765)
- 电脑上的 node_modules，使用软件包 npkill (https://github.com/voidcosmos/npkill)
- 一个合格的中级前端工程师应该掌握的 20 个 Vue 技巧 https://juejin.im/post/6872128694639394830
- 动画库推荐11个 (https://juejin.im/post/5dd7278cf265da4ea640b398?utm_source=gold_browser_extension)
- 模拟 自定义接口返回数据 (http://myjson.com/j4jzm)
- 胖技术博客 前端学习视频（http://www.jspang.com/）
- 2019前端提升项目9个练习 (https://juejin.im/post/5dc0c744e51d456e7e41f5ac?utm_source=gold_browser_extension)
- IOS 上微信在输入框弹起后，页面不恢复，下方有留白处理 (https://blog.csdn.net/m0_37520980/article/details/86305488)
- 面试汇总资源 https://segmentfault.com/a/1190000020480229
- IOS 上微信在输入框弹起后，页面不恢复，下方有留白处理 (https://blog.csdn.net/m0_37520980/article/details/86305488 http://blog.shzhaoqi.com/article/187)

- vscode 正则常用表达查询插件：any-rule
- 前端CDN查询 https://miku.tools/cdnjs/
- 一个合格的前端都应该阅读这些文章
  - https://juejin.im/post/5d387f696fb9a07eeb13ea60?utm_source=gold_browser_extension
- 在线编辑器
	https://codesandbox.io/s/
- 面试图谱（前端）
	- https://yuchengkai.cn/docs/zh/
- 可视化脚手架
	- [Iceworks.exe GUI](https://alibaba.github.io/ice)
- 多端统一开发框架
	- [taro](https://github.com/NervJS/taro)
- 树插件
	- [jsTree](https://www.jstree.com/)
	- [zTree](http://www.treejs.cn/v3/main.php#_zTreeInfo)
- js处理cookie，删除所有**兼容ios 微信浏览器**
    - ```
        var clearAll = function() {
            // FIXME:微信兼容 ,路径必须设置&日期设置为0
            var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
            if(keys) {
                for(var i = keys.length; i--;){
                    document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()+"; path=/";
                }
            };
        }
    - ```bash
- [vue 服务端渲染框架-Nuxt.js](https://zh.nuxtjs.org/guide)
- 前端富文本编辑器推荐
    - [wangEidtor 较轻量web富文本编辑器](http://www.wangeditor.com/)：目前正在开发中使用，踩坑后续补充
- [webpack 深入浅出](http://webpack.wuhaolin.cn/)
- [关于input的一些问题解决方法分享](https://segmentfault.com/a/1190000014843602)
- [vue添加环境变量常量--多环境打包解决之一](https://juejin.im/entry/5afd429b51882542714ff881?utm_source=gold_browser_extension)
- [高德地图api](http://lbs.amap.com/api/javascript-api/summary/)
- [Antd design](http://ant.design/index-cn)
- [不错的下拉刷新，上滑加载更多插件推荐 mescroll](https://www.npmjs.com/package/mescroll.js)
- [react 学习项目](https://github.com/cd-dongzi/react-toutiao)
- [SwitchHosts 快速切换hosts](https://github.com/oldj/SwitchHosts)
- [TeamViewer 远程桌面解决方案:连接远程计算机,提供远程支持和在线协作](https://www.teamviewer.com/zhCN/)
- [前百度云盘他人资料分享](https://segmentfault.com/a/1190000014332276)
- [vue开发移动端项目总结**（推荐）**](https://zhuanlan.zhihu.com/p/32601637)
- [vue移动端UI框架](https://github.com/airyland/vux)
- 移动端开发辅助调试工具**推荐**
	- [vConsole](https://github.com/Tencent/vConsole)
	- [Eruda](https://github.com/liriliri/eruda/blob/master/doc/README_CN.md)
		- 同vConsole类似
		- 用法：
		<!-- 移动端 debug 辅助工具 -->
		<script src="//cdn.bootcss.com/eruda/1.4.2/eruda.min.js"></script>
		<script>
		    eruda.init();
		</script>
- [git的使用操作(!**推荐**)](https://juejin.im/post/5abef8356fb9a028df22bd78)
- [理解this和闭包](https://juejin.im/entry/5ac21eb8f265da2392368433?utm_source=gold_browser_extension)
- [前端模块化：CommonJS,AMD,CMD,ES6](https://juejin.im/post/5aaa37c8f265da23945f365c)
- [前端常逛网站推荐](https://www.zhihu.com/question/28478379)
- [vue使用百度地图插件](https://dafrok.github.io/vue-baidu-map/#/)
- [前端面部识别-处理](https://juejin.im/post/5a7f9e255188257a5f1ec13e?utm_source=gold_browser_extension)
- [nginx部署前端SPA应用实践](https://segmentfault.com/a/1190000013218418)
- [前端实现在线pdf、word、xls、ppt等文件](https://juejin.im/post/5a7badf26fb9a063353198a1?utm_source=gold_browser_extension)
- [iconfont素材下载阿里巴巴矢量图标库](http://iconfont.cn/home/index?spm=a313x.7781069.1998910419.2)
- [优秀博主文章推荐，vscode ，vue， NG，react总结（！！强烈推荐看）](https://juejin.im/user/575ebdbd5bbb5000638173fb/posts)
- [react 学习指南](https://juejin.im/entry/5a6f237b6fb9a01cbd58dd9d?utm_source=gold_browser_extension)
- [react 中文文档官网](https://doc.react-china.org/)
- [vue 组件缓存处理插件：vue-navigation](https://www.zhihu.com/question/51948961)
- [vue 常用优化手段](https://segmentfault.com/a/1190000014085613)
- [js处理唤起本地app方式总结](https://segmentfault.com/a/1190000012940046)
- [Fundebug 全栈JavaScript错误实时监控平台,用户应用出现错误是，通过邮件或者第三方工具发送警告给开发者](https://docs.fundebug.com/)
- [vue理解与学习（推荐）](https://juejin.im/entry/5a54b747518825734216c3df?utm_source=gold_browser_extension)
- [前端框架和库的差异](https://zhuanlan.zhihu.com/p/26078359?group_id=830801800406917120)
	- 本质区别： you call libs, frameworks call you
- [免费编程书籍笔记【英】](http://goalkicker.com/)
- [技术胖前段视频教程](https://juejin.im/post/5a5bc8c36fb9a01ca26774eb?utm_source=gold_browser_extension)
- [接口模拟 easy mock](https://easy-mock.com/)
- [js常用设计模式](https://segmentfault.com/a/1190000012585364)
- [html5中使用new Date() ,参数最好使用 '2017/12/02'](http://blog.csdn.net/zhaowei5210/article/details/50177851)
- [2017前端学习资源分享](https://juejin.im/post/5a0c1956f265da430a501f51?utm_source=gold_browser_extension)
- [Promise some simple template](https://juejin.im/entry/5a3a113a51882569707821c0?utm_source=gold_browser_extension)
- [parcel 前端构建工具, 一个和wabpack类似，但是速度更快](https://parceljs.org/code_splitting.html)
- [parcel 应用于vue中](https://segmentfault.com/a/1190000012427886)
- [js学习总结](https://segmentfault.com/bookmark/1230000002226470)
- [Vue-TypeScript全面教程](https://juejin.im/post/5a38830351882506a463bbcc)
- [vue 各种components组件](https://vuejsexamples.com/)
- [fis3帮助文档]( http://fis.baidu.com/fis3/docs/beginning/release.html)
- [常用数据可视化技术栈](https://www.zhihu.com/question/19929609)
- [打造自己的JavaScript武器库](https://juejin.im/post/5a091afe6fb9a044ff30f402?utm_source=gold_browser_extension)
- [Ramda 函数库 function first，data last](http://www.ruanyifeng.com/blog/2017/03/ramda.html)
- [gulp babel 处理提示 exports is not defined](https://github.com/JeremyEnglert/JointsWP/issues/249)
- electron（桌面应用开发）
	- 官网 https://electron.atom.io/
	- 中文教程官网 https://electron.org.cn/
	- 学习教程 https://www.w3cschool.cn/electronmanual/
		- [ demo https://github.com/k-water/electron-filesystem](https://github.com/k-water/electron-filesystem)
- 银联开发学习
	- [http://www.cnblogs.com/abcwt112/p/4768390.html](http://www.cnblogs.com/abcwt112/p/4768390.html)
	- 银联商家技术服务官网
		- https://open.unionpay.com/ajweb/help/apiTool?cateid=38
- 支付宝支付开发
	- [https://mobiless.alipay.com/](https://mobiless.alipay.com/)
	- [https://openhome.alipay.com/developmentDocument.htm](https://openhome.alipay.com/developmentDocument.htm)
- 微信公众号支付开发
	- [https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115)
	- [https://pay.weixin.qq.com/wiki/doc/api/index.html](https://pay.weixin.qq.com/wiki/doc/api/index.html)
- 正则学习
	- [常用正则：http://jingyan.baidu.com/article/624e74599410d634e8ba5a0a.html](http://jingyan.baidu.com/article/624e74599410d634e8ba5a0a.html)
	- [正则图形化解析工具 https://regexper.com/](https://regexper.com/)
	- [正则学习小书，**推荐** https://juejin.im/post/5965943ff265da6c30653879](https://juejin.im/post/5965943ff265da6c30653879)
- webGL
	- [WebGL：打开网页看大片 https://segmentfault.com/a/1190000011633728](https://segmentfault.com/a/1190000011633728)
- 微信小程序开发
	- api官网
	- 模块化开发
		- [https://segmentfault.com/a/1190000008094596](https://segmentfault.com/a/1190000008094596)
		- [https://github.com/maichong/labrador（推荐使用）](https://github.com/maichong/labrador)
		- [https://github.com/wepyjs/wepy](https://github.com/wepyjs/wepy)
- 前端开发常用工具整理
	- 测试辅助工具
		- 原生嵌入h5
			- 模拟器
				- **安卓**
					- 夜神模拟器
					- 海马玩模拟器
					- BlueStacks(有点笨重，不推荐使用)
				- **ios**
					- iPadian（感觉不好用）
			- 抓包，代理
				- **fiddler**（windows）
				- wireshark
			- 自动化测试、性能分析
				- h5 自动化用：selenium
				- 安卓ios应用自动化： appium
				- jmeter性能分析
	- 常用web开发浏览器
		- pc：Safari、QQ浏览器、Google Chrome、Internet Explorer、Mozilla Firefox、360安全浏览器、搜狗高速浏览器、猎豹安全浏览器
		- 手机端浏览器：QQ浏览器、UC浏览器、360手机浏览器、百度浏览器、搜狗浏览器、猎豹浏览器、chrome浏览器、欧朋浏览器、2345浏览器、绿茶浏览器

	- 开发文档编辑
		- MarkdownPad： 各种说明文档&开发文档整理编写（可以导出html）
	- 常用笔记工具
		- [印象笔记 https://app.yinxiang.com/Registration.action](https://app.yinxiang.com/Registration.action)
	- 产品原型图使用工具
		- AxureRP
	- UI常用工具
		- ps
		- MarkMan：开速标注
		- FastStone Capture（红绿工具）
 	- 视频录制（每帧可编辑）
 		- ScreenToGif
	- 翻墙工具
		- Shadowsocks
		- Lantern
		- Proxifier
		- [xx-net 推荐使用的免费稳定的翻墙软件（原理：代理 ，使用ipv6）](https://github.com/XX-net/XX-Net)
	- chrome常用插件
		- 掘金： 为设计师、程序员、产品每日发现优质的内容
		- 谷歌访问助手： 解决chrome扩展无法自动更新问题，同时可以访问google搜索，gmail邮箱，google+等谷歌服务
		- ADB： 调试安卓
		- Allow-Control-Allow-Origin： 跨域处理
		- Axure RP Extension for Chrome：原型图预览
		- Google翻译
		- JSON-handle： json格式 beautiful view
		- Vue.js devtools： vue 开发debug
		- 草料二维码： 当前网址二维码
		- Web Server for Chrome： 辅助 service workers
		- [Chrome 扩展的开发过程 https://segmentfault.com/a/1190000011733897](https://segmentfault.com/a/1190000011733897)
	- **前端常用调试-移动设备**
		- [移动设备链接pc，chrome Remote Debugging](http://blog.csdn.net/freshlover/article/details/42528643)
			- chrome://inspect/#devices
		- 模拟器（**目前夜神模拟器&BlueStacks，在chrome上可以检测到 设备**）打开页面，chrome Remote Debugging 检测
		- [UC浏览器访问调试 http://plus.uc.cn/document/webapp/doc5.html](http://plus.uc.cn/document/webapp/doc5.html)
		- app嵌入web，调试方法总结
			- 安卓机调试（真机）
				- app开启调试模式
				- 手机设置为：开发着模式
				- 手机与电脑链接数据线
				- chrome浏览器（需翻墙：推荐使用 xx-net翻墙工具）：访问 chrome://inspect/#devices， 查看当前检测到的设备，点击inspect 访问页面
			- 夜深模拟器，安卓端：最好是用低版本，否则chrome检测不到访问的web，推荐版本 3.7.1.0，3.8.3.1
				- chrome浏览器，打开移动设备检测页面（同安卓真机调试相同）
	- 常用开发编辑器
		- vscode: 各种扩展，推荐使用
			- 手动安装插件(具体教程链接  http://blog.csdn.net/wangwei703/article/details/54020712)
			- 下载链接配置
					https:// ${publisher}.gallery.vsassets.io/_apis/public/gallery/publisher/${publisher}/extension/${extension name}/${version}/assetbyname/Microsoft.VisualStudio.Services.VSIXPackage

					插件介绍链接页： https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome

					${publisher} ：msjsdiag

					${version}：页面版本信息（eg: 1.0.0）

					${extension name}: debugger-for-chrome

					修改下载的扩展插件名为(后缀一定是.visx)  extension name.visx

					本地cmd.exe安装指令
					code --install-extension debugger-for-chrome.visx

			- vscode常用插件
				- 正对代码检查的，ts，js
				- 自动保存，autofix功能开启
				- 快速搜索node_modules： Search node_modules
				- 丰富界面icon
				- git辅助，等配置
				- debug
				- 开发文档编辑
					- md
		- WebStorm
			- 常用插件
		- sublime
	- node
		- 版本管理工具
			- nvm： 只能在 osx, linux环境下使用
			- nvmw： windows 系统使用
	- npm 资源切换
		- NPM registry 管理工具
			- **nrm**：**能够查看和切换当前使用的registry**
	- 浏览器兼容性查询
		- [http://caniuse.com/#](http://caniuse.com/#)
	- 团队协作开发辅助工具
		- git
			- [git之https或http方式设置记住用户名和密码的方法](http://www.cnblogs.com/wish123/p/3937851.html)
			- git vim命令 http://blog.csdn.net/u010918847/article/details/51900073
			- 辅助git工具
				- SourceTree
			- [git常用指令 http://blog.csdn.net/dengsilinming/article/details/8000622](http://blog.csdn.net/dengsilinming/article/details/8000622)
				- 复制远成仓库到本地： git clone [url]
				- 查看远程仓库： git remote -v
				- 添加远程仓库到本地: git remote add [name] [url]
				- 删除远程仓库： git remote rm [name]
				- git branch, git status, git merge
				- 冲突处理步骤
					- 手动处理conflict
						- 使用Git时，在pull、merge、rebase的过程中，遇到conflict时，以上处理过程会终端，并且命令行中显示（xxx|MERGING）的状态（Windows下Git Bash中显示的状态），经常会遇到conflict的情况：
						```bash
						命令行下解决冲突的方法为
						1.工具编辑有冲突的文件，去除冲突标记（就是>>>>>>>> ======= <<<<<<这样的东西），并把文本冲突解决掉；
						2.然后使用git add 有冲突的文件，这时文件的冲突标记就变成了修改标记了（在windows下安装TortoiseGit就能看到文件图标的变化了）；
						3.将所有有冲突的文件解决完后，使用git commit -a -m "Xxx"。
						将本地修改的文件提交到远程仓库：git push [仓库名称]
						```
		- svn
			- [svn回退到指定版本 http://blog.csdn.net/u013131533/article/details/48160759](http://blog.csdn.net/u013131533/article/details/48160759)
	- cmd
		- [常用的指令 http://blog.csdn.net/Demo_18/article/details/78188121](http://blog.csdn.net/Demo_18/article/details/78188121)
		- [辅助工具 cmder	](http://cmder.net/)
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
		- http://blog.csdn.net/wangjun5159/article/details/52202059


- 本地址配置一个http文件服务器
	- anywhere
	- http-server
	- live-server (live-server --port=1233 --watch=D:/file/test) 可以实时刷新监听文件编辑修改
	- http-server-spa (http-server-spa <directory> <fallback> <port>, eg: http-server-spa /  index.html  1337   **use history-api-fallback, single page applications with frontend routing**)
	- 使用ngnix
- 穿透内网方向代理
	- [ngrok](https://ngrok.com/product)
- 前端性能分析
	- css性能分析
		- [https://csstriggers.com/](https://csstriggers.com/)
	- 减少GPU的占用
		- [https://developers.google.com/web/updates/2016/07/infinite-scroller](https://developers.google.com/web/updates/2016/07/infinite-scroller)
- flex布局学习
	- [http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- 图片压缩
	- [gulp-tinypng-compress https://tinypng.com/developers](https://tinypng.com/developers)
- webpack学习地址
	- https://github.com/slashhuang/blog/issues/1
	- https://www.zhihu.com/question/39290543

- css写各种常用的icon（强烈推荐）
	- [http://cssicon.space/#/icon/snow](http://cssicon.space/#/icon/snow)
- iconfont文字icon
	- http://lib.h-ui.net/Hui-iconfont/1.0.7/demo.html
	- http://fontawesome.dashgame.com/

- 一些不错的UI成套组件库
	- [sui 就是css的写法有些老  http://m.sui.taobao.org/](http://m.sui.taobao.org/)
	- [weiui 一套贴合微信开发的UI组件    https://mp.weixin.qq.com/wiki/2/ae9782fb42e47ad79eb7b361c2149d16.html](https://mp.weixin.qq.com/wiki/2/ae9782fb42e47ad79eb7b361c2149d16.html)

- [web中的url中的http协议与https，相对协议地址](https://segmentfault.com/q/1010000000368868)

- [e6箭头函数使用说明](https://segmentfault.com/a/1190000010946164)
- 各种学习视频
	- [https://www.youtube.com/user/thenewboston/playlists](https://www.youtube.com/user/thenewboston/playlists)
- 小程序案例
	- [云档 https://github.com/SmallRuralDog/cloud-doc](https://github.com/SmallRuralDog/cloud-doc)
- 可视化编辑
	- http://egret.com/products/wing.html
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


- node.js学习（http://www.runoob.com/nodejs/nodejs-repl.html）

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
- JSON.parse()和JSON.stringify()

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

- React  学习

	(1) 一个简单demo

		https://github.com/ruanyf/react-demos


- MVC框架  http://www.csdn.net/article/2014-08-27/2821409-javascript-framework-comparison

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

		vue，angular，avalon， react， weex

		http://cn.vuejs.org/guide/

		http://www.yyyweb.com/ctools/demo.php?t=http%3A%2F%2Fvuejs.org%2F&h=1000&c=&n=vuejs


- 视口单位vh vw

	vw：viewpoint width，视窗宽度，1vw等于视窗宽度的1%。

	vh：viewpoint height，视窗高度，1vh等于视窗高度的1%。

	vmin：vw和vh中较小的那个。

	vmax：vw和vh中较大的那个。

	vw, vh, vmin, vmax：IE9+局部支持，chrome/firefox/safari/opera支持，iOS safari 8+支持，Android browser4.4+支持，chrome for android389支持



- 为什么网易淘宝等大型网站要把css和js直接写在页面内呢？

	http://bbs.blueidea.com/thread-2950645-1-1.html

	总结：
		（1）减少链接数

		（2）防止出现外部调用css，js没有加载完毕的问题出现

		（3）重要的栏目或者说叫分类、频道什么的这种的首页才这样做，首页的访问量大，可以减少连接数，也可以防止css没有加载完毕出现页面乱的现象，用户体验好


- 打包压缩工具 webpack


- chorm 调试学习

	http://umaar.github.io/devtools-animated-2016/#/88

	http://blog.csdn.net/freshlover/article/details/42528643

  移动端Web开发调试之Weinre调试教程

   http://note.youdao.com/share/?id=9720dabd97e862ceee46af141ad4c4ac&type=note#/




- 、touch slide

	（1） swiper

- css参考手册  http://css.doyoe.com/

	前端手册 https://leohxj.gitbooks.io/front-end-database/content/javascript-basic/scoping-and-hoisting.html


- 推荐博客 https://github.com/doyoe


- IT问答网站 http://stackoverflow.com/

- LayUi http://www.layui.com/   前端插件 模板引擎

- 常用正则
	http://www.w3cfuns.com/notes/17707/90260f5f78cf25a9d922ea5dc2097165.html

- 移动端传感器
	http://www.w3cfuns.com/notes/14332/77c4fb52b5b6db04929fdb619c8e5692.html

- 创建SSH Key连接github或gitlab

	http://blog.csdn.net/troy__/article/details/40082657?utm_source=tuicool&utm_medium=referral

- 百度H5 http://h5.baidu.com/

- expressJs学习（基于node）
	- http://www.th7.cn/web/js/201404/29836.shtml
	- http://www.expressjs.com.cn/4x/api.html#res.send

- [http://editor.method.ac/  绘制路径，导出svg图，查看具体参数信息source](http://editor.method.ac/)

- sublime text 3 代码校验插件的安装（包括js、css）

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
- [网站优化](https://juejin.im/post/5c07c6b96fb9a04a0d56a3cc?utm_source=gold_browser_extension)
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
- 设计师常用素材链接
	- 千库网，一个免费下载图片素材的网站 [http://588ku.com/](http://588ku.com/)
	- Unsplash分享免费高质量照片的网站，照片分辨率都挺大，而且都是真实的摄影师作品，图片多是风和静物 [https://unsplash.com/](https://unsplash.com/)
	- 有字库，一个免下载字体，直接在线引用字体的网站
	[http://www.youziku.com/onlinefont/index](http://www.youziku.com/onlinefont/index)

- 前端工程师必备实用网站
	- [http://www.jianshu.com/p/53a7da454057?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io](http://www.jianshu.com/p/53a7da454057?hmsr=toutiao.io&utm_medium=toutiao.io&utm_source=toutiao.io)




- es6 学习
	- http://es6.ruanyifeng.com/#docs/function

	- 学习要点：箭头函数,类,import, const, let

- vuex 的测试。。
	- https://vuex.vuejs.org/en/testing.html

- [vue实用技巧： https://zhuanlan.zhihu.com/p/25589193](https://zhuanlan.zhihu.com/p/25589193)


- window7常用快捷键
	- http://jingyan.baidu.com/article/90bc8fc8060df4f653640c13.html?st=&net_type=&bd_page_type=1&os=&rst=
- [window环境下安装多个版本的node管理工具nvmw http://www.jianshu.com/p/82c5f3a39559](http://www.jianshu.com/p/82c5f3a39559)

- [range slider 组件可通过拖动的方式来设置一个给定范围内的数值 https://refreshless.com/nouislider/behaviour-option/](https://refreshless.com/nouislider/behaviour-option/)
- [你不知道的JavaScript https://segmentfault.com/a/1190000008755782](https://segmentfault.com/a/1190000008755782)


- vscode 一些推荐的插件~~
	- https://segmentfault.com/a/1190000006697219
	- https://juejin.im/post/58a691f461ff4b006c4981a0
	- https://github.com/viatsko/awesome-vscode
- [es6学习 http://www.jianshu.com/p/cfb0893c34f1](http://www.jianshu.com/p/cfb0893c34f1)

- 设计稿px与rem之间的转换
	http://www.jianshu.com/p/b00cd3506782

- 前端缓存技术 渐进式网页应用 Progress Web App
	- https://zhuanlan.zhihu.com/p/25800461
	- http://www.jianshu.com/p/fda430412c16
- 利用视口实现适配（移动端）
	- http://web.jobbole.com/91190/
- 改npm镜像了 消灭那些老是半路卡住你的npm install吧
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
- npm切换依赖安装源
	- http://www.jianshu.com/p/0e332d34d345
- vr 全景
	- http://blog.csdn.net/tencent_bugly/article/details/52414003

- 2017 前端面试知识点整理
	- [整理的面挺全的：https://segmentfault.com/a/1190000011091907](https://segmentfault.com/a/1190000011091907)
	- [腾讯校招面试题 https://juejin.im/post/59c907d46fb9a00a4746e2db](https://juejin.im/post/59c907d46fb9a00a4746e2db)
	- [es6 面试题 https://juejin.im/post/59c8aec0f265da065c5e965e](https://juejin.im/post/59c8aec0f265da065c5e965e)
	- [深入理解 js this 绑定 https://segmentfault.com/a/1190000011194676](https://segmentfault.com/a/1190000011194676)
	- [知识点探讨 https://github.com/xufei/blog/issues](https://github.com/xufei/blog/issues)
	- [前端资料群集 https://github.com/nicejade/Front-end-tutorial](https://github.com/nicejade/Front-end-tutorial)
	- [饿了么前端面试 https://elemefe.github.io/node-interview/#/sections/zh-cn/](https://elemefe.github.io/node-interview/#/sections/zh-cn/)
	- [2017年前端面试题整理汇总100题 http://blog.csdn.net/kebi007/article/details/54882425#comments](http://blog.csdn.net/kebi007/article/details/54882425#comments)
	- 前端常用导航
		- [http://www.alloyteam.com/nav/](http://www.alloyteam.com/nav/)
- Angular4
	- [https://segmentfault.com/a/1190000009819720](https://segmentfault.com/a/1190000009819720)
- 前端常用网站
	- [Google Developers https://developers.google.com/](https://developers.google.com/)
	- [segmentfault https://segmentfault.com/blogs](https://segmentfault.com/blogs)
	- [https://stackoverflow.com/](https://stackoverflow.com/)
	- [https://github.com](https://github.com)
	- 在线图片压缩
		- [jpg http://www.tuhaokuai.com/image](http://www.tuhaokuai.com/image)
		- [tinypng https://tinypng.com/](https://tinypng.com/)
	- [正则图形说明 https://regexper.com/](https://regexper.com/)
	- [掘金 https://juejin.im/](https://juejin.im/)
	- [代码对比 diff https://www.diffchecker.com/diff](https://www.diffchecker.com/diff)
	- [http://babeljs.io/](http://babeljs.io/)
- js解读
	- js是单线程的， 所有任务都是需要排队，前一个任务结束，才会去执行后一个任务。如果前一个任务耗时申城，后一个任务不得不一直等待着
	- js运行在浏览器中，浏览器的内核是多线程，常驻线程至少许要三个线程
		- javascript引擎线程：基于事件驱动单线程执行，js引擎一直等待队列中任务的到来，然后加以处理，浏览器无论何时只有一个js线程在运行js程序。
		- GUI渲染线程：渲染浏览器界面，当界面需要重回（Repaint）或由于某种操作引发回流（reflow）时，该线程就会执行。注意：GUI渲染线程与引擎是互斥的，当js引擎在执行时GUI线程会被挂起，GUI更新会被保存在一个队列中等到js引擎空闲时立即被执行。
		- 浏览器事件触发线程：当一个事件被触发时该线程会把事件添加到待处理队列的队尾，等待js引擎的处理。这些事件可来自Javascript引擎档当前执行的代码块setTimeOut、也可来自浏览器内核的其他线程如鼠标点击、AJAX异步请求等，由于JS的单线程关系所有这些事件都等待JS引擎处理（当线程中没有执行任何同步代码的前提下才会执行异步代码）
	- 任务队列
		- 同步任务：在主线程上排队执行的任务，只有前一个任务执行完毕，才会执行后一个任务
		- 异步任务：不进入主线程、而进入任务队列，只有‘任务队列’通知主线程，某个一部任务可以执行了，该任务才会进入主线程
-  [学习视频](https://juejin.im/post/5c11bf145188252704368b98)
- [企业查询【天眼查】]( http://tianyancha.com )
- 前端学习手册 https://frontendmasters.com/books/front-end-handbook/2018/

# 个人开发项目打包预览
## [**vue-demo-profile**: vue项目搭建模板，主要处理功能](https://mayyingzi.github.io/collectionWeb/examples/vue-demo-profile)
- api，ajax请求
- 系统环境变量处理
- 路由跳转
- 历史记录：component页面缓存处理
- 模拟app页面切换转场：交互动效
- 使用rem自适应页面
- styule预编译样式工具
- 按需加载（https://segmentfault.com/a/1190000011519350）
- [权限设置：根据用户权限，动态添加路由， 借助，router.addRoutes(addRoutesArray)](https://github.com/mgbq/vue-permission)
	- 参考demo [https://github.com/mgbq/vue-permission](https://github.com/mgbq/vue-permission)


