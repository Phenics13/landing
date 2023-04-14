import styled from "styled-components";
import { Colors, Fonts, FontSizes, FontWeights } from "./utils/constants.utils";

export const AppContainer = styled.div`
  min-height: 100vh;

  width: 90%;
  margin: 0 auto;

  font-family: ${Fonts.text};
  font-size: ${FontSizes.paragraph};
  color: ${Colors.black};

  nav {
    font-size: ${FontSizes.navigation};
  }
  p {
    font-size: ${FontSizes.paragraph};
  }
  h1 {
    line-height: 106px;
    font-size: ${FontSizes.preview};
  }
  h2 {
    text-align: center;
    font-size: ${FontSizes.title};
  }

  h1,
  h2 {
    text-transform: uppercase;
    font-weight: ${FontWeights.medium};
    font-family: ${Fonts.title};
  }
  a {
    text-decoration: none;
  }
`;
