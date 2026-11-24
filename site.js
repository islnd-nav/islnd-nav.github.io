// Islnd — the site's script. Plain JavaScript, no build step.
// The light or dark theme of the site; the Islnd bar at the bottom of every page, which works like the
// real one on these pages; the Appearance choices of Customize, kept for the visit (sessionStorage).
// The icons here and in the pages are Lucide's (https://lucide.dev, ISC license).
(() => {
  'use strict';

  const HOST = 'islnd.getapp.it';
  const PAGES = ['/', '/features', '/customize', '/faq', '/download', '/docs', '/docs/commands', '/docs/settings', '/docs/shortcuts'];
  const DEFAULT_APPEARANCE = { position: 'bottom', size: 'xl', theme: 'auto', favicon: true, home: false };
  const ICONS = {
    home: ['M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8', 'M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'],
    plus: ['M5 12h14', 'M12 5v14'],
    reload: ['M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8', 'M21 3v5h-5']
  };

  const store = (area) => ({
    get(key) {
      try {
        return area.getItem(key);
      } catch {
        return null;
      }
    },
    set(key, value) {
      try {
        area.setItem(key, value);
      } catch {
        // storage blocked: the choice lasts until the page changes
      }
    }
  });
  const local = store(window.localStorage);
  const session = store(window.sessionStorage);

  // ——— The site's theme (the head sets it before the page draws, to avoid a flash) ———

  const toggle = document.querySelector('.theme-toggle');
  const syncToggle = () => {
    if (toggle) toggle.textContent = document.documentElement.classList.contains('dark') ? 'Light' : 'Dark';
  };
  toggle?.addEventListener('click', () => {
    const dark = document.documentElement.classList.toggle('dark');
    local.set('islnd-theme', dark ? 'dark' : 'light');
    syncToggle();
  });
  syncToggle();

  // ——— Appearance: the bar as Customize sets it ———

  let appearance = DEFAULT_APPEARANCE;
  try {
    appearance = { ...DEFAULT_APPEARANCE, ...JSON.parse(session.get('islnd-appearance') || '{}') };
  } catch {
    // a broken value: the defaults
  }

  const dock = document.querySelector('.preview-dock');

  function applyAppearance() {
    if (dock) {
      dock.dataset.position = appearance.position;
      dock.dataset.size = appearance.size;
      const scoped = appearance.theme !== 'auto';
      dock.classList.toggle('islnd-preview', scoped);
      if (scoped) dock.dataset.previewTheme = appearance.theme;
      else delete dock.dataset.previewTheme;
      dock.querySelector('[data-action="home"]').hidden = !appearance.home;
      dock.querySelector('.preview-favicon').hidden = !appearance.favicon;
    }
    for (const group of document.querySelectorAll('.choices[data-key]')) {
      for (const button of group.querySelectorAll('button')) {
        button.setAttribute('aria-pressed', String(appearance[group.dataset.key] === button.dataset.value));
      }
    }
    for (const sw of document.querySelectorAll('.switch[data-key]')) {
      sw.setAttribute('aria-checked', String(Boolean(appearance[sw.dataset.key])));
    }
  }

  function setAppearance(change) {
    appearance = { ...appearance, ...change };
    session.set('islnd-appearance', JSON.stringify(appearance));
    applyAppearance();
  }

  document.addEventListener('click', (e) => {
    const choice = e.target.closest('.choices[data-key] button');
    if (choice) setAppearance({ [choice.closest('.choices').dataset.key]: choice.dataset.value });
    const sw = e.target.closest('.switch[data-key]');
    if (sw) setAppearance({ [sw.dataset.key]: !appearance[sw.dataset.key] });
  });

  applyAppearance();

  // ——— The live bar ———

  if (!dock) return;
  const form = dock.querySelector('.preview-bar');
  const input = dock.querySelector('.preview-input');
  const list = dock.querySelector('.preview-suggestions');
  const hint = dock.querySelector('.preview-hint');
  const reloadIcon = dock.querySelector('[data-action="reload"] svg');
  const url = HOST + (location.pathname === '/' ? '' : location.pathname);
  let focused = false;
  input.value = url;

  const pathOf = (page) => (page === '/' ? '/' : `${page}/`); // the pages are folders
  const go = (page) => {
    location.href = pathOf(page);
  };

  function reload() {
    reloadIcon.classList.add('spin');
    setTimeout(() => location.reload(), 500);
  }

  const COMMANDS = [
    { command: '/home', label: 'Home', icon: ICONS.home, run: () => go('/') },
    { command: '/newtab', label: 'New tab', icon: ICONS.plus, run: () => go('/') },
    { command: '/reload', label: 'Reload', icon: ICONS.reload, run: reload }
  ];

  function svg(paths) {
    const NS = 'http://www.w3.org/2000/svg';
    const node = document.createElementNS(NS, 'svg');
    node.setAttribute('viewBox', '0 0 24 24');
    node.setAttribute('class', 'icon');
    node.setAttribute('aria-hidden', 'true');
    for (const d of paths) {
      const path = document.createElementNS(NS, 'path');
      path.setAttribute('d', d);
      node.append(path);
    }
    return node;
  }

  // The "/" list, while the field is in use and starts with "/".
  function renderList() {
    const value = input.value;
    list.hidden = !(focused && value.startsWith('/'));
    if (list.hidden) return;
    const found = COMMANDS.filter((item) => item.command.includes(value.toLowerCase()));
    list.replaceChildren(
      ...(found.length
        ? found.map((item) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.className = 'suggestion';
            const name = document.createElement('span');
            name.textContent = item.label;
            const command = document.createElement('small');
            command.textContent = item.command;
            button.append(svg(item.icon), name, command);
            button.addEventListener('mousedown', (e) => e.preventDefault()); // the field keeps the focus
            button.addEventListener('click', item.run);
            return button;
          })
        : [Object.assign(document.createElement('span'), { className: 'suggestions-empty', textContent: 'No matching commands' })])
    );
  }

  // A page of this site, a command, or else a search or an address in a new tab.
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value.trim().replace(/^https?:\/\//, '');
    if (!value) return;
    if (value === '/home' || value === '/newtab') return go('/');
    if (value === '/reload') return reload();
    const page = '/' + value.replace(HOST, '').replace(/^\/+/, '').replace(/\/$/, '');
    if (PAGES.includes(page)) return go(page); // "/faq", or the page's full address
    if (value.startsWith('/')) return; // not a command nor a page
    const away = value.includes(' ') || !value.includes('.') ? `https://www.google.com/search?q=${encodeURIComponent(value)}` : `https://${value}`;
    window.open(away, '_blank', 'noopener');
    input.blur();
  });

  input.addEventListener('focus', () => {
    focused = true;
    input.value = url;
    if (hint) hint.hidden = true;
    input.select();
    renderList();
  });
  input.addEventListener('input', renderList);
  input.addEventListener('blur', () => {
    focused = false;
    input.value = url;
    renderList();
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') input.blur();
  });

  dock.addEventListener('click', (e) => {
    const action = e.target.closest('[data-action]')?.dataset.action;
    if (action === 'back') history.back();
    else if (action === 'forward') history.forward();
    else if (action === 'reload') reload();
    else if (action === 'home' || action === 'newtab') go('/');
    else if (action === 'dismiss') hint.hidden = true;
  });
})();
