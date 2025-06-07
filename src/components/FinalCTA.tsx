
import React from 'react';

const FinalCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Need legal advice?{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
              Speak to an expert lawyer today!
            </span>
          </h2>
          
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Don't let legal issues overwhelm you. Get professional guidance from our verified lawyers and resolve your concerns with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:from-emerald-600 hover:to-emerald-700 hover:scale-105 transition-all duration-300 shadow-xl min-w-[200px]">
              Get Started
            </button>
            <button className="bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-white/30 hover:scale-105 transition-all duration-300 shadow-xl min-w-[200px]">
              Learn More
            </button>
          </div>

          <div className="mt-8 text-gray-300">
            <p className="text-sm">
              🔒 100% Secure & Confidential • 24/7 Support • Money-back Guarantee
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
