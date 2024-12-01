import React from 'react';

interface SaleHighlightProps {
  title: string;
  description: string;
  image: string;
  discount: number;
}

export function SaleHighlight({ title, description, image, discount }: SaleHighlightProps) {
  return (
    <div className="relative overflow-hidden rounded-lg aspect-[16/9] group">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-8">
        <div className="bg-red-600 text-white text-2xl font-bold w-20 h-20 rounded-full flex items-center justify-center absolute top-4 right-4">
          {discount}%
          <br />
          OFF
        </div>
        <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
        <p className="text-white text-lg">{description}</p>
        <button className="mt-4 bg-white text-black px-6 py-2 rounded-full w-max hover:bg-gray-100 transition-colors">
          Shop Now
        </button>
      </div>
    </div>
  );
}