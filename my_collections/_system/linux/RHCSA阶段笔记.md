---
layout: doc
title: RHCSA阶段笔记
---

## 第七节：基本权限管理



#### chmod权限管理

权限的重要性：任何一个系统，权限都是非常重要的，如果没有权限控制系统用户的话，那系统的安全就没办法保障，特别是对于Linux这种多用户的系统来讲，通常一台机器有很多个用户都在使用的话，那我们就应该通过权限去控制这些用户在系统的操作



权限类别： 

- r 读取：可以查看文件的内容
- w 写入：可以对文件的内容进行增删改
- x 执行：可以运行该文件（程序文件、脚本） 
- `-`   没有权限（它在那个位置，就表示没有对应的权限）



归属关系介绍：

- 归属关系：u 所有者  g 所属组  o 其他人



chmod（英文全拼：change mode）设置用户对文件的权限

- 命令格式：chmod [-选项] 归属关系+-=权限类别 文件...
- 不常用选项：
  - -R 递归修改目录下所有的子文件与子目录的权限与父目录相同



操作符：+ 添加权限，- 去除权限，= 重新定义权限

权限数字表示：r ---- 4   w ---- 2  x ---- 1   0 没有权限

```powershell
#查看文件详细属性
[root@localhost ~]# ll hello
-        rw-      r--       r--       . 1 root  root  426 3月 28 15:00 hello
文件类型  所有者权限 所属组权限 其他人的权限     所有者 所属组         

#为文件所有者添加执行权限
[root@localhost ~]# chmod u+x hello
[root@localhost ~]# ll hello
-rwxr--r--. 1 root root 426 3月  28 15:00 hello

#为文件所属组添加写权限
[root@localhost ~]# chmod g+w hello
[root@localhost ~]# ll hello
-rwxrw-r--. 1 root root 426 3月  28 15:00 hello

#为文件其他人添加写权限
[root@localhost ~]# chmod o+w hello
[root@localhost ~]# ll hello
-rwxrw-rw-. 1 root root 426 3月  28 15:00 hello

#使用（逗号）可以同时为多个用户授权
[root@localhost ~]# chmod g+x,o+x hello
[root@localhost ~]# ll hello
-rwxrwxrwx. 1 root root 426 3月  28 15:00 hello

#去除所有者执行权限
[root@localhost ~]# chmod u-x hello
[root@localhost ~]# ll hello
-rw-rwxrwx. 1 root root 426 3月  28 15:00 hello

#去除所属组执行权限
[root@localhost ~]# chmod g-x hello
[root@localhost ~]# ll hello
-rw-rw-rwx. 1 root root 426 3月  28 15:00 hello

#去除其他人执行权限
[root@localhost ~]# chmod o-x hello
[root@localhost ~]# ll hello
-rw-rw-rw-. 1 root root 426 3月  28 15:00 hello

#同时去除ugo写权限
[root@localhost ~]# chmod u-w,g-w,o-w hello
[root@localhost ~]# ll hello
-r--r--r--. 1 root root 426 3月  28 15:00 hello

#重新定义所有者权限
[root@localhost ~]# chmod u=rwx hello
[root@localhost ~]# ll hello
-rwxr--r--. 1 root root 426 3月  28 15:00 hello

#重新定义所属组权限
[root@localhost ~]# chmod g=rwx hello
[root@localhost ~]# ll hello
-rwxrwxr--. 1 root root 426 3月  28 15:00 hello

#重新定义其他人权限
[root@localhost ~]# chmod o=rwx hello
[root@localhost ~]# ll hello
-rwxrwxrwx. 1 root root 426 3月  28 15:00 hello

#创建目录并设置目录权限
[root@localhost ~]# mkdir /test
[root@localhost ~]# ll -d /test
drwxr-xr-x. 2 root root 6 4月  11 14:30 /test

#为目录所属组添加写权限
[root@localhost ~]# chmod g+w /test
[root@localhost ~]# ll -d /test
drwxrwxr-x. 2 root root 6 4月  11 14:30 /test

#为目录其他人添加写权限
[root@localhost ~]# chmod o+w /test
[root@localhost ~]# ll -d /test
drwxrwxrwx. 2 root root 6 4月  11 14:30 /test
[root@localhost ~]# 

#重新定义所有用户权限
[root@localhost ~]# chmod u=rwx,g=rx,o=rx /test
[root@localhost ~]# ll -d /test
drwxr-xr-x. 2 root root 6 4月  11 14:30 /test

#同时为所有用户定义相同权限
[root@localhost ~]# chmod ugo=rwx /test
[root@localhost ~]# ll -d /test
drwxrwxrwx. 2 root root 21 4月  11 14:37 /test

#权限数字定义方式
[root@localhost ~]# ll hello
-rwxrwxrwx. 1 root root 426 3月  28 15:00 hello
所有者：rwx   4+2+1=7
所属组：r     4
其他人：r     4
[root@localhost ~]# chmod 744 hello
[root@localhost ~]# ll hello
-rwxr--r--. 1 root root 426 3月  28 15:00 hello

所有者：rw 4+2=6
所属组：rw 4+2=6
其他人：--- 0
[root@localhost ~]# chmod 660 hello
[root@localhost ~]# ll hello
-rw-rw----. 1 root root 426 3月  28 15:00 hello

所有者：rwx 4+2+1=7
所属组：wx  2+1=3
其他人：--- 0
[root@localhost ~]# touch /hello.txt
[root@localhost ~]# ll /hello.txt 
-rw-r--r--. 1 root root 0 4月  11 14:45 /hello.txt
[root@localhost ~]# chmod 730 /hello.txt 
[root@localhost ~]# ll /hello.txt 
-rwx-wx---. 1 root root 0 4月  11 14:45 /hello.txt

#去除所有用户权限
[root@localhost ~]# chmod 000 /hello.txt 
[root@localhost ~]# ll /hello.txt 
----------. 1 root student 0 4月  11 14:45 /hello.txt

#递归修改目录下所有子文件与子目录权限
[root@localhost ~]# ll -d /test
drwxrwxrwx. 2 root root 21 4月  11 14:37 /test

[root@localhost ~]# mkdir /test/xxoo
[root@localhost ~]# ll -d /test/xxoo/
drwxr-xr-x. 2 root root 6 4月  11 14:54 /test/xxoo/

[root@localhost ~]# ll /test/abc.txt 
-rw-r--r--. 1 root root 0 4月  11 14:37 /test/abc.txt
#默认用户在该目录下创建文件权限与父目录不一致

#递归修改目录下所有子文件与子目录权限
[root@localhost ~]# chmod -R 777 /test
[root@localhost ~]# ll /test/abc.txt 
-rwxrwxrwx. 1 root root 0 4月  11 14:37 /test/abc.txt
[root@localhost ~]# ll -d /test/xxoo
drwxrwxrwx. 2 root root 6 4月  11 14:54 /test/xxoo

#深入理解权限，
[root@localhost ~]# mkdir /test1
[root@localhost ~]# chmod 777 /test1
[root@localhost ~]# ll -d /test1
drwxrwxrwx. 2 root root 6 4月  11 14:57 /test1

#在该目录下创建文件与目录
[root@localhost ~]# touch /test1/root.txt
[root@localhost ~]# mkdir /test1/rootbak
[root@localhost ~]# chmod o=rx /test1
[root@localhost ~]# ll -d /test1
drwxrwxr-x. 2 root root 6 4月  11 14:59 /test1
[root@localhost ~]# touch /test1/root.txt

#普通用户对该目录如果拥有rwx权限是可以删除该目录下任何用户创建的文件（包括root）
[user1@localhost ~]$ cd /test1
[user1@localhost test1]$ ls
root.txt
[user1@localhost test1]$ ll root.txt 
-rw-r--r--. 1 root root 0 4月  11 14:57 root.txt
[user1@localhost test1]$ rm -rf root.txt 
[user1@localhost test1]$ ls
rootbak
[user1@localhost test1]$ rm -rf rootbak/
[user1@localhost test1]$ ls
[user1@localhost test1]$ ll -d /test1
drwxrwxrwx. 2 root root 6 4月  11 14:59 /test1

总结：用户对文件拥有rwx权限（针对的是文件的内容）
r：查看文件内容
w：对文件内容拥有增删改权限，并不能删除文件，删除文件取决于对文件所在的目录有没有rwx权限
x：可以运行该文件

2.用户对目录拥有rwx权限
r：查看目录下内容
w：在该目录创建文件，修改文件属性，删除任何用户的文件（包括root）
x：可以切换到该目录
```

 

#### umask预设权限

umask用于显示或设置创建目录的权限掩码

- 命令格式：umask [-p] [-S] [mode]

```shell
root@localhost ~]# mkdir /test2
[root@localhost ~]# ll -d /test2
drwxr-xr-x. 2 root root 6 4月  11 15:05 /test2
[root@localhost ~]# umask --help
umask: 用法:umask [-p] [-S] [模式]

#查看目录默认权限掩码，以数字形式显示(反向掩码)
[root@localhost ~]# umask -p
umask 0022

#查看目录默认权限掩码，以字母形式显示
[root@localhost ~]# umask -S
u=rwx,g=rx,o=rx

#设置目录默认权限掩码，为所属组添加写权限
[root@localhost ~]# umask g+w 
[root@localhost ~]# mkdir /test3
[root@localhost ~]# ll -d /test3
drwxrwxr-x. 2 root root 6 4月  11 15:09 /test3

#去除目录默认权限掩码
[root@localhost ~]# umask g-w 
[root@localhost ~]# mkdir /test4
[root@localhost ~]# ll -d /test4
drwxr-xr-x. 2 root root 6 4月  11 15:10 /test4
```



#### chown归属关系管理

chown（英文全拼：change owner）用于设置文件的所有者和所属组关系

- 命令格式：
  - chown [-选项] 所有者:所属组 文档                    #同时修改所有者和所属组身份
  - chown [-选项] 所有者 文档                                #只修改所有者身份
  - chown [-选项] :所属组 文档                               #只修改所属组身份

- 常用选项：
  - -R 递归修改

```shell
#创建文件
[root@localhost ~]# chmod 744 /hello.txt 
[root@localhost ~]# ll /hello.txt 
-rwxr--r--. 1 root student 0 4月  11 14:45 /hello.txt

#修改文件所有者为user1用户
[root@localhost ~]# chown user1 /hello.txt 
[root@localhost ~]# ll /hello.txt 
-rwxr--r--. 1 user1 student 0 4月  11 14:45 /hello.txt

#修改文件所有者与所属组为lisi
[root@localhost ~]# chown lisi:lisi /hello.txt 
[root@localhost ~]# ll /hello.txt 
-rwxr--r--. 1 lisi lisi 4 4月  11 15:26 /hello.txt

#创建目录
[root@localhost ~]# mkdir /test5
[root@localhost ~]# ll -d /test5
drwxr-xr-x. 2 root root 6 4月  11 15:30 /test5

#修改目录所有者与所属组为lisi
[root@localhost ~]# chown lisi:lisi /test5
[root@localhost ~]# ll -d /test5
drwxr-xr-x. 2 lisi lisi 6 4月  11 15:30 /test5

[root@localhost ~]# touch /test5/root.txt
[root@localhost ~]# ll /test5/root.txt 
-rw-r--r--. 1 root root 0 4月  11 15:31 /test5/root.txt

#递归修目录下所有子文件与子目录归属关系
[root@localhost ~]# chown -R lisi:lisi /test5
[root@localhost ~]# ll /test5/root.txt 
-rw-r--r--. 1 lisi lisi 0 4月  11 15:31 /test5/root.txt
```





## 第八节：特殊权限管理

#### SetUID特殊权限

SetUID（SUID）：对于一个可执行的文件用了SUID权限后，普通用户在执行该文件后，临时拥有文件所有者的身份，该权限只在程序执行过程中有效，程序执行完毕后用户恢复原有身份

- SetUID权限会附加在所有者的 x 权限位上，所有者的 x 权限标识会变成 s
- 设置SetUID命令格式：chmod u+s 文件名



SetUID应用案例：

