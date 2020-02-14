import PropTypes from "prop-types";
import React from "react";
import BasketLine from "../components/BasketLine";
import { BlocBasket, Title} from "../styles/containers/StyleBasketList"

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
