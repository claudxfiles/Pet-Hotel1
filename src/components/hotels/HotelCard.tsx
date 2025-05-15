import React from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Check } from 'lucide-react';
import { Hotel } from '@/types';

interface HotelCardProps {
  hotel: Hotel;
}

const HotelCard: React.FC<HotelCardProps> = ({ hotel }) => {
  if (!hotel || !hotel.id) {
    // This is a fallback, ideally parent components (SearchPage, FeaturedHotels)
    // should filter out invalid hotel objects before passing them to HotelCard.
    console.error("HotelCard received invalid hotel data:", hotel);
    return (
      <div className="p-4 text-red-500 border border-red-500 rounded-lg">
        Error: Invalid hotel data provided to Card.
      </div>
    );
  }

  let city = '';
  let state = '';

  if (hotel.location && typeof hotel.location === 'string') {
    const parts = hotel.location.split(',');
    city = parts[0]?.trim() || '';
    if (parts.length > 1) {
      state = parts[1]?.trim() || '';
    }
  } else if (hotel.location) {
    // Fallback if location is not a string but exists
    city = String(hotel.location);
  }

  return (
    <Link 
      to={`/hotels/${hotel.id}`}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow group dark:bg-gray-800 dark:hover:shadow-gray-700/50"
    >
      <div className="relative">
        <img 
          src={hotel.imageUrl || 'https://via.placeholder.com/400x300?text=No+Image'} // Fallback image
          alt={hotel.name || 'Unnamed Hotel'} // Fallback alt text
          className="w-full h-48 object-cover transition-transform group-hover:scale-105"
        />
        
        <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm text-sm font-medium px-2 py-1 rounded dark:bg-gray-900/80 dark:text-gray-200">
          ${typeof hotel.pricePerNight === 'number' ? hotel.pricePerNight : 'N/A'}/night
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg mb-1 text-gray-900 dark:text-white">{hotel.name || 'Unnamed Hotel'}</h3>
          {typeof hotel.rating === 'number' && (
            <div className="flex items-center text-amber-500">
              <Star size={16} className="fill-amber-500" />
              <span className="text-sm font-medium ml-1">{hotel.rating.toFixed(1)}</span>
            </div>
          )}
        </div>
        
        {(city || state) && (
          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
            <MapPin size={14} className="mr-1" />
            <span>{city}{state ? `, ${state}` : ''}</span>
          </div>
        )}
        
        <div className="mb-3 flex flex-wrap gap-1">
          {Array.isArray(hotel.petTypesAllowed) && hotel.petTypesAllowed.slice(0, 3).map((type) => {
            if (typeof type === 'string' && type.length > 0) { // Ensure type is a non-empty string
              return (
                <span key={type} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded dark:bg-blue-900/50 dark:text-blue-300">
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </span>
              );
            }
            return null;
          })}
          {Array.isArray(hotel.petTypesAllowed) && hotel.petTypesAllowed.length > 3 && ( 
            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded dark:bg-gray-700 dark:text-gray-300">
              +{hotel.petTypesAllowed.length - 3} more
            </span>
          )}
        </div>
        
        {Array.isArray(hotel.amenities) && hotel.amenities.length > 0 && (
          <div className="border-t border-gray-100 dark:border-gray-700 pt-3 mt-3">
            <div className="flex flex-wrap gap-y-2">
              {hotel.amenities.slice(0, 4).map((amenity) => {
                if (typeof amenity === 'string' && amenity.length > 0) { // Ensure amenity is a non-empty string
                  return (
                    <div key={amenity} className="w-1/2 flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Check size={14} className="mr-1.5 text-green-500" />
                      <span>{amenity}</span>
                    </div>
                  );
                }
                return null;
              })}
              {hotel.amenities.length > 4 && (
                <div className="w-1/2 text-xs text-blue-600 dark:text-blue-400 font-medium mt-1">
                  +{hotel.amenities.length - 4} more amenities
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default HotelCard;