```shell
#搜索命令绝对路径
[root@localhost ~]# which passwd
/usr/bin/passwd
[root@localhost ~]# ll /usr/bin/passwd 
-rwsr-xr-x. 1 root root 27832 6月  10 2014 /usr/bin/passwd

[root@localhost ~]# which cat
/usr/bin/cat
[root@localhost ~]# ll /usr/bin/cat
-rwxr-xr-x. 1 root root 54160 10月 31 2018 /usr/bin/cat

#普通用户使用cat命令是默认无法查看/etc/shadow文件内容
[lisi@localhost ~]$ cat /etc/shadow
cat: /etc/shadow: 权限不够

#设置SUID权限
[root@localhost ~]# chmod u+s /usr/bin/cat
[root@localhost ~]# ll /usr/bin/cat
-rwsr-xr-x. 1 root root 54160 10月 31 2018 /usr/bin/cat

#普通用户再次使用cat命令时临时获取文件所有者身份
[lisi@localhost ~]$ cat /etc/shadow

#去除SUID权限
[root@localhost ~]# chmod u-s /usr/bin/cat
[root@localhost ~]# ll /usr/bin/cat
-rwxr-xr-x. 1 root root 54160 10月 31 2018 /usr/bin/cat

[root@localhost ~]# which vim
/usr/bin/vim

[root@localhost ~]# ll /usr/bin/vim
-rwxr-xr-x. 1 root root 2294208 10月 31 2018 /usr/bin/vim

#为vim设置SUID权限
[root@localhost ~]# chmod u+s /usr/bin/vim
[root@localhost ~]# ll /usr/bin/vim
-rwsr-xr-x. 1 root root 2294208 10月 31 2018 /usr/bin/vim

[root@localhost ~]# ll /etc/passwd
-rw-r--r--. 1 root root 2737 4月  10 17:26 /etc/passwd

[root@localhost ~]# chmod u-s /usr/bin/vim
[root@localhost ~]# vim /etc/passwd
```



#### SetGID特殊权限

- SetGID（SGID）：当对一个可执行的程序文件设置了SGID后，普通用户在执行该文件时临时拥有其所属组的权限，该权限只在程序执行过程中有效，程序执行完毕后用户恢复原有组身份
- 当对一个目录作设置了SGID权限后，普通用户在该目录下创建的文件的所属组，均与该目录的所属组相同
- SetGID权限会附加在所属组的 x 权限位上，所属组的 x 权限标识会变成 s
- 设置SetGID命令格式：chmod g+s 文件名



```shell
[root@localhost ~]# mkdir /test6
[root@localhost ~]# chmod 777 /test6
[root@localhost ~]# ll -d /test6
drwxrwxrwx. 2 root root 6 4月  11 15:59 /test6

#为目录设置SGID权限
[root@localhost ~]# chmod g+s /test6
[root@localhost ~]# ll -d /test6
drwxrwsrwx. 2 root root 6 4月  11 15:59 /test6
#SGID权限会附加在所属组执行权限位，所属组执行权限变为s

[root@localhost ~]# touch /test6/1.txt
[root@localhost ~]# ll /test6/1.txt 
-rw-r--r--. 1 root root 0 4月  11 16:00 /test6/1.txt

#修改目录所属组为lisi组
[root@localhost ~]# chown :lisi /test6
[root@localhost ~]# ll -d /test6
drwxrwsrwx. 2 root lisi 19 4月  11 16:00 /test6

#SGID对目录设置后，在该目录下创建的任何文件都会继承父目录的所属组
[root@localhost ~]# touch /test6/2.txt
[root@localhost ~]# ll /test6/2.txt 
-rw-r--r--. 1 root lisi 0 4月  11 16:01 /test6/2.txt
```



#### Sticky BIT特殊权限

Sticky BIT（SBIT）：该权限只针对于目录有效，当普通用户对一个目录拥有rwx权限时，普通用户可以在此目录下拥有增删改的权限，应为普通用户对目录拥有rwx权限时，是可以删除此目录下的所有文件

- 如果对一个目录设置了SBIT权限，除了root可以删除所有文件以外，普通用户就算对该目录拥有rwx权限，也只能删除自己建立的文件，不能删除其他用户建立的文件
- SBIT权限会附加在其他人的 x 权限位上，其他人的 x 权限标识会变成 t
- 设置SBIT命令格式：chmod o+t 目录名

```shell
#为目录设置SBIT
[root@localhost ~]# chmod o+t /test
[root@localhost ~]# ll -d /test
drwxrwxrwt. 2 root root 6 4月  11 16:07 /test

[lisi@localhost test]$ ls
kenji.txt  laowang.txt  lisi.txt

[lisi@localhost test]$ rm -rf *
rm: 无法删除"kenji.txt": 不允许的操作
rm: 无法删除"laowang.txt": 不允许的操作
```



#### ACL访问控制列表

ACL（Filesystemctl Access Control List）文件系统访问控制列表：利用文件扩展属性保存额外的访问控制权限（单独为每一个用户量身定制一个权限）

- 命令格式：setfacl 选项 归属关系:用户名:权限 文档

- 常用选项：
  - -m 设置权限
  - -x  删除指定用户权限
  - -b  删除所有用户权限

```shell
#为natasha用户设置ACL权限
[root@localhost ~]# setfacl -m u:natasha:rx /yunwei/
[root@localhost ~]# ll -d /yunwei/
drwxrwx---+ 2 root yunwei 54 4月  11 16:43 /yunwei/
[root@localhost ~]# ll -d /test
drwxrwxrwt. 2 root root 42 4月  11 16:11 /test

#查看目录ACL权限
[root@localhost ~]# getfacl /yunwei
getfacl: Removing leading '/' from absolute path names
# file: yunwei
# owner: root
# group: yunwei
user::rwx
user:natasha:r-x
group::rwx
mask::rwx
other::---

#用户测试权限
[natasha@localhost ~]$ ls /yunwei/
hell.sh  kenji.txt  lisi.txt
[natasha@localhost yunwei]$ rm -rf kenji.txt 
rm: 无法删除"kenji.txt": 权限不够
[natasha@localhost yunwei]$ touch natasha.txt
touch: 无法创建"natasha.txt": 权限不够
[natasha@localhost yunwei]$ vim kenji.txt 


[root@localhost ~]# setfacl -m u:tom:rx /yunwei
[root@localhost ~]# setfacl -m u:jack:rx /yunwei
[root@localhost ~]# setfacl -m u:hary:rx /yunwei
[root@localhost ~]# getfacl /yunwei
getfacl: Removing leading '/' from absolute path names
# file: yunwei
# owner: root
# group: yunwei
user::rwx
user:hary:r-x
user:tom:r-x
user:natasha:r-x
user:jack:r-x
group::rwx
mask::rwx
other::---

#删除指定用户ACL权限
[root@localhost ~]# setfacl -x u:tom /yunwei
[root@localhost ~]# getfacl /yunwei
getfacl: Removing leading '/' from absolute path names
# file: yunwei
# owner: root
# group: yunwei
user::rwx
user:hary:r-x
user:natasha:r-x
user:jack:r-x
group::rwx
mask::rwx
other::---

#删除所有用户ACL权限
[root@localhost ~]# setfacl -b /yunwei
[root@localhost ~]# getfacl /yunwei
getfacl: Removing leading '/' from absolute path names
# file: yunwei
# owner: root
# group: yunwei
user::rwx
group::rwx
other::---
```



#### 课后练习

1.创建test1用户，并指定用户UID为6666，指定用户描述信息为test1@163.com，指定用户解释器为/sbin/nologin

> 

2.创建名为stugrp组，将test1用户加入到stugrp组

> 
>

3.请写出/etc/passwd文件中每个字段含义

> 

4.创建test2用户，并设置密码为123456

>  
>

5.修改root用户密码为123456

> 

6.请写出Linux系统下存放用户密码信息文件

> 

7.设置test2用户密码为123，并设置用户首次登录系统需要修改密码

> 

8.使用root切换为test2用户身份

> 

9.将test2用户添加至stugrp组，并锁定用户密码

> 

10.删除test1用户，连同用户家目录一并删除

>  

11.请写出Linux系统存放组信息文件，与组密码信息文件

> 

12.将test2用户从stugrp组中删除

> 

13.在根下创建upload目录，并修改目录所有者为test2用户，所属组为stugrp组，并将lisi用户加入到stugrp组，修改所有者权限rwx，修改所属组权限为rx，设置其他人没有任何权限

> 
>

14.创建test3用户，非交互式设置用户密码为123456，并设置test3用户可以对upload目录拥有rx权限

> 

15.在根下创建shared目录，并同时设置所有人都有完全权限（至少两种方法设置），要求所有普通用户在该目录下只能修改自己创建的文件

> 



## 第九节：find文件查找

find 命令根据预设的条件递归查找文件或目录所在位置

命令格式：find 查找路径 查找条件1  查找条件2 ..  [-exec 处理命令 {} \; ] 

- `–exec`或者`| xargs` 可接额外的命令来处理查找到结果
- {} 代表find查找到的内容被放置{}中
- \; 代表额外处理命令结束



常用查找条件
- -type                             #按类型查找（f文件 d目录  l链接文件）
- -name “文件名”           #按名称查找
- -iname                         #按名称查找且忽略大小写
- -size                              #按文件大小查找（k、M、G  + 大于  - 小于）
- -a （and并且）两个条件同时满足
- -o （or或者）两个条件满足任意一个即可
- -user                            #按用户名查找
- -mtime                        #按日期查找（+ 代表多少天之前  - 代表多少天之内，0代表24小时之内）



#### find应用案例

```shell
[root@localhost ~]# ls /var/log

#按照类型查找，类型为文件
[root@localhost ~]# find /var/log -type f
[root@localhost ~]# ll boot.log-20210417
[root@localhost ~]# ll /var/log/boot.log-20210417
[root@localhost ~]# ll /var/log/vmware-network.2.log

#按照类型查找，类型为目录
[root@localhost ~]# find /var/log -type d
[root@localhost ~]# ll -d /var/log/tuned
[root@localhost ~]# ll -d /var/log/qemu-ga

#按照类型查找，类型为链接文件
[root@localhost ~]# find /var/log -type l
[root@localhost ~]# fin /etc/ -type l
[root@localhost ~]# find /etc/ -type l
[root@localhost ~]# ll /etc/scl/conf

#按照名字查找
[root@localhost ~]# find /etc/ -name passwd
/etc/passwd
/etc/pam.d/passwd

#按照名字查找，类型为文件
[root@localhost ~]# find /etc/ -name passwd -type f

#按照名字查找，以tab结尾，类型为文件
[root@localhost ~]# find /etc/ -name '*tab' -type f

#按照名字查找，以pass开头，类型为文件
[root@localhost ~]# find /etc/ -name 'pass*' -type f
[root@localhost etc]# find . -name '*.conf' -type f

[root@localhost ~]# find /etc/ -name '*tab*' -type f

#按照名字忽略大小写查找，类型为文件
[root@localhost ~]# find /etc/ -iname FSTAB -type f
/etc/fstab
[root@localhost ~]# find /etc/ -name FSTAB -type f

#查找大于10k的文件
[root@localhost ~]# find /var/log -size +10k -type f
[root@localhost ~]# du -h /var/log/boot.log-20210417
16K	/var/log/boot.log-20210417

#查找大于1M的文件
[root@localhost ~]# find /var/log -size +1M -type f
[root@localhost ~]# du -h /var/log/audit/audit.log
2.4M	/var/log/audit/audit.log

[root@localhost ~]# find /home -size +1M -type f

#查找小于1M的文件
[root@localhost ~]# find /var/log -size -1M -type f
[root@localhost ~]# du -h /var/log/spooler
0	/var/log/spooler

#查找大于10k并且小于20k，类型为文件
[root@localhost ~]# find /var/log -size +10k -a -size -20k -type f

#-o或者，当有多个条件时，满足任意其中一个即可
[root@thinkmo ~]# find /var/log -name "*.log" -o -size -10k -type f


#查找属于lisi用户的文件/目录
[root@localhost ~]# find /home -user lisi

#查找30天之前被修改过，类型为文件
[root@localhost ~]# find /var/log -mtime +30 -type f
[root@localhost ~]# find /var/log -mtime +10 -type f

#查找10天之内被修改过，类型为文件
[root@localhost ~]# find /var/log -mtime -10 -type f
root@localhost ~]# find /var/log -mtime -30 -type f

#查找30之前被修改过，类型为文件，拷贝到/opt目录下
[root@localhost ~]# find /var/log -mtime -30 -type f -exec cp {} /opt \;
```



题型：

- 查找/etc/目录下以.conf结尾的文件（只能在/etc这一层目录去查找）

```
ls /etc/*.conf
```
- 查找/etc/目录下以.conf结尾的文件（包含所有的子目录）

```
find /etc/ -name "*.conf"
```


