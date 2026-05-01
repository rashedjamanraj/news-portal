import React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";


interface CategoryChangeProps {
  onCategoryChange: (category: string) => void;
}

const CategoryFilter = ({ onCategoryChange }: CategoryChangeProps) => {
  const categoryes = ["all", "tech", "health", "sports", "business"];
  return (
    <div className="flex gap-2 items-center justify-center mx-4">
      <h3 className=" font-bold text-lg shrink-0">Filter by Category: </h3>
      <Select>
        <SelectTrigger className="w-45 capitalize rounded-md">
          <SelectValue placeholder="Select Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {categoryes.map((category) => (
            <SelectItem key={category} value={category} className=" capitalize">{category}</SelectItem>
          ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryFilter;
