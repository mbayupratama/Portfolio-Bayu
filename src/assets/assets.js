import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

// 1. Pastikan nama file ini sudah benar (TANPA SPASI) di folder assets kamu
import profileImg from '../assets/profile.bayu.webp';
import projectImg1 from '../assets/cisco-project1.webp';
import projectImg2 from '../assets/mikrotik-project2.webp';
import projectImg3 from '../assets/debian-project3.webp';
// Tambahkan import ini jika kamu punya file gambarnya, atau arahkan ke gambar yang ada dulu agar tidak error
import projectImg4 from '../assets/cisco-project1.webp'; 
import projectImg5 from '../assets/mikrotik-project2.webp';
import projectImg6 from '../assets/debian-project3.webp';

// 2. MASUKKAN SEMUA KE DALAM ASSETS (Ini yang tadi kurang)
export const assets = {
    profileImg,
    projectImg1,
    projectImg2,
    projectImg3,
    projectImg4,
    projectImg5,
    projectImg6
};

// --- DATA LAINNYA (aboutInfo & skills tetap sama) ---

export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    // ... dst
];

export const skills = [
    // ... dst
];

// 3. SEKARANG PANGGIL MENGGUNAKAN projectImg1, projectImg2, dst.
export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with shopping cart and payment processing.",
    image: projectImg1, // Langsung panggil variabelnya
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    icons: [FaReact, FaNodeJs, FaDatabase , FaStripe],
    demo: "#",
    code: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity application with drag-and-drop functionality.",
    image: projectImg2,
    tech: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
    icons: [FaVuejs, FaFire, FaCloud , FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Fitness Tracker",
    description: "A mobile app for tracking workouts, nutrition, and health metrics.",
    image: projectImg3,
    tech: ["React Native", "GraphQL", "MySQL", "Chart.js"],
    icons: [FaReact, FaDatabase],
    demo: "#",
    code: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects and skills.",
    image: projectImg4, // Tidak akan error lagi karena sudah di-import di atas
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  // ... dan seterusnya sampai projectImg6
];

export const workData = [
  // ... dst
];