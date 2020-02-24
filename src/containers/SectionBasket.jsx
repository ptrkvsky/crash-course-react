import PropTypes from "prop-types";
import React from "react";
import BasketLine from "../components/BasketLine";
import { motion } from "framer-motion";
import {
  ButtonClose,
  BlocBasket,
  Bag,
  Bag__quantity,
  BasketEmpty,
  Footer,
  FooterTotal,
  ButtonPayment
} from "../styles/containers/StyleSectionBasket";

const renderBasket = myBasket => {
  const basket = myBasket.getBasket();
  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.25,
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };

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
      <motion.div
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <BasketEmpty>
          Ajouter des produits au panier <br /> ＼(￣▽￣)／
        </BasketEmpty>
      </motion.div>
    );
  }
};

const SectionBasket = ({ myBasket, isOpen, setIsOpen }) => {
  const sidebar = {
    open: {
      clipPath: `circle(1050px at 415px 35px)`,
      transition: {
        type: "spring",
        stiffness: 30,
        restDelta: 20
      }
    },
    closed: {
      clipPath: `circle(30px at 415px 35px)`,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const handleMenu = () => {
    setIsOpen(!isOpen);
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
      <Bag onClick={() => handleMenu()}>
        <Bag__quantity> {myBasket.getTotalItems()}</Bag__quantity>
      </Bag>

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
