import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface DatePickerProps {
  onSelect: (range: { checkIn: string; checkOut: string }) => void;
  onClose: () => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ onSelect, onClose }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedRange, setSelectedRange] = useState<{
    start: Date | null;
    end: Date | null;
  }>({
    start: null,
    end: null,
  });

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handleDateClick = (date: Date) => {
    if (!selectedRange.start) {
      setSelectedRange({ start: date, end: null });
    } else if (!selectedRange.end && date > selectedRange.start) {
      setSelectedRange({ ...selectedRange, end: date });
    } else {
      setSelectedRange({ start: date, end: null });
    }
  };

  const confirmSelection = () => {
    if (selectedRange.start && selectedRange.end) {
      onSelect({
        checkIn: formatDate(selectedRange.start),
        checkOut: formatDate(selectedRange.end),
      });
    }
  };

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }
    
    // Add cells for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isToday = new Date().toDateString() === date.toDateString();
      const isSelected = 
        selectedRange.start?.toDateString() === date.toDateString() || 
        selectedRange.end?.toDateString() === date.toDateString();
      const isInRange = 
        selectedRange.start && 
        selectedRange.end && 
        date > selectedRange.start && 
        date < selectedRange.end;
      
      days.push(
        <button
          key={day}
          onClick={() => handleDateClick(date)}
          className={`
            h-10 w-10 rounded-full flex items-center justify-center text-sm transition-colors
            ${isToday ? 'border border-blue-400' : ''}
            ${isSelected ? 'bg-blue-600 text-white' : ''}
            ${isInRange ? 'bg-blue-100' : ''}
            ${!isSelected && !isInRange ? 'hover:bg-gray-100' : ''}
          `}
        >
          {day}
        </button>
      );
    }
    
    return days;
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-4 w-80">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">
          {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </h3>
        <div className="flex items-center">
          <button 
            onClick={goToPreviousMonth}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={goToNextMonth}
            className="p-1 rounded-full hover:bg-gray-100"
          >
            <ChevronRight size={20} />
          </button>
          <button 
            onClick={onClose}
            className="p-1 ml-2 rounded-full hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className="h-8 w-8 flex items-center justify-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1 mb-4">
        {renderCalendar()}
      </div>
      
      <div className="pt-2 border-t border-gray-200">
        <button
          onClick={confirmSelection}
          disabled={!selectedRange.start || !selectedRange.end}
          className={`
            w-full py-2 rounded-lg font-medium
            ${
              selectedRange.start && selectedRange.end
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default DatePicker;
