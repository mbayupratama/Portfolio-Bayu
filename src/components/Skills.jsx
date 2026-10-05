import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillsData = [
    { 
      name: 'Debian', 
      percentage: 40, 
      image: "https://devicon-website.vercel.app/api/debian/original.svg",
      desc: "Sistem operasi server yang stabil untuk kebutuhan networking."
    },
    {
      name: 'MikroTik',
      percentage: 25,
      image: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mikrotik.svg",
      desc: "Konfigurasi RouterOS, Bandwidth Management, dan Firewall.",
      isColor: true
    },
    { 
      name: 'PuTTY', 
      percentage: 30, 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/putty/putty-original.svg",
      desc: "Aplikasi terminal emulator untuk remote akses SSH dan Serial."
    },
    { 
      name: 'Cisco Packet Tracer', 
      percentage: 20, 
      image: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cisco.svg",
      desc: "Simulasi perancangan topologi jaringan, VLAN, dan Routing OSPF.",
      isColor: true 
    },
    { 
      name: 'React', 
      percentage: 15, 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      desc: "Library JavaScript untuk membangun antarmuka web yang interaktif."
    },
    { 
      name: 'Kali Linux', 
      percentage: 10, 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kalilinux/kalilinux-original.svg",
      desc: "Distribusi Linux untuk pengujian keamanan dan penetrasi jaringan."
    },
    { 
      name: 'Tailwind CSS', 
      percentage: 15, 
      image: "https://devicon-website.vercel.app/api/tailwindcss/plain.svg",
      desc: "Framework CSS untuk desain web modern dengan cepat."
    },
    { 
      name: 'FileZilla', 
      percentage: 40, 
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/filezilla/filezilla-original.svg",
      desc: "Software FTP client untuk transfer file antar komputer dalam jaringan."
    }, 
  ];

  const kaliBlueFilter = "invert(31%) sepia(94%) saturate(1194%) hue-rotate(181deg) brightness(93%) contrast(104%)";

  // Konfigurasi animasi masuk (Fade Up) untuk kartu skills
  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="pt-20 pb-4 bg-transparent px-4 relative overflow-hidden font-sans">
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="container mx-auto max-w-sm md:max-w-5xl relative z-10"
      >
        
        {/* JUDUL SEKSI */}
        <motion.div variants={fadeInUp} className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Skills & <span className="text-teal-400">Keahlian</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            className="h-1.5 bg-teal-500 mx-auto rounded-full shadow-[0_0_15px_#2dd4bf]"
          ></motion.div>
        </motion.div>

        {/* GRID KARTU SKILLS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp} // Menghidupkan kembali animasi kemunculan per kartu
              transition={{ delay: index * 0.08 }} // Efek muncul bergantian (staggered)
              whileHover={{ y: -4 }}
              className="group bg-[#0f172a]/95 md:bg-white/[0.03] border border-white/[0.08] p-4 rounded-xl md:backdrop-blur-md shadow-xl transition-all duration-300 hover:border-teal-500/40"
            >
              {/* Bagian Konten Atas (Logo & Teks) */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center bg-white/5 rounded-xl relative">
                    <img 
                        src={skill.image} 
                        alt={skill.name} 
                        loading="lazy"
                        style={{ 
                          filter: skill.isColor 
                            ? `${kaliBlueFilter} drop-shadow(0 0 10px rgba(0, 114, 206, 0.8))` 
                            : 'drop-shadow(0 0 8px rgba(45, 212, 191, 0.4))' 
                        }}
                        className="w-7 h-7 object-contain relative z-10"
                    />
                </div>
                <div className="text-left">
                    <h3 className="text-white font-bold text-lg tracking-tight">{skill.name}</h3>
                    <p className="text-gray-400 text-[11px] mt-0.5 leading-relaxed">{skill.desc}</p>
                </div>
              </div>

              {/* Progress Bar dengan Animasi Pengisian */}
              <div className="space-y-1.5">
                  <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden border border-white/5 p-[1px]">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full shadow-[0_0_15px_rgba(45,212,191,0.5)]"
                      />
                  </div>
                  <div className="flex justify-between items-center px-0.5">
                    <span className="text-gray-500 text-[9px] font-bold tracking-[0.2em] uppercase"></span>
                    <span className="text-teal-400 font-bold text-sm">{skill.percentage}%</span>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;