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

const Basket = ({ itemBasket }) => {
  return (
    <BlocBasket>
      <div> Nom: {itemBasket.title}</div>
      <div> Price : {itemBasket.price}</div>
      <div> Qty : {itemBasket.qty}</div>
    </BlocBasket>
  );
};

Basket.propTypes = {
  itemBasket: PropTypes.any
};

export default Basket;
