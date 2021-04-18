import React from "react";

import { FilterContainer, FilterButton } from "./FilterStyles";
import { useCarousel } from "./carouselContext";
const Filter = () => {
  const { state, dispatch } = useCarousel();
  return (
    <FilterContainer>
      <FilterButton
        isSelected={state.isAllSelected}
        onClick={() => dispatch({ type: "toggleAllSelection" })}
      >
        all
      </FilterButton>
      {state.categories.map((category, index) => {
        return (
          <FilterButton
            key={index}
            isSelected={
              state.selectedCategories.indexOf(category) >= 0 ? true : false
            }
            onClick={() =>
              dispatch({
                type: "toggleCategorySelection",
                payload: { category },
              })
            }
          >
            {category}
          </FilterButton>
        );
      })}
    </FilterContainer>
  );
};

export default Filter;
