import React, { createContext } from "react";
import products from "../../data/products";
const categories = [];
products.forEach((product) => {
  if (categories.indexOf(product.category) < 0) {
    categories.push(product.category);
  }
});

const CarouselContext = createContext();

function carouselReducer(state, action) {
  if (!state) {
    return;
  }
  switch (action.type) {
    case "toggleCategorySelection": {
      let selectedCategories = [...state.selectedCategories];
      let isAllSelected = state.isAllSelected;
      if (selectedCategories.indexOf(action.payload.category) >= 0) {
        selectedCategories.splice(
          selectedCategories.indexOf(action.payload.category),
          1
        );
      } else {
        selectedCategories.push(action.payload.category);
      }
      if (state.selectedCategories.length === state.categories.length) {
        isAllSelected = true;
      } else if (state.selectedCategories.length === 0) {
        isAllSelected = false;
      }
      return {
        ...state,
        selectedCategories,
        isAllSelected,
      };
    }
    case "toggleAllSelection": {
      debugger;
      let selectedCategories = [...state.selectedCategories];
      let isAllSelected = state.isAllSelected;
      if (isAllSelected) {
        selectedCategories = [];
        isAllSelected = false;
      } else {
        selectedCategories = [...categories];
        isAllSelected = true;
      }
      return {
        ...state,
        selectedCategories,
        isAllSelected,
      };
    }
    case "next": {
      let currentIndex = state.currentIndex;
      if (
        currentIndex !==
        state.products.filter(
          (item) => state.selectedCategories.indexOf(item.category) >= 0
        ).length -
          1
      ) {
        currentIndex += 1;
      }
      return {
        ...state,
        currentIndex,
      };
    }
    case "prev": {
      let currentIndex = state.currentIndex;
      if (currentIndex !== 0) {
        currentIndex -= 1;
      }
      return {
        ...state,
        currentIndex,
      };
    }
    default: {
      return state;
    }
  }
}

function CarouselProvider({ children }) {
  const [state, dispatch] = React.useReducer(carouselReducer, {
    products,
    categories,
    selectedCategories: [...categories],
    currentIndex: 0,
    isAllSelected: true,
  });
  const value = { state, dispatch };
  return (
    <CarouselContext.Provider value={value}>
      {children}
    </CarouselContext.Provider>
  );
}

function useCarousel() {
  return React.useContext(CarouselContext);
}
export { CarouselProvider, useCarousel };
