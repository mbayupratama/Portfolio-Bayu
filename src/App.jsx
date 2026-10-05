import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Loading from './components/Loading'
import BackgroundCircles from './components/BackgroundCircles' 

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* PERBAIKAN TOTAL: Memasukkan kedua komponen ke dalam satu sistem AnimatePresence yang sama */}
      <AnimatePresence mode="wait">
        {isLoading ? (
          // Sisi Kiri (?): Tampilkan Loading saat true
          <Loading key="loading" />
        ) : (
          // Sisi Kanan (:): Tampilkan halaman utama saat false, otomatis menunggu Loading selesai exit!
          <motion.div 
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "linear" }} // Menggunakan linear agar transisi masuk super enteng di HP
            className='min-h-screen bg-[#0a0f1e] text-white relative overflow-x-hidden'
          >
            
            {/* Latar belakang bulatan halus */}
            <BackgroundCircles />

            {/* Pastikan z-index 10 agar teks berada di depan bulatan */}
            <div className='relative z-10'>
              <Navbar />
              <main>
                <Routes>
                  <Route path='/' element={<Home />} />
                </Routes>
              </main>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default App