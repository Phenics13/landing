// cSpell:disable

import Slider from "../slider/slider.component";
import {
  ContentContainer,
  ContentTitle,
  ContentParagraph,
} from "./content.styles";

import { motion } from "framer-motion";
import { animation } from "../../utils/animation.utils";
import { FC } from "react";

const contentContainerVariants = animation(0, 100, 0.8);
const titleVariants = animation(0.5, 50, 0.8);

const Content: FC = () => {
  return (
    <ContentContainer
      as={motion.div}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.25 }}
      variants={contentContainerVariants}
    >
      <ContentTitle
        as={motion.h2}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.9 }}
        variants={titleVariants}
      >
        Choose Looks
      </ContentTitle>
      <Slider />
      <ContentTitle
        as={motion.h2}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.9 }}
        variants={titleVariants}
      >
        More About Us
      </ContentTitle>
      <ContentParagraph
        as={motion.p}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={titleVariants}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed enim
        sed libero commodo efficitur. Suspendisse et lorem ac neque dictum
        pellentesque nec sit amet nisl. Fusce rutrum quis purus ut pretium.
        Vivamus ornare mauris non ligula egestas, accumsan faucibus quam
        sollicitudin. Duis efficitur lorem tellus. Aliquam non rhoncus felis,
        porttitor consequat quam. Morbi gravida semper mattis. Nunc ultrices
        justo in pulvinar convallis. Curabitur dapibus ut tellus eu condimentum.
        Morbi vitae convallis purus, ac finibus ipsum.
        <br />
        <br />
        Suspendisse nec pharetra turpis. Aenean id nunc id orci aliquam pulvinar
        eget vitae nisl. In ligula neque, vestibulum vel arcu eu, eleifend
        vestibulum tortor. Duis facilisis, est et aliquam dapibus, urna mauris
        sagittis mi, et mattis metus magna vel tellus. Phasellus sit amet
        volutpat ante, ut condimentum lorem. Quisque auctor sollicitudin dui,
        vitae egestas nunc suscipit et. Nullam eu quam sem. Donec a nibh
        molestie, aliquam libero maximus, feugiat velit. Curabitur ac accumsan
        velit. In hac habitasse platea dictumst.
      </ContentParagraph>
    </ContentContainer>
  );
};

export default Content;
