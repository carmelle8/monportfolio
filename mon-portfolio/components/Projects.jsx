export default function Projects() {
  const projects = [
    {
      title: "Application de réservation des repas du restaurant universitaire",
      description: "Application web et mobile pour consulter les menus, réserver et payer en ligne.",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "Optimisation des trajets de transport scolaire",
      description: "Application mobile pour suivre les bus en temps réel et recevoir des notifications.",
      technologies: ["React Native", "Firebase"],
    },
  ];

  return (
    <section id="projects" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Projets</h2>
        {projects.map((project, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <p className="text-gray-600 mt-2">Technologies : {project.technologies.join(", ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
