import React from 'react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox'; // Assuming shadcn Checkbox

interface FilterSidebarProps {
  selectedPetType: string;
  onPetTypeChange: (petType: string) => void;
  // Add more filter props as needed (e.g., priceRange, amenities)
  // onPriceChange: (priceRange: [number, number]) => void;
  // selectedAmenities: string[];
  // onAmenityChange: (amenity: string, checked: boolean) => void;
}

const petTypeOptions = [
  { id: 'any', label: 'Any Pet Type', value: '' },
  { id: 'dog', label: 'Dog', value: 'dog' },
  { id: 'cat', label: 'Cat', value: 'cat' },
  { id: 'bird', label: 'Bird', value: 'bird' },
  // Add other pet types as needed
];

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  selectedPetType,
  onPetTypeChange,
}) => {
  return (
    <aside className="w-full md:w-64 lg:w-72 p-4 space-y-6 border-r border-gray-200 dark:border-gray-700">
      <div>
        <h3 className="text-lg font-semibold mb-3">Filter by Pet Type</h3>
        <RadioGroup value={selectedPetType} onValueChange={onPetTypeChange}>
          {petTypeOptions.map((option) => (
            <div key={option.id} className="flex items-center space-x-2 mb-2">
              <RadioGroupItem value={option.value} id={option.id} />
              <Label htmlFor={option.id}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Placeholder for Price Range Filter */}
      {/* <div>
        <h3 className="text-lg font-semibold mb-3">Price Range</h3>
        <p className="text-sm text-gray-500">Slider or input fields for min/max price here.</p>
      </div> */}

      {/* Placeholder for Amenities Filter */}
      {/* <div>
        <h3 className="text-lg font-semibold mb-3">Amenities</h3>
        <div className="space-y-2">
          {['Pet Bed', 'Play Area', 'Grooming Service', 'Daily Walks'].map((amenity) => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox id={`amenity-${amenity.toLowerCase().replace(' ', '-')}`} />
              <Label htmlFor={`amenity-${amenity.toLowerCase().replace(' ', '-')}`}>{amenity}</Label>
            </div>
          ))}
        </div>
      </div> */}
      
      {/* Add more filter sections as needed */}
    </aside>
  );
};

export default FilterSidebar;
