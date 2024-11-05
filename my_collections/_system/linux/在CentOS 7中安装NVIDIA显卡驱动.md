---
title: 在CentOS 7中安装NVIDIA显卡驱动
layout: doc
image: https://preview.cloud.189.cn/image/imageAction?param=876605E2FAC59C71CD6AF240ADB82887016BA5BA19BF51BF1C55177ECCAF535AAF10831B0057DEDAAB9C7ABF05A89F9715D7E251DA631D57CDB9BA1E76787A286493164EB6285F1030C27B271C136CB45F56D577D10C944B0404D508D3408B73A8F8E9F677EDC12E8EBE3691
---

> 在CentOS 7中安装NVIDIA显卡驱动需要一些前置步骤，包括安装所需的依赖库和禁用 Nouveau 驱动程序。以下是详细的安装步骤：

### 1. 更新系统

确保系统已更新，执行以下命令：

```bash
yum update -y
```

### 2. 安装必要的工具

安装编译和内核开发相关的包：

```bash
yum install -y epel-release
yum install -y dkms kernel-devel kernel-headers gcc make
```

### 3. 禁用 Nouveau 驱动

默认情况下，CentOS 7 使用 Nouveau 开源驱动。NVIDIA 驱动与 Nouveau 驱动不兼容，因此我们需要先禁用它。

编辑`blacklist.conf`文件：

```bash
nano /etc/modprobe.d/blacklist.conf
```

在文件末尾添加以下两行：

```
blacklist nouveau
options nouveau modeset=0
```

### 4. 重启系统

禁用 Nouveau 驱动后，重启系统：

```bash
reboot
```

### 5. 确认 Nouveau 已禁用

重启后，运行以下命令确认 Nouveau 驱动已被禁用：

```bash
lsmod | grep nouveau
```

如果没有输出，说明**Nouveau**驱动已成功禁用。

### 6. 下载 NVIDIA 驱动

访问[NVIDIA官方驱动下载页面](https://www.nvidia.com/en-us/drivers/)，选择对应的显卡型号和操作系统，下载适合你的 NVIDIA 驱动（以 .run 结尾的文件）。

下载完成后，将驱动程序文件放到一个目录中，例如`/opt`。

### 7. 切换到命令行模式

由于 NVIDIA 驱动安装程序无法在图形界面中运行，我们需要切换到命令行模式：

```bash
init 3
```

登录系统后，进入保存驱动程序文件的目录：

```bash
cd /opt
```

### 8. 运行 NVIDIA 驱动安装程序

```bash
bash NVIDIA-Linux-*.run
```

在安装过程中，安装程序可能会询问是否要安装 32 位兼容库，根据需要选择 “Yes” 或 “No”。建议选择 “Yes”，以确保兼容性。

安装完成后，选择 “Yes” 重启系统。

### 9. 验证 NVIDIA 驱动是否安装成功

系统重启后，运行以下命令查看 NVIDIA 驱动信息：

```bash
nvidia-smi
```

如果输出了 NVIDIA 显卡信息，说明驱动安装成功。

### 10. 配置驱动加载到启动项

为了确保 NVIDIA 驱动每次启动时自动加载，可以运行以下命令：

```bash
nvidia-xconfig
```

### 可能的故障排查

黑屏或无法进入桌面：如果安装驱动后遇到黑屏或无法进入桌面，可以进入命令行模式（`Ctrl` + `Alt` + `F2`），重新禁用NVIDIA驱动并重新配置。

查看日志：可以检查`/var/log/nvidia-installer.log`以获得更多关于安装问题的信息。

如果一切正常，系统应该可以正常使用 NVIDIA 显卡的驱动程序。
