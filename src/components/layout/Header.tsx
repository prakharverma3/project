import React from 'react';
import { ShoppingCart, Menu, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

export function Header() {
  const { state, dispatch } = useCart();
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6 cursor-pointer lg:hidden" />
            <Link to="/" className="text-2xl font-bold">FASHION</Link>
          </div>
          
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="hover:text-gray-600">Home</Link>
            <Link to="/women" className="hover:text-gray-600">Women</Link>
            <Link to="/men" className="hover:text-gray-600">Men</Link>
            <Link to="/kids" className="hover:text-gray-600">Kids</Link>
            <Link to="/sale" className="hover:text-gray-600">Sale</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 cursor-pointer" />
            <User className="h-5 w-5 cursor-pointer" />
            <button 
              className="relative"
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
            >
              <ShoppingCart className="h-5 w-5 cursor-pointer" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}