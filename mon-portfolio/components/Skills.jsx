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
        <h2 className="text-3xl font-bold mb-6">Compétences</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
