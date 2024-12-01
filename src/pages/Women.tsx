import React from 'react';
import { CategoryBanner } from '../components/shared/CategoryBanner';
import { ProductGrid, Product } from '../components/shared/ProductGrid';

const womenProducts: Product[] = [
  {
    id: 1,
    name: "Floral Summer Dress",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Dresses"
  },
  {
    id: 2,
    name: "Classic Blazer",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1548624149-f9b1859aa7d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Outerwear"
  },
  {
    id: 3,
    name: "High-Waist Jeans",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Jeans"
  },
  {
    id: 4,
    name: "Silk Blouse",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Tops"
  }
];

export function Women() {
  return (
    <main>
      <CategoryBanner 
        title="Women's Collection"
        description="Discover our latest women's fashion collection featuring elegant designs and trendy styles."
        image="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">New Arrivals</h2>
          <ProductGrid products={womenProducts} />
        </div>
      </section>
    </main>
  );
}