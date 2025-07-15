import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

const settings = {
  dots: false,
  infinite: true, // ✅ loop enabled
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const TrendingSection = () => (
  <section className="w-full overflow-hidden py-8">
    <h2 className="text-2xl font-semibold text-white mb-4 px-4">Trending Articles</h2>
    <div className="overflow-hidden px-4">
      <Slider {...settings}>
        {trendingArticles.map((article) => (
          <div key={article.id} className="px-2">
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
          </div>
        ))}
      </Slider>
    </div>
  </section>
);

export default TrendingSection;
