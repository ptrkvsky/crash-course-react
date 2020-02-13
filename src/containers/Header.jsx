import PropTypes from "prop-types";
import React from "react";
import {
  BlocHeader,
  Container,
  Logo,
  Nav,
  LinkNav
} from "../styles/containers/StyleHeader";
import classBasket from "../class/Basket";

const Header = ({ basket }) => {
  let totalItemsBasket = 0;
  if (basket) {
    const MyBasket = new classBasket(basket);
    totalItemsBasket = MyBasket.getTotalItems(basket);
  }
  return (
    <BlocHeader>
      <Container className="max-container">
        <Logo>Movie App</Logo>
        <Nav>
          <LinkNav href="#main-container">Rechercher</LinkNav>
          <LinkNav href="#popular">A la une</LinkNav>
          <LinkNav href="#basket">Panier {totalItemsBasket}</LinkNav>
        </Nav>
      </Container>
    </BlocHeader>
  );
};

Header.propTypes = {
  basket: PropTypes.any
};

export default Header;
