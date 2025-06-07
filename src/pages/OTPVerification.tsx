
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp';
import { Shield, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

const OTPVerification = () => {
  const [otp, setOtp] = useState('');
  const [countdown, setCountdown] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleResendOTP = () => {
    setCountdown(60);
    setCanResend(false);
    // Add resend logic here
  };

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
            <h1 className="text-4xl font-bold mb-4">Secure Verification</h1>
            <p className="text-xl opacity-90">Protecting your legal consultations with advanced security.</p>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <div className="w-full max-w-md">
          <div className="glass-card rounded-2xl p-8 shadow-2xl text-center">
            {/* Icon */}
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>

            {/* Title */}
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Verify Your Account</h2>
            <p className="text-gray-600 mb-8">
              Enter the 6-digit code sent to your email
              <br />
              <span className="font-semibold">user@example.com</span>
            </p>

            {/* OTP Input - Centered and Circular */}
            <div className="mb-8 flex justify-center">
              <InputOTP
                maxLength={6}
                value={otp}
                onChange={(value) => setOtp(value)}
                className="gap-3"
              >
                <InputOTPGroup className="gap-3">
                  <InputOTPSlot 
                    index={0} 
                    className="w-14 h-14 text-xl font-bold bg-white border-2 border-gray-200 rounded-full flex items-center justify-center focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" 
                  />
                  <InputOTPSlot 
                    index={1} 
                    className="w-14 h-14 text-xl font-bold bg-white border-2 border-gray-200 rounded-full flex items-center justify-center focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" 
                  />
                  <InputOTPSlot 
                    index={2} 
                    className="w-14 h-14 text-xl font-bold bg-white border-2 border-gray-200 rounded-full flex items-center justify-center focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" 
                  />
                  <InputOTPSlot 
                    index={3} 
                    className="w-14 h-14 text-xl font-bold bg-white border-2 border-gray-200 rounded-full flex items-center justify-center focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" 
                  />
                  <InputOTPSlot 
                    index={4} 
                    className="w-14 h-14 text-xl font-bold bg-white border-2 border-gray-200 rounded-full flex items-center justify-center focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" 
                  />
                  <InputOTPSlot 
                    index={5} 
                    className="w-14 h-14 text-xl font-bold bg-white border-2 border-gray-200 rounded-full flex items-center justify-center focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all" 
                  />
                </InputOTPGroup>
              </InputOTP>
            </div>

            {/* Verify Button */}
            <Button 
              className="w-full h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-6"
              disabled={otp.length < 6}
            >
              Verify
            </Button>

            {/* Resend Section */}
            <div className="space-y-4">
              {!canResend ? (
                <p className="text-gray-600">
                  Resend code in <span className="font-semibold text-blue-600">{countdown}s</span>
                </p>
              ) : (
                <button
                  onClick={handleResendOTP}
                  className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800 font-semibold hover:underline transition-colors mx-auto"
                >
                  <RotateCcw className="w-4 h-4" />
                  Resend OTP
                </button>
              )}

              <Link to="/login" className="text-gray-500 hover:text-gray-700 text-sm hover:underline transition-colors">
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
