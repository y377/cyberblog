---
layout: page
title: 使用方法
description: 主题使用方法，markdown写作技巧，主题介绍
---

## 自定义的类

1. `quote`类：引用，前有双引号开头
2. `tipsa`类：提示框，
3. `tipsb`类：提示框，
4. `tipsc`类：提示框，
5. `tipsd`类：提示框，

### 自适应内容长度

使用`d-inline-block`类

------------
测试一下
{:.tmd1.d-inline-block}



<div class="tmd1 d-inline-block" role="alert">
  A simple secondary alert—check it out!耽误当文档耽误发发发我发我发无法访问访问服务范围服务费服务服务费
</div>
<div class="tmd2 d-inline-block" role="alert">
	<i class="bi bi-info-square"></i>
  A simple secondary alert—check it out!
</div>
<div class="tmd3" role="alert">
	<i class="bi bi-info-square"></i>
  A simple success alert—check it out!
</div>
<div class="tmd4" role="alert">
  A simple danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert—check it out!
</div>
<div class="alert alert-info" role="alert">
  A simple info alert—check it out!
</div>
<div class="alert alert-light" role="alert">
  A simple light alert—check it out!
</div>
<div class="alert alert-dark" role="alert">
  A simple dark alert—check it out!
</div>


1. 南非世界杯1/8决赛，德国对英格兰的大战，贺炜再次奉献经典解说，可谓一战成名，奠定了他在足球解说界的地位。比赛结束时，他深情说道：“胜负既分，结局也已经确定了，英格兰和德国永恒的对抗在世界杯历史上继续延续下去，历史的篇章这一段已经写完。我们想想吧，此时此刻在柏林、在慕尼黑、在汉堡、在科隆大教堂，肯定有无数的德国球迷为之欢欣鼓舞。而在伦敦、在利物浦、在曼彻斯特、在泰晤士河边的小酒馆，肯定有无数的英格兰球迷为之黯然神伤。不过，让我内心感到无比欣慰的是，在生命如此有意义的时间节点，在今天晚上，电视机前的亿万球迷们能够一起来经历，共同分享。这是我的幸福，也是大家的幸福。我是贺炜，观众朋友们，再见！”
2. 中国足球即使是再多人的痰盂，也永远是我的圣杯。
3. 足球是爱，而不是恨。支持你所喜欢队伍，无论他在高峰还是低谷；欣赏你强大的对手，你正是因为他的存在而更强。这就是足球教给我们最大的哲理。
4. 每次的大赛，每年的联赛，就像是人生的一天一样，当一天结束的时候一定会有人开心，有人悲伤，但是无论如何，无论你是开心还是悲伤，明天都依然会来！
{:.tmd1}


生活可能不像你想象的那么好，但是也不会像你想象的那么糟，人的脆弱和坚强都超乎了自己的想象，有时候可能脆弱的一句话就会泪流满面，有时候你发现自己咬着牙，已经走过了很长的路……
{:.quote}


## 写作规范

+ 文章（页面）标题用一个`#`也就是HTML的`<h1></h1>`
+ 正文分别从`<h2>`到`<h6>`

```md
#      文章标题
##     二级标题
###    三级标题
####   四级标题
#####  五级标题
###### 六级标题
```

<h1>文章标题</h1> `<h1>`文章标题`</h1>`

<h2>二级标题</h2> `<h2>`二级标题`</h2>`

<h3>三级标题</h3> `<h3>`三级标题`</h3>`

<h4>四级标题</h4> `<h4>`四级标题`</h4>`

<h5>五级标题</h5> `<h5>`五级标题`</h5>`

<h6>六级标题</h6> `<h6>`六级标题`</h6>`
