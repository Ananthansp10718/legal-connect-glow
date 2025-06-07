
import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OTPSuccess = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Visual */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800">
        <div className="absolute inset-0 bg-black/50"></div>
        <div 
          className="w-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white p-8">
            <h1 className="text-4xl font-bold mb-4">Verification Complete</h1>
            <p className="text-xl opacity-90">Your account is now ready for secure legal consultations.</p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="w-full max-w-md">
          <div className="glass-card rounded-2xl p-8 shadow-2xl text-center animate-fade-in">
            {/* Success Icon */}
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Verification Successful!</h2>
            
            {/* Message */}
            <div className="space-y-4 mb-8">
              <p className="text-gray-600 text-lg">
                Your account has been verified successfully.
              </p>
              <p className="text-gray-500">
                You can now proceed to login and access all features.
              </p>
            </div>

            {/* Success Message Box */}
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-8">
              <p className="text-emerald-700 font-semibold">🎉 Welcome to LegalConnect!</p>
            </div>

            {/* Go to Login Button */}
            <Link to="/login">
              <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Go to Login
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPSuccess;
