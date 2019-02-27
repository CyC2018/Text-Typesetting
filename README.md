
<div align="center">
    <img src="doc/LogoMakr_2OC8au.png" width="300px">
</div>

# 功能介绍

## 1. 加上适当的空格

在中文和英文数字之间加上空格可以大大提高文档的可读性，例如以下网站就根据了这一原则进行排版：

- [Laravel China](https://laravel-china.org/)
- [Apple](https://www.apple.com/cn/)
- [Microsoft](https://www.microsoft.com/zh-cn/)

## 2. 修改简历中技术名词的大小写

例如 java->Java。

该功能目前基于技术名词列表实现，名词数量有限，欢迎添加其它技术名词：https://github.com/CyC2018/Text-Typesetting/blob/gh-pages/public/js/content.js

## 3. 图片引用转换

Markdown 文档可以使用 `![]()` 这种方式来引用图片，但是无法设置大小，只有 `<img src="" width=""/>` 才支持设置大小。

过大的图片会造成文档内容过于粗糙，图片大小的选取以图片内的文字和文档文字大约一致为宜。

图片居中显示可以使得文档阅读体验更好，因此除了将图片引用转换为 `img` 标签之外，也会将图片居中显示：`<div align="center">  <img src="" width=""/> </div><br>`