百度：多查--多查--多查

查找/var/log/messages 文件，清空文件内容，使用find实现

```
find /var/log/ -name messages -type f -exec cp /dev/null {} \;
```

查找/var/log以.log结尾的文件，清空文件内容，使用find实现

```
find /var/log -name *.log -type f -a -mtime +10 -exec cp /dev/null {} \;
```




## 第十节：压缩与解压缩

Linux独有压缩工具
- gzip---> .gz 
- bzip2---> .bz2
- xz---> .xz 



压缩命令格式

- gzip [选项...] 文件名
  - 常用选项：-d 解压缩 
- bzip2 [选项...]  文件名
  - 常用选项：-d 解压缩
- xz [选项...] 文件名
  - 常用选项：-d 解压缩



查看压缩文件内容
- zcat   [选项...] 文件名   
- bzcat [选项...] 文件名  
- xzcat [选项...] 文件名

```shell
[root@localhost ~]# cp /etc/services /opt
[root@localhost ~]# cd /opt
[root@localhost opt]# ll services 
-rw-r--r--. 1 root root 670293 4月  17 17:06 services
[root@localhost opt]# ll -h services 
-rw-r--r--. 1 root root 655K 4月  17 17:06 services

#使用gzip格式对文件进行压缩
[root@localhost opt]# gzip services 
[root@localhost opt]# ls
services.gz
[root@localhost opt]# ll -h services.gz 
-rw-r--r--. 1 root root 133K 4月  17 17:06 services.gz

#不解压查看压缩文件内容
[root@localhost opt]# zcat services.gz 

#解压文件
[root@localhost opt]# gzip -d services.gz 

#使用bzip2格式对文件进行压缩
[root@localhost opt]# bzip2 services 
[root@localhost opt]# ls
services.bz2
[root@localhost opt]# ll -h services.bz2 
-rw-r--r--. 1 root root 122K 4月  17 17:06 services.bz2

#不解压查看文件内容
[root@localhost opt]# bzcat services.bz2 

#解压文件
[root@localhost opt]# bzip2 -d services.bz2 

#使用xz格式对文件进行压缩
[root@localhost opt]# xz services 
[root@localhost opt]# ls
services.xz
[root@localhost opt]# ll -h services.xz 
-rw-r--r--. 1 root root 98K 4月  17 17:06 services.xz

#解压文件
# xz -d services.xz 
```





#### tar打包工具

tar命令对文件/目录打包，tar命令打出来的包是以文件的格式存在，使用 tar 程序打出来的包常称为 tar 包，tar 包文件通常都是以 .tar 结尾  



tar 命令格式：tar 选项  打包后名字   被打包文件

- 常用选项：
  - -c 创建打包文件
  - -f 指定打包后的文件名称
  - -z  调用gzip压缩工具   -J 调用xz压缩工具  -j 调用bzip2压缩工具
  - -t 列出打包文档内容
  - -x 解压打包文件
  - -C 指定解压路径
  - -v 显示详细信息



tar命令应用案例

```shell
#同时打包多个文件/目录并使用gzip格式压缩
# tar -czf xxx.tar.gz /etc/passwd /etc/fstab /home

#将压缩包数据解压到/media目录
# tar -xf xxx.tar.gz -C /media/
# ls /media/etc
# rm -rf xxx.tar.gz 

#同时打包多个文件/目录并使用xz格式压缩
# tar -cJf xx.tar.xz /etc/hostname /etc/services /home

#错误语法，f选项要放到所有选项右边
[root@localhost opt]# tar -ft xx.tar.xz 
tar: 您必须从"-Acdtrux"或是"--test-label"选项中指定一个
请用“tar --help”或“tar --usage”获得更多信息。

#不解压查看压缩包数据
# tar -tf xx.tar.xz 
etc/hostname

#将压缩包数据解压到/tmp目录
# tar -vxf xx.tar.xz -C /tmp
[root@localhost opt]
#同时打包多个文件/目录并使用bzip2格式压缩
# tar -cjf abc.tar.bz2 /etc/hostname /etc/group /home

#解压缩
# tar -xf abc.tar.bz2 -C /media/
```





## 第十一节：磁盘分区

一个磁盘的艺术之旅：添加新硬盘--》分区--》格式化文件系统--》挂载使用

扇区是磁盘存储数据的最小单元，默认一个扇区可以存储512字节的数据



#### 磁盘类型介绍

- IDE接口类型：比较古老的磁盘种类，优点价格便宜，缺点数据传输速度慢
- SCSI接口类型：早期主要用于服务器理领域
- SAS接口类型：目前在服务器领域比较流行，数据传出速度快（磁盘转速），支持在线更换硬盘
- SATA接口类型：跟SAS类似
- SSD接口类型：固态硬盘接口，价格昂贵，数据传输速度快，利用内存的机制读写数据，主要应用在个人电脑
- NVMe接口类型：固态硬盘接口，价格昂贵，数据传输速度快，利用内存的机制读写数据



#### lsblk查看系统所有磁盘信息

- lsblk（英文全拼：list block）用于列出当前系统所有磁盘与磁盘内的分区信息
- 通常用法：查看系统中硬盘的信息（多少块硬盘以及每个硬盘的分区数量）以及分区的具体信息
- 命令格式：lsblk [选项...] [设备名]
- 常用选项：
  - -d  #仅显示磁盘本身，不会列出磁盘的分区数据
  - -f   #列出磁盘分区使用的文件系统类型
- lsblk命令示例

```shell
#列出当前系统所有磁盘与磁盘内的分区信息
[root@localhost ~]# lsblk 
NAME            MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda               8:0    0   20G  0 disk 
├─sda1            8:1    0    1G  0 part /boot
└─sda2            8:2    0   19G  0 part 
  ├─centos-root 253:0    0   17G  0 lvm  /
  └─centos-swap 253:1    0    2G  0 lvm  [SWAP]
sr0              11:0    1  4.3G  0 rom  /mnt/centos

#sda1：sd代表SCSI磁盘，a代表第一块磁盘，1代表第一个分区
#sdb：sd代表SCSI磁盘，b代表第二块磁盘，1代表第一个分区
#解释：
NAME		#设备名称
MAJ:MIN		#主设备号:次设备号，内核通过主次设备号识别磁盘
RM			#是否为可卸载设备，1可卸载，0不可卸载
SIZE		#设备的容量大小
RO			#表示设备是否为只读，0非只读设备，1只读设备
TYPE		#表示设备类型（disk为磁盘，part为分区，lvm逻辑卷，rom只读）
MOUNTPOINT	#设备挂载点（SWAP没有挂载点）

#列出指定的磁盘信息
[root@localhost ~]# lsblk -d /dev/sda
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
sda    8:0    0  20G  0 disk 

#列出所有磁盘分区内使用的文件系统类型
[root@localhost ~]# lsblk -f 
NAME            FSTYPE      LABEL           UUID                                   MOUNTPOINT
sda                                                                                
├─sda1          xfs                         4cb9bb38-c34a-4415-9614-ba38642bb86d   /boot
└─sda2          LVM2_member                 cKn0jP-z8Bq-SNvl-BsNa-7vTg-GBU2-OiHCro 
  ├─centos-root xfs                         55dad88d-a600-42d1-b387-236db62ce396   /
  └─centos-swap swap                        2e91599a-6d72-483d-add8-6dfb84296170   [SWAP]
sr0             iso9660     CentOS 7 x86_64 2018-11-25-23-54-16-00                 /mnt/centos

#列出指定分区的文件系统类型
[root@localhost ~]# lsblk -df /dev/sda1
NAME FSTYPE LABEL UUID                                 MOUNTPOINT
sda1 xfs          4cb9bb38-c34a-4415-9614-ba38642bb86d /boot

```



#### df查看分区使用情况

df命令用于查看文件系统使用情况

- 命令格式：df [选项...] [参数...]
- 常用选项：
  - -h  以人类易读方式显示文件系统容量
  - T    显示文件系统类型



df 命令示例

```shell
[root@localhost ~]# df
Filesystem              1K-blocks    Used Available Use% Mounted on
/dev/mapper/centos-root  17811456 3746320  14065136  22% /
devtmpfs                   480884       0    480884   0% /dev
tmpfs                      497948       0    497948   0% /dev/shm
tmpfs                      497948    8340    489608   2% /run
tmpfs                      497948       0    497948   0% /sys/fs/cgroup
/dev/sr0                  4480476 4480476         0 100% /mnt
/dev/sda1                 1038336  169448    868888  17% /boot
tmpfs                       99592      12     99580   1% /run/user/42
tmpfs                       99592       0     99592   0% /run/user/0

[root@localhost ~]# df -h /
Filesystem               Size  Used Avail Use% Mounted on
/dev/mapper/centos-root   17G  3.6G   14G  22% /
```



/dev/目录下文件详解

```shell
[root@localhost ~]# ls /dev
hd[a-t]:IDE设备
sd[a-z]:SCSI设备
fd[0-7]：软盘驱动设备
md[0-32]：软RAID设备
loop[0-7]：本地回环设设备
lp[0-3]:打印机设备
mem：内存设备
null：空设备，也称为黑洞，任何写入的数据都将被丢弃
zero：零资源设备，任何写入的数据都将被丢弃
full：满设备，任何写入的数据都将失败
tty[0-63]：虚拟终端设备
random：随机数设备
urandom：随机数设备
port：存取I/O端口
```



#### MBR分区工具

比较古老的分区格式，最初只能划分4个主分区，后来新增加扩展分区（容器）功能，可在扩展分区内划分更多逻辑分区，最大支持2.2T磁盘容量

- SCSI接口硬盘逻辑分区最多可以划分11个
- 最大支持2.2T以内磁盘容量



fdisk命令用于查看磁盘使用情况和磁盘分区（MBR分区格式）

- 命令格式：fdisk [选项...] [设备路径]
- 常用选项：-l   列出磁盘分区表类型与分区信息

```shell
[root@localhost ~]# fdisk /dev/sdb
m	#获取命令帮助	    ※
p	#显示磁盘分区表   ※
n	#新增加一个分区   ※
q	#不保存分区退出   ※
d	#删除一个分区     ※
w	#保存分区退出     ※
a	#设置可引导标记
b	#编辑bsd磁盘标签
c	#设置DOS操作系统兼容标记
l	#显示已知的文件系统类型，82为swap交换分区，83为Linux分区
o	#建立空白DOS分区表
s	#新建空白SUN磁盘标签
t	#改变分区的系统ID
u	#改变显示记录单位
v	#验证分区表
x	#附加功能

命令(输入 m 获取帮助)：m
命令(输入 m 获取帮助)：p

#划分第一个主分区
命令(输入 m 获取帮助)：n
Select (default p):   回车
分区号 (1-4，默认 1)：回车
起始 扇区 (2048-209715199，默认为 2048)：回车
Last 扇区, +扇区 or +size{K,M,G} (2048-209715199，默认为 209715199)：+10G  #指定大小（K,M,G）
分区 1 已设置为 Linux 类型，大小设为 10 GiB

命令(输入 m 获取帮助)：p
磁盘标签类型：dos
磁盘标识符：0xefc65503

   设备 Boot      Start         End      Blocks   Id  System
/dev/sdb1            2048    20973567    10485760   83  Linux

#划分第二个主分区
命令(输入 m 获取帮助)：n
Select (default p): 
分区号 (2-4，默认 2)：
起始 扇区 (20973568-209715199，默认为 20973568)：
Last 扇区, +扇区 or +size{K,M,G} (20973568-209715199，默认为 209715199)：+10G  #指定分区大小

#划分第三个主分区
命令(输入 m 获取帮助)：n
Select (default p): 
分区号 (3,4，默认 3)：
起始 扇区 (41945088-209715199，默认为 41945088)：
Last 扇区, +扇区 or +size{K,M,G} (41945088-209715199，默认为 209715199)：+10G

#查看分区信息
命令(输入 m 获取帮助)：p
磁盘标签类型：dos
磁盘标识符：0xefc65503

   设备 Boot      Start         End      Blocks   Id  System
/dev/sdb1            2048    20973567    10485760   83  Linux
/dev/sdb2        20973568    41945087    10485760   83  Linux
/dev/sdb3        41945088    62916607    10485760   83  Linux

#划分第四个分区
命令(输入 m 获取帮助)：n
Select (default e): p
起始 扇区 (62916608-209715199，默认为 62916608)：
Last 扇区, +扇区 or +size{K,M,G} (62916608-209715199，默认为 209715199)：+10G

#继续划分分区
命令(输入 m 获取帮助)：n
If you want to create more than four partitions, you must replace a
primary partition with an extended partition first.
#提示如果想要创建更多的分区，先将一个主分区替换为扩展分区

#删除分区
命令(输入 m 获取帮助)：d4
分区号 (1-4，默认 4)：
分区 4 已删除

命令(输入 m 获取帮助)：d
分区号 (1-3，默认 3)：3
分区 3 已删除

命令(输入 m 获取帮助)：p
磁盘标签类型：dos
磁盘标识符：0xefc65503

   设备 Boot      Start         End      Blocks   Id  System
/dev/sdb1            2048    20973567    10485760   83  Linux
/dev/sdb2        20973568    41945087    10485760   83  Linux

#创建主分区
命令(输入 m 获取帮助)：n
Select (default p): 
分区号 (3,4，默认 3)：
起始 扇区 (41945088-209715199，默认为 41945088)：
Last 扇区, +扇区 or +size{K,M,G} (41945088-209715199，默认为 209715199)：+10G

#创建按扩展分区
命令(输入 m 获取帮助)：n
Select (default e): 
Using default response e
已选择分区 4
起始 扇区 (62916608-209715199，默认为 62916608)：
Last 扇区, +扇区 or +size{K,M,G} (62916608-209715199，默认为 209715199)：
分区 4 已设置为 Extended 类型，大小设为 70 GiB

#创建逻辑分区
命令(输入 m 获取帮助)：n
添加逻辑分区 5
起始 扇区 (62918656-209715199，默认为 62918656)：
Last 扇区, +扇区 or +size{K,M,G} (62918656-209715199，默认为 209715199)：+10G
分区 5 已设置为 Linux 类型，大小设为 10 GiB

命令(输入 m 获取帮助)：p
磁盘 /dev/sdb：107.4 GB, 107374182400 字节，209715200 个扇区
磁盘标签类型：dos
磁盘标识符：0xefc65503

   设备 Boot      Start         End      Blocks   Id  System
/dev/sdb1            2048    20973567    10485760   83  Linux
/dev/sdb2        20973568    41945087    10485760   83  Linux
/dev/sdb3        41945088    62916607    10485760   83  Linux
/dev/sdb4        62916608   209715199    73399296    5  Extended
/dev/sdb5        62918656    83890175    10485760   83  Linux
命令(输入 m 获取帮助)：w
```



