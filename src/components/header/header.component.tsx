import { motion } from "framer-motion";
import { FC } from "react";
import { Link, Outlet } from "react-router-dom";

import {
  HeaderContainer,
  LogoLink,
  NavButton,
  NavContainer,
} from "./header.styles";

const Header: FC = () => {
  return (
    <>
      <HeaderContainer
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "spring",
          duration: 0.8,
          delay: 1,
        }}
      >
        <LogoLink to="">Landing</LogoLink>
        <NavContainer>
          <Link to="">Clothes</Link>
          <Link to="">Sneakers</Link>
          <Link to="">Bags</Link>
          <Link to="">Accessorize</Link>
          <NavButton>
            Buy
          </NavButton>
        </NavContainer>
      </HeaderContainer>
      <Outlet />
    </>
  );
};

export default Header;
