import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Analytics } from '@vercel/analytics/react';


function LoginModal({ isOpen, onClose }) {
  const router = useRouter();
  
  if (!isOpen) return null;

  const handleGoogleLogin = () => {
    Analytics.track('Click Google Login');
    router.push('/commingSoon');
  };

  const handleAppleLogin = () => {
    Analytics.track('Click Apple Login');
    router.push('/commingSoon');
  };

  const handleSignUp = () => {
    Analytics.track('Click Sign Up');
    router.push('/commingSoon');
  };

  const handleClose = () => {
    Analytics.track('Close Login Modal');
    router.push('/commingSoon');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[var(--white)] rounded-2xl p-6 max-w-[320px] w-full mx-4 relative shadow-lg">
        {/* Close button */}
        <button 
          className="absolute top-4 right-4 text-[var(--gray-600)] hover:text-[var(--gray-800)] transition-colors"
          onClick={handleClose}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-5 text-[var(--pink)]">Get Started!</h2>
          <button 
            className="w-full bg-white border border-gray-300 text-gray-700 font-medium py-3 px-4 rounded-full mb-3 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
            onClick={handleGoogleLogin}
          >
            <Image src="/googleIcon.png" alt="Google" width={20} height={20} />
            Sign in with Google
          </button>
          
          <button 
            className="w-full bg-black text-white font-medium py-3 px-4 rounded-full mb-3 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            onClick={handleAppleLogin}
          >
            <Image src="/appleIcon.png" alt="Apple" width={20} height={20} />
            Sign in with Apple
          </button>
          
          
          
          <div className="border-t border-gray-200 pt-4 mt-3">
            <p className="text-sm text-gray-600 mb-3">Don&apos;t have an account?</p>
            <button 
              className="w-full bg-[var(--pink)] text-white font-medium py-3 rounded-full hover:bg-[var(--mint)] transition-colors"
              onClick={handleSignUp}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
