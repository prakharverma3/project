import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">FASHION</h3>
            <p className="text-gray-400">Your one-stop destination for all your fashion needs.</p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
              <li><a href="/faq" className="hover:text-white">FAQ</a></li>
              <li><a href="/shipping" className="hover:text-white">Shipping Info</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Customer Service</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/returns" className="hover:text-white">Returns</a></li>
              <li><a href="/track-order" className="hover:text-white">Track Order</a></li>
              <li><a href="/size-guide" className="hover:text-white">Size Guide</a></li>
              <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400"><Facebook /></a>
              <a href="#" className="hover:text-gray-400"><Twitter /></a>
              <a href="#" className="hover:text-gray-400"><Instagram /></a>
              <a href="#" className="hover:text-gray-400"><Youtube /></a>
            </div>
            <div className="mt-4">
              <h4 className="font-bold mb-2">Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-lg focus:outline-none"
                />
                <button className="bg-white text-black px-4 py-2 rounded-r-lg hover:bg-gray-100">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 FASHION. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}