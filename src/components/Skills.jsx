const skills = [
  { name: "React.js", icon: "⚛️", level: 90, color: "from-cyan-500 to-blue-500", category: "Frontend" },
  { name: "Angular", icon: "🔴", level: 80, color: "from-red-500 to-pink-500", category: "Frontend" },
  { name: "Next.js", icon: "▲", level: 85, color: "from-gray-400 to-white", category: "Frontend" },
  { name: "Vue.js", icon: "💚", level: 75, color: "from-green-400 to-emerald-500", category: "Frontend" },
  { name: "Node.js", icon: "🟢", level: 88, color: "from-green-500 to-lime-500", category: "Backend" },
  { name: "Spring Boot", icon: "🍃", level: 82, color: "from-green-600 to-teal-500", category: "Backend" },
  { name: "C#", icon: "🔷", level: 78, color: "from-cyan-500 to-indigo-500", category: "Backend" },
  { name: "Docker", icon: "🐳", level: 70, color: "from-blue-500 to-cyan-400", category: "DevOps" },
  { name: "Git / GitHub", icon: "🐙", level: 92, color: "from-orange-400 to-red-500", category: "DevOps" },
  { name: "MySQL", icon: "🗄️", level: 85, color: "from-blue-600 to-blue-400", category: "Database" },
  { name: "PostgreSQL", icon: "🐘", level: 80, color: "from-blue-700 to-indigo-500", category: "Database" },
  { name: "Tailwind CSS", icon: "🎨", level: 92, color: "from-teal-400 to-cyan-500", category: "Frontend" },
];

const categories = ["Tous", "Frontend", "Backend", "DevOps", "Database"];

import { useState } from "react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("Tous");

  const filtered = activeCategory === "Tous" ? skills : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-14">
          <span className="text-cyan-400 font-mono text-sm">03.</span>
          <h2 className="text-3xl font-bold text-white">Mes compétences</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-800/50 to-transparent" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-cyan-600 text-white shadow-lg shadow-cyan-700/30"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((skill) => (
            <div
              key={skill.name}
              className="group bg-white/3 hover:bg-white/6 border border-white/5 hover:border-cyan-800/40 rounded-2xl p-5 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-900/20"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{skill.icon}</span>
                  <div>
                    <p className="text-white font-semibold text-sm">{skill.name}</p>
                    <p className="text-gray-600 text-xs">{skill.category}</p>
                  </div>
                </div>
                <span className="text-gray-400 text-sm font-mono">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
