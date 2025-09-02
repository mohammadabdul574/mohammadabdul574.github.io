// Dark mode toggle with persistence
(function() {
  const root = document.documentElement;
  const key = 'prefers-theme';
  const btn = document.querySelector('.dark-toggle');

  // Initialize from localStorage; otherwise do nothing (respect OS setting via CSS)
  const saved = localStorage.getItem(key);
  if (saved === 'dark' || saved === 'light') {
    root.classList.remove('dark', 'light');
    root.classList.add(saved);
  }

  btn?.addEventListener('click', () => {
    const current = root.classList.contains('dark') ? 'dark' :
                    root.classList.contains('light') ? 'light' : null;
    const next = current === 'dark' ? 'light' : 'dark';
    root.classList.remove('dark', 'light');
    root.classList.add(next);
    localStorage.setItem(key, next);
  });
})();