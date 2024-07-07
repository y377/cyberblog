---
title: 主题介绍及用法
description: 详细介绍使用jekyll开发的cyberblog主题使用方法
keywords: cyberblog使用方法
date: 2023-09-29
---

## 前言

有一些只顾自己利益，毫无用户体验的"网站"，其中最可恶的就是打着”专业IT技术发表平台“这个标签的网站；它满屏的广告，看文章要你关注它的微信公众号或者下载注册它的APP，想要复制一段文字或者复制一行代码，也必须先关注它的微信公众号或者下载并注册它的APP才能复制；如果你使用某些搜索引擎，排在搜索结果前面的还全是这个"网站"。
{:.quote}


**专注阅读体验**是本主题宗旨；在本文中，"主题"指使用jekyll开发的[cyberblog](https://github.com/cyberblog-cn/cyberblog)，本站就是使用此主题。
{:.tip1}


## 主题介绍

主题使用[Jekyll](https://jekyllrb.com/)开发构建，使用[Bootstrap](https://getbootstrap.com/)，并同时感谢以下开源项目或工具插件和为开源奉献的开发者们，包括但不限于：

- Jekyll生态插件先不一一列举：（稍后补充）
- [clipboard.js](https://github.com/zenorocha/clipboard.js)
- [highlight.js](https://github.com/highlightjs/highlight.js)
- [viewer.js](https://github.com/fengyuanchen/viewerjs)
- [ST-BootstrapAutocomplete](https://github.com/jfcherng-sublime/ST-BootstrapAutocomplete)
- [Sublime Text](https://www.sublimetext.com/)
- [kramdown](https://github.com/gettalong/kramdown)
- ChatGPT

## 自定义类

主题的样式（css）主要使用bootstrap和bootstrap icon，也创建了一些自定义的class类：


1. **`tip1`**类： 趋向于约定俗成，统一文章中的一些“名词”的定义或用于解释说明等
  > ChatGPT是一项伟大的发明
  > {:.tip1 .text-center}
2. **`tip2`**类： 错误或不正确的操作
  > 进入centos系统后，首先应该运行这条命令`rm -rf /etc/yum/vars/`
  > {:.tip2 .text-center}
3. **`tip3`**类： 正确或成功
  > 当修改某个设置后，可以使用`reboot`命令重启服务器
  > {:.tip3 .text-center}
4. **`tip4`**类： 警告，在一些“教程”中，明确错误或不正确的操作带来的后果
  > 务必要谨慎使用`rm -rf`命令，如果你不想跑路的话
  > {:.tip4 .text-center}
5. **`quote`**类： 引用他人或外部内容等
  > 我飛翔在烏雲之中，你看著我無動於衷
  > {:.quote .text-center}