---
title: Artigos / Blog
icon: fas fa-newspaper
order: 1
---

Conteúdos, dicas, notícias e informações sobre Libras, acessibilidade e cultura surda.

{% assign encontrou = false %}
<ul>
{% for post in site.posts %}
  {% if post.categories contains "Artigos" or post.categories contains "Blog" %}
    {% assign encontrou = true %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></li>
  {% endif %}
{% endfor %}
</ul>

{% unless encontrou %}
> Em breve, novos artigos serão publicados nesta seção.
{: .prompt-info }
{% endunless %}
