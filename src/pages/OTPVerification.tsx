
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
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
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

          {/* OTP Input */}
          <div className="mb-8">
            <InputOTP
              maxLength={6}
              value={otp}
              onChange={(value) => setOtp(value)}
              className="justify-center"
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} className="w-12 h-12 text-lg font-semibold bg-white/50 border-white/20" />
                <InputOTPSlot index={1} className="w-12 h-12 text-lg font-semibold bg-white/50 border-white/20" />
                <InputOTPSlot index={2} className="w-12 h-12 text-lg font-semibold bg-white/50 border-white/20" />
                <InputOTPSlot index={3} className="w-12 h-12 text-lg font-semibold bg-white/50 border-white/20" />
                <InputOTPSlot index={4} className="w-12 h-12 text-lg font-semibold bg-white/50 border-white/20" />
                <InputOTPSlot index={5} className="w-12 h-12 text-lg font-semibold bg-white/50 border-white/20" />
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
  );
};

export default OTPVerification;
