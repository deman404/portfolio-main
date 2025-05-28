import React from "react";

interface FilterButtonsProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({
  categories,
  activeCategory,
  onChange,
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      <button
        onClick={() => onChange("all")}
        className={`
          px-4 py-2 text-sm font-medium rounded-full transition-colors
          ${
            activeCategory === "all"
              ? "bg-teal-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-black dark:text-gray-300 dark:hover:bg-gray-700"
          }
        `}
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`
            px-4 py-2 text-sm font-medium rounded-full transition-colors
            ${
              activeCategory === category
                ? "bg-teal-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-black dark:text-gray-300 dark:hover:bg-gray-700"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
