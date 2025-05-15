import React, { useState, useEffect } from 'react'; // Added useEffect
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (searchTerm: string, location: string) => void;
  initialQuery?: string;
  initialLocation?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, initialQuery = '', initialLocation = '' }) => {
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [location, setLocation] = useState(initialLocation);

  // Update state if initial props change (e.g., due to URL navigation or parent state change)
  useEffect(() => {
    setSearchTerm(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    setLocation(initialLocation);
  }, [initialLocation]);


  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm, location);
  };

  return (
    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow">
      <Input
        type="text"
        placeholder="Search by hotel name, amenities..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-grow"
      />
      <Input
        type="text"
        placeholder="Location (e.g., New York, NY)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="flex-grow"
      />
      <Button type="submit" className="flex items-center gap-2">
        <Search size={18} />
        Search
      </Button>
    </form>
  );
};

export default SearchBar;
