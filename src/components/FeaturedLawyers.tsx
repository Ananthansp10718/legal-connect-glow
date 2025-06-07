
import React from 'react';

const FeaturedLawyers = () => {
  const lawyers = [
    {
      id: 1,
      name: "Advocate Priya Sharma",
      specialization: "Corporate Law",
      city: "Mumbai",
      rating: 4.9,
      reviews: 127,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "12 years"
    },
    {
      id: 2,
      name: "Advocate Rajesh Kumar",
      specialization: "Criminal Law",
      city: "Delhi",
      rating: 4.8,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "15 years"
    },
    {
      id: 3,
      name: "Advocate Anita Patel",
      specialization: "Family Law",
      city: "Bangalore",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "10 years"
    },
    {
      id: 4,
      name: "Advocate Vikram Singh",
      specialization: "Real Estate Law",
      city: "Chennai",
      rating: 4.7,
      reviews: 203,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      experience: "18 years"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Lawyers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Connect with our top-rated legal professionals who have helped thousands of clients achieve their legal goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {lawyers.map((lawyer) => (
            <div
              key={lawyer.id}
              className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-center">
                <div className="relative mb-4 mx-auto w-24 h-24">
                  <img
                    src={lawyer.image}
                    alt={lawyer.name}
                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg group-hover:border-emerald-400 transition-all duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                    {lawyer.experience}
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {lawyer.name}
                </h3>
                
                <p className="text-blue-900 font-medium mb-2">
                  {lawyer.specialization}
                </p>
                
                <p className="text-gray-600 text-sm mb-3">
                  {lawyer.city}
                </p>
                
                <div className="flex items-center justify-center space-x-1 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L0 6.91l6.564-.955L10 0l3.436 5.955L20 6.91l-5.245 4.635L16.878 18z"/>
                      </svg>
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm">
                    {lawyer.rating} ({lawyer.reviews})
                  </span>
                </div>
                
                <button className="w-full bg-blue-900 text-white py-2 px-4 rounded-xl font-medium hover:bg-blue-800 hover:scale-105 transition-all duration-300 shadow-lg">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-emerald-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-emerald-600 hover:scale-105 transition-all duration-300 shadow-lg">
            View All Lawyers
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedLawyers;
