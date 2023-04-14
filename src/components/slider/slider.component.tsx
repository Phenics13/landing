import { FC, useState } from "react";

import img1 from "../../assets/slider/im_1.png";
import img2 from "../../assets/slider/im_2.png";
import img3 from "../../assets/slider/im_3.png";
import img4 from "../../assets/slider/im_4.png";
import img5 from "../../assets/slider/im_5.png";
import arrLeft from "../../assets/slider/arrow_left.png";
import arrRight from "../../assets/slider/arrow_right.png";

import {
  SliderContainer,
  SliderArrowLeft,
  SliderArrowRight,
  SliderWrapper,
  SliderInner,
  SliderItem,
  SliderImage,
} from "./slider.styles";

const IMAGES = [img1, img2, img3, img4, img5];

const Slider: FC = () => {
  const [curr, setCurr] = useState(0);
  const [left, setLeft] = useState(2);
  const [right, setRight] = useState(4);

  const prev = () => {
    setCurr(curr - 1);
    setLeft((prev) => prev - 1);
    setRight((prev) => prev - 1);
  };

  const next = () => {
    setCurr(curr + 1);
    setLeft((prev) => prev + 1);
    setRight((prev) => prev + 1);
  };

  return (
    <SliderContainer>
      {left > 1 && (
        <SliderArrowLeft onClick={prev}>
          <img src={arrLeft} />
        </SliderArrowLeft>
      )}
      {right < IMAGES.length && (
        <SliderArrowRight onClick={next}>
          <img src={arrRight} />
        </SliderArrowRight>
      )}
      <SliderWrapper>
        <SliderInner
          style={{ transform: `translateX(${-(curr * 300 + 60)}px)` }}
        >
          {IMAGES.map((image, index) => (
            <SliderItem key={index}>
              <SliderImage src={image} />
            </SliderItem>
          ))}
        </SliderInner>
      </SliderWrapper>
    </SliderContainer>
  );
};

export default Slider;
