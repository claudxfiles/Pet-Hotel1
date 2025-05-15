import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'New York, NY',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
      text: 'I was so worried about leaving my elderly cat behind while on vacation, but the care she received at PawsomePlace was exceptional. They sent me daily updates with photos, and I could tell she was comfortable and happy. I\'ll definitely use PetStay again!'
    },
    {
      id: 2,
      name: 'Michael Thompson',
      location: 'Seattle, WA',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 5,
      text: 'Our energetic golden retriever had the time of his life at Furry Friends Retreat! He came back tired and happy after days of playtime and pampering. The verification process gave us confidence, and the booking was seamless. Highly recommend!'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      location: 'Austin, TX',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      rating: 4,
      text: 'I\'ve tried several pet boarding options, but PetStay makes the whole process so easy. The hotel I found was perfect for my two small dogs, and the care they received was personalized to their needs. The peace of mind was worth every penny.'
    }
  ];
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  
  const goToPrevious = () => {
    setDirection('left');
    setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const goToNext = () => {
    setDirection('right');
    setActiveIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Pet Owners Say</h2>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-blue-50 rounded-xl p-8 md:p-10 relative">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                      />
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              size={18}
                              className={i < testimonial.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}
                            />
                          ))}
                        </div>
                        <p className="text-lg md:text-xl text-gray-700 italic mb-6">"{testimonial.text}"</p>
                        <div>
                          <p className="font-semibold text-lg">{testimonial.name}</p>
                          <p className="text-gray-500">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute -top-4 -left-4 w-16 h-16 text-blue-100 opacity-30">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.23.31-.606.77-1.116 1.367-1.527.46-.32.825-.313 1.087.021.056.07.066.192.033.364-.033.165-.087.396-.165.69l-.741 2.226c-.328.771-.233 1.4.285 1.884.768.484 1.328.16 1.68-.975.314-.95.41-2.137.41-3.016 0-1.513-.28-2.723-.84-3.582-.616-.936-1.736-1.402-3.163-1.402-1.328 0-2.463.467-3.416 1.402-.953.935-1.43 2.148-1.43 3.532 0 1.768.42 3.152 1.26 4.028.85.88 1.948 1.319 3.298 1.319.347 0 .825-.042 1.43-.126v-1.617zm8.57 0c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.23.31-.606.77-1.116 1.367-1.527.46-.32.825-.313 1.087.021.056.07.066.192.033.364-.033.165-.087.396-.165.69l-.741 2.226c-.328.771-.233 1.4.285 1.884.768.484 1.328.16 1.68-.975.314-.95.41-2.137.41-3.016 0-1.513-.28-2.723-.84-3.582-.616-.936-1.736-1.402-3.163-1.402-1.328 0-2.463.467-3.416 1.402-.953.935-1.43 2.148-1.43 3.532 0 1.768.42 3.152 1.26 4.028.85.88 1.948 1.319 3.298 1.319.347 0 .825-.042 1.43-.126v-1.617z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8">
            <button 
              onClick={goToPrevious}
              className="mx-2 p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex items-center mx-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`mx-1 w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={goToNext}
              className="mx-2 p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
