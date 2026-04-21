import { useRef } from "react";

const Categories = ({ categories, category, setCategory }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 200;

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative group">
      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar border-b mx-18 gap-6 whitespace-nowrap pt-8"
      >
        {categories.map((item) => {
          const isActive = category === item.value;

          return (
            <button
              key={item.label}
              onClick={() => setCategory(item.value)}
              className={`
                pb-2 text-32px font-medium cursor-pointer transition
                ${
                  isActive
                    ? "text-black border-b-2 border-black"
                    : "text-gray-500 hover:text-black"
                }
              `}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="hidden sm:block absolute left-18 top-2/3 px-4 py-2 -translate-y-1/2 bg-white border cursor-pointer opacity-0 group-hover:opacity-100 transition"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="hidden sm:block absolute right-18 top-2/3 -translate-y-1/2 px-4 py-2 bg-white border cursor-pointer opacity-0 group-hover:opacity-100 transition"
      >
        ›
      </button>
    </div>
  );
};

export default Categories;
