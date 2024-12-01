import React from 'react';
import { CategoryBanner } from '../components/shared/CategoryBanner';
import { ProductGrid, Product } from '../components/shared/ProductGrid';

const kidsProducts: Product[] = [
  {
    id: 1,
    name: "Colorful T-Shirt Set",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Tops"
  },
  {
    id: 2,
    name: "Denim Overall",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1519278409-1f56fdda7fe5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Outerwear"
  },
  {
    id: 3,
    name: "Summer Dress",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Dresses"
  },
  {
    id: 4,
    name: "Sport Set",
    price: 44.99,
    image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Activewear"
  }
];

export function Kids() {
  return (
    <main>
      <CategoryBanner 
        title="Kids' Collection"
        description="Fun and comfortable clothing for your little ones."
        image="https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Picks</h2>
          <ProductGrid products={kidsProducts} />
        </div>
      </section>
    </main>
  );
}