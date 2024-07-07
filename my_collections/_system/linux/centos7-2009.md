---
layout: doc
title: linux常用设置
description: centos7时钟同步设置、压缩包设置
date: 2023-10-19
---

## linux开启时钟同步

Linux时钟同步服务主要有两个软件`ntpd`和`chronyd`；以CentOSx64 7.9 2009为例

====[ntpd]====

安装

```bash
yum install ntp
```
启动和开机启动
```bash
systemctl start ntpd & systemctl enable ntpd
```
验证是否同步；
```bash
ntpq -p
```

如果有输出表示已经同步；如下图

```bash
[root@asus blog]# ntpq -p
     remote           refid      st t when poll reach   delay   offset  jitter
==============================================================================
+ntp6.flashdance 194.58.202.20    2 u   88  128  373  261.917    2.714   0.723
-makaki.miuku.ne 144.126.242.176  3 u  228  128  166  334.403   -4.187  31.977
*119.28.206.193  100.122.36.196   2 u   29  256  377   46.504    0.071   1.202
+36.110.233.85   10.218.108.2     2 u  111  128  377   23.031    4.783   0.323
```




====[chronyd]====

安装

```bash
yum install chrony
```
启动和开机启动
```bash
systemctl start chrony & systemctl enable chrony
```
验证是否同步；如果有输出表示已经同步
```bash
chronyc tracking
```
====[tabend]====

-------------


## centos7创建和解压压缩包

常用的压缩格式包括tar、zip、和gzip，下面是创建和解压不同格式的压缩包的示例：
{:.tip1}

====[zip]====

**创建zip压缩包：**

```
zip -r mycode.zip /path/to/directory
```

* `-r`表示递归地压缩目录及其内容。
* `mycode.zip`是要创建的压缩包的文件名。
* `/path/to/directory` 是要打包的文件或目录的路径。

**解压zip压缩包：**

```bash
unzip mycode.zip
```

====[tar]====

**创建tar压缩包：**

```bash
tar -czvf mycode.tar.gz /path/to/directory
```

* `-c` 表示创建新的压缩包。
* `-z` 表示使用gzip进行压缩。
* `-v` 表示显示详细信息。
* `-f` 后面指定要创建的压缩包的文件名。
* `/path/to/directory` 是要打包的文件或目录的路径。

**解压tar压缩包：**

```bash
tar -xzvf mycode.tar.gz
```

* `-x` 表示解压。
* `-z` 表示使用gzip解压。
* `-v` 表示显示详细信息。
* `-f` 后面指定要解压的压缩包的文件名。


====[tabend]====

## 系统编码查看和设置

可以通过`locale`查看当前系统编码：

```
LANG=en_US.UTF-8
LC_CTYPE="en_US.UTF-8"
LC_NUMERIC="en_US.UTF-8"
LC_TIME="en_US.UTF-8"
LC_COLLATE="en_US.UTF-8"
LC_MONETARY="en_US.UTF-8"
LC_MESSAGES="en_US.UTF-8"
LC_PAPER="en_US.UTF-8"
LC_NAME="en_US.UTF-8"
LC_ADDRESS="en_US.UTF-8"
LC_TELEPHONE="en_US.UTF-8"
LC_MEASUREMENT="en_US.UTF-8"
LC_IDENTIFICATION="en_US.UTF-8"
LC_ALL=
```
如上图显示，系统的编码是`UTF-8`；如果想要更改系统的编码，可以使用 `localectl` 或编辑 `/etc/locale.conf` 文件来进行设置。请注意，更改编码可能需要重新启动系统以使更改生效。