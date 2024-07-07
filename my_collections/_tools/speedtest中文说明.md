---
layout: doc
title: speedtest测速工具中文说明
description: speedtest测速工具命令行使用方法
date: 2023-10-19
---

**speedtest** - Ookla的官方命令行客户端，用于测试您的互联网连接的速度和性能。

### 概要

**speedtest** [**help**] [**-aAbBfhiIpPsv**] [**--ca-certificate=path**] [**--format=**<format-type>]
[**--interface=interface**] [**--ip=ip_address**] [**--output-header**] [**--precision**=<num_decimal_places>]
[**--progress**=<yes|no>] [**--selection-details**] [**--server-id**=<id>] [**--servers**] [**--unit**=<unit-of-measure>] [**--version**]

### 描述

**speedtest**是一个测量客户端和附近Speedtest服务器之间的网络连接的延迟、抖动、丢包率、下载带宽和上传带宽的应用程序。

### 选项

- **-h, --help**: 打印使用信息

- **-v**: 日志详细程度，多次指定以增加详细程度（例如，**-vvv**）

- **-V, --version**: 打印版本号

- **-L, --servers**: 列出最近的服务器

- **--selection-details**: 显示服务器选择详细信息

- **-s** *id*, **--server-id**=<id>: 使用其ID从服务器列表中指定服务器

- **-o** *hostname*, **--host**=<hostname>: 使用其主机名从服务器列表中指定服务器

- **-f** <format_type>, **--format**=<format_type>: 输出格式（默认为<human-readable>）。有关详细信息，请参阅下面的[输出格式][]。

- **--progress-update-interval**=<interval>: 进度更新间隔（100-1000毫秒）

- **--output-header**: 为CSV和TSV格式显示输出标题

- **-u** <unit_of_measure>, **--unit**=<unit_of_measure>: 在使用<human-readable>输出格式时用于显示速度的输出单位。默认单位是Mbps。有关详细信息，请参阅[UNITS OF MEASURE][]。

- **-a**: [**-u** <auto-decimal-bits>]的快捷方式

- **-A**: [**-u** <auto-decimal-bytes>]的快捷方式

- **-b**: [**-u** <auto-binary-bits>]的快捷方式

- **-B**: [**-u** <auto-binary-bytes>]的快捷方式

- **-P** <decimal_places>, **--precision**=<decimal_places>: 要使用的小数位数（默认值为2，有效值为0-8）。仅适用于<human-readable>输出格式。

- **-p** <yes>|<no>, **--progress**=<yes>|<no>: 启用或禁用进度条（交互式时默认为<yes>）

- **-I** <interface>, **--interface**=<interface>: 在连接到服务器时尝试绑定到指定的接口

- **-i** <ip_address>, **--ip**=<ip_address>: 在连接到服务器时尝试绑定到指定的IP地址

- **--ca-certificate**=<path>: CA证书束路径，参见下面的[SSL CERTIFICATE LOCATIONS][]。

### 输出格式

这些是用**`-f`**或**`--format`**标志指定的Speedtest CLI的可用输出格式。所有可机器读取的格式（csv、tsv、json、jsonl、json-pretty）使用字节表示数据大小，使用每秒字节表示速度，使用毫秒表示持续时间。它们还始终使用最大精度输出。

- **human-readable**: 人类可读的输出
- **csv**: 逗号分隔的值
- **tsv**: 制表符分隔的值
- **json**: JavaScript对象表示法（紧凑格式）
- **jsonl**: JavaScript对象表示法（逐行）
- **json-pretty**: JavaScript对象表示法（漂亮）

### 测量单位

对于人类可读的输出格式，您可以指定要使用的测量单位。默认单位是<Mbps>。支持的单位如下。

这些单位不适用于可机器读取的输出格式（json、jsonl、csv和tsv）。

#### 十进制选项（1000的倍数）

