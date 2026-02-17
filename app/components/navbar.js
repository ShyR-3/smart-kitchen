import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-orange-500">
          🍳 masakan apa?
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-600 hover:text-orange-500">
            Home
          </Link>
          <Link href="/favorites" className="text-gray-600 hover:text-orange-500">
            Favorit
          </Link>
        </div>
      </div>
    </nav>
  );
}