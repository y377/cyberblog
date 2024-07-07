---
layout: doc
collection: networking
title: openvpn使用详解
description: openvpn是复杂网络环境中的利器，对于需要稳定异地组网的场景最为高效
---



## 前言

> 1. OpenVPN分为[社区版](https://openvpn.net/community-downloads/)和[商业版](https://openvpn.net/download-open-vpn/)；为免混淆，下文将社区版称为**openvpn**；商业版称为**openvpn<u>as</u>**；
> 2. 在个性化的使用场景，可以安装两者，配合使用，当然各有利弊，商业版（免费）的客户端最多支持两个，想要超过两个客户端需要花钱。
{: .quote}

## 测试单个提示类
如果说上天赋予了我精通某项技术的能力
{:.mytipa}


## 多个类 

> + 很多软路由集成的都是社区版，比如openwrt和爱快
> + 同样，很多软路由也集成了客户端  
> + 我们不能把openvpn的服务端和客户端搞混淆  
{:.mytipa}  


## 测试代码块，末尾加四个英文空格

    console.log("Hello, world!");


## 更多波浪线

~~~~~~~~~~~~
~~~~~~~
code with tildes
~~~~~~~~
~~~~~~~~~~~~~~~~~~

## 我的

> 1. 很多软路由集成的都是社区版，比如openwrt和爱快
> 2. 同样，很多软路由也集成了客户端
> 3. 我们不能把openvpn的服务端和客户端搞混淆
{: .alert-tips-a}
---------------



## hello
+ 这是第一段正文

====[选项卡A]====

省略A内容

====[选项卡B]====

省略B内容

====[选项卡C]====
{:.bg-info}
<!--内容为空，为了防止错误渲染，以及把“# world给误以为是=选项卡C=的内容”，所以末尾以"===[tabend]==="这个固定字符表示接数了整个选项组-->

====[tabend]==== 

```html
<blockquote class="border-start border-3 border-danger">
    <h4 id="section-1">
<i class="bi bi-flag-fill text-danger"></i>  经营范围</h4>
    <ol class="">
      <li>电脑、办公用品销售</li>
      <li>网络技术、计算机软硬件的技术开发、技术咨询、技术服务、技术推广、技术转让</li>
      <li>网络技术服务；网站建设；网页制作；企业形象策划；平面设计</li>
      <li>计算机系统集成；电子商务技术开发；手机销售及售后服务</li>
      <li>民用监控系统销售安装及维护；投影仪销售安装及维护；音响销售安装及维护</li>
      <li>日用百货销售</li>
    </ol>
 </blockquote>
 ```
## 测代码块生成

### 测试JavaScript代码

```
document.addEventListener('DOMContentLoaded', function() {
    const preElements = document.querySelectorAll('pre');
    preElements.forEach(preElement => {
        const divWrapper = document.createElement('div');
        divWrapper.classList.add('pre-wrapper', 'pt-4', 'rounded');
        preElement.parentNode.insertBefore(divWrapper, preElement);
        divWrapper.appendChild(preElement);
    });
}); {
    hljs.addPlugin({
        'after:highlightBlock': ({ block }) => {
            const blockParent = block.closest('pre');
            if (!blockParent) return;

            // 添加Bootstrap样式类到blockParent
            blockParent.classList.add('pre-wrapper', 'fs-6', 'd-flex');

            // 创建行号
            const lines = document.createElement('code');
            const lineNumbers = [...Array(block.textContent.trimEnd().split(/\n/).length)].map((_, i) => i + 1).join('\n');

            // 为行号添加Bootstrap样式类
            lines.classList.add('hljs', 'border-end', 'border-light', 'opacity-25', 'flex-shrink-0', 'text-end');
            lines.style.userSelect = 'none'; // Disable selection

            // 设置行号内容
            lines.textContent = lineNumbers;

            // 将行号元素插入到block之前
            blockParent.insertBefore(lines, block);

            // 设置block样式
            block.classList.add('flex-grow-1');
        }
    });
}
```
-----------------------------------

====[CentOS7 x64]====

```
yum -y install https://as-repository.openvpn.net/as-repo-centos7.rpm
yum -y install openvpn-as
```

====[Debian10 x64]====


```bash
apt update && apt -y install ca-certificates wget net-tools gnupg
wget https://as-repository.openvpn.net/as-repo-public.asc -qO /etc/apt/trusted.gpg.d/as-repository.asc
echo "deb [arch=amd64 signed-by=/etc/apt/trusted.gpg.d/as-repository.asc] http://as-repository.openvpn.net/as/debian buster main">/etc/apt/sources.list.d/openvpn-as-repo.list
apt update && apt -y install openvpn-as
```


====[Debian11 x64]====

```shell
apt update && apt -y install ca-certificates wget net-tools gnupg
wget https://as-repository.openvpn.net/as-repo-public.asc -qO /etc/apt/trusted.gpg.d/as-repository.asc
echo "deb [arch=amd64 signed-by=/etc/apt/trusted.gpg.d/as-repository.asc] http://as-repository.openvpn.net/as/debian bullseye main">/etc/apt/sources.list.d/openvpn-as-repo.list
apt update && apt -y install openvpn-as
```


====["测试文字"]====

我是一棵，流浪的子弹

====[JavaScript代码的高亮]====

```js
document.addEventListener("DOMContentLoaded", function () {
  const preElements = document.querySelectorAll("pre");
  preElements.forEach((preElement) => {
    const divWrapper = document.createElement("div");
    divWrapper.classList.add("pre-wrapper", "pt-4", "rounded");
    preElement.parentNode.insertBefore(divWrapper, preElement);
    divWrapper.appendChild(preElement);
  });
});
{
  hljs.addPlugin({
    "after:highlightBlock": ({ block }) => {
      const blockParent = block.closest("pre");
      if (!blockParent) return;

      blockParent.classList.add("pre-wrapper", "fs-6", "d-flex");

      const lines = document.createElement("code");
      const lineNumbers = [...Array(block.textContent.trimEnd().split(/\n/).length)].map((_, i) => i + 1).join("\n");

      lines.classList.add("hljs", "border-end", "border-light", "opacity-25", "flex-shrink-0", "text-end");
      lines.style.userSelect = "none";

      lines.textContent = lineNumbers;

      blockParent.insertBefore(lines, block);

      block.classList.add("flex-grow-1");
    },
  });
}
```

====[tabend]====



-----------------







##### 经营范围
{:.bi.bi-flag-fill.text-danger}
1. 电脑、办公用品销售
1. 网络技术、计算机软硬件的技术开发、技术咨询、技术服务、技术推广、技术转让
1. 网络技术服务；网站建设；网页制作；企业形象策划；平面设计
1. 计算机系统集成；电子商务技术开发；手机销售及售后服务
1. 民用监控系统销售安装及维护；投影仪销售安装及维护；音响销售安装及维护
1. 日用百货销售
{:.myblockquote}

## openvpnas（商业版）安装

1. CentOS 7, x64

`yum -y install https://as-repository.openvpn.net/as-repo-centos7.rpm`和`yum -y install openvpn-as`

2. Debian10 x64

```shell
apt update && apt -y install ca-certificates wget net-tools gnupg
wget https://as-repository.openvpn.net/as-repo-public.asc -qO /etc/apt/trusted.gpg.d/as-repository.asc
echo "deb [arch=amd64 signed-by=/etc/apt/trusted.gpg.d/as-repository.asc] http://as-repository.openvpn.net/as/debian buster main">/etc/apt/sources.list.d/openvpn-as-repo.list
apt update && apt -y install openvpn-as
```
3. Debian11 x64

```shell
apt update && apt -y install ca-certificates wget net-tools gnupg
wget https://as-repository.openvpn.net/as-repo-public.asc -qO /etc/apt/trusted.gpg.d/as-repository.asc
echo "deb [arch=amd64 signed-by=/etc/apt/trusted.gpg.d/as-repository.asc] http://as-repository.openvpn.net/as/debian bullseye main">/etc/apt/sources.list.d/openvpn-as-repo.list
apt update && apt -y install openvpn-as
```

## openvpnas可能碰到的问题及解决方案

1. ### 登录web页面，忘记管理员密码怎么办？

> 系统初始管理员用户名：openvpn
{: .tips-c}

```shell
cd /usr/local/openvpn_as/scripts
./sacli --user "openvpn" --key "prop_superuser" --value "true" UserPropPut
./sacli --user "openvpn" --key "user_auth_type" --value "local" UserPropPut
./sacli --user "openvpn" --new_pass=<PASSWORD> SetLocalPassword
./sacli start
```
2. ### ping延迟一下高一下低怎么排查和解决？
> MTU大小：UDP数据包的最大传输单元（MTU）大小可能导致延迟增加。如果MTU设置不当，数据包可能需要进行分片或重新组装，导致额外的延迟。您可以尝试调整UDP连接的MTU大小，确保其适合您的网络环境。

3. 在哪里调整？调整多少？

> 登录web控制台，点击左侧**CONFIGURATION**,**Advanced VPN**,滑到页面底部，在*Server Config Directives*和*Client Config Directives*分别填入MTU值，填写格式为：`tun-mtu 数值`，比如`tun-mtu 1280`
{: .alert .alert-warning .d-flex .align-items-center}

1. 
        ./sacli --user "openvpn" --key "prop_superuser" --value "true" UserPropPut
 
        ./sacli --user "openvpn" --key "prop_superuser" --value "true" 

        ./sacli --user "openvpn" --key "prop_superuser" --value 

        ./sacli --user "openvpn" --key "prop_superuser" 
^
2. 
```
apt update && apt -y install ca-certificates wget net-tools gnupg
wget https://as-repository.openvpn.net/as-repo-public.asc -qO /etc/apt/trusted.gpg.d/as-repository.asc
echo "deb [arch=amd64 signed-by=/etc/apt/trusted.gpg.d/as-repository.asc] http://as-repository.openvpn.net/as/debian bullseye main">/etc/apt/sources.list.d/openvpn-as-repo.list
apt update && apt -y install openvpn-as    
```

# 测试代码
比如这个`kramdown`代码


#  world
{:.bg-info}
+ 这是第二段正文

====[选项卡D]====

省略D内容

====[选项卡E]====


====[选项卡F]====

省略F内容

====[tabend]====

## 正文结束


