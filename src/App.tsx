import React from 'react';
import HeroSection from './components/HeroSection';
import CategoryNav from './components/CategoryNav';
import ProductGrid from './components/ProductGrid';
import TrendingSection from './components/TrendingSection';
import './styles/global.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function HomePage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans">
      <HeroSection />
      <CategoryNav />
      <TrendingSection />
      <ProductGrid />
    </div>
  );
} 
