import React from "react";
import { CarouselContainer } from "./CarouselStyles";
import Filter from "./Filter";
import Carousel from "./Carousel";
import { CarouselProvider } from "./carouselContext";

const CarouselComponent = ({ items }) => {
  return (
    <CarouselProvider>
      <CarouselContainer>
        <Filter></Filter>
        <Carousel></Carousel>
      </CarouselContainer>
    </CarouselProvider>
  );
};

export default CarouselComponent;
