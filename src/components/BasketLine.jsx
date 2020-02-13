import PropTypes from "prop-types";
import React from "react";
import styled from "@emotion/styled";
import Basket from "../class/Basket";

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

const handleClick = (itemBasket, basket) => {
  console.log(itemBasket, basket);
};

const BasketLine = ({ itemBasket, basket }) => {
  return (
    <BlocBasket>
      <div>
        Nom: {itemBasket.title}
        <button onClick={() => handleClick(itemBasket, basket)}> Delete</button>
      </div>
      <div> Price : {itemBasket.price}</div>
      <div> Qty : {itemBasket.qty}</div>
    </BlocBasket>
  );
};

BasketLine.propTypes = {
  itemBasket: PropTypes.any
};

export default BasketLine;
