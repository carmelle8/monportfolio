export default function Experience() {
  const experiences = [
    {
      title: "Stagiaire assistante Développeur",
      company: "Proditech Digital",
      date: "Mai 2025 – Juillet 2025",
      description: [
        "Renforcement de la sécurité des endpoints (hardening) en Python.",
        "Définition des routes API et documentation associée.",
      ],
    },
    {
      title: "Stagiaire assistante IT Manager",
      company: "Eureka Design & Konsulting",
      date: "Mai 2024 – Août 2024",
      description: [
        "Compréhension des besoins métiers et traduction analytique.",
        "Réalisation d'une application de gestion des entrées/sorties de caisse.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Expériences</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="mb-8">
            <h3 className="text-xl font-bold">{exp.title}</h3>
            <p className="text-gray-600">{exp.company} | {exp.date}</p>
            <ul className="list-disc pl-5 mt-2">
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
