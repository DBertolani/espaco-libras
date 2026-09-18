---
title: Produtos Recomendados
icon: fas fa-shopping-cart
order: 4
---

Produtos, recursos tecnológicos e materiais selecionados para estudantes, intérpretes, professores e pessoas interessadas em Libras.

{% if site.produtos and site.produtos.size > 0 %}

<div class="produtos-grid" aria-label="Produtos recomendados">

{% assign produtos = site.produtos | sort: "ordem" %}

{% for produto in produtos %}

  {% include produto-card.html
    url=produto.url
    titulo=produto.titulo
    title=produto.title
    categoria=produto.categoria
    imagem=produto.imagem
    alt=produto.alt
    descricao=produto.descricao
  %}

{% endfor %}

</div>

{% else %}

> Em breve, novos produtos recomendados serão publicados nesta seção.
{: .prompt-info }

{% endif %}
