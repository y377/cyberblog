---
layout: default
title: 合集
description: 全部合集列表
---
<div class="container">
    {% for collection in site.collections %}
    {% unless collection.label == 'posts' %}
    <div class="row py-lg-5 py-md-4 py-sm-3 py-2">
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
            <div class="card text-light">
                {% for img in site.data.jihe %}
                {% if img.name == collection.label %}
                <img src="{{ img.image }}" class="card-img" alt="{{ img.name }}" crossorigin="anonymous" referrerpolicy="no-referrer" loading="lazy">
                {% endif %}
                {% endfor %}
                <div class="card-img-overlay">
                    <h4 class="card-title">{{ collection.title }}</h4>
                    <span class="fw-bold">{{ collection.description }}</span>
                </div>
            </div>
        </div>
        <div class="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 px-0">
            <ul class="list-group list-group-flush">
                <!-- <h6 class="text-end">最近更新的五篇文章</h6> -->
                {% assign count = 0 %}
                {% for document in collection.docs %}
                {% unless document.relative_path contains 'index.md' %}
                {% if count < 5 %} <li class="list-group-item lh-lg">
                    <a href="{{ document.url }}" class="link-opacity-75-hover text-decoration-none link-secondary">{{ document.title }}</a>
                    <time class="float-end link-secondary opacity-50" datatime="{{ document.date | date: '%Y.%-m.%-d' }}">{{ document.date | date: "%Y.%-m.%-d" }}</time>
                    </li>
                    {% assign count = count | plus: 1 %}
                    {% endif %}
                    {% endunless %}
                    {% endfor %}
                    <h6 class="text-center mt-3">
                        <a href="{{ collection.label | relative_url }}" class="icon-link icon-link-hover m-3 me-auto text-secondary fs-5" style="--bs-link-hover-color-rgb: 419, 20, 0 !important;">查看更多<i class="bi bi-arrow-right"></i><span class="badge fw-normal text-secondary fs-5">{{ collection.docs | size }}</span></a>
                    </h6>
            </ul>
        </div>
    </div>
    <hr>
    {% endunless %}
    {% endfor %}
</div>