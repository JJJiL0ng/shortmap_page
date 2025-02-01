import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed w-full bg-black/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text">
            ShortsMap
          </Link>
          
          

          {/* <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors">
              Sign In
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </div> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
