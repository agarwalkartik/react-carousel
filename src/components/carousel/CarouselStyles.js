import styled from "styled-components";

export const CarouselContainer = styled.div`
  height: 80vh;
  width: 80vw;
  top: 5vh;
  left: 10vw;
  justify-content: center;
  align-items: center;
  position: absolute;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  background: white;
  font-family: "Roboto", sans-serif;
`;
export const LeftIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 32px;
  z-index: 15;
  cursor: pointer;
  user-select: none;
  width: 32px;
  height: 32px;
  background-image: url("/direction-icon.png");
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
`;
export const RightIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 32px;
  z-index: 15;
  cursor: pointer;
  user-select: none;
  width: 32px;
  height: 32px;
  background-image: url("/direction-icon.png");
`;

const getOpacity = (index, currentIndex) => {
  switch (index) {
    case currentIndex:
      return 1;
    case currentIndex - 1:
    case currentIndex + 1:
      return 0.7;
    default:
      return 0;
  }
};
const getTransformScale = (index, currentIndex) => {
  switch (index) {
    case currentIndex:
      return 1;
    case currentIndex - 1:
    case currentIndex + 1:
      return 0.8;
    default:
      return 0.6;
  }
};

const getTranslateX = (index, currentIndex) => {
  return `${index * 30 - currentIndex * 30}vw`;
};

export const Item = styled.div`
  opacity: ${({ index, currentIndex }) => getOpacity(index, currentIndex)};
  transition-duration: 1s;
  transition-timing-function: ease-in;
  position: absolute;
  transform: scale(
      ${({ index, currentIndex }) => getTransformScale(index, currentIndex)}
    )
    translateX(
      ${({ index, currentIndex }) => getTranslateX(index, currentIndex)}
    );
  top: 15%;
  left: 34%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px;
`;

export const ItemImage = styled.img`
  width: 25vw;
  height: 45vh;
`;

export const ItemDescription = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px;
  justify-content: space-around;
`;

export const ItemCategory = styled.div`
  border-radius: 18px;
  background: antiquewhite;
  padding: 5px;
`;
export const ItemHeader = styled.div`
  font-size: 24px;
`;
