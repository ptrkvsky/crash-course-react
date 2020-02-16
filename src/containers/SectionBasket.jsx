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

const SectionBasket = ({ myBasket, basketOpen, toggleOpen }) => {
  const handleClick = () => {
    // En général, dans une appli React on va éviter au max de modifier directement le DOM
    // Je t'ai fais une proposition d'implémentation via le state
    // Plus tard tu pourras le réécrire avec le Context
    // document.querySelector("#sectionBasket").classList.toggle("open");
    toggleOpen();
  };

  return (
    <Section id="sectionBasket" className={basketOpen ? "open" : "close"}>
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
