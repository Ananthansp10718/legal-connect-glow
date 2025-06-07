
import React from 'react';
import { Bell, Users, FileArchive, MapPin } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Online & Offline Consultations",
      description: "Choose between video calls or in-person meetings based on your preference and convenience."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Verified Lawyers Only",
      description: "All our lawyers are thoroughly vetted and verified professionals with proven track records."
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "Secure Video Calling",
      description: "End-to-end encrypted video consultations ensuring complete privacy and security."
    },
    {
      icon: <FileArchive className="h-8 w-8" />,
      title: "Upload & Share Documents",
      description: "Securely upload and share legal documents with your chosen lawyer before or during consultation."
    },
    {
      icon: <Bell className="h-8 w-8" />,
      title: "24/7 Booking Availability",
      description: "Book consultations anytime, anywhere. Our platform is always available for your convenience."
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Location-Based Search",
      description: "Find lawyers in your area or opt for online consultations with experts from anywhere."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose LegalConnect?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of legal consultations with our comprehensive platform designed for your convenience and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/30 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-blue-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
