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

const renderBasket = myBasket => {
  const basket = myBasket.getBasket();

  if (basket && basket.length > 0) {
    const basketTest = basket.map(itemBasket => (
      <BasketLine
        myBasket={myBasket}
        key={itemBasket.id}
        basket={basket}
        itemBasket={itemBasket}
      />
    ));
    return basketTest;
  }
};

const BasketList = ({ myBasket }) => {
  return (
    <>
      <Title>Mon panier de grand prince</Title>
      <BlocBasket>{renderBasket(myBasket)}</BlocBasket>
      {myBasket.getTotalBasket()}
    </>
  );
};

BasketList.propTypes = {
  myBasket: PropTypes.object.isRequired,
  basket: PropTypes.any
};

export default BasketList;
