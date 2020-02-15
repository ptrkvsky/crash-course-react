import PropTypes from "prop-types";
import React from "react";
import BasketLine from "../components/BasketLine";
import {
  Section,
  ButtonClose,
  BlocBasket,
  Header,
  Bag,
  Bag__quantity,
  BasketEmpty
} from "../styles/containers/StyleSectionBasket";

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
  } else {
    return (
      <BasketEmpty>
        Ajouter des produits au panier <br /> ＼(￣▽￣)／
      </BasketEmpty>
    );
  }
};

const SectionBasket = ({ myBasket }) => {
  const handleClick = () => {
    document.querySelector("#sectionBasket").classList.toggle("open");
  };

  return (
    <Section id="sectionBasket">
      <ButtonClose onClick={() => handleClick()}>X</ButtonClose>
      <Header>
        <Bag>
          <Bag__quantity> {myBasket.getTotalItems()}</Bag__quantity>
        </Bag>
        Mon panier
      </Header>
      <BlocBasket>{renderBasket(myBasket)}</BlocBasket>
      <footer>total {myBasket.getTotalBasket()}</footer>
    </Section>
  );
};

SectionBasket.propTypes = {
  myBasket: PropTypes.object.isRequired
};

export default SectionBasket;
