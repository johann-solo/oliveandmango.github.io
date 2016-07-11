---
layout: page
title: Blog
permalink: /blog/
---

<ul class="post-list">
  {% for post in site.categories.blog %}
    <li>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

      <h2>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h2>
      {{ post.excerpt }}

      <a class="btn-default" href="{{ post.url | prepend: site.baseurl }}">Read more</a>

    </li>
  {% endfor %}
</ul>
