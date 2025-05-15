import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../search/SearchBar';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="absolute w-8 h-8 rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.1,
                transform: `scale(${Math.random() * 0.5 + 0.5})`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            A Safe Home Away From Home For Your Pets
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-blue-100">
            Find trusted, verified pet hotels and sitters who'll treat your furry friend like family.
          </p>
          
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <SearchBar />
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link 
              to="/search" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Find a Pet Hotel
            </Link>
            <Link 
              to="/register?type=provider" 
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              List Your Pet Hotel
            </Link>
          </div>
        </div>
      </div>
      
      {/* Trusted by section */}
      <div className="bg-white/10 backdrop-blur-sm py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-medium mb-4">Trusted by pet owners across the country</p>
          <div className="flex justify-center items-center space-x-8 flex-wrap">
            <div className="text-white font-bold text-xl">10,000+</div>
            <div className="w-px h-10 bg-white/30"></div>
            <div className="text-white font-bold text-xl">500+</div>
            <div className="w-px h-10 bg-white/30"></div>
            <div className="text-white font-bold text-xl">4.8/5</div>
          </div>
          <div className="flex justify-center items-center space-x-8 text-sm text-blue-100 mt-1 flex-wrap">
            <div>Happy Pets</div>
            <div className="opacity-0 w-px">|</div>
            <div>Verified Hotels</div>
            <div className="opacity-0 w-px">|</div>
            <div>Customer Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