#### GPT分区工具

可划分128个主分区，最大支持18EB磁盘容量（1EB=1024PB，1PB=1024TB，1TB=1024GB）

gdisk命令用于查看磁盘使用情况和磁盘分区（GPT分区格式）

- 命令格式：gdisk [选项...] [设备路径]
- 常用选项：-l 列出磁盘分区表类型与分区信息



```shell
[root@localhost ~]# gdisk /dev/sdc
GPT fdisk (gdisk) version 0.8.10 #GPT版本

Partition table scan:   #分区表扫描
  MBR: not present		#MBR分区不存在
  BSD: not present		#BSD分区不存在
  APM: not present		#APM分区不存在
  GPT: not present		#GPT分区不存在

Creating new GPT entries.  #创建新的GPT分区

Command (? for help): ?   #输入？号获取命令帮助
p	#显示磁盘分区表   ※
n	#新增加一个分区   ※
q	#不保存分区退出   ※
d	#删除一个分区     ※
w	#保存分区退出     ※

#创建新的分区
Command (? for help): n
Partition number (1-128, default 1): 回车
First sector (34-209715166, default = 2048) or {+-}size{KMGTP}: 回车  #输入起始扇区，默认2048开始
Last sector (2048-209715166, default = 209715166) or {+-}size{KMGTP}: +20G #输入新增分区的大小，可以通过扇区数来增加，也可以通过+size{KMGTP}方式来增加
Hex code or GUID (L to show codes, Enter = 8300):  #这里要求输入分区的类型，直接回车就行

#查看分区类型
Command (? for help): p  #输入p查看创建的分区
Disk /dev/sdc: 209715200 sectors, 100.0 GiB  #磁盘总容量
...
Total free space is 167772093 sectors (80.0 GiB)  #磁盘剩余容量

Number  Start (sector)    End (sector)  Size       Code  Name
   1            2048        41945087   20.0 GiB    8300  Linux filesystem
#以创建的分区

Command (? for help): w   #输入w保存配置，如果不想保存可以输入q退出
Do you want to proceed? (Y/N): y  #问你是否相想继续，输入y继续 
OK; writing new GUID partition table (GPT) to /dev/sdc.
The operation has completed successfully.   #写入成功

#格式化文件系统
[root@localhost ~]# mkfs.xfs /dev/sdc1

#查看文件系统类型
[root@localhost ~]# blkid /dev/sdc1
/dev/sdc1: UUID="c57746eb-8170-4c86-82ad-6aae95de19f3" TYPE="xfs" 

#创建挂载点
[root@localhost ~]# mkdir /webbak
[root@localhost ~]# mount /dev/sdc1 /webbak
[root@localhost ~]# df -hT
/dev/sdc1               xfs        20G   33M   20G    1% /webbak

#开机自动挂载
[root@localhost ~]# vim /etc/fstab
/dev/mapper/centos-root /                       xfs     defaults        0 0
UUID=ae55ec6b-973b-498e-a366-f35e14b3d153 /boot                   xfs     defaults        0 0
/dev/mapper/centos-swap swap                    swap    defaults        0 0
/dev/sdb1              /mybak                   xfs     defaults        0 0 
/dev/sdc1              /webbak                  xfs     defaults        0 0   #手动添加

[root@localhost ~]# mount -a
```



#### 格式化文件系统

文件管理系统，用于管理分区里的数据，赋予分区文件系统，分区才可以正常的使用

- CentOS5：分区默认使用文件系统类型ext3

- CentOS6：分区默认使用文件系统类型ext4

  > ext4日志记录功能，意外宕机，通过日志记录把没有保存的数据，在系统再次重启时快速恢复回来
  >
  > 单个文件系统最大支持1EB的分区容量，单个文件最大可以存储16TB数据

- CentOS7：分区默认使用文件系统类型xfs

  > xfs开启了日志记录的功能，意外宕机，通过日志记录把没有保存的数据，在系统再次重启时快速恢复回来，数据恢复的速度比ext4文件系统快
  >
  > 单个文件系统最大支持8EB分区容量，单个文件最大可以存储500TB的数据
  >
  
- swap文件系统：虚拟交换空间，拿硬盘空间去充当（虚拟）内存去使用，缓解服务器内存不足的问题，但是降低服务器的性能

```shell
临时关闭swap分区功能
# swapoff -a    


永久关闭需要修改/etc/fstab文件，注释swap一行即可，需要经历重启后生效
vim  /etc/fstab

上述内容省略...

#/dev/mapper/centos-swap swap                    swap    defaults        0 0
```



mkfs命令用于在分区上建立文件系统

- 常用文件系统类型：ext4，xfs
- 命令格式：
  - mkfs.xfs    分区设备路径     #格式化为xfs类型文件系统
  - mkfs.ext4  分区设备路径  #格式化为ext4类型文件系统



```shell
#格式化文件系统
[root@localhost ~]# mkfs.xfs /dev/sdb1

#可以使用lsblk -f查看
[root@localhost ~]# lsblk -f /dev/sdb1
```



#### mount挂载

在Linux系统中用户无法直接使用硬件设备的，必须挂载，挂载就是给我们用户提供一个可以使用设备的一个接口



- 挂载注意事项：

  - 挂载点必须是一个目录，理论上还得是一个空目录

  - 一个分区不允许重复挂载到多个目录下

  - 一个目录不允许重复挂载多个文件系统

    

命令格式：mount  设备路径   挂载点目录

```shell
#创建挂载点目录
[root@localhost ~]# mkdir /mybak

#挂载文件系统
[root@localhost ~]# mount /dev/sdb1 /mybak

#查看正在使用中的分区信息
[root@localhost ~]# df -Th 

[root@localhost ~]# df -Th /mybak
文件系统       类型  容量  已用  可用 已用% 挂载点
/dev/sdb1      xfs    10G   33M   10G    1% /mybak
```

总结：

- 添加硬盘： lsblk 查看系统是否识别新硬盘 
- 划分分区：fdisk/gdisk  设备路径   划分硬盘
- 格式化文件系统：mkfs.xfs/mkfs.exte
- 挂载：创建目录-->  mount  设备路径  挂载点目录
- 查看分区使用情况:  df  -hT



#### umount卸载

umount命令用于卸载文件系统

- 命令格式：umount 挂载点目录

```shell
#卸载文件系统
[root@localhost ~]# umount /mybak
[root@localhost ~]# df -h 
```



#### 开机自动挂载

/etc/fstab用于存放文件系统信息，当系统启动时，系统会自动读取文件内容将指定的文件系统挂载到指定的目录

```shell
[root@localhost ~]# vim /etc/fstab

上述内容省略...

/dev/sdb5 /test xfs defaults 0 0

#解释：该文件内容为6个字段，每个字段详解如下
第一个字段：要挂载的设备路径
第二个字段：挂载点目录
第三个字段：设备文件系统类型

第四个字段：挂载参数，参数如下↓
sync，async：  此文件系统是否使用同步写入 (sync) 或异步 (async) 的内存机制，默认为异步（async） 
atime，noatime：更新访问时间/不更新访问时间，访问分区时，是否更新文件的访问时间，默认为更新
ro，rw：挂载文件为只读（ro）或读写（rw），默认为rw
auto，noauto：自动挂载/手动挂载，执行mount -a时，是否自动挂载/etc/fstab文件内容，默认为自动（auto）
dev，nodev：是否允许此文件系统上，可建立装置文件，默认为允许（dev）
suid，nosuid：是否允许文件系统上含有SUID与SGID特殊权限，默认为允许（SUID）
exec，noexec：是否允许文件系统上拥有可执行文件，默认为允许（exec）
user，nouser：是否允许普通用户执行挂载操作，默认为不允许（nouser），只有root用户可以挂载分区
defaults默认值：代表async，rw，auto，dev，suid，exec，nouser七个选项

第五个字段：是否对文件系统进行备份，0不备份，1为备份
第六个字段：是否检查文件系统挂载顺序，0不检测
```



mount常用选项：-a：依照配置文件/etc/fstab的数据将所有未挂载的分区都挂载上来
```shell
[root@localhost ~]# mount -a
```





## 第十二节：LVM逻辑卷

逻辑卷：LVM（Logical Volume Manager）逻辑卷管理系统 

逻辑卷可以实现将底层的物理分区整合成一个大的虚拟硬盘，这个虚拟硬盘可以实现无限扩容

逻辑卷技术是通过Linux系统内核dm（device mapper）设备映射模块



#### 逻辑卷管理命令

| 功能          | PV物理卷管理 | VG卷组管理 | LV逻辑卷管理 |
| ------------- | ------------ | ---------- | ------------ |
| create   创建 | 系统自动创建 | vgcreate   | lvcreate     |
| 显示信息      | pvs          | vgs        | lvs          |
| remove 删除   | pvremove     | vgremove   | lvremove     |
| extend  扩展  |              | vgextend   | lvextend     |



#### 创建卷组

- 命令格式：vgcreate  卷组名  设备路径1 设备路径2...

```shell
#创建卷组
[root@localhost ~]# vgcreate systemvg  /dev/sdb2 /dev/sdb3

#详细显示卷组信息
[root@localhost ~]# vgdisplay  systemvg
  --- Volume group ---
  VG Name               systemvg  #卷组名字
  System ID             
  Format                lvm2      #卷组格式
  Metadata Areas        2
  Metadata Sequence No  1
  VG Access             read/write
  VG Status             resizable
  MAX LV                0
  Cur LV                0
  Open LV               0
  Max PV                0
  Cur PV                2
  Act PV                2
  VG Size               19.99 GiB  #卷组大小
  PE Size               4.00 MiB
  Total PE              5118
  Alloc PE / Size       0 / 0   
  Free  PE / Size       5118 / 19.99 GiB
  VG UUID               KEP7XS-wrkI-rTUY-RqBa-UJA6-YRkK-iKDabR  #卷组UUID


#简要显示卷组信息
[root@localhost ~]# vgs systemvg
  VG       #PV #LV #SN Attr   VSize  VFree 
  systemvg   2   0   0 wz--n- 19.99g 19.99g
```



