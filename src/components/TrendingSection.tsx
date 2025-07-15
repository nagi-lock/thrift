import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const trendingArticles = [
  {
    id: 1,
    title: 'Top 5 Throwback Jerseys You Must Cop',
    summary: 'Explore vintage football & basketball kits.',
    image: '/assets/jersey.jpg',
  },
  {
    id: 2,
    title: 'Oversized Tees Are Back',
    summary: 'Comfort, style, and streetwear edge.',
    image: '/assets/tee.jpg',
  },
  {
    id: 3,
    title: 'Jeans That Define Retro Cool',
    summary: 'Baggy fits & worn-in washes dominate 2025.',
    image: '/assets/jeans.jpg',
  },
  {
    id: 4,
    title: 'Neutral Shirts That Pop',
    summary: 'Dress up without trying too hard.',
    image: '/assets/shirt.jpg',
  },
  {
    id: 5,
    title: 'Shorts You’ll Actually Want to Wear',
    summary: 'Skater vibe or lounge comfort — we got you.',
    image: '/assets/shorts.jpg',
  },
];

const TrendingSection = () => (
  <section className="px-4 py-8">
    <h2 className="text-2xl font-semibold text-white mb-4">Trending Articles</h2>
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={16}
      slidesPerView={1.2}
      breakpoints={{
        640: { slidesPerView: 2.2 },
        1024: { slidesPerView: 3.2 },
      }}
      className="relative"
    >
      {trendingArticles.map(article => (
        <SwiperSlide key={article.id}>
          <div
            className="relative h-64 rounded-xl overflow-hidden bg-center bg-cover flex items-end p-4"
            style={{
              backgroundImage: `url(${article.image})`,
            }}
          >
            <div className="bg-black/60 p-3 rounded text-white w-full">
              <h3 className="text-lg font-bold">{article.title}</h3>
              <p className="text-sm text-neutral-300 mt-1">{article.summary}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </section>
);

export default TrendingSection;
