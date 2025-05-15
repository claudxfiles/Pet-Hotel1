import React from 'react';
import { mockHotels } from '@/data/mockData';
import HotelCard from '@/components/hotels/HotelCard';
import { Hotel } from '@/types';

const FeaturedHotels: React.FC = () => {
  // Select a few hotels to feature, e.g., the first 3 or highly rated ones
  // Ensure that we only pass valid hotel objects to HotelCard
  const featured = mockHotels
    .filter(hotel => hotel && hotel.id && typeof hotel.name === 'string') // Basic validation
    .slice(0, 3);

  if (!featured || featured.length === 0) {
    return (
      <section className="py-12 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Featured Pet Stays</h2>
          <p className="text-center text-gray-600 dark:text-gray-300">No featured hotels available at the moment.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-gray-50 dark:bg-slate-800"> {/* Changed bg for distinction */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Featured Pet Stays</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((hotel: Hotel) => (
            // HotelCard itself now has robust checks, but good to ensure valid hotel obj here too
             hotel && hotel.id ? <HotelCard key={hotel.id} hotel={hotel} /> : null
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedHotels;