#### 创建逻辑卷

- 命令格式：lvcreate -L 空间大小 -n 逻辑卷名 卷组名

```shell
#创建逻辑卷
[root@localhost ~]# lvcreate -L 10G -n mylv systemvg
  Logical volume "mylv" created.

#简要查看逻辑卷信息
[root@localhost ~]# lvs
  LV   VG       Attr       LSize   Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert
  root centos   -wi-ao---- <17.00g                                                    
  swap centos   -wi-ao----   2.00g                                                    
  mylv systemvg -wi-a-----  10.00g     
[root@localhost ~]# lvs /dev/systemvg/mylv 
  LV   VG       Attr       LSize  Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert
  mylv systemvg -wi-a----- 10.00g    
  
 #查看卷组信息，卷组信息以变小
 [root@localhost ~]# vgs
  VG       #PV #LV #SN Attr   VSize   VFree
  centos     1   2   0 wz--n- <19.00g    0 
  systemvg   2   1   0 wz--n-  19.99g 9.99g
```



#### 格式化文件系统

```shell
#格式化文件系统
[root@localhost ~]# mkfs.xfs /dev/systemvg/mylv

#查看文件系统类型
[root@localhost ~]# blkid /dev/systemvg/mylv
/dev/systemvg/mylv: UUID="7f08daf8-ae3c-40b2-a282-4514a6f37111" TYPE="xfs" 

#挂载使用
[root@localhost ~]# mkdir /dbbak
[root@localhost ~]# mount /dev/systemvg/mylv /dbbak
[root@localhost ~]# df -hT
/dev/mapper/systemvg-mylv xfs        10G   33M   10G    1% /dbbak
```





#### 扩展逻辑卷

逻辑卷支线上扩容，逻辑卷的空间来源于卷组，当卷组有足够的空间时，才可以扩展逻辑卷

- 扩展命令：lvextend  -L  +{K,M,G}  逻辑卷路径

```shell
#扩容逻辑卷
[root@localhost ~]# lvextend -L +9G /dev/systemvg/mylv 

#查看逻辑卷信息
[root@localhost ~]# lvs 
  LV   VG       Attr       LSize   Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert
  root centos   -wi-ao---- <17.00g                                                    
  swap centos   -wi-ao----   2.00g                                                    
  mylv systemvg -wi-ao----  19.00g    #扩容成功
```



#### 扩展文件系统

当逻辑卷扩大以后，也需要对逻辑卷的文件系统进行扩展

- 扩展文件系统容量：
  - xfs_growfs    #用于扩容XFS设备
  - resize2fs       #用于扩容EXT3/EXT4设备（了解）resize2fs /dev/systemvg/xxoo 

```shell
#扩展文件系统
[root@localhost ~]# xfs_growfs /dbbak

#[root@localhost ~]# df -hT
/dev/mapper/systemvg-mylv xfs        19G   33M   19G    1% /dbbak

#查看卷组信息
[root@localhost ~]# vgs
  VG       #PV #LV #SN Attr   VSize   VFree   
  centos     1   2   0 wz--n- <19.00g       0 
  systemvg   2   1   0 wz--n-  19.99g 1016.00m

```



#### 扩展卷组

卷组的空间来源于物理分区，当卷组没有足够空间提供给逻辑卷时，须扩容卷组

- 扩展卷组命令：vgextend

```shell
[root@localhost ~]# vgextend systemvg /dev/sdb5 /dev/sdb6 /dev/sdb7 /dev/sdb8

[root@localhost ~]# vgs
  VG       #PV #LV #SN Attr   VSize   VFree  
  centos     1   2   0 wz--n- <19.00g      0 
  systemvg   6   1   0 wz--n- <59.98g <40.98g

#扩容逻辑卷
[root@localhost ~]# lvextend -L +40G /dev/systemvg/mylv 


[root@localhost ~]# lvs
  LV   VG       Attr       LSize   Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert
  root centos   -wi-ao---- <17.00g                                                    
  swap centos   -wi-ao----   2.00g                                                    
  mylv systemvg -wi-ao----  59.00g   
  
#扩展文件系统
[root@localhost ~]# xfs_growfs /dbbak
/dev/mapper/systemvg-mylv   59G   34M   59G    1% /dbbak
```



#### 删除逻辑卷

逻辑卷的删除需要先卸载，在执行删除

- 在执行删除操作时，首先删除LV逻辑卷，在删除VG卷组，最后删除PV物理卷
- 删除命令：lvremove

```shell
#删除逻辑卷错误示范
[root@localhost ~]# lvremove /dev/systemvg/mylv 
  Logical volume systemvg/mylv contains a filesystem in use.  #提示文件正在使用中

#需要先卸载
[root@localhost ~]# umount /dblod/

#删除逻辑卷
[root@localhost ~]# lvremove /dev/systemvg/mylv 
Do you really want to remove active logical volume systemvg/mylv? [y/n]: y
  Logical volume "mylv" successfully removed

#删除卷组
[root@localhost ~]# vgremove systemvg
  Volume group "systemvg" successfully removed

#删除物理卷后将恢复至普通分区
#查看物理卷
[root@thinkmo ~]# pvs   

#删除物理卷
[root@thinkmo ~]# pvremove /dev/sdb2 /dev/sdb3 /dev/sdb5 /dev/sdb6 /dev/sdb6 /dev/sdb7 /dev/sdb8
```



#### 逻辑卷的缩减

- 命令lvreduce
- 不允许联机缩减
- 先缩减文件系统的空间，在缩减逻辑卷的空间



#### 课后作业

1.查看/var/log目录下以包含log的文件

> 

2.查看/var/log目录下以数字结尾的文件

> 

3.查看/var/log目录下以字母结尾的文件（包括大写）

> 

4.过滤/etc/sudoers文件以root开头的行

> 


5.看/etc/sudoers文件有效的配置

> 

6.查找/etc/目录下crontab文件存放位置，并查看文件内容

> 
>

7.查找/var/log下10分钟内被修改的文件

> 

8.查找/var/log目录下30天之前被修改且大于1M的文件，清空文件内容

> 

9.Linux下你熟悉的压缩格式有哪些？

> 

10.对/home目录打包并使用gzip格式压缩，打包后名为home.tar.gz

> 

11.将home.tar.gz压缩包内容解压至/homebak目录下

> 

12.MBR分区格式可以划分多少个主分区？支持多大容量磁盘？

> 
>

13.GPT分区格式可以划分多少个主分区？支持多大容量磁盘？

> 
>

14.CentOS7分区默认使用的文件系统类型是什么？

> 

15.如何查看一块磁盘的分区格式？及扩展分区大小？

> 

16.如何查看一个分区文件系统类型？及使用情况？

> 

17.linux下开机自动挂载文件是哪个？

> 

18.为根分区扩容20G空间

> 思路：
>
> 1.查看根分区的逻辑卷与卷组名称
>
> 2.查看根分区所使用的卷组剩余空间
>
> 3.如果卷组空间不足，需要先扩容卷组
>
> 4.扩容逻辑卷



#### RAID磁盘阵列

RAID中文全称：独立磁盘冗余阵列 ，简称磁盘阵列

RAID可通过技术（软件/硬件）将多个独立的磁盘整合成一个巨大容量大逻辑磁盘使用

RAID可以提高数据I/O（读写）速度，和冗余数据的功能



#### RAID级别

RAID0：等量存储，至少由2块磁盘组成，同一个文档等量存放在不同的磁盘并行写入数据来提高效率，但只是单纯的提高效率，并没有冗余功能，如果其中一块盘故障，数据会丢失，不适合存放重要数据




RAID1：完整备份，至少由两块磁组成，同一个文档复制成多份存储到不同磁盘提高可靠性，读写速度没有提升，反而下降了，适合存储重要的数据




RAID2：至少由3块磁盘组成，数据分散存储在不同磁盘，在读写数据时需要对数据时时校验，由于采用的校验算法复杂，数据量比原有数据增大，而且导致硬件开销较大



RAID3：至少由三块磁盘组成，同一份文档分散写入不同的磁盘，校验数据单独存放在另外一块磁盘，由于每次读写操作都会访问校验盘，容易导致校验盘长时间高负荷工作而挂掉，如果校验盘损坏数据将无法恢复



RAID4：与RAID3类似，至少由3块磁盘组成，同一份文档分散存写入不同磁盘，校验数据单独存放在另外一块磁盘，由于每次读写操作都会访问校验盘，容易导致校验盘长时间高负荷工作而挂掉，如果校验盘损坏数据将无法恢复，与RAID3的区别是数据分割方式不一样



**RAID5**：至少由3块磁盘组成，同一份文档分散写入不同磁盘，每个硬盘都有校验数据，其中校验数据会占用磁盘三分之一的空间，三分之二的空间存放原始数据，允许同时坏一块磁盘，当一块磁盘损坏，其他磁盘里的数据配合校验信息可将数据恢复回来






RAID6：至少由4块磁盘组成，同一份文档分散写入不同磁盘，每个磁盘都有校验数据，由于采用双校验算法，所以校验数据量是RAID5的两倍，需要占用2块磁盘空间存放校验数据，两块盘存放原始数据，由于数据校验的算法计算量偏大，所以在速写速度上没有RAID5快，允许同时坏2块磁盘



RAID7：美国SCC公司专利，花钱



RAID10：RAID1+RAID0=RAID10，最少需要4块磁盘，先将4块硬盘组成两组RAID1，在将两组RAID1组成一个RAID0，既提高数据读写速度，又能保障数据安全性，缺点是可用容量是总容量的一半







#### 实现RAID方式

- 实现RAID通常有三种方式，通过软件技术实现RAID功能（软RAID），不稳定
- 外接式磁盘阵列柜，被常用在大型服务器上，不过这类产品价格昂贵
- RAID磁盘阵列卡，分为服务器自带和额外安装，硬RAID比软RAID更安全稳定，RAID卡带有缓存功能可实现数据自动恢复，RAID卡有电池





## 第十三节：进程管理及系统健康状态分析



#### 进程管理

- 什么是程序：用计算机语言编写的软件，安装到系统中，变成系统中的程序，程序占用磁盘空间，程序是静态并且是永久的

- 什么是进程：正在运行中的程序叫进程，占用内存空间，进程是动态的，进程是有生命周期的，进程有自己的独立内存空间，每启动一个进程，系统就会为它分配内存空间并分配一个PID号，每个进程都会对应一个父进程，而父进程可以复制多个子进程，每种进程都有两种方式存在，前台与后台，一般进程都是以后台方式运

- 什么是线程：线程也被称为轻量级进程，线程是操作系统能够进行运算与调度的最小单元，而线程是被包含在进程内，是进程中实际运作的单元，一个进程中可以并发多个线程，每条线程并行执行不同的任务，每个线程都是独立的，线程之间共享进程的内存空间，在多线程的程序中，由于线程很“轻”，故线程的切换非常迅速且开销小（在同一进程中）



#### 查看进程树

- pstree以树状结构显示进程信息，包括进程之间的关系
- 命令格式：pstree  [选项...] [参数...]
- 常用选项：
  - -p     #显示进程PID
  - -a     #显示完整的信息
  - -u     #列出每个进程所属账号名称



提示：如果最小化安装系统没有pstree命令可以通过yum安装psmisc软件

yum -y install psmisc



```shell
#查看进程树
[root@localhost ~]# pstree
systemd─┬─ModemManager───2*[{ModemManager}]
CentOS7版本：天父进程systemd
CentOS6版本：天父进程init，Apstart
CentOS5版本：天赋进程init

#以PID形式显示进程信息
[root@localhost ~]# pstree -p
systemd(1)─┬─ModemManager(6714)─┬─{ModemManager}(6739)

#查看系统用户的进程信息
[root@localhost ~]# pstree -p lisi
sshd(15086)───bash(15089)───vim(15244)
[root@localhost ~]# pstree -pa lisi
sshd,15086    
  └─bash,15089
      └─vim,15244 1.txt

#查看系统所有用户的进程
root@localhost ~]# pstree -up
...
           ├─smartd(6726)
           ├─sshd(7337)─┬─sshd(8880)───bash(8887)───pstree(15395)
           │            └─sshd(15066)───sshd(15086,lisi)───bash(15089)───vim(15244)
```



#### ps 进程查看

aux   #显示当前系统中所有进程

 -ef    #显示当系统中所有进程
