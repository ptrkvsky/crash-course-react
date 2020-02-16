import PropTypes from "prop-types";
import React from "react";

import { Line, ChangeQty, Close } from "../styles/components/StyleBasketLine";
import { IMAGE_BASE_URL } from "../utils/const";

const BasketLine = ({ itemBasket, myBasket }) => {
  const handlePlus = (itemBasket, myBasket) => {
    document.querySelector("#minus").disabled = false;
    myBasket.plusBasketItem(itemBasket);
  };

  const handleMinus = (itemBasket, myBasket) => {
    if (myBasket.getItemQty(itemBasket) < 2) {
      return false;
    } else {
      myBasket.minusBasketItem(itemBasket);
    }
  };

  return (
    <Line>
      <img
        loading="lazy"
        className="max6O"
        alt={itemBasket.name}
        src={IMAGE_BASE_URL + itemBasket.poster_path}
      />
      <div>
        {itemBasket.title}
        <Close
          className="close"
          onClick={() => myBasket.deleteBasketItem(itemBasket)}
        />
      </div>
      <div> {itemBasket.price} $</div>
      <div>
        Qty : {itemBasket.qty}
        <ChangeQty id="minus" onClick={() => handleMinus(itemBasket, myBasket)}>
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
