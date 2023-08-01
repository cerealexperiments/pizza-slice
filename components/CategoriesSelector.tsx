import { Pizza } from "lucide-react";
import { CupSoda } from "lucide-react";
import { Cake } from "lucide-react";
import React from "react";

type CategoriesSelectorProps = {
  setCategoryFilter: (categoryFilter: string) => void;
};

type Category = {
  icon: React.ReactNode;
  value: string;
  title: string;
};

const categories: Category[] = [
  {
    icon: <Pizza className="h-8 w-8 text-gray-500" />,
    title: "Пицца",
    value: "pizza",
  },
  {
    icon: <CupSoda className="h-8 w-8 text-gray-500" />,
    title: "Напитки",
    value: "drinks",
  },
  {
    icon: <Cake className="h-8 w-8 text-gray-500 " />,
    title: "Дессерты",
    value: "desserts",
  },
];

export default function CategoriesSelector({
  setCategoryFilter,
}: CategoriesSelectorProps) {
  return (
    <div className="flex gap-12 justify-center rounded-md border mt-8 px-6 py-4">
      {categories.map((category) => (
        <button
          key={category.value}
          value={category.value}
          className="flex flex-col justify-center gap-2 items-center hover:scale-110 transition-transform"
          onClick={(event) => setCategoryFilter(event.currentTarget.value)}
        >
          {category.icon}
          <span className="text-gray-700 font-medium hover:text-rose-500 transition-colors">
            {category.title}
          </span>
        </button>
      ))}
    </div>
  );
}
