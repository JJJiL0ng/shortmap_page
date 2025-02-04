'use client';

export default function ScrollIndicator({ show }) {
    return (
        <div className={`absolute bottom-28 left-1/2 transform -translate-x-1/2 text-center transition-opacity duration-300 ${show ? 'opacity-100' : 'opacity-0'}`}>
            <div className="animate-bounce mb-2">
                <svg 
                    className="w-6 h-6 text-white mx-auto"
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
            <span className="text-sm text-gray-300">Scroll to explore</span>
        </div>
    );
}
