/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'petstay-blue': {
          100: '#DBEAFE', // Light for subtle backgrounds or accents
          600: '#2563EB', // Vibrant yet serious, for primary brand elements and actions
          700: '#1D4ED8', // Darker for hover/active states
        },
        'petstay-beige': {
          200: '#FEF3C7', // Warm, soft beige for section backgrounds, cards
          400: '#FCD34D', // More golden for subtle accents
        },
        'petstay-green': {
          100: '#D1FAE5', // Very light for alert backgrounds or badges
          500: '#10B981', // Emerald green for success indicators, positive features
          700: '#059669', // Darker green for text on light green backgrounds
        },
        'petstay-orange': {
          100: '#FFEDD5', // Light for accents or badge backgrounds
          500: '#F97316', // Vibrant orange for important CTAs, special offers
        },
        'petstay-gray': {
          50: '#F9FAFB',   // Almost white, for page backgrounds
          100: '#F3F4F6', // For very light section backgrounds or page backgrounds
          200: '#E5E7EB', // For dividers, input backgrounds
          500: '#6B7280', // For borders, icons, less important text
          700: '#374151', // For secondary text
          900: '#111827', // For primary text, very dark
        },
        'status-error': '#EF4444',   // Red for errors
        'status-warning': '#F59E0B', // Amber for warnings
        // status-success can use petstay-green-500
        // status-info can use petstay-blue-600
      },
    },
  },
  plugins: [],
};
