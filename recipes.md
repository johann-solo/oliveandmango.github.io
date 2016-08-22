---
layout: page
title: Recipes
permalink: /recipes/
---

<ul class="post-list">
  {% for post in site.categories.recipes %}

    <li class="recipe__list">
      <h2>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        <!-- <p class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.excerpt }}</p> -->
      </h2>
      {% if post.image %}
      <!-- <img src="{{ site.baseurl }}/img/{{ post.image }}"  class="post__thumbnail" alt="" /> -->
      {% endif %}
    </li>
  {% endfor %}
</ul>
