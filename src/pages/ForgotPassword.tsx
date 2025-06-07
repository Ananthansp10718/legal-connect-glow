
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="w-full max-w-md">
        <div className="glass-card rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Forgot Password?</h2>
            <p className="text-gray-600">No worries, we'll send you reset instructions.</p>
          </div>

          <form className="space-y-6">
            {/* Email Input */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 font-medium">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  className="pl-10 h-12 bg-white/50 border-white/20 focus:bg-white/80 transition-all"
                />
              </div>
            </div>

            {/* Info Text */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-blue-700 text-sm">
                We'll send a link to reset your password to this email address.
              </p>
            </div>

            {/* Send Reset Link Button */}
            <Button className="w-full h-12 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Send Reset Link
            </Button>

            {/* Back to Login */}
            <Link to="/login">
              <Button
                variant="ghost"
                className="w-full h-12 text-gray-600 hover:text-gray-800 font-medium transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Login
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
