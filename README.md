
[![Scrutinizer Build](https://img.shields.io/scrutinizer/build/g/filp/whoops.svg)](https://github.com/CyC2018)

# 功能介绍

## 1. 加上适当的空格

在中文和英文数字之间加上空格可以大大提高文档的可读性，例如以下网站就根据了这一原则进行排版：

- [Laraval China](https://laravel-china.org/)
- [Apple](https://www.apple.com/cn/)
- [Microsoft](https://www.microsoft.com/zh-cn/)

## 2. 去除多余空行

多个连续的空行只保留一个。

## 3. 去除尾部空格

尾部空格对文档内容无关紧要，同样可以去除。


# 示例

## Before

图a的第二列Has表示已拥有的资源数，第三列Max表示总共需要的资源数，Free表示还有可以使用的资源数。从图a开始出发，先让B拥有所需的所有资源，运行结束后释放B，此时Free变为4；接着以同样的方式运行C和A，使得所有进程都能成功运行，因此可以称图a所示的状态时安全的。

## After

图 a 的第二列 Has 表示已拥有的资源数，第三列 Max 表示总共需要的资源数，Free 表示还有可以使用的资源数。从图 a 开始出发，先让 B 拥有所需的所有资源，运行结束后释放 B，此时 Free 变为 4；接着以同样的方式运行 C 和 A，使得所有进程都能成功运行，因此可以称图 a 所示的状态时安全的。

# 使用方式

1. 复制想要排版的文档内容；
2. 运行程序，排版后的文档会写入剪切板；
3. 粘贴新内容到文档中；

Windows 用户可以运行 Text-Typesetting.bat 来运行程序，Mac OS 用户可直接运行 Text-Typesetting.jar 程序。

# 核心代码

```java
line = TrimHelper.rTrim(line);
line = line.replaceAll("([a-zA-Z0-9)'>)}\\]])([\\u4e00-\\u9fa5])","$1 $2");
line = line.replaceAll("([\\u4e00-\\u9fa5])([a-zA-Z0-9'(<{])","$1 $2");
```

# TODO

- 用户界面
- 英文专有名词提示首字母大写
