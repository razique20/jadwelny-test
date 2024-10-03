'use client'; 
import { useState } from "react";
import { useRouter } from 'next/navigation'; 

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter(); 

  return (
    <div className="h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex flex-col justify-center items-center relative">
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="relative z-10 flex flex-col items-center space-y-6">
       
        <h1 className="text-5xl font-extrabold text-white mb-4 animate-pulse">
          Welcome to My App
        </h1>
        <p className="text-lg text-white text-center max-w-lg">
          This is a simple app built with Next.js and styled using Tailwind CSS. 
          Explore the features on the different pages and enjoy the seamless experience.
        </p>
        <button 
          className={`px-6 py-3 text-white font-semibold rounded-lg transition-transform transform ${isHovered ? "scale-110" : "scale-100"} bg-green-500 hover:bg-green-600`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => router.push('/about')} 
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
