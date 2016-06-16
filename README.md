
# mynews

#### ionic+AngularJs+PhoneGap开发HybridApp练习项目——参考zaker开发新闻客户端

###  一、运行方法

        1.环境搭建
          安卓环境搭建
          安装nodejs
        2.安装ionic
          npm install -g ionic
        3.下载工程
          git clone ...
        4.安装依赖库
          npm install
        5.Android 创建安装运行
          ionic platform add android
          ionic build android
          ionic emulate android (模拟器运行)
          ionic run android (连接上手机运行)
          ionic serve (浏览器上运行)
     
### 二、主要工程结构
                  
          mynews
          │  
          ├─hooks                           //编译cordova时自定义的脚本命令
          ├─node_modules                    //模块文件
          ├─platforms
          │  │  platforms.json
          │  │  
          │  └─android
          │      └─build
          │          └─outputs              //生成App存放目录
          │              ├─apk
          │              │      android-debug-unaligned.apk   //生成的App
          │              │      android-debug.apk
          │              │      
          │              └─logs
          │                      manifest-merger-debug-report.txt
          │                      
          ├─plugins                         //安装cordova的各种插件
          ├─resources
          │  │  icon.png
          │  │  splash.png
          │  │  
          │  ├─android
          │  └─ios
          ├─scss                            //存放scss文件，发布时编译这个目录下的文件输出到www的css目录中
          │      ionic.app.scss
          │      
          └─www                             //项目的开发目录，页面、样式、脚本和图片都放在这个目录下
              │  index.html                 //主页面
              │  
              ├─css
              │      style.css
              │      
              ├─data                        //测试数据
              │      channel.json
              │      hotnews.json
              │      
              ├─img                         //图片目录
              │  │  
              │  └─hotnews
              │          album-bb.jpg
              │          
              ├─js                          
              │      app.js                 //工程入口
              │      controllers.js         //controller模块
              │      services.js            //services 模块
              │      
              ├─lib
              │  ├─angular
              │  │      
              │  ├─angular-animate
              │  │      
              │  ├─angular-sanitize
              │  │      
              │  ├─angular-ui-router
              │  │          
              │  ├─Hui-iconfont
              │  │          
              │  └─ionic
              │      
              └─templates                   //模板文件
                     chat-detail.html
                     tab-account.html
                     tab-channel.html
                     tab-hotnews.html
                     tab-video.html
                     tabs.html
                     weibo.html
                
###  三、Android效果
![频道](https://raw.githubusercontent.com/laijunlinfz/mynews/master/www/img/appimg/a1.png)

![热点](https://raw.githubusercontent.com/laijunlinfz/mynews/master/www/img/appimg/a2.png)

![账号](https://raw.githubusercontent.com/laijunlinfz/mynews/master/www/img/appimg/a3.png)



	

    
