---
title: Produtos Recomendados
icon: fas fa-shopping-cart
order: 4
---

Produtos, recursos tecnológicos e materiais selecionados para estudantes, intérpretes, professores e pessoas interessadas em Libras.

{% assign encontrou = false %}
{% for post in site.posts %}
  {% if post.link_afiliado %}
    {% assign encontrou = true %}
    - [{{ post.title }}]({{ post.url | relative_url }})
  {% endif %}
{% endfor %}

{% unless encontrou %}
> Em breve, novos produtos recomendados serão publicados nesta seção.
{: .prompt-info }
{% endunless %}
