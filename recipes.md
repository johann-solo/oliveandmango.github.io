---
layout: page
title: Recipes
permalink: /recipes/
---

<ul class="post-list">
  {% for post in site.categories.recipes %}

    <li>
      <h2>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        <!-- <p class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.excerpt }}</p> -->
      </h2>
    </li>
  {% endfor %}
</ul>
