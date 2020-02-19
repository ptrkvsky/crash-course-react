import PropTypes from "prop-types";
import React from "react";
import BasketLine from "../components/BasketLine";
import { motion } from "framer-motion";
import {
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

const SectionBasket = ({ myBasket, isOpen, setIsOpen }) => {
  const sidebar = {
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 5
      }
    },
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handlePayment = () => {
    myBasket.getTotalBasket() > 0
      ? alert(myBasket.getTotalBasket())
      : alert("Ajoute un produit au panier coco");
  };

  return (
    <motion.section
      className="basket-container"
      animate={isOpen ? "open" : "closed"}
      initial={false}
      variants={sidebar}
    >
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
    </motion.section>
  );
};

SectionBasket.propTypes = {
  isOpen: PropTypes.any,
  myBasket: PropTypes.object.isRequired,
  setIsOpen: PropTypes.any
};

export default SectionBasket;
