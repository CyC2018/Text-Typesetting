# Text-Typesetting

## 1. 加上适当的空格

在中文和英文数字之间加上空格可以大大提高文档的可读性，例如以下网站就根据了这一原则进行排版：

- [Laraval China](https://laravel-china.org/)
- [Apple](https://www.apple.com/cn/)
- [Microsoft](https://www.microsoft.com/zh-cn/)

## 2. 去除多余空行

多个连续的空行只保留一个。

## 3. 去除尾部空格

尾部空格对文档内容无关紧要，同样可以去除。


## 示例

### Before

发送的最初执行慢开始，令cwnd=1，发送方只能发送1个报文段；当收到确认后，将cwnd加倍，因此之后发送方能够发送的报文段为：2、4、8 ...

注意到慢开始每个轮次都将cwnd加倍，这样会让cwnd增长速度非常快，从而使得发送方发送的速度增长速度过快，网络拥塞的可能也就更高。设置一个慢开始门限ssthresh，当cwnd >= ssthresh时，进入拥塞避免，每个轮次只将cwnd加1。

如果出现了超时，则令ssthresh = cwnd / 2，然后重新执行慢开始。

### After

发送的最初执行慢开始，令 cwnd=1，发送方只能发送 1 个报文段；当收到确认后，将 cwnd 加倍，因此之后发送方能够发送的报文段为：2、4、8 ...

注意到慢开始每个轮次都将 cwnd 加倍，这样会让 cwnd 增长速度非常快，从而使得发送方发送的速度增长速度过快，网络拥塞的可能也就更高。设置一个慢开始门限 ssthresh，当 cwnd >= ssthresh 时，进入拥塞避免，每个轮次只将 cwnd 加 1。

如果出现了超时，则令 ssthresh = cwnd / 2，然后重新执行慢开始。

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
