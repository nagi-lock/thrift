const categories = ['Jersey', 'T-Shirt', 'Shirt', 'Jeans', 'Cargo'];

const CategoryNav = () => (
  <nav className="flex justify-center gap-4 flex-wrap my-6">
    {categories.map((cat) => (
      <button
        key={cat}
        className="bg-neutral-800 text-white px-5 py-2 rounded-full hover:bg-neutral-700 transition"
      >
        {cat}
      </button>
    ))}
  </nav>
);

export default CategoryNav;
