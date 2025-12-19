---
title: Debian安装RustFS
---

## 安装

```
root@debian:~# curl -O https://rustfs.com/install_rustfs.sh && bash install_rustfs.sh
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100 10664  100 10664    0     0  60694      0 --:--:-- --:--:-- --:--:-- 60937
[INFO] All required commands are present.
[INFO] OS and architecture check passed: x86_64.
[INFO] Defaulting to MUSL build for maximum compatibility.
Please choose an option:
1. Install RustFS
2. Uninstall RustFS
3. Upgrade RustFS
Enter your choice [1-3]: 1
[INFO] Starting RustFS installation...
Please enter RustFS service port (default: 9000):
[INFO] Port 9000 is available.
Please enter RustFS console port (default: 9001):
[INFO] Port 9001 is available.
Tip: You can use TAB for path completion.
Please enter data storage directory (default: /data/rustfs0):
[INFO] Data directory ready: /data/rustfs0.
[INFO] Log directory ready: /var/logs/rustfs.
[INFO] Starting download and installation of RustFS binary...
[INFO] Using MUSL build.
[INFO] Downloading RustFS package from https://dl.rustfs.com/artifacts/rustfs/release/rustfs-linux-x86_64-musl-latest.zip...
--2025-12-19 17:04:04--  https://dl.rustfs.com/artifacts/rustfs/release/rustfs-linux-x86_64-musl-latest.zip
Resolving dl.rustfs.com (dl.rustfs.com)... 163.181.77.219, 163.181.77.217, 163.181.77.222, ...
Connecting to dl.rustfs.com (dl.rustfs.com)|163.181.77.219|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 67468967 (64M) [application/zip]
Saving to: ‘rustfs.zip’

rustfs.zip                                         100%[===============================================================================================================>]  64.34M   619KB/s    in 1m 47s

2025-12-19 17:06:04 (614 KB/s) - ‘rustfs.zip’ saved [67468967/67468967]

Archive:  rustfs.zip
  inflating: rustfs
[INFO] RustFS binary installed successfully.
[INFO] systemd service file created at /usr/lib/systemd/system/rustfs.service.
[INFO] RustFS config file created at /etc/default/rustfs.
Created symlink '/etc/systemd/system/multi-user.target.wants/rustfs.service' → '/usr/lib/systemd/system/rustfs.service'.
[INFO] RustFS service enabled and started.
RustFS has been installed and started successfully!
Service port: 9000,  Console port: 9001,  Data directory: /data/rustfs0
```
