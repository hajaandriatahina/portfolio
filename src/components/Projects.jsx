import { useState } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Gestion Hospitalière",
    desc: "Application web pour gérer les patients, rendez-vous, médecins et dossiers médicaux avec tableau de bord analytique.",
    tags: ["React", "Node.js", "MySQL", "Express"],
    github: "https://github.com/",
    live: "#",
    category: "Fullstack",
    color: "from-red-500/20 to-pink-500/10",
    border: "border-red-700/20 hover:border-red-600/40",
  },
  {
    title: "Gestion de Bibliothèque",
    desc: "Système de gestion de livres, auteurs, emprunts et utilisateurs avec interface moderne.",
    tags: ["Spring Boot", "MySQL", "React"],
    github: "https://github.com/",
    live: "#",
    category: "Fullstack",
    color: "from-green-500/20 to-emerald-500/10",
    border: "border-green-700/20 hover:border-green-600/40",
  },
  {
    title: "API REST avec FastAPI",
    desc: "API RESTful pour la gestion de produits avec authentification JWT, pagination et documentation Swagger.",
    tags: ["Node.js", "Express", "Sequelize", "MySQL"],
    github: "https://github.com/",
    live: "#",
    category: "Backend",
    color: "from-blue-500/20 to-cyan-500/10",
    border: "border-blue-700/20 hover:border-blue-600/40",
  },
  {
    title: "E-Learning Platform",
    desc: "Plateforme d'apprentissage en ligne avec cours, quiz, suivi des progrès et espace étudiant.",
    tags: ["Next.js", "Node.js", "Sequelize", "MySQL"],
    github: "https://github.com/",
    live: "#",
    category: "Fullstack",
    color: "from-cyan-500/20 to-indigo-500/10",
    border: "border-cyan-700/20 hover:border-cyan-600/40",
  },
  {
    title: "Gestion de Matériel",
    desc: "Application pour gérer le matériel informatique d'une entreprise avec suivi et état d'attribution.",
    tags: ["C#", "MySQL", "WinForms"],
    github: "https://github.com/",
    live: "#",
    category: "Desktop",
    color: "from-orange-500/20 to-amber-500/10",
    border: "border-orange-700/20 hover:border-orange-600/40",
  },
  {
    title: "Blog Personnel",
    desc: "Blog moderne avec système de commentaires et catégories, CMS intégré, dark mode.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/",
    live: "#",
    category: "Fullstack",
    color: "from-teal-500/20 to-cyan-500/10",
    border: "border-teal-700/20 hover:border-teal-600/40",
  },
];

const categories = ["Tous", "Fullstack", "Backend", "Desktop"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const filtered = activeCategory === "Tous" ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-14 flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <span className="text-cyan-400 font-mono text-sm">04.</span>
            <h2 className="text-3xl font-bold text-white">Mes projets</h2>
          </div>
          <a href="https://github.com/" target="_blank" rel="noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-cyan-400 border border-white/10 hover:border-cyan-700/50 px-4 py-2 rounded-xl transition">
            <FiGithub /> Voir tous les projets
          </a>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeCategory === cat ? "bg-cyan-600 text-white" : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <div key={p.title}
              className={`group relative bg-gradient-to-br ${p.color} border ${p.border} rounded-2xl p-6 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-900/20`}>
              <div className="flex items-start justify-between mb-4">
                <div className="bg-white/5 rounded-xl p-3">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" className="text-cyan-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                  </svg>
                </div>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition">
                    <FiGithub size={16} />
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer"
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition">
                    <FiExternalLink size={16} />
                  </a>
                </div>
              </div>

              <h3 className="text-white font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{p.desc}</p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span key={tag} className="text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>

              <a href={p.github} className="flex items-center gap-1 text-cyan-400 text-sm mt-5 font-medium group-hover:gap-2 transition-all">
                Voir le projet <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
