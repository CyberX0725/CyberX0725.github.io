/**
 * CyberX0725 Blog - Main JavaScript
 * Handles: navbar, typewriter, scroll reveal, theme, back-to-top, article filtering
 */

(function () {
  'use strict';

  /* ---------- Article Data ---------- */
  const ARTICLES = [
    {
      slug: 'hello-world',
      title: 'Hello World — 开启赛博之旅',
      excerpt: '这是我的第一篇博客文章。在这里，我将分享技术探索的旅程，从搭建这个博客开始，记录每一行代码背后的故事。',
      category: '随笔',
      date: '2026-07-13',
      readTime: '3 分钟阅读',
      featured: true,
      year: '2026'
    },
    {
      slug: 'cyberpunk-design',
      title: '赛博朋克设计美学：在网页中构建未来感',
      excerpt: '探索赛博朋克设计风格的核心元素——霓虹色彩、故障艺术、扫描线效果，以及如何用纯 CSS 实现这些视觉效果。',
      category: '设计',
      date: '2026-07-10',
      readTime: '7 分钟阅读',
      featured: false,
      year: '2026'
    },
    {
      slug: 'git-deploy',
      title: '使用 GitHub Pages 部署静态网站完整指南',
      excerpt: '从零开始，学习如何将你的静态网站部署到 GitHub Pages，配置自定义域名，并实现自动化部署流程。',
      category: '教程',
      date: '2026-07-05',
      readTime: '10 分钟阅读',
      featured: false,
      year: '2026'
    }
  ];

  /* ---------- Navbar Toggle ---------- */
  function initNavbar() {
    const navbar = document.querySelector('.navbar');
    const toggle = document.querySelector('.navbar-toggle');
    const links = document.querySelector('.navbar-links');

    if (!navbar) return;

    // Scroll effect
    window.addEventListener('scroll', function () {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Mobile toggle
    if (toggle && links) {
      toggle.addEventListener('click', function () {
        toggle.classList.toggle('active');
        links.classList.toggle('open');
      });

      // Close menu on link click
      links.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          toggle.classList.remove('active');
          links.classList.remove('open');
        });
      });
    }

    // Active link highlighting
    const currentPage = getCurrentPageName();
    links && links.querySelectorAll('a').forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  function getCurrentPageName() {
    const path = window.location.pathname;
    const page = path.substring(path.lastIndexOf('/') + 1);
    return page;
  }

  /* ---------- Typewriter Effect ---------- */
  function initTypewriter() {
    const element = document.querySelector('.typed-text');
    if (!element) return;

    const phrases = [
      '探索代码的无限可能',
      '构建未来的数字世界',
      '在比特与字节间穿行',
      '用技术书写故事'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      element.textContent = currentPhrase.substring(0, charIndex);

      let typeSpeed = isDeleting ? 50 : 100;

      if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    }

    setTimeout(type, 1000);
  }

  /* ---------- Scroll Reveal ---------- */
  function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal');
    if (!elements.length) return;

    if (!('IntersectionObserver' in window)) {
      elements.forEach(function (el) { el.classList.add('visible'); });
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(function (el) { observer.observe(el); });
  }

  /* ---------- Back to Top ---------- */
  function initBackToTop() {
    const btn = document.querySelector('.back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Article List Rendering ---------- */
  function renderArticles() {
    const featuredContainer = document.querySelector('#featured-articles');
    const allContainer = document.querySelector('#all-articles');

    if (!featuredContainer && !allContainer) return;

    if (featuredContainer) {
      const featured = ARTICLES.filter(function (a) { return a.featured; });
      featuredContainer.innerHTML = featured.map(articleCardHTML).join('');
    }

    if (allContainer) {
      const nonFeatured = ARTICLES.filter(function (a) { return !a.featured; });
      allContainer.innerHTML = nonFeatured.map(articleCardHTML).join('');
      initCategoryFilter();
    }
  }

  function articleCardHTML(article) {
    const formattedDate = formatDate(article.date);
    return ''
      + '<article class="article-card reveal">'
      + '  <a href="posts/' + article.slug + '.html" style="text-decoration:none;color:inherit;display:flex;flex-direction:column;height:100%;">'
      + '    <span class="article-category">' + escapeHTML(article.category) + '</span>'
      + '    <h3 class="article-title">' + escapeHTML(article.title) + '</h3>'
      + '    <p class="article-excerpt">' + escapeHTML(article.excerpt) + '</p>'
      + '    <div class="article-meta">'
      + '      <span>'
      + '        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>'
      + '        ' + formattedDate
      + '      </span>'
      + '      <span class="article-readmore">阅读 →</span>'
      + '    </div>'
      + '  </a>'
      + '</article>';
  }

  function formatDate(dateStr) {
    const parts = dateStr.split('-');
    return parts[0] + '.' + parts[1] + '.' + parts[2];
  }

  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /* ---------- Category Filter ---------- */
  function initCategoryFilter() {
    const filterContainer = document.querySelector('.category-filter');
    if (!filterContainer) return;

    const buttons = filterContainer.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('#all-articles .article-card');

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        const category = btn.getAttribute('data-category');

        buttons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        cards.forEach(function (card) {
          const cardCategory = card.querySelector('.article-category').textContent.trim();
          if (category === 'all' || cardCategory === category) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ---------- Archive Page Rendering ---------- */
  function renderArchive() {
    const container = document.querySelector('#archive-timeline');
    if (!container) return;

    // Group by year
    const grouped = {};
    ARTICLES.forEach(function (a) {
      if (!grouped[a.year]) grouped[a.year] = [];
      grouped[a.year].push(a);
    });

    // Sort articles within each year by date descending
    Object.keys(grouped).forEach(function (year) {
      grouped[year].sort(function (a, b) {
        return b.date.localeCompare(a.date);
      });
    });

    let html = '';
    Object.keys(grouped).sort(function (a, b) { return b.localeCompare(a); }).forEach(function (year) {
      html += '<div class="timeline-year reveal">';
      html += '<h3 class="timeline-year-label">' + year + '</h3>';
      grouped[year].forEach(function (article) {
        html += ''
          + '<a href="posts/' + article.slug + '.html" class="timeline-item" style="display:block;text-decoration:none;color:inherit;">'
          + '  <div class="timeline-item-date">' + formatDate(article.date) + '</div>'
          + '  <div class="timeline-item-title">' + escapeHTML(article.title) + '</div>'
          + '  <div class="timeline-item-category">' + escapeHTML(article.category) + '</div>'
          + '</a>';
      });
      html += '</div>';
    });

    container.innerHTML = html;
  }

  /* ---------- Skill Bars Animation ---------- */
  function initSkillBars() {
    const bars = document.querySelectorAll('.skill-progress');
    if (!bars.length) return;

    if (!('IntersectionObserver' in window)) {
      bars.forEach(function (bar) {
        bar.style.width = bar.getAttribute('data-progress') + '%';
      });
      return;
    }

    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const bar = entry.target;
          bar.style.width = bar.getAttribute('data-progress') + '%';
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.3 });

    bars.forEach(function (bar) { observer.observe(bar); });
  }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    initNavbar();
    initTypewriter();
    initScrollReveal();
    initBackToTop();
    renderArticles();
    renderArchive();
    initSkillBars();
  });
})();
