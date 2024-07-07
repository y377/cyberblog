---
layout: doc
title: 测试blogger api的帖子转MD
---

你好 blogger

---<br />layout: doc<br />title: linux开启时钟同步<br />---<br /><br /><br />Linux时钟同步服务主要有两个软件`ntpd`和`chronyd`<br /><br /><br />### CentOS 7.9 2009为例<br /><br /><br />====[ntpd]====<br /><br /><br />安装<br /><br /><br />```bash<br />yum install ntp<br />```<br />启动和开机启动<br />```bash<br />systemctl start ntpd &amp; systemctl enable ntpd<br />```<br />验证是否同步；<br />```bash<br />ntpq -p<br />```<br /><br /><br />如果有输出表示已经同步；如下图<br /><br /><br />```bash<br />[root@asus blog]# ntpq -p<br />     remote           refid      st t when poll reach   delay   offset  jitter<br />==============================================================================<br />+ntp6.flashdance 194.58.202.20    2 u   88  128  373  261.917    2.714   0.723<br />-makaki.miuku.ne 144.126.242.176  3 u  228  128  166  334.403   -4.187  31.977<br />*119.28.206.193  100.122.36.196   2 u   29  256  377   46.504    0.071   1.202<br />+36.110.233.85   10.218.108.2     2 u  111  128  377   23.031    4.783   0.323<br />```<br /><br /><br /><br /><br /><br /><br /><br /><br />====[chronyd]====<br /><br /><br />安装<br /><br /><br />```bash<br />yum install chrony<br />```<br />启动和开机启动<br />```bash<br />systemctl start chrony &amp; systemctl enable chrony<br />```<br />验证是否同步；如果有输出表示已经同步<br />```bash<br />chronyc tracking<br />```<br />====[tabend]====<br />