```shell
#查看系统所有进程信息
[root@localhost ~]# ps aux
USER PID %CPU %MEM VSZ   RSS TTY STAT START TIME COMMAND
root  1  2.2  0.3 127992 6576 ?  Ss   09:08 0:01 /usr/lib/systemd/systemd --switched-root
#个字段含义如下：
user：进程属于那个用户
PID ：进程PID号
%CPU：进程占用CPU资源百分比
%MEM：进程占用物理内存百分比
VSZ ：进程使用掉的虚拟内存量（单位：Kb）
RSS ：进程占用固定内存量（单位：Kb）
TTY ：进程在那个终端运行，如果内核直接调用则显示“？”，tty1-tty6表示本机终端登录的用户进程，pts/0-255则表示远程终端登录用户的进程
STAT：进程状态：R（Running）运行，S（Sleep）休眠，s包含子进程，T（stop）停止，Z（Zombie）僵尸，+后台进程
START：进程启动时间
TIME ：占用CPU运算时间
COMMAND：产生进程的命令

#查看系统所有进程信息
[root@localhost ~]# ps -ef
UID  PID PPID  C STIME TTY    TIME  CMD
root 1      0  0 09:08 ?  00:00:01 /usr/lib/systemd/systemd --switched-root --system --dese
#PPID ：该进程的父进程ID号
```



#### top查看系统健康状态

top命令动态来查看系统性能及运行状态信息（类似于windows资源管理器）

-  命令格式：top [选项...]
-  常用选项：-d   #指定刷新秒数，默认为3秒刷新一次
-  交互界面显示指令：
   -  键盘上下键翻行
   -  h              #获取交互模式帮助
   -  P(大写)    #按照CPU使用资源排序
   -  M             #按照内存使用资源排序
   -  q              #退出

```shell
[root@localhost ~]# top
top - 21:22:04 up 12:13,  2 users,  load average: 0.00, 0.01, 0.05
Tasks: 115 total,   1 running, 114 sleeping,   0 stopped,   0 zombie
%Cpu(s):  0.3 us,  0.3 sy,  0.0 ni, 99.3 id,  0.0 wa,  0.0 hi,  0.0 si,  0.0 st
KiB Mem :  1863224 total,  1502920 free,   107872 used,   252432 buff/cache
KiB Swap:  2097148 total,  2097148 free,        0 used.  1565576 avail Mem 
   
   PID USER      PR  NI    VIRT    RES    SHR S %CPU %MEM     TIME+ COMMAND   
   8317 root      20   0  161984   2220   1568 R  0.7  0.1   0:01.62 top   
#第一行top每个字段含义如下：
第二列：21:22:04：当前系统时间
第三列：up 12:13：系统运行时间，该系统以运行12小时13分钟（up 10 day，12:13 代表运行10天12小时13分钟）
第四列：2 users：当前系统登录终端数量
第五列：load average: 0.00, 0.01, 0.05：CPU1分钟，5分钟，15分钟之前平均负载量，根据CPU核数判断系统CPU负载量，1核CPU若高于1代表负载过高，2核CPU若高于2代表负载过高，依次类推。。。

#第二行Tasks每个字段含义如下：
第二列：115 total：当前系统中进程的总数量
第三列：1 running：正在运行的进程数量
第四列：114 sleeping：正在睡眠的进程数量
第五列：0 stopped：正在停止的进程数量
第六列：0 zombie：僵尸进程数量，僵尸进程是当子进程比父进程先结束，而父进程又没有回收子进程，释放子进程占用的资源，此时子进程将成为一个僵尸进程。

#查找僵尸进程与其父进程
ps -e -o ppid,stat | grep Z
命令解释：
-o 自定义输出字段，我们设定显示字段为 stat（状态）, ppid（父进程id）, z或者Z的进程为僵尸进程，所以我们使用grep抓取stat状态为zZ进程
#杀死进程
kill -9 + 父进程号

#第三行%Cpu(s)每个字段含义如下
第二列：0.0 us：用户进程占用的CPU百分比
第三列：0.0 sy：系统进程占用的CPU百分比
第四列：0.0 ni：改变过优先级的用户进程占用的CPU百分比
第五列：100.0 id：空闲的CPU百分比（重点关注）
第六列：0.0 wa：等待输入/输出的进程的占用CPU百分比
第七列：0.0 hi：硬中断请求服务占用的CPU百分比
第八列：0.0 si：软中断请求服务占用的CPU百分比
第九列：0.0 st：虚拟时间百分比，当有虚拟机时，虚拟CPU等待实际CPU的时间百分比

#第四行KiB Mem每个字段含义如下：
第二列：1863224 total：物理内存总量，单位KB
第三列：1502516 free： 空闲内存总量，单位KB
第四列：108240 used：  以使用的内存总量，单位KB
第五列：252468 buff/cache：块设备与普通文件占用的缓存数量

#第五行KiB Swap每个字段含义如下：
第二列：2097148 total：交换空间总量，单位KB
第三列：2097148 free：可用空闲交换空间总量，单位KB
第四列：0 used：：以使用的交换空间总量，单位KB
第五列：1565180 avail Mem：可用于进程下一次分配的物理内存数量

#第六行每个字段含义如下：
PID：进程PID号
USER：进程所有者的用户名
PR：进程优先级执行顺序，越小越优先被执行
NI：负值表示高优先级，正值表示低优先级，越小越优先被执行
VIRT：进程使用的虚拟内存总量，单位kb   
RES：进程使用的、未被换出的物理内存大小，单位kb
SHR：共享内存大小，单位kb
S：进程状态。D=不可中断的睡眠状态 R=运行 S=睡眠 T=跟踪/停止 Z=僵尸进程
%CPU：进程使用的CPU百分比（重点关注）
%MEM：进程使用的物理内存百分比（重点关注）
TIME+：进程使用的CPU时间总计，单位1/100秒
COMMAND：命令名/命令行
```



#### 检索进程

- pgrep 通过匹配其程序名，找到匹配的进程 
- 命令格式：pgrep [选项...] [参数...]
- 常用选项：
  - -l    #输出进程名与PID
  - -U   #检索指定用户进程
  - -t     #检索指定终端进程
  - -x     #精确匹配完整进程名

```shell
#过滤sshd进程
[root@localhost ~]# pgrep sshd
7337
8880
15066
15086
17027

过滤sshd进程，并显示进程名称
[root@localhost ~]# pgrep -l sshd
7337 sshd
8880 sshd
15066 sshd
15086 sshd
17027 sshd

#过滤指定用户的进程
[root@localhost ~]# pgrep -lU lisi
15086 sshd
15089 bash
15244 vim

#按照用户名过滤进程时，选项不要颠倒
[root@localhost ~]# pgrep -Ul lisi
pgrep: invalid user name: l


#查看系统所有终端用户
[root@localhost ~]# who
root     pts/0        2021-04-24 14:06 (192.168.0.1)
lisi     pts/1        2021-04-24 15:57 (192.168.0.1)
root     pts/2        2021-04-24 16:29 (192.168.0.1)

#过滤用户在指定终端开启的进程信息
[root@localhost ~]# pgrep -lU lisi -t pts/1
15089 bash
15244 vim

#过滤用户在指定终端开启的进程信息
[root@localhost ~]# pgrep -lU lisi -t pts/3
19704 bash
19754 top

#精确匹配进程名（没有则不显示）
[root@localhost ~]# pgrep -x ssh

#精确匹配进程名
[root@localhost ~]# pgrep -xl crond
7362 crond
```



#### 进程的前后台调度

- & 					      #将进程放入后台运行
- jobs -l                   #查看后台进程列表
- fg 进程编号          #将后台进程恢复至前台运行
- ctrl + z 组合键      #挂起当前进程并放入后台
- bg 进程编号          #激活后台被挂起进程

```shell
[root@localhost ~]# sleep 5m &
[1] 20130

#查看后台进程信息
[root@localhost ~]# jobs -l
[1]+ 20130 运行中               sleep 5m &

#将后台进程放入前台运行
[root@localhost ~]# fg 1
sleep 5m

#挂起前台进程放入后台
[root@localhost ~]# jobs
[1]+  已停止               sleep 5m

#激活后台的进程
[root@localhost ~]# bg 1
[1]+ sleep 5m &
[root@localhost ~]# jobs -l
[1]+ 20130 运行中               sleep 5m &
```



#### 杀死进程

- ctrl + c                      #组合键结束前台运行的进程
- kill [选项...] PID       #按照进程的PID号杀死进程
  - 常用选项：-l      #列出可用进程信号
  - 常用信号：-9 强制杀死进程，-15 正常杀死进程（默认信号无需指定）
  
- killall  进程名                      #按照进程的名称杀死进程
- killall -9 -u 用户名              #强制杀死该用户所有进程
- pkill  -9  进程名                   #强制杀死进程
  
  - 常用选项：-t  终端号   #提出指定终端用户

```shell
#结束前台正在运行的进程
[root@localhost ~]# sleep 5m
^C

#启用进程放入后台
[root@localhost ~]# sleep 5m &
[1] 21150
[root@localhost ~]# sleep 6m &
[2] 21155
[root@localhost ~]# sleep 7m &
[3] 21159
[root@localhost ~]# sleep 8m &
[4] 21162

#查看后台进程
[root@localhost ~]# jobs -l
[1]  21150 运行中               sleep 5m &
[2]  21155 运行中               sleep 6m &
[3]- 21159 运行中               sleep 7m &
[4]+ 21162 运行中               sleep 8m &

#杀死后台指定的进程（按照PID）
[root@localhost ~]# kill 21150

#查看后台进程
[root@localhost ~]# jobs -l
[1]  21150 已终止               sleep 5m
[2]  21155 运行中               sleep 6m &
[3]- 21159 运行中               sleep 7m &
[4]+ 21162 运行中               sleep 8m &

[root@localhost ~]# kill 21155
[root@localhost ~]# jobs -l
[2]  21155 已终止               sleep 6m
[3]- 21159 运行中               sleep 7m &
[4]+ 21162 运行中               sleep 8m &

#强制杀死进程
[root@localhost ~]# kill -9 21159
[root@localhost ~]# jobs -l
[3]- 21159 已杀死               sleep 7m
[4]+ 21162 运行中               sleep 8m &

#启动进程
[root@localhost ~]# sleep 4m &
[5] 21402
[root@localhost ~]# sleep 5m &
[6] 21406
[root@localhost ~]# sleep 6m &
[7] 21409
[root@localhost ~]# sleep 7m &
[8] 21412

[root@localhost ~]# jobs -l
[4]  21162 运行中               sleep 8m &
[5]  21402 运行中               sleep 4m &
[6]  21406 运行中               sleep 5m &
[7]- 21409 运行中               sleep 6m &
[8]+ 21412 运行中               sleep 7m &

#按照进程名去杀
[root@localhost ~]# killall sleep
[4]   已终止               sleep 8m
[5]   已终止               sleep 4m
[6]   已终止               sleep 5m
[7]-  已终止               sleep 6m
[8]+  已终止               sleep 7m

#启动进程
[root@localhost ~]# sleep 5m &
[1] 21491
[root@localhost ~]# sleep 6m &
[2] 21495
[root@localhost ~]# sleep 7m &
[3] 21498
[root@localhost ~]# jobs -l
[1]  21491 运行中               sleep 5m &
[2]- 21495 运行中               sleep 6m &
[3]+ 21498 运行中               sleep 7m &

#按照进程名强制杀死进程
[root@localhost ~]# killall -9 sleep
[1]   已杀死               sleep 5m
[2]-  已杀死               sleep 6m
[3]+  已杀死               sleep 7m

[root@localhost ~]# who
root     pts/0        2021-04-24 14:06 (192.168.0.1)
lisi     pts/1        2021-04-24 15:57 (192.168.0.1)
root     pts/2        2021-04-24 16:29 (192.168.0.1)
lisi     pts/3        2021-04-24 17:14 (192.168.0.1)

#杀死指定用户的所有进程（讲用户提出系统）
[root@localhost ~]# killall -9 -u lisi
[root@localhost ~]# who
root     pts/0        2021-04-24 14:06 (192.168.0.1)
root     pts/2        2021-04-24 16:29 (192.168.0.1)

#pkill命令演示
[root@localhost ~]# sleep 4m &
[1] 21870
[root@localhost ~]# sleep 5m &
[2] 21873
[root@localhost ~]# sleep 6m &
[3] 21876

[root@localhost ~]# jobs 
[1]   运行中               sleep 4m &
[2]-  运行中               sleep 5m &
[3]+  运行中               sleep 6m &

[root@localhost ~]# pkill sleep
[1]   已终止               sleep 4m
[2]-  已终止               sleep 5m
[3]+  已终止               sleep 6m

[root@localhost ~]# who
root     pts/0        2021-04-24 14:06 (192.168.0.1)
lisi     pts/1        2021-04-24 17:47 (192.168.0.1)
root     pts/2        2021-04-24 16:29 (192.168.0.1)
lisi     pts/3        2021-04-24 17:48 (192.168.0.1)
[root@localhost ~]# pkill -9 -t pts/3
```



