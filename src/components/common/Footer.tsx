import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center mb-4">
              <PawPrint className="h-8 w-8 text-white" />
              <span className="ml-2 font-bold text-xl">PetStay</span>
            </Link>
            <p className="text-blue-100 mb-6">
              Finding the perfect temporary home for your pet while you're away.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-blue-200 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">For Pet Owners</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/search" className="text-blue-100 hover:text-white transition-colors">
                  Find a Pet Hotel
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-blue-100 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-blue-100 hover:text-white transition-colors">
                  Safety & Security
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-blue-100 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-blue-100 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">For Providers</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/register?type=provider" className="text-blue-100 hover:text-white transition-colors">
                  Become a Provider
                </Link>
              </li>
              <li>
                <Link to="/provider-resources" className="text-blue-100 hover:text-white transition-colors">
                  Provider Resources
                </Link>
              </li>
              <li>
                <Link to="/provider-faq" className="text-blue-100 hover:text-white transition-colors">
                  Provider FAQs
                </Link>
              </li>
              <li>
                <Link to="/provider-guidelines" className="text-blue-100 hover:text-white transition-colors">
                  Provider Guidelines
                </Link>
              </li>
              <li>
                <Link to="/provider-insurance" className="text-blue-100 hover:text-white transition-colors">
                  Insurance
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:support@petstay.com" className="text-blue-100 hover:text-white transition-colors">
                  support@petstay.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                <a href="tel:+18005551234" className="text-blue-100 hover:text-white transition-colors">
                  1-800-555-1234
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="font-medium mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-blue-800 text-white placeholder-blue-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-6 text-blue-200 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>© {currentYear} PetStay. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
