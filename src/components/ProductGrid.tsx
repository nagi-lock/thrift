import products from '../data/products';

const ProductGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
    {products.map((p) => (
      <div key={p.id} className="bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
        <img src={p.image} alt={p.name} className="w-full h-64 object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-medium text-white">{p.name}</h3>
          <p className="text-sm text-neutral-400 mt-1">Rs. {p.price}</p>
        </div>
      </div>
    ))}
  </div>
);

export default ProductGrid;
