import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";

const BlocBasket = styled("section")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 20px;
  align-items: center;
  box-shadow: 13px 13px 20px #191d25, -4px -5px 7px #272d3b;
  border-radius: 20px;
  margin-bottom: 40px;
`;

const handleClick = (itemBasket, myBasket) => {
  myBasket.deleteBasketItem(itemBasket);
};

const BasketLine = ({ itemBasket, basket, myBasket }) => {
  return (
    <BlocBasket>
      <div>
        Nom: {itemBasket.title}
        <button onClick={() => handleClick(itemBasket, myBasket)}>
          {" "}
          Delete
        </button>
        <button onClick={() => myBasket.minusBasketItem(itemBasket)}>
          {" "}
          Minus
        </button>
      </div>
      <div> Prix : {itemBasket.price}</div>
      <div> Qty : {itemBasket.qty}</div>
    </BlocBasket>
  );
};

BasketLine.propTypes = {
  myBasket: PropTypes.object.isRequired,
  basket: PropTypes.array.isRequired,
  itemBasket: PropTypes.object.isRequired
};

export default BasketLine;
