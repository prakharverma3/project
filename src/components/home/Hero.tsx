import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative h-[80vh] bg-cover bg-center" style={{
      backgroundImage: 'url("https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl text-white">
          <h1 className="text-5xl font-bold mb-6">New Season Arrivals</h1>
          <p className="text-xl mb-8">Discover the latest trends in fashion and explore our new collection.</p>
          <Link 
            to="/sale" 
            className="bg-white text-black px-8 py-3 rounded-full font-medium flex items-center space-x-2 hover:bg-gray-100 transition-colors w-fit"
          >
            <span>Shop Now</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}