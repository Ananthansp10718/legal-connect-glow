
import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      description: "Create your account in just a few clicks. It's quick, easy, and completely secure."
    },
    {
      number: "02",
      title: "Search & Select Lawyer",
      description: "Browse through our verified lawyers based on specialization, location, and ratings."
    },
    {
      number: "03",
      title: "Book Time Slot",
      description: "Choose a convenient time slot that works for both you and your selected lawyer."
    },
    {
      number: "04",
      title: "Join Consultation",
      description: "Connect through secure video call or meet in person for your legal consultation."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting legal help has never been easier. Follow these simple steps to connect with the right lawyer for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative h-full">
              <div className="bg-white/30 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 text-center h-full flex flex-col">
                <div className="bg-gradient-to-br from-blue-900 to-purple-900 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {step.description}
                </p>
              </div>

              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                    <div className="w-0 h-0 border-l-[6px] border-l-purple-400 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
