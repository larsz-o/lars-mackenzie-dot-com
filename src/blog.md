---
title: 'Blog'
layout: 'layouts/feed.html'
pagination:
  data: collections.blog
  size: 3
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
---

The latest things I'm working on.