import PropTypes from "prop-types";
import React from "react";
import {
  BlocHeader,
  Container,
  Logo,
  Nav,
  LinkNav
} from "../styles/containers/StyleHeader";

const Header = () => {
  return (
    <BlocHeader className="blocheader">
      <Container className="max-container">
        <Logo>Movie App</Logo>
        <Nav>
          <LinkNav href="#main-container">Rechercher</LinkNav>
          <LinkNav href="#popular">A la une</LinkNav>
        </Nav>
      </Container>
    </BlocHeader>
  );
};

Header.propTypes = {
  isOpen: PropTypes.any,
  setIsOpen: PropTypes.any
};

export default Header;
