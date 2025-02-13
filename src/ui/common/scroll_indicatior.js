'use client';

export default function ScrollIndicator({ show }) {
    return (
        <div style={{ 
            left: '50%', 
            transform: 'translateX(-50%)',
            opacity: show // show를 직접 opacity 값으로 사용
        }} 
        className={`absolute bottom-28 text-center transition-all ease-in-out duration-300 ${show === 0 ? 'pointer-events-none' : ''}`}>
            <div className="animate-bounce mb-2">
                <svg 
                    className="w-6 h-6 text-white mx-auto"
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="3" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
            </div>
            <span className="text-xl text-gray-300">Scroll to explore</span>
        </div>
    );
}