#### 用户登录分析

- users  who  w   #查看以登录的用户信息（详细度不同）

- last   #显示登录成功的用户信息

- lastb #显示登录失败的用户信息

```shell
[root@localhost ~]# users
lisi root root
#root：以登录系统的用户名

[root@localhost ~]# who
root     pts/0        2021-04-24 14:06 (192.168.0.1)
lisi     pts/1        2021-04-24 17:47 (192.168.0.1)
root     pts/2        2021-04-24 16:29 (192.168.0.1)
#第一列：以登录系统的用户名
#第二列：用户登录的终端编号
#第三列：登陆时间
#第四列：远程登录地址

[root@localhost ~]# w
 08:16:10 up 55 min,  1 user,  load average: 0.00, 0.01, 0.05
USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT
root     pts/0    192.168.0.1      07:21    2.00s  0.10s  0.00s w
#第一行为top命令显示的第一行数据
#第二行每列含义如下：
USER：以登录的用户名
TTY：用户登录终端编号
FROM：登录地址
LOGIN@：登录时间
IDLE：用户空闲时间，这是个计时器，一旦用户执行任何操作，该计时器便会被重置
JCPU：该终端所有进程占用CPU处理时间，包括正在运行和后台作业占用时间。
PCPU：进程执行以后消耗的CPU时间
WHAT：当前正在执行的任务

#显示登录成功用户
[root@localhost ~]# last
lisi     pts/1        192.168.0.1      Sat Apr 24 07:56 - 08:03  (00:07) 
#第一列：用户名
#第二列：用户登录终端编号
#第三列：登录地址
#第四列：登录起使时间
#第五列：登录结束时间
#第六列：登录持续时间

#查看最近2次登录系统成功的用户
[root@localhost ~]# last -2
lisi     pts/3        192.168.0.1      Sat Apr 24 17:48 - 17:50  (00:01)    
lisi     pts/3        192.168.0.1      Sat Apr 24 17:47 - 17:48  (00:00)  

#查看登录失败用户
[root@localhost ~]# lastb
lisi     ssh:notty    192.168.0.1      Sat Apr 24 08:52 - 08:52  (00:00) 
```





## 十四节：Linux软件包管理



#### Linux软件类型

- 开源软件：软件源代码开放，供用户免费学习，允许用户二次开发，用户使用放心，后期开发者不维护，有人提我们维护！

- 闭源软件：软件源代码不公开发布，无法二次开发，后期开发者不维护对公司损失很大！



#### 开源软件包类型

- 源码包
- 二进制包（RPM包）
- 容器镜像文件（只适用于容器环境使用）



#### 源码包特点

- 源码包优点：可以看到软件源代码，安装灵活，可以自定义安装路径与安装功能，卸载方便

- 源码包缺点：安装过程麻烦，需要用户手动编译，需要手动解决软件包的依赖关系



#### RPM包特点

- RPM包优点：由于已经提前被编译过，所以安装简单，安装速度快
- RPM包缺点：所有功能用户无法自定义，安装没有源码包灵活，不可以看到软件源代码



RPM包命名规则，如：nginx-1.18.0-1.el7.ngx.x86_64.rpm
- nginx       #软件包名称
- 1.18.0     #软件包版本，主版本.次版本.修改版本
- 1              #补丁次数
- el7           #适合的系统（el7表示RHEL7）
- x86_64    #适合的CPU架构
- rpm         #rpm包扩展名



#### RPM管理软件包

RPM命令管理rpm软件包，需要手动解决软件包之间依赖关系
- 树形依赖：a-->b-->c--d
- 环形依赖：a-->b-->c--a
- 模块依赖：需要模块文件支持，模块查询地址：www.rpmfind.net



**命令格式**：rpm  选项...  软件包全名



常用选项：
- -q         #仅查询软件是否安装（精确查询：软件包名称要输入正确，少一个字母都查不出来）
- -qa       #列出所有已经安装在系统中的所有软件，可配合grep过滤指定的软件包（模糊查询）
- -qi        #列出软件包详细信息，包含版本与官网地址
- -qf       #后边接文件名，查询配置文件由哪个软件包产生（无法查询一个不存在的文件）
- -ql        #后边接包名，列出与该软件包相关所有文件与目录的存放位置
- -ivh      #i安装，v显示详细信息，h显示软件安装进度
- -Uvh    #升级安装软件包（升级时要做好相关配置文件的备份）
- -e         #卸载软件包
- --nodesps #卸载软件包时忽略依赖关系（了解）
- --import   #导入红帽签名文件



```shell
#挂载iso镜像文件
[root@localhost ~]# mkdir /mnt/centos
[root@localhost ~]# mount /dev/cdrom  /mnt/centos/

#实现永久挂载，查看iso镜像文件系统类型
[root@localhost ~]# df -hT
[root@localhost ~]# vim /etc/fstab
...
/dev/cdrom /mnt/centos iso9660 defaults 0 0

#重新加载
[root@localhost ~]# mount -a

#查询软件包是否安装
[root@localhost centos]# rpm -q vsftpd
未安装软件包 vsftpd 

#安装vsftpd软件包
[root@localhost centos]# rpm -i Packages/vsftpd-3.0.2-25.el7.x86_64.rpm 

#查询系统中以安装的所有软件
[root@localhost centos]# rpm -qa
[root@localhost centos]# rpm -qa | grep vsftpd
vsftpd-3.0.2-25.el7.x86_64

#查询软件包详细的信息
[root@localhost centos]# rpm -qi vsftpd
Name        : vsftpd    #软件包名
Version     : 3.0.2     #版本
Release     : 25.el7    #适合安装的系统版本
Architecture: x86_64    #适合安装的CPU架构
Install Date: 2021年05月04日 星期二 14时47分06秒   #安装时间
Group       : System Environment/Daemons        #软件包属于哪个群组
Size        : 361335      #软件包大小
License     : GPLv2 with exceptions
Signature   : RSA/SHA256, 2018年11月12日 星期一 22时48分54秒, Key ID 24c6a8a7f4a80eb5
Source RPM  : vsftpd-3.0.2-25.el7.src.rpm
Build Date  : 2018年10月31日 星期三 03时45分10秒
Build Host  : x86-01.bsys.centos.org
Relocations : (not relocatable)
Packager    : CentOS BuildSystem <http://bugs.centos.org>
Vendor      : CentOS
URL         : https://security.appspot.com/vsftpd.html   #软件包官网地址
Summary     : Very Secure Ftp Daemon
Description :      #描述信息
vsftpd is a Very Secure FTP daemon. It was written completely from
scratch.


[root@localhost centos]# which ls
alias ls='ls --color=auto'
	/usr/sbin/ls
	
#查询文件由哪个软件包产生	
[root@localhost centos]# rpm -qf /usr/bin/ls
coreutils-8.22-23.el7.x86_64

[root@localhost centos]# which vim
/usr/bin/vim

[root@localhost centos]# rpm -qf /usr/bin/vim
vim-enhanced-7.4.160-5.el7.x86_64

[root@localhost centos]# rpm -qi vim-enhanced

#查询软件包自带的文件与目录安装路径
[root@localhost centos]# rpm -ql vsftpd

[root@localhost centos]# rpm -qf /usr/bin/vim
vim-enhanced-7.4.160-5.el7.x86_64

[root@localhost centos]# rpm -ql vim-enhanced
/etc/profile.d/vim.csh
/etc/profile.d/vim.sh
/usr/bin/rvim
/usr/bin/vim
/usr/bin/vimdiff
/usr/bin/vimtutor

[root@localhost centos]# rpm -q vsftpd
vsftpd-3.0.2-25.el7.x86_64

#卸载软件包
[root@localhost centos]# rpm -e vsftpd

[root@localhost centos]# rpm -q vsftpd
未安装软件包 vsftpd 

#安装vsftpd软件包
[root@localhost centos]# rpm -ivh Packages/vsftpd-3.0.2-25.el7.x86_64.rpm 
警告：Packages/vsftpd-3.0.2-25.el7.x86_64.rpm: 头V3 RSA/SHA256 Signature, 密钥 ID f4a80eb5: NOKEY
准备中...                          ################################# [100%]
正在升级/安装...
   1:vsftpd-3.0.2-25.el7              ################################# [100%]

[root@localhost centos]# rpm -q vsftpd
vsftpd-3.0.2-25.el7.x86_64

#升级安装软件包
[root@localhost centos]# rpm -Uvh Packages/vsftpd-3.0.2-25.el7.x86_64.rpm 
警告：Packages/vsftpd-3.0.2-25.el7.x86_64.rpm: 头V3 RSA/SHA256 Signature, 密钥 ID f4a80eb5: NOKEY
准备中...                          ################################# [100%]
	软件包 vsftpd-3.0.2-25.el7.x86_64 已经安装

#导入红帽签名文件
[root@localhost centos]# rpm --import RPM-GPG-KEY-CentOS-7

#安装软件包，查看是否还有警告信息
[root@localhost centos]# rpm -q vsftpd
vsftpd-3.0.2-25.el7.x86_64
[root@localhost centos]# rpm -e vsftpd
[root@localhost centos]# rpm -ivh Packages/vsftpd-3.0.2-25.el7.x86_64.rpm 
准备中...                          ################################# [100%]
正在升级/安装...
   1:vsftpd-3.0.2-25.el7              ################################# [100%]

#安装httpd软件包
[root@localhost centos]# rpm -ivh Packages/httpd-(tab键)
httpd-2.4.6-88.el7.centos.x86_64.rpm         httpd-manual-2.4.6-88.el7.centos.noarch.rpm
httpd-devel-2.4.6-88.el7.centos.x86_64.rpm   httpd-tools-2.4.6-88.el7.centos.x86_64.rpm
[root@localhost centos]# rpm -ivh Packages/httpd-2.4.6-88.el7.centos.x86_64.rpm 
错误：依赖检测失败：
	/etc/mime.types 被 httpd-2.4.6-88.el7.centos.x86_64 需要
	httpd-tools = 2.4.6-88.el7.centos 被 httpd-2.4.6-88.el7.centos.x86_64 需要
	libapr-1.so.0()(64bit) 被 httpd-2.4.6-88.el7.centos.x86_64 需要
	libaprutil-1.so.0()(64bit) 被 httpd-2.4.6-88.el7.centos.x86_64 需要
[root@localhost centos]# ls /etc/mime.types
ls: 无法访问/etc/mime.types: 没有那个文件或目录

#解决依赖关系
[root@localhost centos]# rpm -ivh Packages/mailcap-2.1.41-2.el7.noarch.rpm 
准备中...                          ################################# [100%]
正在升级/安装...
   1:mailcap-2.1.41-2.el7             ################################# [100%]
[root@localhost centos]# ls /etc/mime.types
/etc/mime.types

#解决依赖关系
[root@localhost centos]# rpm -ivh Packages/httpd-tools-2.4.6-88.el7.centos.x86_64.rpm 
错误：依赖检测失败：
	libapr-1.so.0()(64bit) 被 httpd-tools-2.4.6-88.el7.centos.x86_64 需要
	libaprutil-1.so.0()(64bit) 被 httpd-tools-2.4.6-88.el7.centos.x86_64 需要

#解决依赖关系（www.rpmfind.net官网查询提供libapr-1.so.0模块文件的软件包）
[root@localhost centos]# rpm -ivh Packages/apr-(tab键)
apr-1.4.8-3.el7_4.1.x86_64.rpm         apr-util-1.5.2-6.el7.x86_64.rpm        
apr-devel-1.4.8-3.el7_4.1.x86_64.rpm   apr-util-devel-1.5.2-6.el7.x86_64.rpm  
[root@localhost centos]# rpm -ivh Packages/apr-1.4.8-3.el7_4.1.x86_64.rpm 
准备中...                          ################################# [100%]
正在升级/安装...
   1:apr-1.4.8-3.el7_4.1              ################################# [100%]

#解决依赖关系（www.rpmfind.net官网查询提供libaprutil-1.so.0模块文件的软件包）
[root@localhost centos]# rpm -ivh Packages/apr-util-(tab键)
apr-util-1.5.2-6.el7.x86_64.rpm        apr-util-devel-1.5.2-6.el7.x86_64.rpm  
[root@localhost centos]# rpm -ivh Packages/apr-util-
apr-util-1.5.2-6.el7.x86_64.rpm        apr-util-devel-1.5.2-6.el7.x86_64.rpm  
[root@localhost centos]# rpm -ivh Packages/apr-util-1.5.2-6.el7.x86_64.rpm 
准备中...                          ################################# [100%]
正在升级/安装...
   1:apr-util-1.5.2-6.el7             ################################# [100%]

#安装依赖关系
[root@localhost centos]# rpm -ivh Packages/httpd-tools-2.4.6-88.el7.centos.x86_64.rpm 
准备中...                          ################################# [100%]
正在升级/安装...
   1:httpd-tools-2.4.6-88.el7.centos  ################################# [100%]

#安装httpd主包
[root@localhost centos]# rpm -ivh Packages/httpd-(tab键)
httpd-2.4.6-88.el7.centos.x86_64.rpm         httpd-manual-2.4.6-88.el7.centos.noarch.rpm
httpd-devel-2.4.6-88.el7.centos.x86_64.rpm   httpd-tools-2.4.6-88.el7.centos.x86_64.rpm
[root@localhost centos]# rpm -ivh Packages/httpd-2.4.6-88.el7.centos.x86_64.rpm 
准备中...                          ################################# [100%]
正在升级/安装...
   1:httpd-2.4.6-88.el7.centos        ################################# [100%]

```



