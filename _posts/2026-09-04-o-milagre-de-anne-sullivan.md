---
title: "The Miracle Worker (O Milagre de Anne Sullivan)  [2000]  {English+Legenda ptBR} FULLHD"
date: 2026-09-04 12:00:00 -0300
categories: [Filmes, Clássicos]
tags: [surdez, anne sullivan]
image:
  path: "https://culturasurda.net/wp-content/uploads/2015/03/miracle-worker3.jpg"
  alt: "Cena do filme"
video_url: "https://www.youtube.com/embed/G0hBcba-cgc"
---

Descubra a tocante história de Helen Keller e sua extraordinária professora, Anne Sullivan, em "O Milagre de Anne Sullivan" (2000). Este filme retrata a vida de Helen, uma jovem que, apesar de ser surda e cega, encontrou uma maneira de se comunicar com o mundo graças à determinação e paciência de Anne Sullivan. A história é uma poderosa demonstração de como a perseverança, o amor e a educação podem transformar vidas. Inspirado em fatos reais, o filme mostra o início da jornada de Helen e a relação única entre aluna e professora, que superaram juntos todos os desafios.

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
.post-header img { object-fit: contain !important; max-height: 400px; background: #000; }
.video-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; margin-top: 2rem; }
.fullscreen-mobile { display: none; }
@media (max-width: 768px) {
  .fullscreen-mobile { display: flex; position: absolute; right: 10px; top: 10px; z-index: 20; width: 42px; height: 42px; align-items: center; justify-content: center; border: 0; border-radius: 50%; background: rgba(0, 0, 0, 0.75); color: white; font-size: 24px; cursor: pointer; }
}
</style>
