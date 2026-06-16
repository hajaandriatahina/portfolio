import { FiGithub, FiLinkedin, FiFacebook, FiHeart } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-cyan-400 font-bold">&lt;/&gt;</span>
          <span className="font-bold text-white">HAJA<span className="text-cyan-400"> DEV</span></span>
        </a>

        <p className="text-gray-500 text-sm flex items-center gap-1">
          © 2026 Andriatahina Haja. Conçu avec <FiHeart size={14} className="text-red-500" /> et React
        </p>

        <div className="flex items-center gap-3">
          {[
            { icon: <FiGithub size={18} />, href: "https://github.com/" },
            { icon: <FiLinkedin size={18} />, href: "https://linkedin.com/" },
            { icon: <FiFacebook size={18} />, href: "https://facebook.com/" },
          ].map(({ icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-cyan-700/20 text-gray-500 hover:text-cyan-400 border border-white/5 hover:border-cyan-700/30 transition-all">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
