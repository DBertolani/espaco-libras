---
title: Materiais Didáticos
icon: fas fa-book
order: 2
---

Dicionários, livros, apostilas, cursos e outros materiais para estudo e ensino de Libras.

{% assign encontrou = false %}
{% for post in site.posts %}
  {% if post.categories contains "Materiais Didáticos" or post.categories contains "Materiais Pedagógicos" or post.categories contains "Biblioteca" %}
    {% assign encontrou = true %}
    - [{{ post.title }}]({{ post.url | relative_url }})
  {% endif %}
{% endfor %}

{% unless encontrou %}
> Em breve, novos materiais serão publicados nesta seção.
{: .prompt-info }
{% endunless %}
