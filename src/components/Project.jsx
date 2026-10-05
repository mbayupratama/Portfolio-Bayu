import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets'; 

const Projects = () => {
  const projectsData = [
    {
      title: "Cisco Packet Tracer",
      image: assets.projectImg1, 
      desc: "alat simulasi jaringan yang digunakan untuk merancang, membangun dan mengonfigurasi jaringan komputer secara virtual.",
      tech: ["Vlan", "OSPF", "RIP", "EIGRP"],
      link: "#"
    },
    {
      title: "Winbox Mikrotik",
      image: assets.projectImg2, 
      desc: "mengonfigurasi dan mengelola router MikroTik RouterOS secara cepat dan mudah melalui IP atau MAC Address",
      tech: ["Jaringan Dasar", "Hospot", "Vlan"],
      link: "#"
    },
    {
      title: "Debian Server",
      image: assets.projectImg3, 
      desc: "digunakan untuk mempraktikkan konfigurasi layanan jaringan seperti DNS, DHCP, FTP, Web Server, dan Firewall.",
      tech: ["Remote Server", "DNS Server", "DHCP Server", "DLL"],
      link: "#"
    }
  ];

  return (
    <section id="project" className="py-20 bg-transparent px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* JUDUL SEKSI */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-2"
          >
            Proyek <span className="text-teal-400">Saya</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            className="h-1.5 bg-teal-500 mx-auto rounded-full shadow-[0_0_15px_#2dd4bf]"
          ></motion.div>
        </div>

        {/* GRID KARTU */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl group hover:border-teal-500/50 transition-all duration-500"
            >
              {/* GAMBAR PROYEK */}
              <div className="w-full h-52 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/50 to-transparent opacity-60"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* KONTEN TEKS */}
              <div className="p-8 flex flex-col flex-grow text-left">
                <h3 className="text-white font-bold text-2xl mb-3 group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
                  {project.desc}
                </p>

                {/* TEKNOLOGI */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="text-[11px] px-4 py-1.5 bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/20 font-medium tracking-wide"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;