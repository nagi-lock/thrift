import { useState } from 'react';
import HeroSection from './components/HeroSection';
import CategoryNav from './components/CategoryNav';
import TrendingSection from './components/TrendingSection';
import ProductCard from './components/ProductCard';
import productData from './data/products';
import './index.css';

const categories = ['Jersey', 'T-Shirt', 'Shirt', 'Jeans', 'Cargo'];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredProducts = productData.filter(
    (product) => product.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans">
      {/* Hero section at top */}
      <HeroSection />

      {/* Category tab navigation */}
      <CategoryNav
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
        categories={categories}
      />

      {/* Show trending if no category selected, else product cards */}
      {!activeCategory ? (
        <TrendingSection />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 py-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
