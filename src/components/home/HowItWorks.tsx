import React from 'react';
import { Search, CalendarCheck, CreditCard, Heart } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: "Search & Compare",
      description: "Browse through our verified pet hotels, filter by location, services, and read reviews from other pet owners."
    },
    {
      icon: <CalendarCheck className="w-12 h-12 text-blue-600" />,
      title: "Book Your Stay",
      description: "Select your dates, add your pet's information and any special requirements, then book securely online."
    },
    {
      icon: <CreditCard className="w-12 h-12 text-blue-600" />,
      title: "Pay Securely",
      description: "Make a secure payment through our platform, with protection for both you and the provider."
    },
    {
      icon: <Heart className="w-12 h-12 text-blue-600" />,
      title: "Enjoy Peace of Mind",
      description: "Receive updates during your pet's stay, and return to a happy, well-cared-for pet."
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Finding the perfect temporary home for your pet is easy with PetStay.
            Our simple four-step process ensures a stress-free experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-blue-200 z-0 transform -translate-x-1/2">
                  <div className="absolute top-1/2 left-full transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-600"></div>
                </div>
              )}
              
              <div className="bg-white rounded-xl p-6 shadow-sm relative z-10 h-full flex flex-col items-center text-center">
                <div className="bg-blue-50 p-4 rounded-full mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg z-20">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
