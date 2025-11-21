import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-church-purple-200 dark:border-church-purple-800 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/church_logo.jpg"
                alt="Church Logo"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-church-purple-600 to-church-gold-600 bg-clip-text text-transparent dark:from-church-purple-400 dark:to-church-gold-400">
                New Convenant Holiness
              </span>
            </Link>
          
          </div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-church-purple-600 dark:hover:text-church-purple-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-church-purple-600 dark:hover:text-church-purple-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/announcements"
              className="text-gray-700 dark:text-gray-300 hover:text-church-purple-600 dark:hover:text-church-purple-400 transition-colors"
            >
              Announcements
            </Link>
            <Link
              href="/prayer"
              className="text-gray-700 dark:text-gray-300 hover:text-church-purple-600 dark:hover:text-church-purple-400 transition-colors"
            >
              Prayer Request
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 dark:text-gray-300 hover:text-church-purple-600 dark:hover:text-church-purple-400 transition-colors"
            >
              Contact
            </Link>
          </div>
          {/* Mobile menu button - simple version for now */}
          <div className="md:hidden">

            <button className="text-gray-700 dark:text-gray-300">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

