import styled from "styled-components";
import { Colors } from "../../utils/constants.utils";
import background from "../../assets/create.png";
import { keyframes } from "styled-components";

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 135px;
`;

export const PreviewContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PreviewIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 55.5px;
  height: 55.5px;
  background-color: ${Colors.icon_bg};

  border-radius: 50%;
`;

export const PreviewIcon = styled.img``;

export const PreviewIconsContainer = styled.div`
  ${PreviewIconContainer}:nth-child(2) {
    position: relative;
    left: -10px;
    border: 1px solid ${Colors.primary};
  }
`;

export const PreviewIcons = styled.div`
  display: flex;
  justify-content: flex-start;

  margin-bottom: 12px;
`;

export const PreviewIconsParagraph = styled.p``;

export const PreviewTitle = styled.h1``;

export const Highlight = styled.span`
  position: relative;
  left: 20px;

  display: inline-block;
  line-height: 105px;
  padding: 0 8px;
  background-color: ${Colors.look_bg};
  border-radius: 9px;
  transform: rotate(10.48deg);

  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
`;

export const Star = styled.span`
  position: relative;
  left: 13px;
  top: -2px;

  display: inline-block;
  z-index: 1;
`;

const breatheAnimation = keyframes`
 0% { background-position: 0 0; }
 50% { background-position: 100% 100%; }
 100% { background-position: 0 0; }
`;

export const PreviewImageContainer = styled.div`
  min-width: 650px;
  min-height: 740px;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 300px !important;
    line-height: 0.75;
    text-transform: uppercase;
    font-family: "Schibsted Grotesk", sans-serif;

    background-image: url(${background});
    background-repeat: no-repeat;

    animation-name: ${breatheAnimation};
    animation-duration: 8s;
    animation-iteration-count: infinite;

    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
