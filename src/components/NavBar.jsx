const NavBar = () => {
  const links = [
    { href: '#inicio', label: 'Inicio', kana: 'ホーム' },
    { href: '#acerca', label: 'Sobre mí', kana: '私について' },
    { href: '#proyectos', label: 'Proyectos', kana: 'プロジェクト' },
    { href: '#contacto', label: 'Contacto', kana: '連絡先' },
  ];

  return (
    <nav className="sticky top-6 z-40 mx-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-midnight/70 px-6 py-3 backdrop-blur">
      <a href="#inicio" className="font-mono text-sm uppercase tracking-[0.3em] text-slate-200">
        <span className="text-sakura">{'{ '}</span>
        Portfolio
        <span className="text-sakura">{' }'}</span>
      </a>
      <ul className="hidden gap-6 text-sm font-medium text-slate-300 md:flex">
        {links.map((link) => (
          <li key={link.href} className="group relative">
            <a href={link.href} className="flex flex-col items-center gap-0.5 transition hover:text-sakura">
              <span>{link.label}</span>
              <span className="text-[0.65rem] font-mono tracking-[0.4em] text-slate-500 group-hover:text-sakura/70">
                {link.kana}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#contacto"
        className="inline-flex items-center gap-2 rounded-full border border-sakura/50 bg-sakura/10 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-sakura/20"
      >
        Agenda una charla
        <span aria-hidden>✦</span>
      </a>
    </nav>
  );
};

window.Components = window.Components || {};
window.Components.NavBar = NavBar;
