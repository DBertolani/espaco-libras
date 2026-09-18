---
title: Filmes e Entretenimento
icon: fas fa-film
order: 3
---

Filmes, séries e outras obras relacionadas à comunidade surda, Libras e acessibilidade.

{% assign encontrou = false %}
<ul>
{% for post in site.posts %}
  {% if post.categories contains "Filmes" %}
    {% assign encontrou = true %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></li>
  {% endif %}
{% endfor %}
</ul>

{% unless encontrou %}
> Em breve, novos filmes e conteúdos de entretenimento serão publicados nesta seção.
{: .prompt-info }
{% endunless %}
