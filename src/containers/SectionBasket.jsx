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
  BasketEmpty,
  Footer,
  FooterTotal,
  ButtonPayment
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
  const handlePayment = () => {
    myBasket.getTotalBasket() > 0
      ? alert(myBasket.getTotalBasket())
      : alert("Ajoute un produit au panier coco");
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
      <Footer>
        <FooterTotal>
          <p>Total</p>
          <div>{myBasket.getTotalBasket()}</div>
        </FooterTotal>
        <ButtonPayment onClick={() => handlePayment()}>PAYER</ButtonPayment>
      </Footer>
    </Section>
  );
};

SectionBasket.propTypes = {
  myBasket: PropTypes.object.isRequired
};

export default SectionBasket;
