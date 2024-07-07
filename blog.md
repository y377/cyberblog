---
layout: default
title: 说说首页
---
<div class="container shadow rounded my-5" id="blog">
    <button id="toggleView" class="btn btn-toggleView my-3">
        <i class="bi bi-list-ul fs-5"></i>
    </button>
    <!-- 卡片模式 -->
    <div class="row gy-4 pb-5 rounded" id="cardView">
        {% for post in site.posts %}
        <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4">
            <div class="card h-100 shadow-sm">
                {% if post.image %}
                <img src="{{ post.image }}" class="card-img-top" alt="{{ post.title }}" crossorigin="anonymous" referrerpolicy="no-referrer" loading="lazy">
                {% endif %}
                <div class="card-body">
                    <h5 class="card-title">{{ post.title }}</h5>
                    <hr>
                    <p class="card-text">{{ post.excerpt | strip_html | truncate: 50 }}</p>
                    <a class="btn btn-link stretched-link" href="{{ post.url }}" role="button">查看全文</a>
                </div>
                <div class="card-footer">
                    <small class="text-reset">{{ post.date | date: "%F" }}</small>
                </div>
            </div>
        </div>
        {% endfor %}
    </div>
    <!-- 列表模式 -->
    <ul class="list-group pb-5" id="listView" style="display: none;">
        {% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
        {% for year in posts_by_year %}
        {% assign beatles = year.name | split: "" %}
        <h4 class="text-center py-2 m-0">
            {% for member in beatles %}
            <i class="bi bi-{{ member }}-square-fill"></i>
            {% endfor %}
            <i class="bi bi-info opacity-25" data-bs-toggle="tooltip" data-bs-placement="right" title="{{ year.items.size }}"></i>
        </h4>
        {% for post in year.items %}
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <a href="{{ post.url }}" class="text-decoration-none text-reset lh-lg">{{ post.title }}</a>
            <small class="fst-italic" style="font-family: fantasy;">{{ post.date | date: "%-m月%d" }}</small>
        </li>
        {% endfor %}
        {% endfor %}
    </ul>
</div>
<script>
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleView");
    const cardView = document.getElementById("cardView");
    const listView = document.getElementById("listView");
    const icon = toggleButton.querySelector("i"); // 获取按钮内的图标元素
    let isCardView = true;

    toggleButton.addEventListener("click", function() {
        if (isCardView) {
            cardView.style.display = "none";
            listView.style.display = "flex";

            icon.classList.remove("bi-list-ul");
            icon.classList.add("bi-grid-3x2"); // 切换到网格图标

            isCardView = false;
        } else {
            listView.style.display = "none";
            cardView.style.display = "flex";

            icon.classList.remove("bi-grid-3x2");
            icon.classList.add("bi-list-ul"); // 切换到列表图标

            isCardView = true;
        }
    });
});
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
</script>