import PropTypes from "prop-types";
import React from "react";
import {
  BlocHeader,
  Container,
  Logo,
  Nav,
  LinkNav
} from "../styles/containers/StyleHeader";

const Header = ({ toggleOpen }) => {
  // const handleClick = () => {
  //   // document.querySelector("#sectionBasket").classList.toggle("open");
  // };

  return (
    <BlocHeader>
      <Container className="max-container">
        <Logo>Movie App</Logo>
        <Nav>
          <LinkNav href="#main-container">Rechercher</LinkNav>
          <LinkNav href="#popular">A la une</LinkNav>
          <LinkNav onClick={() => toggleOpen()} href="#">
            Panier
          </LinkNav>
        </Nav>
      </Container>
    </BlocHeader>
  );
};

export default Header;
