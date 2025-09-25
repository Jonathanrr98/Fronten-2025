const Projects = ({ data }) => {
  const { SectionHeader, ProjectCard } = window.Components;

  return (
    <section id="proyectos" className="mx-auto mt-24 w-full max-w-5xl space-y-10">
      <SectionHeader
        kicker="Portafolio"
        title="Selección de proyectos recientes"
        subtitle="Casos prácticos centrados en crecimiento de producto, eficiencia en desarrollo y narrativa visual."
      />
      <div className="grid gap-6">
        {data.projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

window.Components = window.Components || {};
window.Components.Projects = Projects;
