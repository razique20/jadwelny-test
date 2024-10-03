import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-300 to-gray-100">
      <div className="absolute inset-0 z-0">
        {/* Background Image or Decorative Element */}
        <Image 
          src="/background-image.jpg" // Replace with your background image
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-30" // Adjust opacity for a classy look
        />
      </div>

      {/* Content Section */}
      <div className="relative z-10 p-10 bg-white bg-opacity-90 rounded-3xl shadow-2xl text-center max-w-3xl transform transition-transform duration-500 hover:scale-105 mb-10">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">About Me</h1>
        <p className="text-xl mb-4 text-gray-700 leading-relaxed">
          Hello! I'm <span className="font-bold text-blue-600">Razique Mundakundil</span>, a passionate software engineer with experience in web development, blockchain, and software engineering. Currently residing in Dubai, I am looking for new opportunities as a junior software developer.
        </p>
        <p className="text-xl mb-4 text-gray-700 leading-relaxed">
          I have a strong foundation in various programming languages and technologies, including React, Node.js, and Solidity. My journey in technology has been driven by a desire to create meaningful solutions and innovate within the industry.
        </p>
        <p className="text-xl mb-4 text-gray-700 leading-relaxed">
          In my spare time, I enjoy contributing to open-source projects, exploring new frameworks, and learning about emerging technologies in the blockchain space. I believe in continuous learning and strive to keep my skills sharp and up to date.
        </p>
        <p className="text-xl text-gray-700 leading-relaxed">
          If you're interested in collaborating or have any opportunities in mind, feel free to reach out!
        </p>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4  pb-10 z-10">
        <div className="w-8 h-8 bg-blue-500 rounded-full animate-bounce delay-75"></div>
        <div className="w-8 h-8 bg-blue-600 rounded-full animate-bounce delay-150"></div>
        <div className="w-8 h-8 bg-blue-700 rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
};

export default AboutPage;
