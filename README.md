# Markdown-Typesetting

本工具可以为中文 Markdown 文档进行排版，主要有以下功能：

## 1. 加上适当的空格

在中文与英文以及中文与数字之间加上空格可以大大提高文档的可读性，例如以下网站就根据了这一原则进行排版：

- [Laraval China](https://laravel-china.org/)
- [Apple](https://www.apple.com/cn/)
- [Microsoft](https://www.microsoft.com/zh-cn/)

## 2. 去除多余空行

Markdown 文档中连续的多个空行也会被当成一个空行，因此可以去除连续的多余空行，只保留一个。

## 3. 去除尾部空格

尾部空格对文档内容无关紧要，同样可以去除。

## 4. 拼接被切割的行

如果文档内容从 PDF 等资料复制而来，那么一个连续的行就会被切割成多行，因此需要把这些行拼接起来组成正确的行。

## 示例


```html
互联网服务提供商ISP可以从互联网管理机构获得许多IP地址，同时拥有通信线路以及路由器等联网设备，个人或机构向ISP缴纳一定的费用就可以接入互联网。

目前的互联网是一种多层次ISP结构，ISP根据覆盖面积的大小分为主干ISP、地区ISP和本地ISP。

互联网交换点IXP允许两个ISP直接相连而不用经过第三个ISP。



mesh number, the surface with 3557 patches will become more
accurate than that with 717 patches. The convergence trend was
steep in the coarse patch and steady in the fine patch. In the coarse
patch, the distance between interior rectangular mesh net and
```

```
互联网服务提供商 ISP 可以从互联网管理机构获得许多 IP 地址，同时拥有通信线路以及路由器等联网设备，个人或机构向 ISP 缴纳一定的费用就可以接入互联网。

目前的互联网是一种多层次 ISP 结构，ISP 根据覆盖面积的大小分为主干 ISP、地区 ISP 和本地 ISP。

互联网交换点 IXP 允许两个 ISP 直接相连而不用经过第三个 ISP。

mesh number, the surface with 3557 patches will become moreaccurate than that with 717 patches. The convergence trend wassteep in the coarse patch and steady in the fine patch. In the coarsepatch, the distance between interior rectangular mesh net and
```

## 使用方式

1. 复制想要排版的文档内容；
2. 运行程序，排版后的文档会替换粘贴板的内容；
3. 粘贴新内容到文档中；

Windows 用户可以运行 Text-Typesetting.bat 来运行程序，Mac OS 用户可直接运行 Text-Typesetting.jar 程序。

## 使用技巧

本程序主要是为 Markdown 文档进行排版，但是不仅限于此，只要复制任意的文本源，就能得到经过排版的文本。例如，当需要从英文 PDF 文件中复制一段句子导入到翻译软件中，那么就可以直接复制这段句子，运行程序后得到的就是拼接后的内容。

## 注意事项

Markdown 文档在内容之间请以空行分隔，否则会导致不正确的拼接。
