import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  // Data sertifikasi Anda (bisa disesuaikan atau ditambah nanti)
  const certsData = [
    {
      title: "Sertifikasi MikroTik MTCNA",
      issuer: "MikroTik Certified Network Associate",
      date: "2025",
      desc: "Kompetensi dalam konfigurasi router, manajemen bandwidth, firewall, dan routing dasar.",
      credentialLink: "#" // Masukkan link sertifikat asli jika ada
    },
    {
      title: "Pelatihan Cisco Networking Academy",
      issuer: "Cisco Systems",
      date: "2025",
      desc: "Perancangan topologi jaringan, konfigurasi VLAN, dan simulasi jaringan komputer.",
      credentialLink: "#"
    },
    {
      title: "Administrasi Server Debian",
      issuer: "Lembaga Pelatihan / Sekolah",
      date: "2024",
      desc: "Praktik konfigurasi layanan jaringan seperti DNS, DHCP, Web Server, dan FTP Server.",
      credentialLink: "#"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="certifications" className="py-20 bg-transparent px-6 relative overflow-hidden font-sans" translate="no">
      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* JUDUL SEKSI */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={fadeInUp} 
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
            Sertifikasi & <span className="text-teal-400">Pencapaian</span>
          </h2>
          <div className="w-20 h-1.5 bg-teal-500 mx-auto rounded-full shadow-[0_0_15px_#2dd4bf]"></div>
        </motion.div>

        {/* GRID KARTU SERTIFIKASI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certsData.map((cert, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#0f172a]/95 md:bg-white/[0.03] border border-white/[0.08] p-6 rounded-2xl md:backdrop-blur-md shadow-xl transition-all duration-300 hover:border-teal-500/50 flex flex-col justify-between"
            >
              <div>
                {/* Ikon Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-teal-500/10 text-teal-400 rounded-xl border border-teal-500/20 group-hover:scale-110 transition-transform duration-300">
                    <FaCertificate className="text-xl" />
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-white/5 text-gray-300 rounded-full border border-white/10">
                    {cert.date}
                  </span>
                </div>

                {/* Judul & Penerbit */}
                <h3 className="text-white font-bold text-xl mb-1 group-hover:text-teal-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-teal-400/80 text-xs font-medium mb-3">
                  {cert.issuer}
                </p>

                {/* Deskripsi */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {cert.desc}
                </p>
              </div>

              {/* Tombol Lihat Kredensial (Opsional) */}
              {cert.credentialLink !== "#" && (
                <div className="pt-4 border-t border-white/5">
                  <a 
                    href={cert.credentialLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    <span>Lihat Kredensial</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;