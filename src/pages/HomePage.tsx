import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Heart, Shield, PawPrint } from 'lucide-react';
import Hero from '../components/home/Hero';
import FeaturedHotels from '../components/home/FeaturedHotels';
import HowItWorks from '../components/home/HowItWorks';
import Testimonials from '../components/home/Testimonials';
import { SplineSceneBasic } from '@/components/ui/demo';

const HomePage = () => {
  const benefits = [
    {
      icon: <Search className="w-6 h-6 text-petstay-blue-600" />, // Updated color
      title: 'Find the Perfect Match',
      description: 'Search through verified pet hotels that match your pet\'s specific needs.'
    },
    {
      icon: <Shield className="w-6 h-6 text-petstay-green-500" />, // Updated color
      title: 'Verified Providers',
      description: 'All pet hotels undergo a thorough verification process for your peace of mind.'
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-500" />, // Consider updating to a palette color e.g. petstay-orange-500 if appropriate
      title: 'Care & Comfort',
      description: 'Ensure your pet receives the specific care they need while you\'re away.'
    },
    {
      icon: <PawPrint className="w-6 h-6 text-petstay-orange-500" />, // Updated color
      title: 'Hassle-free Booking',
      description: 'Book, pay, and communicate all in one secure platform.'
    }
  ];

  return (
    // Apply new background color from the palette
    <div className="min-h-screen bg-petstay-gray-50 dark:bg-petstay-gray-900">
      <Hero />
      
      {/* Section for Spline - could use a subtle background from the new palette */}
      <section className="py-8 md:py-12 bg-white dark:bg-petstay-gray-700"> {/* Example: dark:bg-petstay-gray-800 or a beige */}
        <div className="container mx-auto px-4">
          <SplineSceneBasic />
        </div>
      </section>
      
      {/* "Why Choose PetStay?" section - can utilize new palette for text and backgrounds */}
      <section className="py-12 bg-white dark:bg-petstay-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-petstay-gray-900 dark:text-white">Why Choose PetStay?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              // Example of using new palette for cards: bg-petstay-blue-100 or bg-petstay-beige-200
              <div key={index} className="bg-petstay-blue-100 dark:bg-petstay-blue-600/30 p-6 rounded-lg transition-transform hover:scale-105 shadow-sm hover:shadow-md">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-petstay-gray-800 dark:text-white">{benefit.title}</h3>
                <p className="text-petstay-gray-700 dark:text-petstay-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              to="/search" 
              // Using new primary button color
              className="inline-block bg-petstay-blue-600 hover:bg-petstay-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Find a Pet Hotel
            </Link>
          </div>
        </div>
      </section>
      
      <FeaturedHotels />
      <HowItWorks />
      <Testimonials />
      
      {/* Call to Action section - using primary and accent colors */}
      <section className="py-16 bg-petstay-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Give Your Pet the Vacation They Deserve?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of pet owners who trust PetStay for their pet's accommodation needs.</p>
          <Link 
            to="/register" 
            // Contrasting button for this section
            className="inline-block bg-white text-petstay-blue-600 hover:bg-petstay-gray-100 font-semibold py-3 px-8 rounded-full transition-colors"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
