/**
 * Performance Optimizations Script
 * Aplica melhorias de performance após o carregamento da página
 *
 * Funções:
 * 1. Carrega CSS posteragada
 * 2. Suporte a WebP com fallback
 * 3. Otimizações de imagem responsiva
 * 4. Preload de recursos críticos
 */

(function () {
  'use strict';

  /**
   * 1. CSS LOADER - Carrega CSS posteragada com preload
   */
  function loadDeferredCSS() {
    const links = document.querySelectorAll(
      'link[rel="preload"][as="style"]:not([onload])',
    );

    links.forEach((link) => {
      const href = link.href;
      const media = link.media || 'all';

      // Aguardar o DOM estar completamente pronto
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          const stylesheet = document.createElement('link');
          stylesheet.rel = 'stylesheet';
          stylesheet.href = href;
          stylesheet.media = media;
          document.head.appendChild(stylesheet);
        });
      } else {
        const stylesheet = document.createElement('link');
        stylesheet.rel = 'stylesheet';
        stylesheet.href = href;
        stylesheet.media = media;
        document.head.appendChild(stylesheet);
      }
    });
  }

  /**
   * 2. WEBP SUPPORT DETECTION & IMAGE OPTIMIZATION
   * Substitui imagens por versões WebP se suportado
   */
  function detectWebPSupport() {
    return new Promise((resolve) => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        resolve(webP.height === 2);
      };
      webP.src =
        'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAADwAQCdASoBIAEAQUUVmAEP6gCdLvAGAAD+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+';
    });
  }

  function optimizeImagesForWebP(supportsWebP) {
    if (!supportsWebP) return;

    const images = document.querySelectorAll('img[src]');

    images.forEach((img) => {
      const src = img.src;

      // Se a imagem está em URL externa, não convertemos
      // (CDNs como Amazon e culturasurda.net devem ter seus próprios otimizadores)

      // Nunca atrasar a imagem principal visível do post.
      const isPostHero = Boolean(
        img.closest('article > header, article header'),
      );

      // Adicionar loading="lazy" apenas para imagens fora do conteúdo principal.
      if (!isPostHero && !img.hasAttribute('loading')) {
        img.loading = 'lazy';
      }

      // Adicionar decoding="async" para non-blocking image decoding
      if (!img.hasAttribute('decoding')) {
        img.decoding = 'async';
      }

      // Forçar aspect-ratio para evitar CLS
      if (!img.parentElement.style.aspectRatio && img.width && img.height) {
        img.style.aspectRatio = `${img.width}/${img.height}`;
      }
    });
  }

  /**
   * 3. RESOURCE HINTS & PRELOADING
   * Adiciona dicas de recurso para otimizar networking
   */
  function addResourceHints() {
    // Preload de fonts críticas (já está no head, mas podemos reforçar)
    const criticalFonts = ['https://fonts.gstatic.com/s/sourcesanspro/...'];

    // Prefetch para recursos secundários
    const prefetchResources = ['/espaco-libras/assets/js/dist/home.min.js'];

    prefetchResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = resource;
      document.head.appendChild(link);
    });
  }

  /**
   * 4. INTERSECTION OBSERVER PARA LAZY LOADING NATIVO
   * Backup para browsers que não suportam loading="lazy"
   */
  function enableIntersectionObserverLazyLoading() {
    if (!('IntersectionObserver' in window)) return;

    const imageObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: '50px',
      },
    );

    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });
  }

  /**
   * 5. CORE WEB VITALS MONITORING (Opcional - apenas em dev)
   */
  function monitorCoreWebVitals() {
    if (typeof window.webVitals === 'undefined') return;

    // Apenas logar em desenvolvimento
    if (
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1'
    ) {
      try {
        const PerformanceObserver = window.PerformanceObserver;

        // CLS (Cumulative Layout Shift)
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!entry.hadRecentInput) {
              console.log('[CLS] Layout Shift:', entry.value);
            }
          }
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });
      } catch (e) {
        // PerformanceObserver não suportado
      }
    }
  }

  /**
   * INICIALIZAÇÃO PRINCIPAL
   */
  function init() {
    // Carregar CSS posteragada quando DOM está ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadDeferredCSS);
    } else {
      loadDeferredCSS();
    }

    // Detectar WebP e otimizar imagens
    detectWebPSupport().then((supportsWebP) => {
      optimizeImagesForWebP(supportsWebP);
    });

    // Adicionar resource hints
    addResourceHints();

    // Lazy loading com Intersection Observer
    enableIntersectionObserverLazyLoading();

    // Monitorar Core Web Vitals (dev)
    monitorCoreWebVitals();
  }

  // Executar quando o script carrega
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
