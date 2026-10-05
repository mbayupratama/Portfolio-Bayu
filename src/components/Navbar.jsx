import React, { useState } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Keterampilan', href: '#skills' },
    { name: 'Sertifikasi', href: '#certifications' },
    { name: 'Proyek', href: '#project' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050810]/85 backdrop-blur-md border-b border-white/10" translate="no">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO / NAMA */}
        <a href="#beranda" className="text-xl font-bold text-white tracking-wider">
          M Bayu <span className="text-teal-400">Pratama</span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item, index) => (
            <a 
              key={index}
              href={item.href}
              className="text-gray-300 hover:text-teal-400 font-medium transition-colors text-sm"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* TOMBOL HAMBURGER MOBILE */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white text-3xl focus:outline-none p-2 relative z-50 transition-transform active:scale-90"
          aria-label="Toggle Menu"
        >
          {isOpen ? <HiX className="text-teal-400" /> : <HiMenuAlt3 />}
        </button>

        {/* MOBILE MENU DROPDOWN - TANPA ANIMASI BERAT & ADA KOTAK PEMISAH */}
        {isOpen && (
          <div className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#050810]/98 backdrop-blur-2xl flex flex-col items-center justify-center px-8 md:hidden z-40 shadow-2xl">
            <div className="w-full max-w-xs flex flex-col gap-3">
              {menuItems.map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  onClick={() => setIsOpen(false)} // Menutup menu dan langsung mengarahkan halaman ke tujuan
                  className="w-full py-3.5 px-6 bg-white/[0.03] border border-white/10 rounded-2xl text-center text-lg font-semibold text-gray-200 hover:text-teal-400 hover:border-teal-500/50 hover:bg-white/[0.06] transition-all shadow-md"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;