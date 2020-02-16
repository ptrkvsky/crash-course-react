import PropTypes from "prop-types";
import React from "react";
import { Line, ChangeQty } from "../styles/components/StyleBasketLine";

const handlePlus = (itemBasket, myBasket) => {
  // tu peux gérer directement le disabled dans le jsx
  // document.querySelector("#minus").disabled = false;
  myBasket.plusBasketItem(itemBasket);
};

const handleMinus = (itemBasket, myBasket) => {
  if (myBasket.getItemQty(itemBasket) < 2) {
    return false;
  } else {
    myBasket.minusBasketItem(itemBasket);
  }
};

const BasketLine = ({ itemBasket, myBasket }) => {
  return (
    <Line>
      <div>
        {itemBasket.title}
        <button onClick={() => myBasket.deleteBasketItem(itemBasket)}>D</button>
      </div>
      <div> Prix : {itemBasket.price}</div>
      <div>
        Qty : {itemBasket.qty}{" "}
        <ChangeQty
          id="minus"
          onClick={() => handleMinus(itemBasket, myBasket)}
          disabled={itemBasket.qty < 2}
        >
          -
        </ChangeQty>
        <ChangeQty id="plus" onClick={() => handlePlus(itemBasket, myBasket)}>
          +
        </ChangeQty>
      </div>
    </Line>
  );
};

BasketLine.propTypes = {
  myBasket: PropTypes.object.isRequired,
  basket: PropTypes.array.isRequired,
  itemBasket: PropTypes.object.isRequired
};

export default BasketLine;
