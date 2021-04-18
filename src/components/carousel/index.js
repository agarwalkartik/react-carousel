import React, { useState } from "react";
import { CarouselContainer } from "./CarouselStyles";
import Filter from "./Filter";
import Carousel from "./Carousel";

const Comp = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const categories = [];
  items.forEach((item) => {
    if (categories.indexOf(item.category) < 0) {
      categories.push(item.category);
    }
  });
  const next = () => {
    if (
      currentIndex !==
      items.filter((item) => selectedCategories.indexOf(item.category) >= 0)
        .length -
        1
    ) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex !== 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const [selectedCategories, setSelectedCategories] = useState([...categories]);
  const [isAllSelected, setAllSelected] = useState(true);
  const toggleCategorySelection = (category) => {
    if (selectedCategories.indexOf(category) >= 0) {
      selectedCategories.splice(selectedCategories.indexOf(category), 1);
    } else {
      selectedCategories.push(category);
    }
    setSelectedCategories([...selectedCategories]);

    if (selectedCategories.length === categories.length) {
      setAllSelected(true);
    } else if (selectedCategories.length === 0) {
      setAllSelected(false);
    }
  };
  const toggleAllSelection = () => {
    if (isAllSelected) {
      setSelectedCategories([]);
      setAllSelected(false);
    } else {
      setSelectedCategories([...categories]);
      setAllSelected(true);
    }
  };

  return (
    <CarouselContainer>
      <Filter
        isAllSelected={isAllSelected}
        toggleAllSelection={toggleAllSelection}
        selectedCategories={selectedCategories}
        categories={categories}
        toggleCategorySelection={toggleCategorySelection}
      ></Filter>
      <Carousel
        prev={prev}
        next={next}
        selectedCategories={selectedCategories}
        currentIndex={currentIndex}
        items={items}
      ></Carousel>
    </CarouselContainer>
  );
};

export default Comp;
