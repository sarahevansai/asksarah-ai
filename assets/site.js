// askSarah.ai v2 — shared behavior for generated pages (scripts/build.mjs).
(function () {
  'use strict';

  // Analytics: Vercel Web Analytics custom events. No-op if analytics isn't enabled.
  function track(name, data) {
    try { if (typeof window.va === 'function') window.va('event', { name: name, data: data || {} }); } catch (e) {}
  }
  window.askTrack = track;

  // Mobile nav
  var toggle = document.querySelector('.sa-toggle');
  var links = document.getElementById('sa-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Time-limited banner: hides itself after data-until and when dismissed.
  var banner = document.querySelector('[data-banner]');
  if (banner) {
    var key = 'banner-' + banner.getAttribute('data-banner');
    var until = banner.getAttribute('data-until');
    var dismissed = false;
    try { dismissed = localStorage.getItem(key) === '1'; } catch (e) {}
    if (dismissed || (until && new Date() > new Date(until))) banner.remove();
    else {
      banner.hidden = false;
      var close = banner.querySelector('button');
      if (close) close.addEventListener('click', function () {
        try { localStorage.setItem(key, '1'); } catch (e) {}
        banner.remove();
      });
    }
  }

  // Declarative click tracking: <a data-track="event_name" data-track-id="slug">
  document.addEventListener('click', function (e) {
    var el = e.target.closest && e.target.closest('[data-track]');
    if (!el) return;
    track(el.getAttribute('data-track'), { id: el.getAttribute('data-track-id') || '', href: el.getAttribute('href') || '' });
  });

  // Page-view style events declared on <body data-view="skill_view" data-view-id="slug">
  var body = document.body;
  if (body.dataset.view) track(body.dataset.view, { id: body.dataset.viewId || '' });

  // Copy-prompt buttons
  document.querySelectorAll('[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = document.getElementById(btn.getAttribute('data-copy'));
      if (!target || !navigator.clipboard) return;
      navigator.clipboard.writeText(target.innerText.trim()).then(function () {
        var old = btn.textContent; btn.textContent = 'Copied';
        setTimeout(function () { btn.textContent = old; }, 1600);
      });
    });
  });

  // Paid Skill checkout — reuses the existing Stripe function.
  document.querySelectorAll('[data-buy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var id = btn.getAttribute('data-buy');
      var name = btn.getAttribute('data-name');
      var cents = parseInt(btn.getAttribute('data-cents'), 10);
      var label = btn.textContent;
      btn.disabled = true; btn.textContent = 'Opening checkout…';
      track('checkout_start', { id: id });
      fetch('/api/create-checkout', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ skillId: id, skillName: name, priceInCents: cents })
      }).then(function (r) { return r.json(); }).then(function (d) {
        if (d.url) { window.location.href = d.url; return; }
        throw new Error(d.error || 'Checkout failed');
      }).catch(function () {
        btn.disabled = false; btn.textContent = label;
        alert('Checkout didn’t open. Try again, or email skills@asksarah.ai.');
      });
    });
  });

  // Filter chips: <button class="chip" data-filter="Decisions" data-filter-group="x"> over [data-cats]
  document.querySelectorAll('[data-filter-group]').forEach(function (group) {
    var items = document.querySelectorAll(group.getAttribute('data-filter-target'));
    group.addEventListener('click', function (e) {
      var chip = e.target.closest('.chip'); if (!chip) return;
      group.querySelectorAll('.chip').forEach(function (c) { c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'); });
      var f = chip.getAttribute('data-filter');
      items.forEach(function (it) {
        it.hidden = f !== 'all' && (it.getAttribute('data-cats') || '').split('|').indexOf(f) === -1;
      });
    });
  });

  // Search page
  var app = document.getElementById('search-app');
  if (app) {
    var input = document.getElementById('q');
    var list = document.getElementById('results');
    var status = document.getElementById('search-status');
    var typeChips = document.getElementById('type-filter');
    var params = new URLSearchParams(location.search);
    var type = 'all';
    var index = [];
    input.value = params.get('q') || '';

    function esc(s) { return String(s || '').replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
    function score(item, words) {
      var hay = (item.title + ' ' + item.description + ' ' + (item.keywords || '') + ' ' + item.typeLabel + ' ' + (item.category || '')).toLowerCase();
      var t = item.title.toLowerCase(), s = 0;
      for (var i = 0; i < words.length; i++) {
        if (hay.indexOf(words[i]) === -1) return 0;
        s += t.indexOf(words[i]) !== -1 ? 3 : 1;
      }
      return s;
    }
    function render() {
      var q = input.value.trim().toLowerCase();
      var words = q.split(/\s+/).filter(function (w) { return w.length > 1; });
      var out = index.filter(function (it) { return type === 'all' || it.type === type; })
        .map(function (it) { return { it: it, s: words.length ? score(it, words) : 1 }; })
        .filter(function (r) { return r.s > 0; })
        .sort(function (a, b) { return b.s - a.s; });
      list.innerHTML = out.map(function (r) {
        var it = r.it;
        return '<li><a href="' + esc(it.url) + '" data-track="related_click" data-track-id="search:' + esc(it.url) + '">' +
          '<span class="badges"><span class="badge badge-type">' + esc(it.typeLabel) + '</span>' +
          (it.badge ? '<span class="badge ' + esc(it.badgeClass) + '">' + esc(it.badge) + '</span>' : '') + '</span>' +
          '<h3>' + esc(it.title) + '</h3><p>' + esc(it.description) + '</p></a></li>';
      }).join('');
      status.textContent = q
        ? (out.length ? out.length + (out.length === 1 ? ' thing' : ' things') + ' for “' + input.value.trim() + '”'
          : 'Nothing yet for “' + input.value.trim() + '”. Try fewer words, or browse below.')
        : 'Everything on the site right now.';
    }
    typeChips.addEventListener('click', function (e) {
      var chip = e.target.closest('.chip'); if (!chip) return;
      type = chip.getAttribute('data-type');
      typeChips.querySelectorAll('.chip').forEach(function (c) { c.setAttribute('aria-pressed', c === chip ? 'true' : 'false'); });
      render();
    });
    var timer;
    input.addEventListener('input', function () { clearTimeout(timer); timer = setTimeout(render, 120); });
    document.getElementById('search-form').addEventListener('submit', function (e) {
      e.preventDefault();
      var q = input.value.trim();
      history.replaceState(null, '', q ? '?q=' + encodeURIComponent(q) : location.pathname);
      if (q) track('search', { q: q.slice(0, 80) });
      render();
    });
    fetch('/search-index.json').then(function (r) { return r.json(); }).then(function (d) {
      index = d; render();
      if (input.value.trim()) track('search', { q: input.value.trim().slice(0, 80) });
    });
  }
})();
