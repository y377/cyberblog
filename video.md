---
layout: page
title: 某某网盘，我来了
description: 如何用网盘，构建自己的在线播放视频
---
<div class="container">
    <div class="row">
        <div class="border border-2 border-dark border-bottom-0 rounded-top text-bg-dark lh-lg">CLI</div>
        <div class="bg-transparent p-5 border border-2 border-top-0 rounded-bottom" style="height: 300px;">
            <div id="typed-output"></div>
        </div>
    </div>
</div>
<script src="https://cdn.bootcdn.net/ajax/libs/typed.js/2.1.0/typed.umd.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#typed-output', {
        strings: ["这是第一行文本。", "这里是第二行文本。"],
        typeSpeed: 50, // 打字速度
        backSpeed: 25, // 回退速度
        loop: true // 是否循环
    });
});
</script>