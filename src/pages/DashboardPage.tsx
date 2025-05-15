import React from 'react';
import { Link } from 'react-router-dom';
import { BedDouble, PawPrint, UserCircle, MessageSquare, Star, Settings } from 'lucide-react'; // Example icons

const DashboardPage = () => {
  // TODO: Implement UI/UX Improvement 3: Personalized User Dashboard
  // - Design modular layout with customizable widgets (Upcoming Stays, My Pets, Favorites, Messages).
  // - Use new color palette for cards, CTAs, and notifications.
  // - Implement quick links and proactive notifications.
  // - Enhance pet profile management section.

  // Mock data for demonstration
  const upcomingStays = [
    { id: '1', hotelName: 'Pawsome Resort', dates: 'Oct 20 - Oct 25, 2023', petName: 'Buddy' },
  ];
  const userPets = [
    { id: 'p1', name: 'Buddy', type: 'Dog', avatar: '/placeholder-dog.jpg' }, // Replace with actual image path or component
    { id: 'p2', name: 'Whiskers', type: 'Cat', avatar: '/placeholder-cat.jpg' },
  ];

  const WidgetCard = ({ title, icon, children, ctaLink, ctaText }) => (
    <div className="bg-petstay-beige-200 dark:bg-petstay-gray-700 p-6 rounded-lg shadow-md">
      <div className="flex items-center text-petstay-blue-600 dark:text-petstay-blue-100 mb-4">
        {icon}
        <h2 className="text-xl font-semibold ml-3">{title}</h2>
      </div>
      <div className="text-petstay-gray-700 dark:text-petstay-gray-300">
        {children}
      </div>
      {ctaLink && ctaText && (
        <Link to={ctaLink} className="inline-block mt-4 bg-petstay-orange-500 text-white py-2 px-4 rounded-md hover:bg-opacity-90 text-sm">
          {ctaText}
        </Link>
      )}
    </div>
  );


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-petstay-gray-900 dark:text-white">My Dashboard</h1>
        <Link to="/profile/settings" className="text-petstay-blue-600 hover:text-petstay-blue-700 dark:text-petstay-blue-100 dark:hover:text-petstay-beige-200">
          <Settings size={24} />
        </Link>
      </div>

      {/* Grid for Dashboard Widgets - UI/UX Improvement 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Upcoming Stays Widget */}
        <WidgetCard title="Upcoming Stays" icon={<BedDouble size={24} />} ctaText="View All Stays" ctaLink="/profile/bookings">
          {upcomingStays.length > 0 ? (
            upcomingStays.map(stay => (
              <div key={stay.id} className="mb-3 pb-3 border-b border-petstay-gray-300 dark:border-petstay-gray-600 last:border-b-0 last:pb-0 last:mb-0">
                <p className="font-semibold text-petstay-gray-800 dark:text-white">{stay.hotelName}</p>
                <p className="text-sm">Pet: {stay.petName}</p>
                <p className="text-sm">{stay.dates}</p>
              </div>
            ))
          ) : (
            <p>No upcoming stays. <Link to="/search" className="text-petstay-blue-600 hover:underline">Find a hotel?</Link></p>
          )}
        </WidgetCard>

        {/* My Pets Widget */}
        <WidgetCard title="My Pets" icon={<PawPrint size={24} />} ctaText="Manage Pets" ctaLink="/profile/pets">
          {userPets.length > 0 ? (
            userPets.map(pet => (
              <div key={pet.id} className="flex items-center mb-3 pb-3 border-b border-petstay-gray-300 dark:border-petstay-gray-600 last:border-b-0 last:pb-0 last:mb-0">
                {/* Placeholder for pet avatar */}
                <div className="w-10 h-10 rounded-full bg-petstay-gray-300 dark:bg-petstay-gray-500 mr-3"></div>
                <div>
                  <p className="font-semibold text-petstay-gray-800 dark:text-white">{pet.name}</p>
                  <p className="text-sm">{pet.type}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No pets added yet. <Link to="/profile/pets/add" className="text-petstay-blue-600 hover:underline">Add a pet?</Link></p>
          )}
        </WidgetCard>
        
        {/* Favorite Hotels Widget (Example) */}
        <WidgetCard title="Favorite Hotels" icon={<Star size={24} />} ctaText="View Favorites" ctaLink="/profile/favorites">
          <p>You haven't favorited any hotels yet.</p>
          {/* List favorite hotels here */}
        </WidgetCard>

        {/* Messages Widget (Example) */}
        <WidgetCard title="Messages" icon={<MessageSquare size={24} />} ctaText="View All Messages" ctaLink="/profile/messages">
          <p>No new messages.</p>
          {/* Notification badge could be added to icon */}
        </WidgetCard>

        {/* Profile Completion Widget (Example) */}
        <WidgetCard title="Your Profile" icon={<UserCircle size={24} />} ctaText="Edit Profile" ctaLink="/profile">
          <p>Profile Completion: 75%</p>
          {/* Progress bar and link to complete profile */}
          <div className="w-full bg-petstay-gray-300 dark:bg-petstay-gray-600 rounded-full h-2.5 mt-2">
            <div className="bg-petstay-green-500 h-2.5 rounded-full" style={{width: "75%"}}></div>
          </div>
        </WidgetCard>

      </div>
    </div>
  );
};

export default DashboardPage;
