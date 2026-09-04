---
title: E Seu Nome É Jonas (1979)
date: 2026-09-04 07:00:00 -0300
categories: [Filmes, Clássicos]
tags: [diagnóstico, barreira linguística]
---

Este clássico retrata a trajetória de Jonas, um menino surdo diagnosticado erroneamente com deficiência intelectual devido à falta de diagnóstico correto e à barreira linguística. Observem como a introdução da língua de sinais transforma a comunicação de sua família.

<div class="video-container">

  <iframe
    id="videoJonas"
    src="https://archive.org/embed/e-seu-nome-e-jonas-3"
    frameborder="0"
    allow="fullscreen"
    allowfullscreen
    webkitallowfullscreen="true"
    mozallowfullscreen="true">
  </iframe>

  <button
    type="button"
    class="fullscreen-mobile"
    onclick="abrirTelaCheiaJonas()"
    aria-label="Abrir vídeo em tela cheia">
    ⛶
  </button>

</div>

<script>
function abrirTelaCheiaJonas() {
  const iframe = document.getElementById('videoJonas');

  if (!iframe) return;

  if (iframe.requestFullscreen) {
    iframe.requestFullscreen().catch(function(error) {
      console.log('Não foi possível abrir em tela cheia:', error);
    });
  } 
  else if (iframe.webkitRequestFullscreen) {
    iframe.webkitRequestFullscreen();
  }
}
</script>

<style>
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  margin-top: 2rem;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}

/* Botão escondido no computador */
.fullscreen-mobile {
  display: none;
}

/* Celular */
@media (max-width: 768px) {

  .video-container {
    width: 100vw;
    margin-left: calc(50% - 50vw);
  }

  .fullscreen-mobile {
    display: flex;
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 20;

    width: 42px;
    height: 42px;

    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 50%;

    background: rgba(0, 0, 0, 0.75);
    color: white;

    font-size: 24px;
    line-height: 1;

    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  .fullscreen-mobile:active {
    transform: scale(0.95);
  }
}
</style>
