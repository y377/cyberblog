---
date: 2023-07-04
layout: collection_index
title: Jekyll终极指南
description: Jekyll4.3.2终极指南
permalink: /:collection/
---



<ol class="list-group list-group-numbered list-group-flush">
    {% for item in site.jekyll %}
    {% unless item.title contains page.title %}
    <li class="list-group-item lh-lg">
        <a class="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover fs-5 text-reset" href="{{ item.url }}">{{ item.title }}</a>
    </li>
    {% endunless %}
    {% endfor %}
</ol>