# manager

> 一个后台管理项目

## 环境要求

- Node >= v10.6.0

- NPM >= v6.0.1

- Webpack v3.6.0

### 开发

浏览器访问 http://localhost:8088

### 安装环境

# 1 安装 node 下载地址：https://nodejs.org/en/ 安装版本 v10.6.0 以上（npm 6.0.1 以上）

# 2 全局安装 cnpm

# 在 cmd 命令窗口运行命令： npm install -g cnpm —registry=https://registry.npm.taobao.org

# 4 安装插件

# 在package.json所在目录 按 Ctrl + 鼠标右键 选择在此处打开命令窗口 运行开发模式的命令：cnpm install

# 5 启动服务进行本地开发

# 在 package.json 所在目录 按 Ctrl + 鼠标右键 选择在此处打开命令窗口 npm run dev 进行本地开发。

# 6 打开浏览器 地址栏输入 http://localhost:8088 (正常自动打开)

# 7 前端开发框架 vue 中文教程地址：https://cn.vuejs.org/v2/guide/

# 8 前端基础 ui 库 element-ui 中文教程地址： http://element-cn.eleme.io/#/zh-CN/component/layout

### 开发流程

1 根据 ui 图和后台开发提供的接口文档进行开发
2 首先在 src/router/index.js 目录下建立页面的路由
在 page 找到自己的页面，创建自己的页面 vue。
3 初始 api 调用写在 created 里面, 注意 destroy 钩子函数中要销毁 之前注册过的事件
4 接口：在 apis 目录下建立自己的接口模型，文件名为模块名字，变量名为接口名字，必须要有 url 和 method 配置
5 在 mock 里面 添加模拟数据 一个应用一个文件 一个文件里面可以有多个接口数据 文件名字应该为接口第一个/ 和 第二个/之间の部分 例如接口 /nav/add 那么 模拟数据 mock 文件名为 nav，文件里面的变量名为 add
6 调用后台接口时采用的方法是 this.\$api('demo.myTest', { num: 1 }) 其中 this 指向的是当前的 vue
7 严格按照 eslint 格式规范，可以通过命令 npm run lintfix 也可以通过 IDE 插件实现（VScode 编辑器http://www.ptbird.cn/vscode-autosave-eslint-support-vue.html）
8 根据 eslint 格式规范 禁止使用 == 请使用 === ，字符串请使用单引号 '' 禁止使用双引号 ""

# 项目布局

├── build // webpack 配置文件
├── config // 项目打包路径
├── src // 源码目录
│ ├── page // 应用页面
│ │ └── demo // 测试
│ │ └── test.vue
│ ├── components //公共组件
│ ├── filter
│ │ └── index.js // 过滤器
│ ├── assets // 静态资源（会被压缩的）
│ │ └── index.js // 图片(仅有一个页面引用时使用，使用相对路径)
│ ├── mock // 模拟数据
│ ├── plugins // 引用的插件
│ ├── router
│ │ └── index.js // 路由配置
│ ├── store // vuex 的状态管理
│ │── style
│ │ └── common.scss // 全局样式文件
│ ├── App.vue // 页面入口文件
│ └── main.js // 程序入口文件，加载各种公共组件
├── static // 静态资源（多次使用，使用绝对路径，js 调用时以公共配置 process.env.imgUrl 开头）
│ └── image // 图片
├── favicon.ico // 图标
└── index.html // 入口 html 文件

框架中参考的技术网站：
1 不同的部署环境设置不同的配置 http://www.cnblogs.com/woshidouzia/p/9345706.html
