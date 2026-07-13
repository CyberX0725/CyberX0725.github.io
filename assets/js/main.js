/**
 * CyberX0725 Blog - Main JavaScript
 * Luogu-inspired layout interactions
 */

(function () {
  'use strict';

  /* ---------- Article Data ---------- */
  var ARTICLES = [
    {
      slug: 'hello-world',
      title: 'Hello World — 开启赛博之旅',
      excerpt: '这是我的第一篇博客文章。在这里，我将分享技术探索的旅程，从搭建这个博客开始，记录每一行代码背后的故事。',
      category: '随笔',
      categoryClass: 'tag-essay',
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
      categoryClass: 'tag-design',
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
      categoryClass: 'tag-tutorial',
      date: '2026-07-05',
      readTime: '10 分钟阅读',
      featured: false,
      year: '2026'
    }
  ];

  /* ---------- Sidebar Toggle (Mobile) ---------- */
  function initSidebarToggle() {
    var toggle = document.querySelector('.sidebar-toggle');
    var sidebar = document.querySelector('.sidebar');
    if (!toggle || !sidebar) return;

    toggle.addEventListener('click', function () {
      sidebar.classList.toggle('open');
    });

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function (e) {
      if (window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && !toggle.contains(e.target)) {
          sidebar.classList.remove('open');
        }
      }
    });
  }

  /* ---------- Active Nav Link ---------- */
  function initActiveNav() {
    var links = document.querySelectorAll('.sidebar-nav a');
    if (!links.length) return;

    var current = getCurrentPageName();

    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === current || (current === '' && href === 'index.html') ||
          (current === 'index.html' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  function getCurrentPageName() {
    var path = window.location.pathname;
    var page = path.substring(path.lastIndexOf('/') + 1);
    if (page === '') page = 'index.html';
    return page;
  }

  /* ---------- Back to Top ---------- */
  function initBackToTop() {
    var btn = document.querySelector('.back-to-top');
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
    var featuredContainer = document.querySelector('#featured-articles');
    var allContainer = document.querySelector('#all-articles');

    if (!featuredContainer && !allContainer) return;

    if (featuredContainer) {
      var featured = ARTICLES.filter(function (a) { return a.featured; });
      featuredContainer.innerHTML = featured.map(articleCardHTML).join('');
    }

    if (allContainer) {
      var nonFeatured = ARTICLES.filter(function (a) { return !a.featured; });
      allContainer.innerHTML = nonFeatured.map(articleCardHTML).join('');
      initCategoryFilter();
    }
  }

  function articleCardHTML(article) {
    var dateStr = formatDate(article.date);
    var basePath = isInPostsDir() ? '' : 'posts/';
    return ''
      + '<a href="' + basePath + article.slug + '.html" class="article-item' + (article.featured ? ' featured' : '') + '">'
      + '  <div class="article-item-header">'
      + '    <span class="article-tag ' + article.categoryClass + '">' + escapeHTML(article.category) + '</span>'
      + '  </div>'
      + '  <h3 class="article-item-title">' + escapeHTML(article.title) + '</h3>'
      + '  <p class="article-item-excerpt">' + escapeHTML(article.excerpt) + '</p>'
      + '  <div class="article-item-meta">'
      + '    <span>'
      + '      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>'
      + '      ' + dateStr
      + '    </span>'
      + '    <span>'
      + '      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>'
      + '      ' + escapeHTML(article.readTime)
      + '    </span>'
      + '  </div>'
      + '</a>';
  }

  function isInPostsDir() {
    return window.location.pathname.indexOf('/posts/') !== -1;
  }

  function formatDate(dateStr) {
    var parts = dateStr.split('-');
    return parts[1] + '-' + parts[2] + ', ' + parts[0];
  }

  function escapeHTML(str) {
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  /* ---------- Category Filter ---------- */
  function initCategoryFilter() {
    var filterContainer = document.querySelector('.filter-bar');
    if (!filterContainer) return;

    var buttons = filterContainer.querySelectorAll('.filter-btn');
    var cards = document.querySelectorAll('#all-articles .article-item');

    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var category = btn.getAttribute('data-category');

        buttons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        cards.forEach(function (card) {
          var tag = card.querySelector('.article-tag');
          if (!tag) return;
          var cardCategory = tag.textContent.trim();
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
    var container = document.querySelector('#archive-timeline');
    if (!container) return;

    var grouped = {};
    ARTICLES.forEach(function (a) {
      if (!grouped[a.year]) grouped[a.year] = [];
      grouped[a.year].push(a);
    });

    Object.keys(grouped).forEach(function (year) {
      grouped[year].sort(function (a, b) {
        return b.date.localeCompare(a.date);
      });
    });

    var basePath = isInPostsDir() ? '../posts/' : 'posts/';
    if (isInPostsDir()) basePath = '../';

    var html = '';
    Object.keys(grouped).sort(function (a, b) { return b.localeCompare(a); }).forEach(function (year) {
      html += '<div class="archive-year">';
      html += '<h2 class="archive-year-title">' + year + ' 年</h2>';
      grouped[year].forEach(function (article) {
        html += ''
          + '<a href="' + basePath + article.slug + '.html" class="archive-item">'
          + '  <span class="archive-date">' + formatDate(article.date) + '</span>'
          + '  <span class="archive-title">' + escapeHTML(article.title) + '</span>'
          + '  <span class="archive-category">' + escapeHTML(article.category) + '</span>'
          + '</a>';
      });
      html += '</div>';
    });

    container.innerHTML = html;
  }

  /* ---------- Skill Bars Animation ---------- */
  function initSkillBars() {
    var bars = document.querySelectorAll('.skill-progress');
    if (!bars.length) return;

    if (!('IntersectionObserver' in window)) {
      bars.forEach(function (bar) {
        bar.style.width = bar.getAttribute('data-progress') + '%';
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var bar = entry.target;
          bar.style.width = bar.getAttribute('data-progress') + '%';
          observer.unobserve(bar);
        }
      });
    }, { threshold: 0.3 });

    bars.forEach(function (bar) { observer.observe(bar); });
  }

  /* ---------- Init ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    initSidebarToggle();
    initActiveNav();
    initBackToTop();
    renderArticles();
    renderArchive();
    initSkillBars();
  });
})();
