import styled from "styled-components";

import { Colors } from "../../utils/constants.utils";

export const SliderContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const SliderArrowLeft = styled.button`
  border: none;
  cursor: pointer;
  z-index: 1;
  width: 76px;
  height: 76px;
  position: absolute;
  top: 50%;
  left: -20px;
  transform: translateY(-50%);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${Colors.white};
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);

  img {
    position: relative;
    left: -2px;
  }
`;
export const SliderArrowRight = styled.button`
  border: none;
  cursor: pointer;
  z-index: 1;
  width: 76px;
  height: 76px;
  position: absolute;
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${Colors.white};
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.25);

  img {
    position: relative;
    right: -2px;
  }
`;

export const SliderWrapper = styled.div`
  overflow: hidden;
`;

export const SliderInner = styled.div`
  width: min-content;
  display: flex;
  gap: 35px;

  transition: transform 0.5s ease;
`;

export const SliderItem = styled.div`
  width: 240px;
  height: 300px;
`;

export const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
