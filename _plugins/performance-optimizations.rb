#!/usr/bin/env ruby
#
# Performance Optimization Plugin
# - Adiciona dimensões explícitas às imagens para evitar CLS
# - Posterga theme.min.js com defer
# - Otimiza carregamento de scripts

require 'nokogiri'
require 'fileutils'

module PerformanceOptimizations
  class ImageOptimizer
    # Dimensões padrão das imagens por contexto
    PREVIEW_IMAGE_WIDTHS = {
      desktop: 500,
      mobile: 320
    }.freeze

    PREVIEW_IMAGE_HEIGHT = 220

    def self.defer_stylesheets(doc)
      doc.css('link[rel="stylesheet"]').each do |link|
        next unless link['href']

        link['rel'] = 'preload'
        link['as'] = 'style'
        link['onload'] = "this.onload=null;this.rel='stylesheet'"

        fallback = Nokogiri::XML::Node.new('noscript', doc)
        fallback.add_child(link.dup.tap { |copy| copy['rel'] = 'stylesheet'; copy.remove_attribute('as'); copy.remove_attribute('onload') })
        link.add_next_sibling(fallback)
      end
    end

    def self.remove_shimmer_class(doc)
      doc.css('.shimmer').each do |node|
        classes = node['class'].to_s.split.reject { |name| name == 'shimmer' }
        node['class'] = classes.join(' ')
      end
    end

    def self.add_dimensions_to_images(html_string)
      doc = Nokogiri::HTML5(html_string)

      # Adicionar dimensões a images com class "preview-img"
      doc.css('.preview-img img').each do |img|
        # Se a imagem já tem src
        if img['src']
          # Adicionar dimensões padrão para preview
          img['width'] ||= PREVIEW_IMAGE_WIDTHS[:desktop].to_s
          img['height'] ||= PREVIEW_IMAGE_HEIGHT.to_s

          # Adicionar data-srcset para suporte responsivo
          unless img.has_attribute?('data-srcset')
            img['data-srcset'] = "#{img['src']}?w=320 320w, #{img['src']}?w=500 500w"
          end
        end
      end

      # Postergar theme.min.js adicionando defer
      doc.css('script[src*="theme.min.js"]').each do |script|
        script['defer'] = 'defer'
        # Remover async se existir
        script.remove_attribute('async') if script.has_attribute?('async')
      end

      # Postergar home.min.js com defer
      doc.css('script[src*="home.min.js"]').each do |script|
        script['defer'] = 'defer'
      end

      # Adicionar fetchpriority para imagens LCP
      doc.css('.preview-img img').first&.tap do |first_img|
        first_img['fetchpriority'] = 'high'
        first_img.remove_attribute('loading')
      end

      # A imagem principal de um post também é conteúdo LCP e não deve ser lazy.
      doc.css('article > header img, article header img').first&.tap do |first_img|
        first_img['fetchpriority'] = 'high'
        first_img.remove_attribute('loading')
      end

      defer_stylesheets(doc)
      remove_shimmer_class(doc)

      doc.to_html
    end
  end

  class PerformanceOptimizationHook
    def initialize(config)
      @config = config
    end

    def add_performance_script(html_string)
      # Ler o arquivo performance.js
      perf_script_path = File.join(File.dirname(__FILE__), '..', 'assets', 'js', 'performance.js')

      if File.exist?(perf_script_path)
        perf_script = File.read(perf_script_path)

        # Adicionar script antes do fechamento do </body>
        html_string.gsub('</body>', "<script defer>#{perf_script}</script>\n</body>")
      else
        # Se o arquivo não existir, apenas adicionar referência
        html_string.gsub('</body>', "<script defer src=\"/espaco-libras/assets/js/performance.js\"></script>\n</body>")
      end
    end

    def post_write(site)
      # Processar arquivo index.html compilado
      index_path = File.join(site.dest, 'index.html')

      if File.exist?(index_path)
        content = File.read(index_path)
        optimized = ImageOptimizer.add_dimensions_to_images(content)
        optimized = add_performance_script(optimized)
        File.write(index_path, optimized)
        Jekyll.logger.info("Performance:", "✓ Otimizações aplicadas a index.html")
      end

      # Processar todos os posts
      site.posts.docs.each do |post|
        post_path = File.join(site.dest, post.url.sub(/\/$/, ''), 'index.html')

        if File.exist?(post_path)
          content = File.read(post_path)
          optimized = ImageOptimizer.add_dimensions_to_images(content)
          optimized = add_performance_script(optimized)
          File.write(post_path, optimized)
        end
      end
    end
  end
end

Jekyll::Hooks.register :site, :post_write do |site|
  hook = PerformanceOptimizations::PerformanceOptimizationHook.new(site.config)
  hook.post_write(site)
end
