
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OTPSendConfirmation = () => {
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
            <h1 className="text-4xl font-bold mb-4">OTP Sent</h1>
            <p className="text-xl opacity-90">Check your email for the verification code to continue.</p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="w-full max-w-md">
          <div className="glass-card rounded-2xl p-8 shadow-2xl text-center animate-fade-in">
            {/* Mail Icon */}
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
              <Mail className="w-10 h-10 text-white" />
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-800 mb-4">OTP Sent Successfully!</h2>
            
            {/* Message */}
            <div className="space-y-4 mb-8">
              <p className="text-gray-600 text-lg">
                An OTP has been sent to your email address.
              </p>
              <p className="text-gray-500">
                Please check your inbox and enter the code to verify your account.
              </p>
            </div>

            {/* Email Display */}
            <div className="bg-white/30 border border-white/20 rounded-xl p-4 mb-8">
              <p className="text-gray-700 font-semibold">user@example.com</p>
            </div>

            {/* Continue Button */}
            <Link to="/otp-verification">
              <Button className="w-full h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-4">
                Continue to Verification
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>

            {/* Back Link */}
            <Link to="/signup" className="text-gray-500 hover:text-gray-700 text-sm hover:underline transition-colors">
              Back to Signup
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPSendConfirmation;
