import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";
import BasketLine from "../components/BasketLine";

const BlocBasket = styled("section")`
  padding: 10px 0;
  align-items: center;
  margin-bottom: 40px;
  border-bottom: 1px solid purple;
`;

const Title = styled("h2")`
  font-size: 35px;
  text-transform: uppercase;
  margin: 40px 0 60px;
`;

const renderBasket = basket => {
  if (basket && basket.length > 0) {
    const basketTest = basket.map(itemBasket => (
      <BasketLine key={itemBasket.id} basket={basket} itemBasket={itemBasket} />
    ));
    return basketTest;
  } else {
    console.log("NO BASKET");
  }
};

const BasketList = ({ basket, myBasket }) => {
  console.log({ myBasket });
  return (
    <>
      <Title>Mon panier de grand prince</Title>
      <BlocBasket>{renderBasket(basket)}</BlocBasket>
    </>
  );
};

BasketList.propTypes = {
  basket: PropTypes.any
};

export default BasketList;
