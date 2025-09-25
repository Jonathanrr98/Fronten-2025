const ProjectCard = ({ project, index }) => {
  const { Badge } = window.Components;

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-6 shadow-[0_20px_60px_-30px_rgba(99,102,241,0.45)] transition duration-300 hover:border-nebula/60 hover:bg-white/8">
      <div className="absolute -top-20 right-8 h-40 w-40 rounded-full bg-nebula/20 blur-3xl transition duration-500 group-hover:bg-sakura/25" />
      <div className="flex items-start justify-between gap-6">
        <div className="space-y-3">
          <Badge variant={index === 0 ? 'accent' : 'default'}>{project.status}</Badge>
          <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{project.subtitle}</p>
        </div>
        <span className="text-5xl text-white/5 font-mono">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <p className="mt-6 max-w-3xl text-slate-300">{project.description}</p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono uppercase tracking-[0.3em] text-slate-300"
          >
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium text-slate-100">
        {project.links.demo !== '#' ? (
          <a
            href={project.links.demo}
            className="inline-flex items-center gap-2 rounded-full border border-nebula/60 bg-nebula/10 px-4 py-2 text-nebula transition hover:bg-nebula/20"
            target="_blank"
            rel="noreferrer"
          >
            Ver demo
            <span aria-hidden>↗</span>
          </a>
        ) : null}
        {project.links.repo !== '#' ? (
          <a
            href={project.links.repo}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-slate-200 transition hover:border-nebula/60 hover:text-nebula"
            target="_blank"
            rel="noreferrer"
          >
            Código fuente
            <span aria-hidden>⌘</span>
          </a>
        ) : null}
      </div>
    </article>
  );
};

window.Components = window.Components || {};
window.Components.ProjectCard = ProjectCard;
