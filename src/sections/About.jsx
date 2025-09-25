const About = ({ data }) => {
  const { SectionHeader, Badge } = window.Components;

  return (
    <section id="acerca" className="relative mx-auto mt-24 w-full max-w-5xl rounded-3xl border border-white/5 bg-white/5 p-10 shadow-[0_40px_120px_-70px_rgba(244,114,182,0.45)]">
      <div className="absolute inset-0 -z-10 rounded-3xl bg-grid bg-[size:24px_24px] opacity-20" />
      <SectionHeader
        kicker="Biografía"
        title="Diseño interfaces con alma tecnológica"
        subtitle="Un enfoque híbrido entre la precisión del código y la estética inspirada en el futurismo nipón."
      />
      <div className="mt-8 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-start">
        <p className="leading-relaxed text-slate-300">{data.about.description}</p>
        <div className="space-y-4 rounded-2xl border border-sakura/20 bg-sakura/10 p-6">
          <Badge variant="accent">Visión</Badge>
          <p className="text-slate-100">{data.about.signature}</p>
          <div className="space-y-1 text-sm text-slate-300/80">
            <p className="font-mono uppercase tracking-[0.3em] text-slate-400">Ubicación</p>
            <p>{data.profile.location}</p>
            <p className="font-mono uppercase tracking-[0.3em] text-slate-400">Colaboración</p>
            <p>{data.profile.availability}</p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-slate-400">Toolkit</p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {data.skillGroups.map((group) => (
            <div key={group.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="font-semibold text-slate-100">{group.label}</p>
              <ul className="mt-3 space-y-1 text-sm text-slate-300/90">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-sakura">✹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Components = window.Components || {};
window.Components.About = About;
