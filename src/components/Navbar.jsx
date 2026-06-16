import { useState, useEffect } from "react";
import { FiMoon, FiSun, FiMenu, FiX, FiDownload } from "react-icons/fi";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Expérience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0f]/90 backdrop-blur-md border-b border-cyan-900/30 shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-cyan-400 font-bold text-lg">&lt;/&gt;</span>
          <span className="font-bold text-white text-lg tracking-tight">HAJA<span className="text-cyan-400"> DEV</span></span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const id = href.replace("#", "");
            return (
              <li key={href}>
                <a href={href} className={`text-sm transition-colors duration-200 ${active === id ? "text-cyan-400 font-semibold" : "text-gray-400 hover:text-white"}`}>
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition">
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <a href="/src/assets/cv_haja.docx.pdf" download className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
            <FiDownload size={14} /> Télécharger CV
          </a>
        </div>

        <button className="md:hidden text-gray-400 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0d0d16]/95 backdrop-blur-md border-t border-cyan-900/30 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-cyan-400 transition text-sm">{label}</a>
              </li>
            ))}
            <li>
              <a href="/cv-andriatahina-haja.pdf" download className="flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm w-fit">
                <FiDownload size={14} /> Télécharger CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
