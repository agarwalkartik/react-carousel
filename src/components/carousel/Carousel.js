import React from "react";
import {
  LeftIcon,
  RightIcon,
  Item,
  ItemImage,
  ItemDescription,
  ItemCategory,
  ItemHeader,
} from "./CarouselStyles";
import { useCarousel } from "./carouselContext";

const Carousel = () => {
  const { state, dispatch } = useCarousel();

  return (
    <>
      <LeftIcon onClick={() => dispatch({ type: "prev" })} />
      <RightIcon onClick={() => dispatch({ type: "next" })} />
      {state.products
        .filter((item) => state.selectedCategories.indexOf(item.category) >= 0)
        .map((item, index) => {
          return (
            <Item key={index} index={index} currentIndex={state.currentIndex}>
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
