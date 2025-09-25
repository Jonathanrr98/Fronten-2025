const Hero = ({ data }) => {
  const { profile } = data;
  const { Badge } = window.Components;

  return (
    <section id="inicio" className="relative mx-auto mt-16 flex w-full max-w-5xl flex-col items-center gap-10 overflow-hidden rounded-3xl border border-white/5 bg-midnight/80 p-10 text-center shadow-[0_40px_120px_-60px_rgba(148,163,184,0.5)] backdrop-blur">
      <div className="absolute -left-20 top-10 h-48 w-48 rounded-full bg-sakura/20 blur-3xl" />
      <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-nebula/20 blur-3xl" />
      <Badge variant="accent">{profile.role}</Badge>
      <div className="relative h-36 w-36 overflow-hidden rounded-full border border-white/10 bg-white/10 shadow-lg">
        <img
          src={profile.profileImage}
          alt={`Retrato de ${profile.name}`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="space-y-6">
        <h1 className="text-4xl font-semibold text-white md:text-5xl">
          {profile.name}
          <span className="block font-normal text-slate-300">{profile.tagline}</span>
        </h1>
        <p className="max-w-2xl text-center text-slate-300/90">{profile.availability}</p>
      </div>
      <ul className="grid w-full gap-4 text-sm text-slate-300 md:grid-cols-3">
        {profile.highlights.map((highlight) => (
          <li
            key={highlight}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-inner shadow-black/10"
          >
            {highlight}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-200">
        <a
          href="#proyectos"
          className="inline-flex items-center gap-2 rounded-full border border-nebula/50 bg-nebula/15 px-6 py-3 text-nebula transition hover:bg-nebula/25"
        >
          Ver proyectos
          <span aria-hidden>→</span>
        </a>
        <a
          href="#contacto"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-slate-200 transition hover:border-sakura/60 hover:text-sakura"
        >
          Contáctame
          <span aria-hidden>✉</span>
        </a>
      </div>
    </section>
  );
};

window.Components = window.Components || {};
window.Components.Hero = Hero;
