---
layout: blog
title: Blog
permalink: /blog/
---

<ul class="post-list">
  {% for post in site.categories.blog %}
    <li>
      <span class="post-meta">{{ post.date | date_to_string }}</span>

      <h2>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h2>


      <a class="btn__main" href="{{ post.url | prepend: site.baseurl }}">Read more</a>

    </li>
  {% endfor %}
</ul>