- **bps**: 每秒比特数
- **kbps**: 千比特每秒
- **Mbps**: 兆比特每秒
- **Gbps**: 千兆比特每秒
- **B/s**: 每秒字节
- **kB/s**: 千字节每秒
- **MB/s**: 每秒兆字节
- **GB/s**: 每秒千兆字节

#### 二进制选项（1024的倍数）

- **kibps**: Kibibit每秒
- **Mibps**: Mebibit每秒
- **Gibps**: Gibibit每秒
- **kiB/s**: Kibibyte每秒
- **MiB/s**: Mebibyte每秒
- **GiB/s**: Gibibyte每秒

#### 自动缩放选项

自动单位将根据测得的速度来缩放前缀。

- **auto-decimal-bits**: 自动选择十进制比特
- **auto-decimal-bytes**: 自动选择十进制字节
- **auto-binary-bits**: 自动选择二进制比特
- **auto-binary-bytes**: 自动选择二进制字节

### 使用条款和隐私政策通知

您只能在个人计算机上通过命令行界面使用此Speedtest软件和从中生成的信息进行个人非商业用途。您对此软件的使用受以下URL中的最终用户许可协议、使用条款和隐私政策的约束：

- [https://www.speedtest.net/about/eula](https://www.speedtest.net/about/eula)
- [https://www.speedtest.net/about/terms](https://www.speedtest.net/about/terms)
- [https://www.speedtest.net/about/privacy](https://www.speedtest.net/about/privacy)

### 输出

成功执行后，该应用程序将

以退出码0退出。结果将包括延迟、抖动、下载、上传、丢包率（如果可用）和结果URL。

延迟和抖动以毫秒表示。下载和上传单位将取决于输出格式以及是否指定了单位。人类可读的格式默认为Mbps，任何可机器读取的格式（csv、tsv、json、jsonl、json-pretty）都使用字节作为度量单位，精度最大。丢包率表示为百分比，或在执行网络环境中不可用时表示为**不可用**。

每秒字节测量可以通过将每秒字节数值除以125,000来转换为人类可读的输出格式的默认单位，即兆比特（Mbps）。例如：

38404104每秒字节= 38404104 / 125 = 307232.832千比特每秒= 307232.832 / 1000 = 307.232832兆比特每秒

值125来源于1000 / 8，如下所示：

1字节= 8比特
1千比特= 1000比特

38404104每秒字节= 38404104 * 8比特每字节= 307232832比特每秒= 307232832 / 1000比特每千比特= 307232.832千比特每秒

结果URL可用于共享您的结果，将结果URL附加到**png**将创建一个可共享的结果图像。

**示例人类可读结果：**

```
$ speedtest
   Speedtest by Ookla

      Server: SUNET - Stockholm (id: 26852)
         ISP: Bahnhof AB
Idle Latency:     5.04 ms   (jitter: 0.04ms, low: 5.01ms, high: 5.07ms)
    Download:   968.73 Mbps (data used: 117.5 MB)                                                   
                 12.10 ms   (jitter: 1.71ms, low: 6.71ms, high: 18.82ms)
      Upload:   942.13 Mbps (data used: 114.8 MB)                                                   
                  9.94 ms   (jitter: 1.10ms, low: 5.30ms, high: 12.72ms)
 Packet Loss:     0.0%
  Result URL: https://www.speedtest.net/result/c/d1c46724-50a3-4a59-87ca-ffc09ea014b2
```

### 网络超时值

默认情况下，网络请求设置为**10**秒的超时。唯一的例外是延迟测试，它设置为**15**秒的超时。

### 严重错误

发生严重错误时，应用程序将以非零退出码退出。

**初始化严重错误示例：**

- 配置 - 无法连接到服务器（网络不可达）
- 配置 - 无法检索或读取配置（ConfigurationError）

**阶段执行严重错误示例：**

- [错误]错误：[1] HTTP的延迟测试失败
- [错误]错误：[36]无法打开套接字：操作正在进行中
- [错误]无法解析主机名。取消测试套件。
- [错误]主机解析失败：执行格式错误
- [错误]无法打开套接字：无路由到主机
- [错误]服务器选择 - 未找到可用的测试服务器。（NoServers）

### SSL证书位置

默认情况下，Linux机器会检查以下路径是否存在CA证书束：

- /etc/ssl/certs/ca-certificates.crt
- /etc/pki/tls/certs/ca-bundle.crt
- /usr/share/ssl/certs/ca-bundle.crt
- /usr/local/share/certs/ca-root-nss.crt
- /etc/ssl/cert.pem

如果被测试的设备没有上述提到的文件之一，那么可以手动下载由curl项目提供的规范化和最新的CA证书束到特定位置。可以像下面的示例一样提供特定位置：

```
wget https://curl.se/ca/cacert.pem
./ookla --ca-certificate=./cacert.pem
```

### 发布说明

#### 1.2.0（2022-07-27）

- 清理了人类可读输出中附加数据的格式（现在使用`label: value`一致地）
- 压缩了结果上传数据以减少数据使用量
- 增加了测量响应性（加载期间的延迟）的支持
- 增加了多服务器测试的实验性支持
- 更新了第三方依赖项：cURL 7.83.1、mbed TLS 3.1.0、Boost 1.79.0
- 增加了稳定性改进

#### 1.1.1（2021-11-15）

- 修复了上传结果中报告的客户端版本问题

#### 1.1.0（2021-10-27）

- 使用服务器端上传测量
- 对CPU受限设备上的上传测试进行了性能增强
- 安全增强
- 修复了死锁错误
- 修复了在测试初始化期间主机名解析时的崩溃错误
- 修复了潜在的缓冲区溢出问题
- 更新了Boost到1.77.0
- 更新了mbed TLS到2.27.0
- 更新了cURL到7.78.0

#### 1.0.0（2019-10-29）

- 初始发布

### 第三方产品/库的版权声明

此软件包括自由和开源的第三方库，包括：

- [boost](https://www.boost.org/)
- [libcurl](https://curl.haxx.se/libcurl/)
- [petopt](https://www.lysator.liu.se/~pen/petopt/)
- [mbed TLS](https://tls.mbed.org/)
- [ca-certificates extract](https://curl.haxx.se/docs/caextract.html)
- [L. Peter Deutsch’s md5](https://sourceforge.net/projects/libmd5-rfc/files/)
- [getopt.h](

在Windows版本的此软件中)
- [tiny-aes](https://github.com/kokke/tiny-AES-c)
- [PicoSHA2](https://github.com/okdshin/PicoSHA2)
- [musl](https://www.musl-libc.org/)

包括mbed TLS的使用受以下许可条款的约束：

- [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)（包含在此软件的文档中）

包括libcurl的使用受以下通知的约束：

```
Copyright (c) 1996 - 2019, Daniel Stenberg, daniel@haxx.se, and many contributors,
see the THANKS file.  All rights reserved.  Permission to use, copy, modify, and distribute
this software for any purpose with or without fee is hereby granted, provided that
the above copyright notice and this permission notice appear in all copies.
```

包括getopt.h的使用受以下通知的约束：

```
DISCLAIMER
This file is part of the mingw-w64 runtime package.

The mingw-w64 runtime package and its code is distributed in the hope that it
will be useful but WITHOUT ANY WARRANTY.  ALL WARRANTIES, EXPRESSED OR
IMPLIED ARE HEREBY DISCLAIMED.  This includes but is not limited to
warranties of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.


Copyright (c) 2002 Todd C. Miller <Todd.Miller@courtesan.com>

Permission to use, copy, modify, and distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

Copyright (c) 2000 The NetBSD Foundation, Inc.
All rights reserved.

This code is derived from software contributed to The NetBSD Foundation
by Dieter Baron and Thomas Klausner.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:
1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in the
   documentation and/or other materials provided with the distribution.
```

包括PicoSHA2的使用受以下通知的约束：

```
Copyright (c) 2017 okdshin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

包括musl的使用受以下通知的约束：

```
Copyright © 2005-2019 Rich Felker, et al.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
```