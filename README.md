# Markdown-Typesetting

## 1. 加上适当的空格

在中文和英文数字之间加上空格可以大大提高文档的可读性，例如以下网站就根据了这一原则进行排版：

- [Laraval China](https://laravel-china.org/)
- [Apple](https://www.apple.com/cn/)
- [Microsoft](https://www.microsoft.com/zh-cn/)

## 2. 去除多余空行

Markdown 文档中连续的多个空行也会被当成一个空行，因此可以去除连续的多余空行，只保留一个。

## 3. 去除尾部空格

尾部空格对文档内容无关紧要，同样可以去除。


## 示例


```html

目前的互联网是一种多层次ISP结构，ISP根据覆盖面积的大小分为主干ISP、地区ISP和本地ISP。


- a
- b
- c
```

```
目前的互联网是一种多层次 ISP 结构，ISP 根据覆盖面积的大小分为主干 ISP、地区 ISP 和本地 ISP。

- a
- b
- c
```

## 使用方式

1. 复制想要排版的文档内容；
2. 运行程序，排版后的文档会写入剪切板；
3. 粘贴新内容到文档中；

Windows 用户可以运行 Text-Typesetting.bat 来运行程序，Mac OS 用户可直接运行 Text-Typesetting.jar 程序。

## 核心代码

```java
line = TrimHelper.rTrim(line);
line = line.replaceAll("([a-zA-Z0-9)'>)}\\]])([\\u4e00-\\u9fa5])","$1 $2");
line = line.replaceAll("([\\u4e00-\\u9fa5])([a-zA-Z0-9'(<{])","$1 $2");
```

## TODO

- 用户界面
- 英文专有名词提示首字母大写
