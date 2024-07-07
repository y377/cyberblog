---
date: 2023-07-04
layout: collection_index
title: 文档首页
description: Windows，Linux，Android，iOS等系统的常用服务或者工具的安装与卸载
permalink: /:collection/
---



<ol class="list-group list-group-numbered list-group-flush">
    {% for item in site.system %}
    {% unless item.title contains page.title %}
    <li class="list-group-item lh-lg">
        <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover fs-5 text-reset" href="{{ item.url }}">{{ item.title }}</a>
    </li>
    {% endunless %}
    {% endfor %}
</ol>