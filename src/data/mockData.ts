import { Hotel } from '../types';

export const mockHotels: Hotel[] = [
  {
    id: '1',
    name: 'The Pawsome Inn',
    description: 'A luxury stay for your furry friends, with spacious rooms and a play area.',
    pricePerNight: 120,
    rating: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1559190392-e6f565900095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    amenities: ['Pet Bed', 'Food Bowls', 'Play Area', 'Grooming Service'],
    location: 'New York, NY',
    petTypesAllowed: ['dog', 'cat'],
    reviews: [
      { id: 'r1', userId: 'u1', userName: 'Alice', rating: 5, comment: 'Amazing place!', date: '2023-10-01' },
      { id: 'r2', userId: 'u2', userName: 'Bob', rating: 4, comment: 'Great, but a bit pricey.', date: '2023-10-05' },
    ],
  },
  {
    id: '2',
    name: 'Canine Comfort Suites',
    description: 'Comfortable and affordable suites for dogs of all sizes. Includes daily walks.',
    pricePerNight: 85,
    rating: 4.2,
    imageUrl: 'https://images.unsplash.com/photo-1598809603240-11065f8b1898?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    amenities: ['Daily Walks', 'Pet Bed', 'Indoor Kennels'],
    location: 'San Francisco, CA',
    petTypesAllowed: ['dog'],
    reviews: [
      { id: 'r3', userId: 'u3', userName: 'Charlie', rating: 4, comment: 'My dog loved it!', date: '2023-09-15' },
    ],
  },
  {
    id: '3',
    name: 'The Purrfect Getaway',
    description: 'A quiet and serene environment for cats, with climbing trees and cozy nooks.',
    pricePerNight: 95,
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1516283019479-9e3919fa098f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    amenities: ['Climbing Trees', 'Scratching Posts', 'Individual Rooms', 'Catnip Toys'],
    location: 'Austin, TX',
    petTypesAllowed: ['cat'],
    reviews: [
      { id: 'r4', userId: 'u4', userName: 'Diana', rating: 5, comment: 'Best cat hotel ever!', date: '2023-10-10' },
    ],
  },
  {
    id: '4',
    name: 'All Paws Resort',
    description: 'An all-inclusive resort for all types of pets. Features a pet spa and training classes.',
    pricePerNight: 150,
    rating: 4.6,
    imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    amenities: ['Pet Spa', 'Training Classes', 'Outdoor Park', 'Vet On Call'],
    location: 'Miami, FL',
    petTypesAllowed: ['dog', 'cat', 'bird'],
    reviews: [
      { id: 'r5', userId: 'u1', userName: 'Alice', rating: 4, comment: 'A bit expensive but worth it for the amenities.', date: '2023-11-01' },
      { id: 'r6', userId: 'u5', userName: 'Eve', rating: 5, comment: 'My parrot had a great time!', date: '2023-10-20' },
    ],
  },
  {
    id: '5',
    name: 'Budget Pet Stays',
    description: 'Clean and safe accommodation for pets on a budget. Basic amenities provided.',
    pricePerNight: 60,
    rating: 3.9,
    imageUrl: 'https://images.unsplash.com/photo-1587240790303-9391a2cb66a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
    amenities: ['Clean Kennels', 'Food and Water'],
    location: 'New York, NY',
    petTypesAllowed: ['dog', 'cat'],
    reviews: [
      { id: 'r7', userId: 'u2', userName: 'Bob', rating: 4, comment: 'Good value for money.', date: '2023-09-25' },
    ],
  },
];

export const mockUsers = [
  { id: 'u1', name: 'Alice Wonderland', email: 'alice@example.com' },
  { id: 'u2', name: 'Bob The Builder', email: 'bob@example.com' },
  { id: 'u3', name: 'Charlie Brown', email: 'charlie@example.com' },
  { id: 'u4', name: 'Diana Prince', email: 'diana@example.com' },
  { id: 'u5', name: 'Eve Harrington', email: 'eve@example.com' },
];
