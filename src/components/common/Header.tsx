import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PawPrint, Search, User, Menu, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  // Update scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isHomePage = location.pathname === '/';
  const isDarkHeader = isHomePage && !isScrolled && !mobileMenuOpen;

  return (
    <header 
      className={`sticky top-0 z-30 transition-colors duration-300 ${
        isScrolled || !isHomePage || mobileMenuOpen ? 'bg-white shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <PawPrint className={`h-8 w-8 ${isDarkHeader ? 'text-white' : 'text-blue-600'}`} />
            <span className={`ml-2 font-bold text-xl ${isDarkHeader ? 'text-white' : 'text-gray-800'}`}>
              PetStay
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/search" 
              className={`font-medium ${
                isDarkHeader ? 'text-white hover:text-blue-100' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Find a Pet Hotel
            </Link>
            <Link 
              to="/register?type=provider" 
              className={`font-medium ${
                isDarkHeader ? 'text-white hover:text-blue-100' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Become a Provider
            </Link>
            <Link 
              to="/search" 
              className={`flex items-center font-medium ${
                isDarkHeader ? 'text-white hover:text-blue-100' : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              <Search size={18} className="mr-1" />
              Search
            </Link>
            
            {isAuthenticated ? (
              <div className="relative group">
                <button className={`flex items-center font-medium ${
                  isDarkHeader ? 'text-white' : 'text-gray-600'
                }`}>
                  <User size={18} className="mr-1" />
                  {user?.name || 'Account'}
                </button>
                
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-right">
                  <Link to="/dashboard" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
                    Dashboard
                  </Link>
                  <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-blue-50">
                    My Profile
                  </Link>
                  <button 
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link 
                  to="/login" 
                  className={`font-medium ${
                    isDarkHeader ? 'text-white hover:text-blue-100' : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  Log In
                </Link>
                <Link 
                  to="/register" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className={`h-6 w-6 ${isDarkHeader ? 'text-white' : 'text-gray-700'}`} />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link 
              to="/search" 
              className="block font-medium text-gray-600 hover:text-blue-600 py-2"
            >
              Find a Pet Hotel
            </Link>
            <Link 
              to="/register?type=provider" 
              className="block font-medium text-gray-600 hover:text-blue-600 py-2"
            >
              Become a Provider
            </Link>
            <Link 
              to="/search" 
              className="flex items-center font-medium text-gray-600 hover:text-blue-600 py-2"
            >
              <Search size={18} className="mr-2" />
              Search
            </Link>
            
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="block font-medium text-gray-600 hover:text-blue-600 py-2">
                  Dashboard
                </Link>
                <Link to="/profile" className="block font-medium text-gray-600 hover:text-blue-600 py-2">
                  My Profile
                </Link>
                <button 
                  onClick={logout}
                  className="block w-full text-left font-medium text-gray-600 hover:text-blue-600 py-2"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <div className="pt-2 border-t border-gray-100 space-y-3">
                <Link 
                  to="/login" 
                  className="block text-center font-medium text-blue-600 py-2"
                >
                  Log In
                </Link>
                <Link 
                  to="/register" 
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
