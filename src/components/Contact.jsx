import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const currentYear = new Date().getFullYear();

  // Konfigurasi animasi transisi halus saat scroll masuk layar
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    /* bg-transparent agar efek kaca transparan (backdrop-blur) bekerja lagi */
    <section id="kontak" className="pt-20 pb-0 bg-transparent px-4 relative overflow-hidden font-sans min-h-screen flex items-center justify-center">
      
      {/* Kontainer max-w-md agar ukuran form pas dan mantap di laptop */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="container mx-auto max-w-md relative z-10 w-full"
      >
        
        {/* Header Section */}
        <motion.div variants={fadeInUp} className="text-center mb-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-2"
          >
            Hubungi <span className="text-teal-400">Saya</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            transition={{ duration: 0.8 }}
            className="h-1.5 bg-teal-500 mx-auto rounded-full shadow-[0_0_15px_#2dd4bf]"
          ></motion.div>
        </motion.div>

        {/* Deskripsi Mari Berkolaborasi */}
        <motion.div variants={fadeInUp} className="mb-5 text-left px-1">
          <h3 className="text-white text-xl font-bold mb-1 tracking-tight">Mari Berkolaborasi!</h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            Saya terbuka untuk diskusi mengenai optimasi jaringan, sistem administrasi server, 
            atau kolaborasi pengembangan web. Saya siap menghadirkan solusi infrastruktur digital 
            untuk kebutuhan Anda.
          </p>
        </motion.div>

        {/* Form Kartu - PERBAIKAN: Terintegrasi penuh dengan Netlify Forms */}
        <motion.div variants={fadeInUp} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xl shadow-2xl mb-6">
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            className="space-y-4 text-left"
          >
            {/* Input hidden wajib agar sistem bot-detector Netlify mengenali form ini */}
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label className="text-xs font-medium text-gray-300 mb-1.5 block">Nama</label>
              <input 
                type="text" 
                name="nama"
                placeholder="Nama Anda"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-teal-500/50 transition-all placeholder:text-gray-600 shadow-inner"
                required
              />
            </div>
            
            <div>
              <label className="text-xs font-medium text-gray-300 mb-1.5 block">Email</label>
              <input 
                type="email" 
                name="email"
                placeholder="Email Anda"
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-teal-500/50 transition-all placeholder:text-gray-600 shadow-inner"
                required
              />
            </div>

            <div>
              <label className="text-xs font-medium text-gray-300 mb-1.5 block">Pesan</label>
              <textarea 
                rows="3" 
                name="pesan"
                placeholder="Tulis pesan Anda..."
                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-teal-500/50 transition-all placeholder:text-gray-600 resize-none shadow-inner"
                required
              ></textarea>
            </div>

            <motion.button 
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3.5 rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] border border-emerald-400/20 transition-all duration-300 text-sm uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <FaPaperPlane size={13} className="text-white" />
              Kirim Pesan
            </motion.button>
          </form>
        </motion.div>

        {/* Info Kontak - Ukuran Tetap Besar & Jelas */}
        <motion.div variants={fadeInUp} className="space-y-4 mb-6 text-left px-1">
          {/* Lokasi */}
          <div className="flex items-center gap-4">
            <div className="text-teal-400 text-base bg-white/5 border border-white/10 rounded-xl flex items-center justify-center min-w-[42px] h-[42px] backdrop-blur-md">
              <FaMapMarkerAlt />
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-0.5">Location</h4>
              <p className="text-gray-400 text-sm">Sumatera Barat, Indonesia</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="text-teal-400 text-base bg-white/5 border border-white/10 rounded-xl flex items-center justify-center min-w-[42px] h-[42px] backdrop-blur-md">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-0.5">Email</h4>
              <p className="text-gray-400 text-sm break-all">mbayupratama.official@gmail.com</p>
            </div>
          </div>

          {/* Telepon */}
          <div className="flex items-center gap-4">
            <div className="text-teal-400 text-base bg-white/5 border border-white/10 rounded-xl flex items-center justify-center min-w-[42px] h-[42px] backdrop-blur-md">
              <FaPhone />
            </div>
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-0.5">Phone</h4>
              <p className="text-gray-400 text-sm">+62 xxx-xxxx-xxxx</p>
            </div>
          </div>
        </motion.div>

        {/* Media Sosial - Tombol Lingkaran Besar & Efek Transparansi Berfungsi */}
        <motion.div variants={fadeInUp} className="text-left px-1 mb-10">
          <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-3">Follow Me</h4>
          <div className="flex gap-3">
            {[
              { icon: <FaGithub />, link: "https://github.com/mbayupratama" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/m-bayu-pratama-626034408?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
              { icon: <FaFacebook />, link: "https://www.facebook.com/share/18fmhMhwtH/" }, 
              { icon: <FaInstagram />, link: "https://www.instagram.com/mbayupratama_official?igsh=cmFrNWsydzJubDNn" }
            ].map((soc, index) => (
              <a 
                key={index}
                href={soc.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-teal-400 hover:border-teal-500/50 transition-all duration-300 text-base shadow-md backdrop-blur-md"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Footer Layout Patah Baris Otomatis */}
        <footer className="w-full pt-4 pb-4 border-t border-white/5 flex flex-col items-center justify-center m-0">
          <p className="text-gray-400 text-xs md:text-sm font-medium tracking-wide text-center leading-relaxed opacity-80 max-w-[280px] md:max-w-full mx-auto">
              © {currentYear} Muhammad Bayu | Dibuat dengan niat dan semangat belajar
          </p>
        </footer>

      </motion.div>
    </section>
  );
};

export default Contact;