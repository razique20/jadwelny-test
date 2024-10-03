import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-gray-500 flex flex-col justify-center items-center">

       
        <h1 className="text-4xl font-bold text-white mb-4">Welcome to My App</h1>
        <p className="text-xl text-white text-center max-w-md">
          This is a simple app built with Next.js and styled using Tailwind CSS. 
          Explore the features on the different pages and enjoy the seamless experience.
        </p>
      </div>
    </>
  );
}
