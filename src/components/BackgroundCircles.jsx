import React from 'react';

const BackgroundCircles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050810]">
      
      {/* 1. BULATAN TEAL (Kiri Atas) */}
      <div 
        className="absolute top-[-10%] left-[-10%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] bg-teal-500/15 blur-[60px] md:blur-[120px] rounded-full md:animate-pulse"
        style={{ animationDuration: '8s', willChange: 'transform' }}
      ></div>

      {/* 2. BULATAN BIRU (Tengah Kanan) */}
      <div 
        className="absolute top-[25%] right-[-10%] w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-blue-600/10 blur-[80px] md:blur-[150px] rounded-full md:animate-pulse"
        style={{ animationDuration: '12s', willChange: 'transform' }}
      ></div>

      {/* 3. AKSEN UNGU/INDIGO (Bawah Kiri) */}
      <div 
        className="absolute bottom-[5%] left-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-indigo-500/10 blur-[60px] md:blur-[100px] rounded-full md:animate-pulse"
        style={{ animationDuration: '10s', willChange: 'transform' }}
      ></div>
      
    </div>
  );
};

export default BackgroundCircles;