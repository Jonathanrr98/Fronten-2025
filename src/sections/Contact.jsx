const Contact = ({ data }) => {
  const { SectionHeader, Badge } = window.Components;

  return (
    <section id="contacto" className="relative mx-auto mt-24 mb-32 w-full max-w-5xl overflow-hidden rounded-3xl border border-nebula/40 bg-midnight/90 p-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.35),_transparent_60%)]" />
      <SectionHeader
        kicker="Colaboremos"
        title="¿Listo para darle vida a tu próxima idea?"
        subtitle="Escribe un mensaje o agenda una reunión virtual para conversar sobre tu proyecto. Respondo en menos de 24 horas."
      />
      <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_1fr]">
        <div className="space-y-6">
          <div className="space-y-3">
            <Badge variant="accent">Contacto directo</Badge>
            <p className="text-slate-300">
              Escríbeme al correo o conecta por la red que prefieras. También puedo sumarme a tu stack de comunicación favorito.
            </p>
          </div>
          <ul className="space-y-4">
            {data.socials.map((item) => (
              <li key={item.id}>
                <a
                  href={item.url}
                  className="group flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-5 py-4 transition hover:border-sakura/50 hover:bg-sakura/10"
                  target={item.id === 'email' ? '_self' : '_blank'}
                  rel="noreferrer"
                >
                  <div>
                    <p className="text-sm uppercase tracking-[0.4em] text-slate-400 group-hover:text-sakura">
                      {item.label}
                    </p>
                    <p className="text-slate-200">{item.url.replace('mailto:', '')}</p>
                  </div>
                  <span aria-hidden className="text-2xl text-slate-500 group-hover:text-sakura">
                    {item.id === 'email' ? '✉' : '↗'}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner shadow-black/30">
          <Badge>Disponibilidad</Badge>
          <p className="mt-4 text-lg font-semibold text-white">Reservar discovery call</p>
          <p className="mt-2 text-sm text-slate-300">
            Propón dos horarios y cuéntame brevemente el reto que quieres resolver. Prepararé ideas antes de reunirnos.
          </p>
          <a
            href="mailto:tu.email@correo.com?subject=Quiero%20colaborar%20contigo"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-nebula/60 bg-nebula/10 px-5 py-3 text-nebula transition hover:bg-nebula/20"
          >
            Enviar correo
            <span aria-hidden>→</span>
          </a>
          <div className="pointer-events-none absolute -bottom-16 right-0 h-40 w-40 rounded-full bg-sakura/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
};

window.Components = window.Components || {};
window.Components.Contact = Contact;