#### yum软件包管理

yum是CentOS/RHEL系统软件包管理工具，通过yum下载软件包时，自动解决软件包之间复杂依赖关系。



#### yum常用命令

- yum  repolist                        #列出仓库可用软件包
- yum  list  软件包名               #查看系统中提供的软件包（包含未安装的软件包）
- yum  install  软件包名          #安装软件包，-y自动回答yes
- yum  update  软件包名       #升级软件包版本（提前做好重要文件的备份）
- yum  remove  软件包名      #卸载软件包
- yum  provides  命令            搜索该命令由哪个软件包产生（主要用于系统未安装的命令）
- yum clean all                       #清除仓库缓存
- yum makecache                 #生成缓存（网络软件仓库比较常用）
- yum list 软件包名 --showduplicates                                      #列出仓库中具体软件包所有版本
- yum install --downloadonly --downloaddir=/目录   包名    #下载到指定目录，不安装（网络软件仓库比较常用）
- yum localinstall                  #从本机安装软件（不是从仓库安装）



yum需要软件仓库支持，需要搭建本地yum软件仓库

```shell
[root@localhost ~]# mount /dev/cdrom /mnt

[root@localhost ~]# vim /etc/yum.repos.d/local.repo 
[local]               #仓库名称，名称自定义，但具有唯一性
name=local_centos     #仓库描述，（类似于仓库解释），描述信息自定义，不具备唯一性
baseurl=file:///mnt   #指定软件仓库地址，file://用于指定本地软件包存放位置
enabled=1    #软件仓库是否启动，1启动，0不启动
gpgcheck=0   #是否检测软件包签名，0不检测，1检测


#检测仓库可用性
[root@localhost centos]# yum repolist
已加载插件：fastestmirror, langpacks
    
源标识        源名称            状态
local       local_centos      4,021
repolist: 4,021


#查找指定的软件包
[root@localhost centos]# yum list  bash-completion

#安装软件包
[root@localhost centos]# yum install bash-completion
...
Is this ok [y/d/N]: y (y安装/d下载到本地不安装/N不安装)

[root@localhost centos]# rpm -q gcc
gcc-4.8.5-36.el7.x86_64

[root@localhost centos]# rpm -qi gcc

[root@localhost centos]# rpm -ql gcc

#安装软件包并自动回答yes
[root@localhost centos]# yum -y install  gcc-c++ 

[root@localhost centos]# rpm -q gcc

[root@localhost centos]# rpm -qi gcc

[root@localhost centos]# rpm -ql gcc

[root@localhost centos]# rpm -qf /usr/bin/ls

[root@localhost ~]# yum provides host



#下载挂载点
[root@localhost ~]# umount /mnt/centos/
[root@localhost ~]# ls /mnt/centos/

#查看仓库可用性
[root@localhost ~]# yum repolist
源标识          源名称                             状态
local          local_centos                     4,021
repolist: 4,021


[root@localhost ~]# rpm -e vsftpd
root@localhost ~]# yum -y install vsftpd
Error downloading packages:
  vsftpd-3.0.2-25.el7.x86_64: [Errno 256] No more mirrors to try.

[root@localhost ~]# yum clean all
[root@localhost ~]# yum repolist
源标识      源名称                                  状态
local      local_centos                            0
repolist: 0

#挂载
[root@localhost ~]# mount -a
mount: /dev/sr0 写保护，将以只读方式挂载
```



网络yum软件仓库配置（网络软件仓库，配置阿里开源软件仓库）

- https://developer.aliyun.com/special/mirrors/notice  阿里软件仓库
- https://mirrors.tuna.tsinghua.edu.cn/centos/     清华大学软件仓库

```shell
#下载wget工具
[root@localhost ~]# yum -y install wget

#下载阿里Base源（基本软件仓库，解决rpm软件的依赖关系）
[root@localhost ~]#  wget -O /etc/yum.repos.d/CentOS-Base.repo https://mirrors.aliyun.com/repo/Centos-7.repo

#下载阿里epel源（额外软件仓库，包含许多基本软件仓库没有的软件包）
[root@localhost ~]#  wget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo

#生成yum仓库缓存提高软件包下载速度
[root@localhost ~]# yum makecache
...
元数据缓存已建立
```



#### 设置yum源优先级

```shell
#安装yum-priorities插件
[root@localhost ~]# yum -y install yum-priorities

#设置本地yum为最高优先级
[root@localhost ~]# vim /etc/yum.repos.d/local.repo
[local]
name=local_centos
baseurl=file:///mnt
enabled=1
gpgcheck=0
priority=1  #优先级为1-99之间，数字越小越优先
```



#### 源码包安装方式

源码包安装步骤：

- 下载源码包
- 安装源码包依赖（一般官方提示、百度查）
- 解压源码包&&进入源码包目录
- configure检测系统环境&&指定安装路径与功能（不指定有默认配置以及默认安装路径）
- make编译，将源代码转换成二进制
- make   install 安装软件包

```shell
#从官网下载源码包
http://nginx.org/

#安装源码包依赖包
[root@localhost ~]# yum -y install gcc pcre-devel openssl-devel zlib-devel

#解压源码包并进入源码包路径
[root@localhost ~]# tar -xf nginx-1.20.0.tar.gz 
[root@localhost ~]# cd nginx-1.20.0/
[root@localhost nginx-1.20.0]# ls
auto  CHANGES  CHANGES.ru  conf  configure  contrib  html  LICENSE  man  README  src

#使用configure程序检查系统环境并指定安装参数
[root@localhost nginx-1.20.0]# ./configure --with-http_ssl_module  --with-file-aio  --with-http_realip_module
  
  nginx path prefix: "/usr/local/nginx"
  nginx binary file: "/usr/local/nginx/sbin/nginx"
  nginx modules path: "/usr/local/nginx/modules"
  nginx configuration prefix: "/usr/local/nginx/conf"
  nginx configuration file: "/usr/local/nginx/conf/nginx.conf"
  nginx pid file: "/usr/local/nginx/logs/nginx.pid"
  nginx error log file: "/usr/local/nginx/logs/error.log"
  nginx http access log file: "/usr/local/nginx/logs/access.log"
  nginx http client request body temporary files: "client_body_temp"
  nginx http proxy temporary files: "proxy_temp"
  nginx http fastcgi temporary files: "fastcgi_temp"
  nginx http uwsgi temporary files: "uwsgi_temp"
  nginx http scgi temporary files: "scgi_temp"


#make将源码包转换成二进制
[root@localhost nginx-1.20.0]# make

#make install安装源码包
[root@localhost nginx-1.20.0]# make install

[root@localhost nginx-1.20.0]# cd /usr/local/nginx/
[root@localhost nginx]# ls
conf  html  logs  sbin
```



#### systemd管理服务

systemd是内核加载的第一个进程（PID=1），systemd负责整个Linux系统的运行与服务控制，systemd为用户提供systemctl命令来管理RPM包的服务，如：启动服务、重启服务、关闭服务、查看服务状态，服务随机自启

服务的启动有两个方式，一是系统开机时随着系统的启动而启动（随机自启），二是系统启动以后用户手动启动的服务



- netstat|ss 命令用于查看系统中服务启动的端口信息
  -a	显示所有端口信息
  -n	以数字格式显示端口号
  -t	显示TCP连接的端口
  -u	显示UDP连接的端口
  -l	显示服务正在监听的端口信息
  -p	显示监听端口的服务名称是什么（也就是程序名）



- 常用命令：
  - systemctl start      服务名        #启动服务
  - systemctl restart  服务名         #重启服务
  - systemctl stop      服务名         #停止服务
  - systemctl enable  服务名         #设置服务随机自启
  - systemctl disable 服务名         #设置服务不随机自启
  - systemctl status   服务名         #查看服务状态
  - systemctl is-enabled  服务名  #查看服务是否被设置随机自启

```shell
[root@localhost nginx]# yum -y install vsftpd

[root@localhost nginx]# rpm -ql vsftpd
...
/usr/sbin/vsftpd

#启动vsftpd服务
[root@localhost nginx]# systemctl start vsftpd

#查看服务运行状态
[root@localhost nginx]# systemctl status vsftpd
● vsftpd.service - Vsftpd ftp daemon
   Loaded: loaded (/usr/lib/systemd/system/vsftpd.service; disabled; vendor preset: disabled)
   Active: active (running) since 二 2021-05-04 17:58:38 CST; 1min 7s ago
  Process: 14028 ExecStart=/usr/sbin/vsftpd /etc/vsftpd/vsftpd.conf (code=exited, status=0/SUCCESS)
 Main PID: 14030 (vsftpd)

#查看端口信息
[root@localhost nginx]# ss -anptul | grep vsftpd
tcp  LISTEN  0  32  :::21    :::*     users:(("vsftpd",pid=14030,fd=4))

#重启服务（用于对配置发生修改且立即生效时使用）
[root@localhost nginx]# systemctl restart vsftpd

#停止服务
[root@localhost nginx]# systemctl stop vsftpd

#启动服务并设置服务随机自启
[root@localhost nginx]# systemctl start vsftpd
[root@localhost nginx]# systemctl enable vsftpd
Created symlink from /etc/systemd/system/multi-user.target.wants/vsftpd.service to /usr/lib/systemd/system/vsftpd.service.

#查看服务是否被设置随机自启
[root@localhost nginx]# systemctl is-enabled vsftpd
enabled  #随机自启

#设置服务不随机自启
[root@localhost nginx]# systemctl disable vsftpd
Removed symlink /etc/systemd/system/multi-user.target.wants/vsftpd.service.

[root@localhost nginx]# systemctl is-enabled vsftpd
disabled  #不随机自启

[root@localhost nginx]# systemctl is-enabled sshd
enabled
```



#### 课后作业

1.请说出RAID0、RAID1、RAID5、RAID10的特点

> 

2.如何查看系统中的进程树，并显示每个进程的PID

> 

3.如何查找到系统中lisi用户开启了哪些进程？

> 

4.如何将进程放入后台运行？

> 

5.如何将后台运行进程调度到前台运行？

> 

6.如何查看后台进程？

> 

7.kill与killall命令的区别是什么？

> 

9.如何查看系统中登录失败的用户？

> 

10.如何查看系统中登录成功的用户？

> 

11.如何查询一个软件包在系统中安装了哪些文件与目录？

> 

12.如何查询ifconfig命令是由哪个软件包产生？

> 

13.如何查看一个软件包是否被安装在系统中？

> 

14.如何卸载一个软件包？

> 

15.说明本地yum仓库每一行的配置含义

> 

16.源码包的安装过程大体步骤

> 
>

17.如何查看一个服务占用的端口信息？

> 

18.如何启动vsftpd服务？

> 

19.如何查看vsftpd运行状态？

> 

20.如何设置vsftpd服务随机自启？

> 

21.如何停止vsftpd服务？

> 



