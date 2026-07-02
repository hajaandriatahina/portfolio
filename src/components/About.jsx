import { FiUser, FiCalendar, FiBook, FiCode, FiMail, FiMapPin } from "react-icons/fi";

const infos = [
  { icon: <FiUser />, label: "Nom", value: "Andriatahina Haja" },
  { icon: <FiCalendar />, label: "Âge", value: "24 ans" },
  { icon: <FiBook />, label: "Études", value: "Master 2 Informatique - ENI Fianarantsoa" },
  { icon: <FiCode />, label: "Spécialité", value: "Informatique Générale" },
  { icon: <FiMail />, label: "Email", value: "hajaandriatahina0@gmil.com" },
  { icon: <FiMapPin />, label: "Localisation", value: "Fianarantsoa, Madagascar" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-14">
          <span className="text-cyan-400 font-mono text-sm">02.</span>
          <h2 className="text-3xl font-bold text-white">À propos de moi</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-800/50 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Illustration */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-2xl border border-cyan-900/40 p-8 shadow-2xl">
                {/* Fake code editor */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  <span className="text-gray-500 text-xs ml-2 font-mono">profile.ts</span>
                </div>
                <pre className="text-xs font-mono leading-relaxed text-left">
                  <span className="text-blue-400">const </span>
                  <span className="text-yellow-300">developer</span>
                  <span className="text-white"> = {"{"}</span>{"\n"}
                  <span className="text-cyan-300">  name</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"Andriatahina Haja"</span>
                  <span className="text-white">,</span>{"\n"}
                  <span className="text-cyan-300">  role</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"Full Stack Dev"</span>
                  <span className="text-white">,</span>{"\n"}
                  <span className="text-cyan-300">  school</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"ENI Fianarantsoa"</span>
                  <span className="text-white">,</span>{"\n"}
                  <span className="text-cyan-300">  level</span>
                  <span className="text-white">: </span>
                  <span className="text-green-400">"Master 2"</span>
                  <span className="text-white">,</span>{"\n"}
                  <span className="text-cyan-300">  passion</span>
                  <span className="text-white">: [</span>{"\n"}
                  <span className="text-green-400">    "React", "Next.js",</span>{"\n"}
                  <span className="text-green-400">    "Spring Boot", "Node.js"</span>{"\n"}
                  <span className="text-white">  ],</span>{"\n"}
                  <span className="text-cyan-300">  available</span>
                  <span className="text-white">: </span>
                  <span className="text-blue-400">true</span>{"\n"}
                  <span className="text-white">{"}"}</span>
                </pre>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cyan-600/10 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <p className="text-gray-400 leading-relaxed">
              Je suis étudiant en Master 2 Informatique Générale à l'École Nationale d'Informatique (ENI) de Fianarantsoa et développeuse full stack. Je maîtrise plusieurs technologies modernes pour concevoir des applications web, des API et des solutions logicielles robustes.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Mon parcours m'a permis de travailler sur des projets variés allant des applications web modernes avec React et Next.js, aux backends robustes avec Node.js et Spring Boot. Je suis passionnée par la création de solutions digitales qui résolvent de vrais problèmes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {infos.map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-3 bg-white/3 hover:bg-white/5 border border-white/5 hover:border-cyan-800/40 rounded-xl p-4 transition group">
                  <span className="text-cyan-400 mt-0.5 group-hover:scale-110 transition">{icon}</span>
                  <div>
                    <p className="text-gray-500 text-xs">{label}</p>
                    <p className="text-gray-200 text-sm font-medium">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
