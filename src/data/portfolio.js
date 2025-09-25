const { useMemo } = React;

window.portfolioData = {
  profile: {
    name: 'Tu Nombre',
    role: 'Frontend Developer',
    location: 'Latinoamérica',
    availability: 'Disponible para proyectos freelance y colaboraciones remotas',
    profileImage: '/assets/profile.svg',
    tagline: 'Construyo experiencias digitales intuitivas con un toque creativo.',
    highlights: [
      'Desarrollo frontend moderno con React',
      'Automatización de flujos y diseño de sistemas UI',
      'Documentación clara orientada al crecimiento del negocio',
    ],
  },
  about: {
    description:
      'Combino diseño y desarrollo para crear productos digitales envolventes. Me enfoco en construir interfaces accesibles, escalables y con personalidad propia. Cada proyecto es una oportunidad para contar una historia a través del código.',
    signature: 'Diseño + Código = Experiencias memorables',
  },
  skillGroups: [
    {
      label: 'Core',
      items: ['React', 'TypeScript', 'JavaScript ES2023', 'Tailwind CSS'],
    },
    {
      label: 'UI',
      items: ['Design Systems', 'Figma', 'Motion Design', 'Storybook'],
    },
    {
      label: 'Workflow',
      items: ['Vite', 'CI/CD', 'Testing Library', 'Notion'],
    },
  ],
  projects: [
    {
      id: 'arcadia-dashboard',
      title: 'Arcadia Analytics',
      subtitle: 'Dashboard modular para métricas de productos digitales',
      description:
        'Panel interactivo con visualizaciones en tiempo real, tematización oscura y componentes reutilizables. Incluye sistema de filtros avanzados y accesibilidad AA.',
      tags: ['React', 'Tailwind CSS', 'D3.js'],
      links: {
        demo: '#',
        repo: '#',
      },
      status: 'En producción',
    },
    {
      id: 'luna-ecommerce',
      title: 'Luna Storefront',
      subtitle: 'E-commerce con experiencia inmersiva orientada a coleccionables',
      description:
        'Implementación de catálogo dinámico con búsqueda predictiva, personalización de temas y microinteracciones que acompañan al usuario durante todo el flujo de compra.',
      tags: ['Next.js', 'Tailwind', 'Algolia'],
      links: {
        demo: '#',
        repo: '#',
      },
      status: 'Case study',
    },
    {
      id: 'aurora-labs',
      title: 'Aurora Labs',
      subtitle: 'Landing page narrativa para un estudio creativo',
      description:
        'Storytelling interactivo inspirado en la estética neon tokyo. Incluye secciones animadas, assets ilustrados y optimización SEO para audiencias globales.',
      tags: ['React', 'Framer Motion', 'i18n'],
      links: {
        demo: '#',
        repo: '#',
      },
      status: 'Destacado',
    },
  ],
  socials: [
    { id: 'github', label: 'GitHub', url: 'https://github.com/tu-usuario' },
    { id: 'linkedin', label: 'LinkedIn', url: 'https://linkedin.com/in/tu-usuario' },
    { id: 'x', label: 'X (Twitter)', url: 'https://twitter.com/tu-usuario' },
    { id: 'email', label: 'Email', url: 'mailto:tu.email@correo.com' },
  ],
};

window.usePortfolioData = function usePortfolioData() {
  return useMemo(() => window.portfolioData, []);
};
