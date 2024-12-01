import React from 'react';
import { CategoryBanner } from '../components/shared/CategoryBanner';
import { ProductGrid, Product } from '../components/shared/ProductGrid';

const menProducts: Product[] = [
  {
    id: 1,
    name: "Leather Jacket",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Outerwear"
  },
  {
    id: 2,
    name: "Classic White Shirt",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Shirts"
  },
  {
    id: 3,
    name: "Slim Fit Chinos",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Pants"
  },
  {
    id: 4,
    name: "Wool Sweater",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1577451870083-f92a06f0c19b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Knitwear"
  }
];

export function Men() {
  return (
    <main>
      <CategoryBanner 
        title="Men's Collection"
        description="Explore our premium men's fashion collection combining style and comfort."
        image="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trending Now</h2>
          <ProductGrid products={menProducts} />
        </div>
      </section>
    </main>
  );
}