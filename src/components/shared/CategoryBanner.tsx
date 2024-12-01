import React from 'react';

interface CategoryBannerProps {
  title: string;
  description: string;
  image: string;
}

export function CategoryBanner({ title, description, image }: CategoryBannerProps) {
  return (
    <div className="relative h-[50vh] bg-cover bg-center" style={{
      backgroundImage: `url("${image}")`
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-xl text-white">
          <h1 className="text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
}