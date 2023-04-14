import {
  PreviewContainer,
  PreviewContentContainer,
  PreviewImageContainer,
  PreviewIconsContainer,
  PreviewIcons,
  PreviewIcon,
  PreviewIconContainer,
  PreviewIconsParagraph,
  PreviewTitle,
  Highlight,
  Star,
} from "./preview.styles";

import android from "../../assets/android.png";
import apple from "../../assets/apple.png";
import { motion } from "framer-motion";
import { FC } from "react";
import Line from "../line/line.component";

const Preview: FC = () => {
  return (
    <PreviewContainer>
      <PreviewContentContainer>
        <PreviewIconsContainer
          as={motion.div}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 0.8,
            delay: 1.5,
          }}
        >
          <PreviewIcons>
            <PreviewIconContainer>
              <PreviewIcon src={apple} alt="apple" />
            </PreviewIconContainer>
            <PreviewIconContainer>
              <PreviewIcon src={android} alt="android" />
            </PreviewIconContainer>
          </PreviewIcons>

          <PreviewIconsParagraph>App available</PreviewIconsParagraph>
        </PreviewIconsContainer>

        <PreviewTitle
          as={motion.h1}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            duration: 0.8,
            damping: 20,
            delay: 2,
          }}
        >
          Choose your winter <Highlight>look</Highlight>
          <Star>*</Star> apparel
        </PreviewTitle>
      </PreviewContentContainer>

      <PreviewImageContainer>
        <p>
          Cr
          <br />
          ea
          <br />
          te
        </p>
      </PreviewImageContainer>
      <Line />
    </PreviewContainer>
  );
};

export default Preview;
