const SectionHeader = ({ title, subtitle, kicker }) => {
  return (
    <header className="space-y-3">
      {kicker ? (
        <p className="font-mono text-xs uppercase tracking-[0.4em] text-sakura/80">{kicker}</p>
      ) : null}
      <h2 className="text-3xl font-semibold text-slate-100 md:text-4xl">
        {title}
      </h2>
      {subtitle ? <p className="max-w-3xl text-slate-300/80">{subtitle}</p> : null}
    </header>
  );
};

window.Components = window.Components || {};
window.Components.SectionHeader = SectionHeader;
