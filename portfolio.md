---
title: Portfolio
permalink: /portfolio/
---

<ul class="nav nav-tabs" id="myTab">
  {% for portfolio in site.portfolio %}
    <li class="active">
      <a href="#{{ portfolio.title | slugify }}">{{ portfolio.title }}</a>
    </li>
  {% endfor %}
</ul>

<div class="tab-content">
  {% for portfolio in site.portfolio %}
    <div class="tab-pane active" id="{{ portfolio.title | slugify }}">
      {{ portfolio.content }}
    </div>
  {% endfor %}
</div>
