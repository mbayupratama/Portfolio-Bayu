import React from 'react';
import { motion } from 'framer-motion';
import { FaNetworkWired, FaServer, FaCode, FaGraduationCap } from 'react-icons/fa';

const About = () => {
    const tjktExpertise = [
        {
            title: 'Network Engineer',
            desc: 'Ahli dalam konfigurasi MikroTik, Routing, Switching, dan manajemen Bandwidth.',
            icon: <FaNetworkWired />
        },
        {
            title: 'Server Administration',
            desc: 'Pengelolaan Linux Server (Debian/Ubuntu), Web Server, dan keamanan jaringan.',
            icon: <FaServer />
        },
        {
            title: 'Modern Web Dev',
            desc: 'Membangun antarmuka responsif menggunakan React.js dan Tailwind CSS.',
            icon: <FaCode />
        }
    ];

    // Konfigurasi transisi halus yang serasi dengan Projects, Skills, dan Contact kamu
    const fadeInUp = {
        hidden: { opacity: 0, y: 25 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        /* PERBAIKAN: pb-4 diubah menjadi pb-12 untuk memberikan jarak/ruang yang pas agar tidak berdempetan dengan section Skills di bawahnya */
        <section id="tentang" className="pt-12 pb-12 bg-transparent relative overflow-hidden px-4 font-sans">
            
            {/* Container Utama menggunakan motion.div agar memicu scroll tunggal yang rapi */}
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.05 }}
                className="container mx-auto max-w-sm md:max-w-6xl relative z-10"
            >
                
                {/* Judul Section */}
                {/* PERBAIKAN: mb-20 dipangkas jadi mb-10 agar layout di mobile merapat proporsional */}
                <motion.div variants={fadeInUp} className="text-center mb-10">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight"
                    >
                        Tentang <span className="text-teal-400">Saya</span>
                    </motion.h2>
                    <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: 80 }}
                        transition={{ duration: 0.8 }}
                        className="h-1.5 bg-teal-500 mx-auto rounded-full shadow-[0_0_15px_#2dd4bf]"
                    ></motion.div>
                </motion.div>

                {/* PERBAIKAN: Gap disesuaikan dari 12 ke 6 agar lebih padat di tampilan mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                    
                    {/* Sisi Kiri: Deskripsi Detail */}
                    {/* PERBAIKAN: Diubah menggunakan variants fadeInUp agar seirama dengan sisi kanan */}
                    <motion.div variants={fadeInUp} className="space-y-4 text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/10 border border-teal-500/20 rounded-full text-teal-400">
                            <FaGraduationCap className="text-sm" />
                            <span className="font-bold uppercase tracking-[0.2em] text-[9px]">Student Profile</span>
                        </div>
                        
                        <h3 className="text-xl md:text-4xl font-bold text-white leading-snug">
                            Membangun Konektivitas melalui <span className="text-teal-400">Infrastruktur Digital.</span>
                        </h3>
                        
                        {/* KARTU DESKRIPSI: Padding diubah dari p-8 ke p-5 agar hemat ruang vertikal di HP */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl">
                            <p className="text-gray-400 leading-relaxed text-xs mb-3">
                                Saya adalah siswa jurusan <span className="text-white font-semibold">TJKT</span> yang berdedikasi dalam memahami arsitektur jaringan. Fokus saya mencakup implementasi <span className="text-teal-400 font-medium">VLAN, Routing OSPF</span>, hingga keamanan sistem pada lingkungan <span className="text-white">Debian Server</span>.
                            </p>
                            <p className="text-gray-400 leading-relaxed text-xs">
                                Bagi saya, jaringan yang andal adalah pondasi utama dari transformasi digital masa depan yang efisien.
                            </p>
                        </div>
                    </motion.div>

                    {/* Sisi Kanan: Kartu Keahlian */}
                    {/* PERBAIKAN: Gap dirapatkan dari 5 ke 3.5 */}
                    <div className="grid gap-3.5 mt-2">
                        {tjktExpertise.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp} // Mengikat ke animasi masuk global
                                transition={{ delay: index * 0.1 }} // Efek stagger mengalir bergantian
                                viewport={{ once: true }}
                                whileHover={{ 
                                    y: -3,
                                    borderColor: 'rgba(45, 212, 191, 0.4)',
                                    backgroundColor: 'rgba(255, 255, 255, 0.08)' 
                                }}
                                /* KARTU SKILL: p-6 diubah ke p-4 dan rounded disesuaikan ke xl agar pas di genggaman layar HP */
                                className="group bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-xl flex gap-4 items-center transition-all duration-500 shadow-xl relative overflow-hidden"
                            >
                                {/* Ukuran box ikon disesuaikan dari h-[56px] ke h-11 agar seimbang */}
                                <div className="min-w-[44px] h-11 bg-teal-500/10 border border-teal-500/20 rounded-xl flex items-center justify-center text-xl text-teal-400 shadow-[0_0_15px_rgba(45,212,191,0.1)] transition-transform group-hover:scale-110">
                                    {skill.icon}
                                </div>
                                
                                <div className="relative z-10 text-left">
                                    <h4 className="text-white font-bold text-sm mb-0.5 group-hover:text-teal-400 transition-colors">
                                        {skill.title}
                                    </h4>
                                    <p className="text-gray-400 text-[11px] leading-relaxed group-hover:text-gray-300 transition-colors">
                                        {skill.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </motion.div>
        </section>
    );
};

export default About;