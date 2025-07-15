interface Props {
  setActiveCategory: (category: string | null) => void;
  activeCategory: string | null;
  categories: string[];
}

const CategoryNav = ({ setActiveCategory, activeCategory, categories }: Props) => (
  <nav className="flex justify-center gap-4 flex-wrap my-6">
    {categories.map((cat) => (
      <button
        key={cat}
        onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
        className={`px-5 py-2 rounded-full transition ${
          cat === activeCategory
            ? 'bg-white text-black'
            : 'bg-neutral-700 text-white hover:bg-neutral-600'
        }`}
      >
        {cat}
      </button>
    ))}
  </nav>
);

export default CategoryNav;
