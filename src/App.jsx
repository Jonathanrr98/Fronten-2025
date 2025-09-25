const App = () => {
  const data = window.usePortfolioData();
  const { NavBar, Hero, About, Projects, Contact } = window.Components;

  return (
    <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-4 pb-16 pt-8 sm:px-8">
      <NavBar />
      <main className="flex flex-col gap-16">
        <Hero data={data} />
        <About data={data} />
        <Projects data={data} />
        <Contact data={data} />
      </main>
      <footer className="mx-auto w-full max-w-5xl rounded-3xl border border-white/5 bg-white/5 p-6 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} {data.profile.name}. Construido con React y Tailwind.</p>
      </footer>
    </div>
  );
};

window.App = App;
