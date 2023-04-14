import styled from "styled-components";

import {
  Colors,
  Fonts,
  FontSizes,
  FontWeights,
} from "../../utils/constants.utils";

export const ButtonContainer = styled.button`
  border: none;
  padding: 24px 22px;
  border-radius: 50%;

  text-transform: uppercase;
  font-family: ${Fonts.title};
  font-size: ${FontSizes.btn};
  font-weight: ${FontWeights.bold};
  line-height: 50px;
  color: ${Colors.white};
  background-color: ${Colors.btn_primary};

  cursor: pointer;
`;
