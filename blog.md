---
layout: default
title: Blog
permalink: /blog/
---

<h2>Looking for an older post?</h2>

<form action="/search.html" method="get">
    <label for="search_box">Search</label>
    <input type="text" id="search_box" name="query">
    <input type="submit" value="search">
</form>

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
