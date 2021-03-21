# 帮助文档使用说明

本文将会对启动方法、注意事项、文件结构做一个详细的说明，使用前请先仔细阅读。

## 启动方法

- 解压help.zip压缩包，点击start.bat（执行之前请确保电脑上已经有node环境了，[node官网](https://nodejs.org/en/)）可以自动启动一个node的web服务，默认8080端口（如需修改，在index.js中修改即可），然后会自启动默认浏览器（请使用Chrome浏览器），并打开页面，这一套组件只是为了在编写帮助文档的时候能快速看到效果而搭建的，最终的帮助文档web服务器可能不是它

  **显示效果**：

  ![](./帮助文档首页.jpg)

## 注意事项

- 如果node_module文件夹不存在或者残缺可以 cd 到help目录下并执行 **npm install** 
- website文件夹是整个帮助文档框架的前端核心
- html文件夹是默认的放置帮助文档的位置，支持修改
- js文件夹下面有两个文件需进行配置和修改：config.js(常规配置，帮助文档根目录、首页等)和structdatas.js(帮助文档结构目录配置)
- main.js、structnode.js、util.js一般无需修改

## 文件结构简介

> help
>
> > node_modules
> >
> > website
> >
> > > core
> > >
> > > > css
> > > >
> > > > font
> > > >
> > > > lay
> > > >
> > > > layui.all.js
> > > >
> > > > layui.js
> > >
> > > html
> > >
> > > > Your files
> > >
> > > js
> > >
> > > > config.js
> > > >
> > > > main.js
> > > >
> > > > structdatas.js
> > > >
> > > > structnode.js
> > > >
> > > > util.js
> > >
> > > index.html
> > >
> >
> > index.js
> >
> > package.json
> >
> > readme.html
> >
> > readme.md
> >
> > start.bat

