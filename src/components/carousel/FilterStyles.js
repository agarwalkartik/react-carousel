import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  width: 100%;
  height: 5vh;
  top: 5vh;
  padding: 8px 0px;
`;

export const FilterButton = styled.button`
  color: ${({ isSelected }) => (isSelected ? "#ffffff" : "#000000d9")};
  border-radius: 20px;
  display: inline-block;
  background-color: ${({ isSelected }) =>
    isSelected ? "#1890ff" : "rgba(255, 255, 255, 0.9)"};
  border: 1px solid #d9d9d9;
  padding: 8px 12px;
  cursor: pointer;
  margin-left: 8px;
  font-size: 24px;
  &:hover {
    border: 1px solid #1890ff;
    color: ${({ isSelected }) => (isSelected ? "#ffffff" : "#1890ff")};
  }
`;
