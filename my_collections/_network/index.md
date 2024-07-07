---
date: 2023-07-02
layout: collection_index
title: 文档列表
description: 网络合集
permalink: /:collection/
keywords: 网络是围城，里面的人想出去，外面的人进来
---



<ol class="list-group list-group-numbered list-group-flush">
    {% for item in site.network %}
    {% unless item.title contains page.title %}
    <li class="list-group-item lh-lg">
        <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover fs-5 text-reset" href="{{ item.url }}">{{ item.title }}</a>
    </li>
    {% endunless %}
    {% endfor %}
</ol>