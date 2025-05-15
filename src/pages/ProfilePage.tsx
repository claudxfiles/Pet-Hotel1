import React from 'react';
import { useAuth } from '../contexts/AuthContext';

const ProfilePage = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900">Please log in to view your profile</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Profile</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center mb-6">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-2xl font-semibold text-blue-600">
                {user.email?.[0].toUpperCase()}
              </span>
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-semibold text-gray-900">{user.email}</h2>
              <p className="text-gray-500">Member since {new Date(user.createdAt).toLocaleDateString()}</p>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
            <div className="space-y-4">
              <button className="w-full text-left px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                Edit Profile
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                Change Password
              </button>
              <button className="w-full text-left px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                Notification Settings
              </button>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Bookings</h3>
          <div className="text-gray-500 text-center py-4">
            No recent bookings found
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
