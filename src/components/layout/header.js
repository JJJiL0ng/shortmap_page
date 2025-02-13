import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed w-full bg-[var(--white)]/80 backdrop-blur-md z-50 border-b border-[var(--gray-300)]">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-[var(--third)] opacity-5" />
      
      <nav className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            <span className="gradient-text">ShortsMap</span>
          </Link>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            
            <Link href="/contact" className="px-3 py-1 sm:px-6 sm:py-2 text-sm sm:text-base border-2 border-[var(--pink)] text-[var(--pink)] hover:bg-[var(--pink)] hover:text-white rounded-full transition-all duration-300">
              Contact us
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
