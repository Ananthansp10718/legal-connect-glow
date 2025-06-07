
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Eye, EyeOff, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const PasswordReset = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const getPasswordStrength = (pass: string) => {
    if (pass.length === 0) return { strength: 0, text: '', color: '' };
    if (pass.length < 6) return { strength: 25, text: 'Weak', color: 'bg-red-500' };
    if (pass.length < 8) return { strength: 50, text: 'Fair', color: 'bg-yellow-500' };
    if (pass.length < 12) return { strength: 75, text: 'Good', color: 'bg-blue-500' };
    return { strength: 100, text: 'Strong', color: 'bg-green-500' };
  };

  const passwordStrength = getPasswordStrength(password);
  const passwordsMatch = password && confirmPassword && password === confirmPassword;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="w-full max-w-md">
        <div className="glass-card rounded-2xl p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Reset Password</h2>
            <p className="text-gray-600">Enter your new password below.</p>
          </div>

          <form className="space-y-6">
            {/* New Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 font-medium">New Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10 h-12 bg-white/50 border-white/20 focus:bg-white/80 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              
              {/* Password Strength Meter */}
              {password && (
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Password strength:</span>
                    <span className={`font-medium ${passwordStrength.strength >= 75 ? 'text-green-600' : passwordStrength.strength >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {passwordStrength.text}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-300 ${passwordStrength.color}`}
                      style={{ width: `${passwordStrength.strength}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-gray-700 font-medium">Confirm New Password</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm new password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="pl-10 pr-10 h-12 bg-white/50 border-white/20 focus:bg-white/80 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              
              {/* Password Match Indicator */}
              {confirmPassword && (
                <div className="flex items-center gap-2 text-sm">
                  {passwordsMatch ? (
                    <>
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-green-600">Passwords match</span>
                    </>
                  ) : (
                    <>
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-red-600">Passwords don't match</span>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Reset Password Button */}
            <Button 
              className="w-full h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              disabled={!passwordsMatch || passwordStrength.strength < 50}
            >
              Reset Password
            </Button>

            {/* Back to Login */}
            <div className="text-center">
              <Link to="/login" className="text-gray-600 hover:text-gray-800 text-sm hover:underline transition-colors">
                Back to Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
