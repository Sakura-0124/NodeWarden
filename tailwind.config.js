/** @type {import('tailwindcss').Config} */
export default {
  content: ['./webapp/index.html', './webapp/src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        canvas: 'var(--bg-accent)',
        panel: 'var(--panel)',
        'panel-soft': 'var(--panel-soft)',
        'panel-muted': 'var(--panel-muted)',
        line: 'var(--line)',
        'line-soft': 'var(--line-soft)',
        ink: 'var(--text)',
        muted: 'var(--muted)',
        'muted-strong': 'var(--muted-strong)',
        brand: 'var(--primary)',
        'brand-hover': 'var(--primary-hover)',
        'brand-strong': 'var(--primary-strong)',
        danger: 'var(--danger)',
      },
      boxShadow: {
        soft: 'var(--shadow-sm)',
        panel: 'var(--shadow-md)',
        elevated: 'var(--shadow-lg)',
      },
      fontFamily: {
        sans: [
          'MiSans',
          'Mi Sans',
          'HarmonyOS Sans SC',
          'PingFang SC',
          'Microsoft YaHei UI',
          'Microsoft YaHei',
          'Noto Sans CJK SC',
          'Noto Sans SC',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
