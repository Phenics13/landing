import styled from "styled-components";
import { Colors } from "../../utils/constants.utils";

export const ContentContainer = styled.div`
  width: 100%;
  background-color: ${Colors.white};
  border-radius: 6px;

  margin-bottom: 160px;
`;

export const ContentTitle = styled.h2`
  padding: 40px 0 60px 0;
`;
export const ContentParagraph = styled.p`
  line-height: 27px;
  padding: 0 48px 80px;
`;
