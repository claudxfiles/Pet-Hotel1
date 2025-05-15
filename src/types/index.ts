export interface Hotel {
  id: string;
  name: string;
  description: string;
  pricePerNight: number;
  rating: number;
  imageUrl: string;
  amenities: string[];
  location: string; 
  petTypesAllowed: string[]; 
  reviews: Review[];
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  // Add other user-specific fields
}

// Add other types as needed, e.g., Booking, Pet
