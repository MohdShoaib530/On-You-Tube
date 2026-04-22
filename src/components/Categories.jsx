import { useRef } from "react";

const Categories = ({ categories, category, setCategory }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = 600;

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
        className="flex overflow-x-scroll no-scrollbar border-b border-gray-300  lg:gap-6 gap-4 whitespace-nowrap pt-8"
      >
        {categories.map((item) => {
          const isActive = category === item.value;

          return (
            <button
              key={item.label}
              onClick={() => setCategory(item.value)}
              className={`
                pb-2  text-base font-medium cursor-pointer transition
                ${
                  isActive
                    ? "text-black border-b-2 text-lg border-black"
                    : "text-gray-700 hover:text-black"
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
        className="shadow-gray-200 rounded-[3px] hidden sm:block absolute left-0 top-2/3 px-4 py-2 -translate-y-1/2 bg-white border border-gray-300  hover:shadow-lg hover:bg-gray-50 cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-200"
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
       className="shadow-gray-200 rounded-[3px] hidden sm:block absolute right-0 top-2/3 px-4 py-2 -translate-y-1/2 bg-white border border-gray-300  hover:shadow-lg hover:bg-gray-50 cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-200"
      >
        ›
      </button>
    </div>
  );
};

export default Categories;
