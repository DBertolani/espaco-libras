---
title: "Nome do Filme (Ano)"
date: 2026-09-04 12:00:00 -0300
categories: [Filmes, Categoria]
tags: [tag1, tag2]
image:
  path: "LINK_DA_IMAGEM_DE_CAPA.jpg"
  alt: "Cena do filme"
video_url: "https://archive.org/embed/SEU_CODIGO_AQUI"
---

Escreva a sinopse do filme e a sua análise aqui...

<!-- O CÓDIGO ABAIXO NÃO PRECISA MAIS SER EDITADO -->
<div class="video-container">
  <iframe
    id="videoPlayer"
    src="{{ page.video_url }}"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;"
    frameborder="0"
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowfullscreen="true"
    allow="fullscreen">
  </iframe>
  <button class="fullscreen-mobile" onclick="abrirTelaCheia()" aria-label="Tela cheia">⛶</button>
</div>

<script>
function abrirTelaCheia() {
  const iframe = document.getElementById('videoPlayer');
  if (iframe.requestFullscreen) { iframe.requestFullscreen(); }
  else if (iframe.webkitRequestFullscreen) { iframe.webkitRequestFullscreen(); }
}
</script>

<style>
.post-header img { object-fit: contain !important; max-height: 400px; background: #000; }
.video-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin-top: 2rem; }
.fullscreen-mobile { display: none; }
@media (max-width: 768px) {
  .fullscreen-mobile { display: flex; position: absolute; right: 10px; top: 10px; z-index: 20; width: 42px; height: 42px; align-items: center; justify-content: center; border: 0; border-radius: 50%; background: rgba(0, 0, 0, 0.75); color: white; font-size: 24px; cursor: pointer; }
}
</style>
