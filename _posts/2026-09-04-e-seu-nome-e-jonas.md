---
title: E Seu Nome É Jonas (1979)
date: 2026-09-04 07:00:00 -0300
categories: [Filmes, Clássicos]
tags: [diagnóstico, barreira linguística]
image:
  path: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjRDGHpBUVgZ1G4n812T7evCHitxXr1oa2o5atGkZz-EA0PXGX195qv0509UMmxd2yP4Vo4mfdIDTlxJ1RKp4DG5G_uBji3PMPV52zzRVtBhK-LhN7JBQFKQKRf_sxdm2m9dPxl_yLGwc/s1600/E+seu+nome+%25C3%25A9+Jonas.jpg"
  alt: "Capa do filme E Seu Nome É Jonas"
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
.post-header img {
  object-fit: contain !important;
  max-height: 400px;
  background: #000;
}

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
