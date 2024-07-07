---
title: 建站神器jekyll（一）
description: Jekyll初级使用指南
keywords: jekyll install
date: 2023-09-28
---

## 安装jekyll步骤
 > 参照[Jekyll官网](https://jekyllrb.com/docs/)

安装**rvm**前需要先导入官网密钥，才能下载安装

```
gpg2 --keyserver hkp://keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
```

开始安装

`\curl -sSL https://get.rvm.io | bash -s stable`

如果出现下图 表示成功了（此时退出当前shell，再次登录）

```shell
[root@node1 ~]# \curl -sSL https://get.rvm.io | bash -s stable
Downloading https://github.com/rvm/rvm/archive/1.29.12.tar.gz
Downloading https://github.com/rvm/rvm/releases/download/1.29.12/1.29.12.tar.gz.asc
gpg2 --keyserver hkp://keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDBcurl: (28) Connection timed out after 30001 milliseconds

Could not download 'https://github.com/rvm/rvm/releases/download/1.29.12/1.29.12.tar.gz.asc'.
  curl returned status '28'.

Creating group 'rvm'
Installing RVM to /usr/local/rvm/
Installation of RVM in /usr/local/rvm/ is almost complete:

  * First you need to add all users that will be using rvm to 'rvm' group,
    and logout - login again, anyone using rvm will be operating with `umask u=rwx,g=rwx,o=rx`.

  * To start using RVM you need to run `source /etc/profile.d/rvm.sh`
    in all your open shell windows, in rare cases you need to reopen all shell windows.
  * Please do NOT forget to add your users to the rvm group.
     The installer no longer auto-adds root or users to the rvm group. Admins must do this.
     Also, please note that group memberships are ONLY evaluated at login time.
     This means that users must log out then back in before group membership takes effect!
Thanks for installing RVM 🙏
Please consider donating to our open collective to help us maintain RVM.

👉  Donate: https://opencollective.com/rvm/donate
```

使用`rvm -v`验证一下，得到下图（表示成功安装了rvm）

```shell
[root@node1 ~]# rvm -v
rvm 1.29.12 (latest) by Michal Papis, Piotr Kuczynski, Wayne E. Seguin [https://rvm.io]
[root@node1 ~]#
```

开始安装**ruby**（现在新版本的*ruby3.0*会自动安装*gem*）
 - 可以使用`rvm list known`查看当前**稳定版**的_ruby版本_ 
 - 我是选择了*ruby3.0*，`rvm install ruby-3`

验证*ruby3.0*（`ruby -v`）和*gem*（`gem -v`）是否安装；同时按照Jekyll官网的要求，验证其他三个组件（`gcc -v` `g++ -v` `make -v`）
  > 如果这三个命令没有输出显示版本号，证明当前系统未包含，最好还是安装
  > {:.tmd1}

鸡动人心的时刻，安装*Jekyll*
  > `gem install bundler jekyll`
  > *bundler*是什么？那是因为官网推荐最好安装*bundle*

## Jekyll参数配置

### 一些优化技巧
#### 弹性设置布局

`collections`下的文档，约定称之为文章；`_posts`目录下的文档，约定称之为帖子。
{:.tmd1}

1. 在文档的前言中最好不要设置`layout`；应该在`_config.yml`通过设置`defaults`参数来指定默认布局。这是弹性而且高效的方法。
    为什么这么说？
    {:.quote}

  - 假设每篇文档都设置了`layout`，如果以后想要为文章或者帖子更改为不同的布局，就会产生很大的工作量，需要逐个修改。假如帖子原先用的布局文件叫`post.html`，三年以后随着编码技术的提高，想将部分文档的布局重新设计，那么此时就需要一个个找，一个个改，很麻烦。

  - 文档的“前言中”虽然没有设置`layout`参数，只要`defaults`里面设置了`layout`，jekyll可以正常构建。万一想要修改或者为新增加的文档使用新布局，可以通过在“前言”中添加`layout`，比如添加`layout: new-post.html`。因为当Jekyll构建时，`defaults`的优先级 **<** 文档内的“前言” 。也就是不管`defaults`里面的`layout`设置的什么，文档“前言”中的布局`layout`都会将其覆盖掉。

  - 而且修改一般容易出错，增加相对不容易出错。举个例子，好比记日常开销的流水账和只关注银行卡余额。

#### SEO优化

如果装了`jekyll-seo-tag`这个插件，它默认没有`<meta>`标签的`keywords`；可以通过运行`gem info jekyll-seo-tag`找到它的路径；

```bash
[root@asus blog]# gem info jekyll-seo-tag

*** LOCAL GEMS ***

jekyll-seo-tag (2.8.0)
    Author: Ben Balter
    Homepage: https://github.com/jekyll/jekyll-seo-tag
    License: MIT
    Installed at: /usr/local/rvm/gems/ruby-3.0.0

    A Jekyll plugin to add metadata tags for search engines and social
    networks to better index and display your site's content.
```

首先进入到`/usr/local/rvm/gems/ruby-3.0.0`，进入到`gem`文件夹，再进入`jekyll-seo-tag-2.8.0`下的`lib`文件夹，找到`template.html`进行修改。
完整的路径：
```yaml
/usr/local/rvm/gems/ruby-3.0.0/gems/jekyll-seo-tag-2.8.0/lib/
```
修改成：
{% raw %}
```html
<meta name="keywords" content="{% if page.keywords %}{{ page.keywords | join: ', ' | escape }}{% else %}赛博博客{% endif %}">
```
{% endraw %}

#### 一些提示

1. Jekyll创建`collections`时，要区分大小写；比如`_ar`不等于`_AR`。
2. Jekyll如果的数组属性**只有**这三个值：`name`、`items`、`size`。

