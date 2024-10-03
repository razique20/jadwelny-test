import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          MyApp
        </div>
        <div className="space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link href="/about" className="text-gray-300 hover:text-white">About</Link>
          <Link href="/content" className="text-gray-300 hover:text-white">Content</Link>
        </div>
      </div>
    </nav>
  );
}
