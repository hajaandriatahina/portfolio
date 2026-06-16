const experiences = [
  {
    year: "2025",
    title: "Développur Full Stack",
    company: "Projet de Gestion des Notes (Projet de Fin d'Année M1)",
    location: " ENI Fianarantsoa, Madagascar",
    desc: "Conception et développement d'une plateforme de gestion des notes académiques",
    tags: ["Next.js", "Spring Boot", "MySQL"],
    color: "text-cyan-400",
    dot: "bg-cyan-500",
  },
  {
    year: "2024",
    title: "Développeur Full Stack",
    company: "Application de Gestion de Polyclinique",
    location: "Stager dans le Polyclnique PSFA andoharanofotsy",
    desc: "Conception et Développement d'une application web permettant la gestion des patients, consultations et rendez-vous..",
    tags: ["React", "Node js", "MySQl"],
    color: "text-blue-400",
    dot: "bg-blue-500",
  },
  {
    year: "2023",
    title: "Développeur Full Stack",
    company: "Projet de Gestion des Ressources Humainess",
    location: "Ministère de la Jeunesse – Fianarantsoa",
    desc: "Développement d'applications web et Développement d'une application web de gestion des ressources humaines.",
    tags: ["React", "Node.js", "Tailwind CSS"],
    color: "text-green-400",
    dot: "bg-green-500",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-14">
          <span className="text-cyan-400 font-mono text-sm">05.</span>
          <h2 className="text-3xl font-bold text-white">Expériences</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-800/50 to-transparent" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-700/60 via-blue-700/40 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative flex gap-8">
                {/* Dot */}
                <div className="relative z-10 flex-shrink-0 mt-1">
                  <div className={`w-4 h-4 rounded-full ${exp.dot} ring-4 ring-[#0a0a0f] shadow-lg`} />
                </div>

                {/* Card */}
                <div className="flex-1 bg-white/3 hover:bg-white/5 border border-white/5 hover:border-cyan-800/30 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-900/10">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <span className={`text-xs font-mono ${exp.color} font-bold`}>{exp.year}</span>
                      <h3 className="text-white font-bold text-lg mt-1">{exp.title}</h3>
                      <p className="text-gray-400 text-sm">{exp.company} · {exp.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <span key={tag} className="text-xs bg-white/8 text-gray-300 px-3 py-1 rounded-full border border-white/10">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
