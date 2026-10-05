import React from "react"
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <section
            id='beranda'
            className='min-h-screen flex items-center pt-28 pb-16 bg-[#0b1120] overflow-hidden'
            translate="no" /* Mencegah browser menerjemahkan halaman ini secara otomatis */
        >
            <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12'>
                
                {/* BAGIAN TEKS (KIRI) */}
                <div className='w-full md:w-3/5 text-left order-2 md:order-1'>
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className='text-4xl md:text-6xl font-bold text-white mb-4 leading-tight'
                    >
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">Bayu Pratama</span>
                    </motion.h1>
                    
                    {/* Pembungkus Typewriter */}
                    <div className='w-full max-w-full text-xl md:text-3xl font-bold text-white mb-6 whitespace-normal break-words'>
                        <Typewriter
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString('Computer Network Engineering')
                                    .pauseFor(99999999) 
                                    .start();
                            }}
                            options={{
                                autoStart: true,
                                loop: false, 
                                cursorClassName: 'text-teal-400 ml-1',
                                delay: 50,
                            }}
                        />
                    </div>

                    <p className='text-gray-400 text-base md:text-xl mb-10 max-w-2xl leading-relaxed'>
                        Saya berfokus pada administrasi jaringan dan pengembangan antarmuka web yang modern serta fungsional.
                    </p>

                    <div className='flex flex-wrap gap-4'>
                        <a href="#project" className='px-8 py-3.5 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-400 transition-all duration-300 shadow-lg shadow-teal-500/20 text-sm md:text-base'>
                            Lihat Proyek
                        </a>
                        <a href="#kontak" className='px-8 py-3.5 border-2 border-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-500/10 transition-all duration-300 text-sm md:text-base'>
                            Hubungi Saya
                        </a>
                    </div>
                </div>

                {/* BAGIAN FOTO (KANAN) */}
                <div className='w-full md:w-2/5 flex justify-center order-1 md:order-2 relative'>
                    <div className='absolute w-64 h-64 md:w-96 md:h-96 bg-purple-600 rounded-full blur-[60px] md:blur-[120px] opacity-25 md:opacity-20 animate-pulse' style={{ willChange: 'transform, opacity' }}></div>
                    
                    <div className='relative w-64 h-64 md:w-96 md:h-96 rounded-full p-1.5 bg-gradient-to-tr from-teal-400 via-blue-500 to-teal-500 shadow-2xl'>
                        <div className='w-full h-full rounded-full overflow-hidden border-[4px] border-[#0f172a] bg-[#1e293b] flex items-center justify-center'>
                            <img 
                                src={assets.profileImg} 
                                alt="Muhammad Bayu" 
                                className='w-full h-full object-cover'
                                onError={(e) => { e.target.src = "https://via.placeholder.com/500x500?text=Bayu" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero