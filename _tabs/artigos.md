---
title: Artigos / Blog
icon: fas fa-newspaper
order: 1
---

Conteúdos, dicas, notícias e informações sobre Libras, acessibilidade e cultura surda.

{% assign encontrou = false %}
{% for post in site.posts %}
  {% if post.categories contains "Artigos" or post.categories contains "Blog" %}
    {% assign encontrou = true %}
    - [{{ post.title }}]({{ post.url | relative_url }})
  {% endif %}
{% endfor %}

{% unless encontrou %}
> Em breve, novos artigos serão publicados nesta seção.
{: .prompt-info }
{% endunless %}
