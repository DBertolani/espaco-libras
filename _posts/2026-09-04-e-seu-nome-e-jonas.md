---
title: E Seu Nome É Jonas (1979)
date: 2026-09-04 07:00:00 -0300
categories: [Filmes, Clássicos]
tags: [diagnóstico, barreira linguística]
video_url: "https://archive.org/embed/e-seu-nome-e-jonas-3"
---

Este clássico retrata a trajetória de Jonas, um menino surdo diagnosticado erroneamente com deficiência intelectual devido à falta de diagnóstico correto e à barreira linguística. Observem como a introdução da língua de sinais transforma a comunicação de sua família.

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

  {% unless page.video_url contains 'youtube.com' or page.video_url contains 'youtu.be' %}
  <button class="fullscreen-mobile" onclick="abrirTelaCheia()" aria-label="Tela cheia">⛶</button>
  {% endunless %}
</div>

<script>
function abrirTelaCheia() {
  const iframe = document.getElementById('videoPlayer');
  if (iframe.requestFullscreen) { iframe.requestFullscreen(); }
  else if (iframe.webkitRequestFullscreen) { iframe.webkitRequestFullscreen(); }
}
</script>

<style>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  margin-top: 2rem;
}

.fullscreen-mobile {
  display: none;
}

@media (max-width: 768px) {
  .fullscreen-mobile {
    display: flex;
    position: absolute;
    right: 10px;
    top: 10px; /* Mudado de bottom para top */
    z-index: 20;

    width: 42px;
    height: 42px;

    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 50%;

    background: rgba(0, 0, 0, 0.75);
    color: white;

    font-size: 24px;
    cursor: pointer;
  }
}
</style>
