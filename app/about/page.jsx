import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="relative h-screen flex flex-col justify-center items-center bg-gray-400">
      {/* Background Image */}
      <Image
        src="/path/to/your/background-image.jpg" // Replace with your image path
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-30" // Set opacity for the background
      />

      <div className="relative z-10 p-8 bg-white bg-opacity-90 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">About Me</h1>
        <p className="text-xl max-w-2xl text-gray-700">
          Hello! I'm <span className="font-semibold text-blue-600">Razique Mundakundil</span>, a passionate software engineer with experience 
          in web development, blockchain, and software engineering. Currently residing in 
          Dubai, I am looking for new opportunities as a junior software developer.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
