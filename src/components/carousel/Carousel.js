import React from "react";
import {
  CarouselContainer,
  LeftIcon,
  RightIcon,
  Item,
  ItemImage,
  ItemDescription,
  ItemCategory,
  ItemHeader,
} from "./CarouselStyles";

const Carousel = ({ items, prev, next, selectedCategories, currentIndex }) => {
  return (
    <>
      <LeftIcon onClick={prev} />
      <RightIcon onClick={next} />
      {items
        .filter((item) => selectedCategories.indexOf(item.category) >= 0)
        .map((item, index) => {
          return (
            <Item key={index} index={index} currentIndex={currentIndex}>
              <ItemImage id="item" src={item.image} alt="item"></ItemImage>
              <ItemDescription>
                <ItemHeader>
                  {item.name} @ ₹{item.price}
                </ItemHeader>
                <ItemCategory>#{item.category}</ItemCategory>
              </ItemDescription>
            </Item>
          );
        })}
    </>
  );
};

export default Carousel;
