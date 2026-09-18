---
title: Produtos Recomendados
icon: fas fa-shopping-cart
order: 4
---

Produtos, recursos tecnológicos e materiais selecionados para estudantes, intérpretes, professores e pessoas interessadas em Libras.

{% assign encontrou = false %}
<ul>
{% for post in site.posts %}
  {% if post.link_afiliado %}
    {% assign encontrou = true %}
    <li><a href="{{ post.url | relative_url }}">{{ post.title | escape }}</a></li>
  {% endif %}
{% endfor %}
</ul>

{% unless encontrou %}
> Em breve, novos produtos recomendados serão publicados nesta seção.
{: .prompt-info }
{% endunless %}
