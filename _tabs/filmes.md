---
title: Filmes e Entretenimento
icon: fas fa-film
order: 3
---

Filmes, séries e outras obras relacionadas à comunidade surda, Libras e acessibilidade.

{% assign encontrou = false %}
{% for post in site.posts %}
  {% if post.categories contains "Filmes" %}
    {% assign encontrou = true %}
    - [{{ post.title }}]({{ post.url | relative_url }})
  {% endif %}
{% endfor %}

{% unless encontrou %}
> Em breve, novos filmes e conteúdos de entretenimento serão publicados nesta seção.
{: .prompt-info }
{% endunless %}
