import React from "react";

import { FilterContainer, FilterButton } from "./FilterStyles";

const Filter = ({
  isAllSelected,
  toggleAllSelection,
  selectedCategories,
  categories,
  toggleCategorySelection,
}) => {
  return (
    <FilterContainer>
      <FilterButton isSelected={isAllSelected} onClick={toggleAllSelection}>
        all
      </FilterButton>
      {categories.map((category) => {
        return (
          <FilterButton
            isSelected={
              selectedCategories.indexOf(category) >= 0 ? true : false
            }
            onClick={() => toggleCategorySelection(category)}
          >
            {category}
          </FilterButton>
        );
      })}
    </FilterContainer>
  );
};

export default Filter;
