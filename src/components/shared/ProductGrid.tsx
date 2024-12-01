import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../../contexts/CartContext';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: string;
  originalPrice?: number;
  discount?: number;
}

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const { dispatch } = useCart();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.id} className="group">
          <div className="relative overflow-hidden rounded-lg aspect-[3/4] mb-4">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {product.discount && (
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full">
                -{product.discount}%
              </div>
            )}
            <div className="absolute top-4 right-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100">
                <Heart className="h-5 w-5" />
              </button>
              <button 
                onClick={() => dispatch({ type: 'ADD_ITEM', payload: product })}
                className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
              >
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
          <h3 className="font-medium mb-2">{product.name}</h3>
          <div className="flex items-center space-x-2">
            <p className="text-gray-900 font-semibold">${product.price}</p>
            {product.originalPrice && (
              <p className="text-gray-500 line-through">${product.originalPrice}</p>
            )}
          </div>
          {product.category && (
            <span className="text-sm text-gray-500">{product.category}</span>
          )}
        </div>
      ))}
    </div>
  );
}