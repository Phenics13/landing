import styled from "styled-components";
import { Colors } from "../../utils/constants.utils";

import { Link } from "react-router-dom";
import Button from "../button/button.component";

export const HeaderContainer = styled.header`
  margin: 45px 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoLink = styled(Link)`
  text-transform: uppercase;
  color: ${Colors.icon_bg};
  font-family: "Jomhuria", cursive;
  font-size: 80px;
  line-height: 80px;
  font-weight: 400;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 80px;

  a {
    color: ${Colors.black};
    transition: all 0.2s ease-in-out;

    &:hover {
      opacity: 0.5;
    }
  }
`;

export const NavButton = styled(Button)`
  transform: rotate(19.5deg);

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: rotate(0deg);
  }
`;
