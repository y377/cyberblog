---
layout: doc
title: syncthing安装及使用
description: centos安装远程同步工具syncthing
toc: true
---

Syncthing可以通过局域网（LAN）和“外网”（Internet）进行同步（备份）工作
{:.tmd1}

## 下载syncthing

1. 打开[syncthing](https://github.com/syncthing/syncthing/releases)仓库，找到所需版本。
2. 解压下载的文件。
  > ```bash
  > tar -xzvf syncthing-linux-amd64-v1.24.0.tar.gz
  > ```
3. 使用systemd操作syncthing；需要找到解压后的`syncthing.service`文件放入到`/etc/systemd/system/`。
  > ```bash
  > cp /root/syncthing-linux-amd64-v1.24.0/etc/linux-systemd/user/syncthing.service /etc/systemd/system/
  > ```
4. 将`syncthing`二进制文件放入`/usr/bin/`
  > ```bash
  > cp /root/syncthing-linux-amd64-v1.24.0/syncthing /usr/bin/
  > ```
5. 必须给`syncthing`二进制文件添加执行权限
  > ```bash
  > chmod +x /usr/bin/syncthing
  > ```
6. 启动和开机启动`syncthing`
  > ```bash
  > systemctl start syncthing & systemctl enable syncthing
  > ```

## 访问syncthing

当首次启动时，会创建这样的一个文件夹`/root/.config/syncthing/`；进入文件夹找到`config.xml`；需要修改下面字段，才可以访问（默认是仅支持本机访问127.0.0.1:8384；当然也可以使用nginx反向代理）。

比如改成下面这样：
> `0.0.0.0:8384`同时支持局域网访问和外网访问web；`192.168.100.100:21800`仅支持局域网访问。
> {:.tmd1}

```xml
    <gui enabled="true" tls="true" debugging="false">
        <address>0.0.0.0:8384</address>

             <!--也可以改成这样-->

    <gui enabled="true" tls="true" debugging="false">
        <address>192.168.100.100:21800</address>        
```

**待补充**
{:.text-center}