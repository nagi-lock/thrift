import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Product {
  id: number;
  name: string;
  price: number;
  size: string[];
  category: string;
  images: string[];
}

// Custom arrow components
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 p-2 rounded-full text-white hover:bg-white hover:text-black transition"
    >
      <FaChevronRight />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-black/60 p-2 rounded-full text-white hover:bg-white hover:text-black transition"
    >
      <FaChevronLeft />
    </button>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="bg-neutral-800 rounded-xl shadow-md hover:shadow-lg transition flex flex-col">
      <div className="relative w-full h-64 sm:h-72 md:h-80">
        <Slider {...settings}>
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`product-${product.id}-${i}`}
              className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-t-xl"
            />
          ))}
        </Slider>
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-white">{product.name}</h3>
        <p className="text-sm text-neutral-400">Price: ₹{product.price}</p>
        <p className="text-sm text-neutral-400">Sizes: {product.size.join(', ')}</p>
        <button className="mt-2 bg-white text-black text-sm font-medium py-2 rounded hover:bg-neutral-200 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
