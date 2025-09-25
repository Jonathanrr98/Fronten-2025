const Badge = ({ children, variant = 'default' }) => {
  const colorClasses =
    variant === 'accent'
      ? 'bg-ink/80 text-sakura border border-sakura/60 shadow-glow'
      : 'bg-white/5 text-slate-200 border border-white/10 backdrop-blur';

  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] ${colorClasses}`}>
      {children}
    </span>
  );
};

window.Components = window.Components || {};
window.Components.Badge = Badge;
