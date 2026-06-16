import { useEffect, useRef } from "react";
import { FiGithub, FiLinkedin, FiFacebook, FiMail, FiArrowRight, FiMessageSquare } from "react-icons/fi";
import Haja from '../assets/haja.jpg'
import "../App.css"

const SKILLS = [
  { name: "JS", text: "text-yellow-400", border: "border-yellow-500/40", pos: "top-0 left-1/2 -translate-x-1/2", delay: "0s" },
  { name: "React", text: "text-cyan-400", border: "border-cyan-500/40", pos: "top-1/4 right-0", delay: "0.5s" },
  { name: "Docker", text: "text-blue-400", border: "border-blue-500/40", pos: "bottom-1/4 right-0", delay: "1s" },
  { name: "GCP", text: "text-orange-400", border: "border-orange-500/40", pos: "bottom-0 left-1/2 -translate-x-1/2", delay: "1.5s" },
  { name: "Node.js", text: "text-green-400", border: "border-green-500/40", pos: "bottom-1/4 left-0", delay: "2s" },
  { name: "Spring", text: "text-red-400", border: "border-red-500/40", pos: "top-1/4 left-0", delay: "2.5s" },
];

export default function Hero() {
  const typedRef = useRef(null);
  const titles = ["Développeuse Full Stack", "React / Next.js Dev", "Spring Boot Dev", "Node.js Backend Dev"];
  let titleIdx = 0;
  let charIdx = 0;
  let deleting = false;

  useEffect(() => {
    let timeout;
    function type() {
      const current = titles[titleIdx];
      if (!deleting) {
        charIdx++;
        if (typedRef.current) typedRef.current.textContent = current.slice(0, charIdx);
        if (charIdx === current.length) { deleting = true; timeout = setTimeout(type, 1800); return; }
      } else {
        charIdx--;
        if (typedRef.current) typedRef.current.textContent = current.slice(0, charIdx);
        if (charIdx === 0) { deleting = false; titleIdx = (titleIdx + 1) % titles.length; }
      }
      timeout = setTimeout(type, deleting ? 60 : 90);
    }
    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Petit mouvement de flottement pour les badges, sans rotation */}
      <style>{`
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .float-badge {
          animation: floatBadge 3.5s ease-in-out infinite;
        }
        .float-badge:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .float-badge, .animate-spin-slow {
            animation: none !important;
          }
        }
      `}</style>

      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-700/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-700/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div className="space-y-6 animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-cyan-900/30 border border-cyan-700/40 text-cyan-300 text-sm px-4 py-2 rounded-full">
            <span></span> Salut, je suis
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Andriatahina<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Haja</span>
          </h1>

          <h2 className="text-2xl font-semibold text-gray-300">
            Développeuse{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-400">
              <span ref={typedRef}>Full Stack</span>
              <span className="animate-blink text-cyan-400">|</span>
            </span>
          </h2>

          <p className="text-gray-400 text-base leading-relaxed max-w-md">
            Étudiante en Master 2 Informatique à ENI Fianarantsoa. Passionnée par le développement web et logiciel. J'aime construire des applications modernes, performantes et utiles.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-700/40">
              Voir mes projets <FiArrowRight />
            </a>
            <a href="#contact" className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105">
              Me contacter <FiMessageSquare />
            </a>
          </div>

          <div className="flex items-center gap-5 pt-2">
            <span className="text-gray-500 text-sm">Retrouvez-moi sur</span>
            {[
              { icon: <FiGithub size={20} />, href: "https://github.com/hajaandriatahina/", label: "GitHub" },
              { icon: <FiLinkedin size={20} />, href: "https://linkedin.com/", label: "LinkedIn" },
              { icon: <FiFacebook size={20} />, href: "https://www.facebook.com/haja.nomenjanahary.554363", label: "Facebook" },
              { icon: <FiMail size={20} />, href: "mailto:hajaandriatahina0@gmail.com", label: "Email" },
            ].map(({ icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-cyan-600/30 border border-white/10 hover:border-cyan-500/50 text-gray-400 hover:text-cyan-300 transition-all hover:scale-110">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right - Avatar */}
        <div className="flex justify-center items-center">
          <div className="relative w-[350px] h-[350px]">

            {/* Orbit Ring décoratif (statique, juste un cercle) */}
            <div className="absolute inset-0 rounded-full border border-cyan-500/20"></div>

            {/* Avatar */}
            <div className="absolute inset-[60px] rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-xl shadow-cyan-500/20">
              <img
                src={Haja}
                alt="Andriatahina Haja"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badges fixes autour de la photo, avec un léger flottement vertical */}
            <div className="absolute inset-0">
              {SKILLS.map((skill) => (
                <div key={skill.name} className={`absolute ${skill.pos}`}>
                  <div className="float-badge" style={{ animationDelay: skill.delay }}>
                    <div className={`bg-[#1a1a2e]/90 backdrop-blur-sm px-4 py-2 rounded-xl border ${skill.border} shadow-lg transition-transform duration-300 hover:scale-110`}>
                      <span className={`font-bold ${skill.text}`}>{skill.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Scroll down */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-600 text-xs animate-bounce">
        <span>Scroll</span>
        <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </div>
    </section>
  );
}