import React from 'react';
import { useParams } from 'react-router-dom';
import { mockHotels } from '../data/mockData'; // Using mock data for now
import { CalendarDays, Users, Dog, Cat, Star } from 'lucide-react'; // Example icons

const HotelDetailPage = () => {
  const { id } = useParams();
  const hotel = mockHotels.find(h => h.id === id);

  if (!hotel) {
    return <div className="text-center py-10 text-petstay-gray-700">Hotel not found.</div>;
  }

  // TODO: Implement UI/UX Improvement 2: Streamlined Booking Process
  // - Design a clear booking section/form.
  // - Implement a progress bar if booking is multi-step.
  // - Ensure a persistent booking summary is visible.
  // - Use new color palette for CTAs, forms, and information display.

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white dark:bg-petstay-gray-800 shadow-xl rounded-lg overflow-hidden">
        <img src={hotel.image} alt={hotel.name} className="w-full h-64 md:h-96 object-cover" />
        
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold text-petstay-blue-600 dark:text-petstay-blue-100 mb-2">{hotel.name}</h1>
          <p className="text-petstay-gray-600 dark:text-petstay-gray-300 mb-4 text-lg">{hotel.location}</p>
          
          <div className="flex items-center mb-6">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className={`w-5 h-5 ${index < hotel.rating ? 'text-yellow-400' : 'text-petstay-gray-300'}`} fill={index < hotel.rating ? 'currentColor' : 'none'} />
            ))}
            <span className="ml-2 text-petstay-gray-700 dark:text-petstay-gray-200">{hotel.rating} stars</span>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-semibold text-petstay-gray-900 dark:text-white mb-4">About this hotel</h2>
              <p className="text-petstay-gray-700 dark:text-petstay-gray-300 leading-relaxed">
                {hotel.description || "Detailed description of the hotel, its amenities, and pet policies will be displayed here. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
              </p>
              
              <h3 className="text-xl font-semibold text-petstay-gray-900 dark:text-white mt-6 mb-3">Pet Amenities</h3>
              <ul className="list-disc list-inside space-y-1 text-petstay-gray-700 dark:text-petstay-gray-300">
                {/* These would come from hotel data */}
                <li>Spacious rooms for pets</li>
                <li>Outdoor play area</li>
                <li>Pet sitting services available</li>
                <li>Welcomes dogs <Dog className="inline w-4 h-4 text-petstay-green-500" /> & cats <Cat className="inline w-4 h-4 text-petstay-green-500" /></li>
              </ul>
            </div>

            {/* Booking Section Placeholder - UI/UX Improvement 2 */}
            <aside className="md:col-span-1 p-6 bg-petstay-beige-200 dark:bg-petstay-gray-700 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-petstay-gray-900 dark:text-white mb-4">Book Your Stay</h2>
              <p className="text-xl font-bold text-petstay-green-500 dark:text-petstay-green-100 mb-4">${hotel.pricePerNight} <span className="text-sm font-normal text-petstay-gray-700 dark:text-petstay-gray-300">/ night</span></p>
              
              {/* Placeholder for date pickers, guest/pet selection */}
              <div className="space-y-4">
                <div>
                  <label htmlFor="checkin" className="block text-sm font-medium text-petstay-gray-700 dark:text-petstay-gray-200">Check-in</label>
                  <input type="date" id="checkin" className="mt-1 block w-full p-2 border border-petstay-gray-200 dark:border-petstay-gray-600 rounded-md shadow-sm focus:ring-petstay-blue-600 focus:border-petstay-blue-600 dark:bg-petstay-gray-600 dark:text-white" />
                </div>
                <div>
                  <label htmlFor="checkout" className="block text-sm font-medium text-petstay-gray-700 dark:text-petstay-gray-200">Check-out</label>
                  <input type="date" id="checkout" className="mt-1 block w-full p-2 border border-petstay-gray-200 dark:border-petstay-gray-600 rounded-md shadow-sm focus:ring-petstay-blue-600 focus:border-petstay-blue-600 dark:bg-petstay-gray-600 dark:text-white" />
                </div>
                <div>
                  <label htmlFor="pets" className="block text-sm font-medium text-petstay-gray-700 dark:text-petstay-gray-200">Number of Pets</label>
                  <select id="pets" className="mt-1 block w-full p-2 border border-petstay-gray-200 dark:border-petstay-gray-600 rounded-md shadow-sm focus:ring-petstay-blue-600 focus:border-petstay-blue-600 dark:bg-petstay-gray-600 dark:text-white">
                    <option>1 pet</option>
                    <option>2 pets</option>
                    <option>3+ pets</option>
                  </select>
                </div>
              </div>
              
              {/* Booking Summary Placeholder */}
              <div className="mt-6 p-3 bg-petstay-blue-100 dark:bg-petstay-blue-600/30 rounded">
                <h4 className="font-semibold text-petstay-blue-700 dark:text-petstay-blue-100">Booking Summary</h4>
                <p className="text-sm text-petstay-gray-700 dark:text-petstay-gray-200">Total: $XXX.XX (Details will appear here)</p>
              </div>

              <button className="mt-6 w-full bg-petstay-orange-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors">
                Request to Book
              </button>
              <p className="text-xs text-center mt-2 text-petstay-gray-500 dark:text-petstay-gray-400">You won't be charged yet</p>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailPage;
