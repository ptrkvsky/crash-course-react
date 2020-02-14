import PropTypes from "prop-types";
import React from "react";
import {BlocBasket} from "../styles/components/StyleBasketLine"

const handleClick = (itemBasket, myBasket) => {
  myBasket.deleteBasketItem(itemBasket);
};

const BasketLine = ({ itemBasket, myBasket }) => {
  return (
    <BlocBasket>
      <div>
        Nom: {itemBasket.title}
        <button onClick={() => handleClick(itemBasket, myBasket)}>
          Delete
        </button>
        <button onClick={() => myBasket.minusBasketItem(itemBasket)}>
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
