import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiFacebook } from "react-icons/fi";
import { sendContact } from "../services/api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: false, error: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: "" });
    try {
      await sendContact(form);
      setStatus({ loading: false, success: true, error: "" });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus({ loading: false, success: false, error: "Erreur lors de l'envoi. Réessayez." });
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-4 mb-14">
          <span className="text-cyan-400 font-mono text-sm">06.</span>
          <h2 className="text-3xl font-bold text-white">Contactez-moi</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-cyan-800/50 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Vous avez un projet ou une opportunité ?</h3>
              <p className="text-gray-400 leading-relaxed">
                N'hésitez pas à me contacter, je serai ravie d'échanger avec vous ! Je suis disponible pour des stages, freelances ou projets collaboratifs.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: <FiMail />, label: "Email", value: "hajaandriatahina0@gmail.vom", href: "mailto:hajandriatahina0@gmail.com" },
                { icon: <FiPhone />, label: "Téléphone", value: "+26138 51 064 93", href: "tel:+261385106493" },
                { icon: <FiMapPin />, label: "Localisation", value: "Antananarivo, Madagascar", href: "#" },
              ].map(({ icon, label, value, href }) => (
                <a key={label} href={href}
                  className="flex items-center gap-4 bg-white/3 hover:bg-white/6 border border-white/5 hover:border-cyan-700/40 rounded-xl p-4 transition group">
                  <span className="p-2 bg-cyan-700/20 text-cyan-400 rounded-xl group-hover:scale-110 transition">{icon}</span>
                  <div>
                    <p className="text-gray-500 text-xs">{label}</p>
                    <p className="text-gray-200 text-sm">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 pt-2">
              <span className="text-gray-500 text-sm">Réseaux :</span>
              {[
                { icon: <FiGithub size={18} />, href: "https://github.com/hajaandriatahina/" },
                { icon: <FiLinkedin size={18} />, href: "https://linkedin.com/" },
                { icon: <FiFacebook size={18} />, href: "https://www.facebook.com/haja.nomenjanahary.554363" },
              ].map(({ icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noreferrer"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-cyan-700/30 border border-white/10 hover:border-cyan-600/40 text-gray-400 hover:text-cyan-300 transition-all hover:scale-110">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-white/3 border border-white/5 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-400 text-xs mb-1.5 block">Nom complet</label>
                <input name="name" value={form.name} onChange={handleChange} required
                  placeholder="Votre nom"
                  className="w-full bg-white/5 border border-white/10 focus:border-cyan-500/60 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 outline-none transition" />
              </div>
              <div>
                <label className="text-gray-400 text-xs mb-1.5 block">Email</label>
                <input name="email" type="email" value={form.email} onChange={handleChange} required
                  placeholder="votre@email.com"
                  className="w-full bg-white/5 border border-white/10 focus:border-cyan-500/60 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 outline-none transition" />
              </div>
            </div>
            <div>
              <label className="text-gray-400 text-xs mb-1.5 block">Sujet</label>
              <input name="subject" value={form.subject} onChange={handleChange} required
                placeholder="Sujet de votre message"
                className="w-full bg-white/5 border border-white/10 focus:border-cyan-500/60 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 outline-none transition" />
            </div>
            <div>
              <label className="text-gray-400 text-xs mb-1.5 block">Message</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                placeholder="Décrivez votre projet ou votre message..."
                className="w-full bg-white/5 border border-white/10 focus:border-cyan-500/60 rounded-xl px-4 py-3 text-white text-sm placeholder:text-gray-600 outline-none transition resize-none" />
            </div>

            {status.success && (
              <div className="bg-green-900/30 border border-green-700/40 text-green-300 rounded-xl px-4 py-3 text-sm">
                ✅ Message envoyé avec succès ! Je vous répondrai bientôt.
              </div>
            )}
            {status.error && (
              <div className="bg-red-900/30 border border-red-700/40 text-red-300 rounded-xl px-4 py-3 text-sm">
                ❌ {status.error}
              </div>
            )}

            <button type="submit" disabled={status.loading}
              className="w-full flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 disabled:opacity-60 text-white px-6 py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-cyan-700/40">
              {status.loading ? "Envoi en cours..." : (<><FiSend size={16} /> Envoyer le message</>)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
