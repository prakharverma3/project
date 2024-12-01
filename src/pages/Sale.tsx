import React from 'react';
import { CategoryBanner } from '../components/shared/CategoryBanner';
import { ProductGrid } from '../components/shared/ProductGrid';
import { Timer } from '../components/sale/Timer';
import { SaleHighlight } from '../components/sale/SaleHighlight';

const saleProducts = [
  {
    id: 1,
    name: "Designer Handbag",
    price: 299.99,
    originalPrice: 499.99,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Accessories",
    discount: 40
  },
  {
    id: 2,
    name: "Premium Sneakers",
    price: 89.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Footwear",
    discount: 45
  },
  {
    id: 3,
    name: "Wool Coat",
    price: 149.99,
    originalPrice: 299.99,
    image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Outerwear",
    discount: 50
  },
  {
    id: 4,
    name: "Silk Scarf",
    price: 29.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Accessories",
    discount: 50
  }
];

export function Sale() {
  return (
    <main>
      <CategoryBanner 
        title="Season End Sale"
        description="Up to 50% off on premium fashion items. Limited time offer!"
        image="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      />
      
      <Timer endDate="2024-04-30" />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Flash Sale</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <SaleHighlight 
              title="Premium Collection"
              description="Get up to 50% off on luxury items"
              image="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              discount={50}
            />
            <SaleHighlight 
              title="Seasonal Clearance"
              description="Extra 20% off on already reduced items"
              image="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              discount={20}
            />
          </div>
          <ProductGrid products={saleProducts} />
        </div>
      </section>
    </main>
  );
}