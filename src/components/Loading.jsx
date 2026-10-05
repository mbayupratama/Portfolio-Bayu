import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    /* PERBAIKAN: Efek exit dibuat super cepat (0.2s) dan linear agar tidak stuck gelap di HP */
    <motion.div 
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        transition: { duration: 0.2, ease: "linear" } 
      }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0b1120]"
    >
      {/* Animasi Lingkaran */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="w-16 h-16 border-4 border-t-teal-400 border-gray-700/40 rounded-full mb-4"
      />
      
      {/* Teks utama buatanmu */}
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-teal-400 text-2xl font-bold italic"
      >
        Tunggu Sebentar Yaa
      </motion.h2>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 0.3 }}
        className="text-white text-sm mt-2"
      >
        Loading Portofolio...
      </motion.p>
    </motion.div>
  );
};

export default Loading;