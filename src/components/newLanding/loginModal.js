import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


function LoginModal({ isOpen, onClose }) {
  const router = useRouter();
  
  if (!isOpen) return null;

  const handleGoogleLogin = () => {
    router.push('/googleSorry');
  };

  const handleAppleLogin = () => {
    router.push('/appleSorry');
  };

  const handleSignUp = () => {
    router.push('/signupSorry');
  };

  const handleClose = () => {
    router.push('/closeSorry');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[var(--white)] rounded-2xl p-6 max-w-sm w-full mx-4 relative shadow-lg">
        {/* Close button */}
        <button 
          className="absolute top-4 right-4 text-[var(--pink)] hover:text-[var(--mint)] transition-colors"
          onClick={handleClose}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          <Image
            src="/android-chrome-192x192.png"
            alt="shortsmap"
            width={64}
            height={64}
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold mb-4 text-[var(--pink)]">Let&apos;s start</h2>
          
          <button 
            className="w-full bg-black text-white font-semibold py-3 rounded-lg mb-3 flex items-center justify-center gap-2"
            onClick={handleAppleLogin}
          >
            <Image src="/apple-logo.png" alt="Apple" width={20} height={20} />
            log in with Apple
          </button>
          
          <button 
            className="w-full bg-white border border-gray-300 text-black font-semibold py-3 rounded-lg mb-3 flex items-center justify-center gap-2"
            onClick={handleGoogleLogin}
          >
            <Image src="/google-logo.png" alt="Google" width={20} height={20} />
            log in with Google
          </button>
          
          <div className="border-t border-[var(--gray-200)] pt-6">
            <p className="text-[var(--gray-600)] mb-4">Don&apos;t have an account?</p>
            <button 
              className="w-full bg-[var(--mint)] text-white font-semibold py-3 rounded-lg hover:bg-[var(--pink)] transition-colors"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
