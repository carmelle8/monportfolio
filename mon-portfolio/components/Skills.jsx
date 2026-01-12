export default function Skills() {
  const skills = [
    { name: "SQL", level: "Avancé" },
    { name: "Python", level: "Intermédiaire" },
    { name: "Power BI", level: "Avancé" },
    { name: "Excel", level: "Avancé" },
    { name: "AWS/GCP", level: "Débutant" },
    { name: "React", level: "Intermédiaire" },
    { name: "Java", level: "Intermédiaire" },
  ];

  return (
    <section id="skills" className="py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Compétences</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-center">{skill.name}</h3>
              <p className="text-center text-gray-600">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
