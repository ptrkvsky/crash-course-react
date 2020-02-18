// import { useState } from "react";
import createPersistedState from "use-persisted-state";
const useBasketState = createPersistedState([]);

class Basket {
  constructor() {
    const [basket, setBasket] = useBasketState();
    this.basket = basket;
    this.setBasket = setBasket;
  }

  getBasket() {
    return this.basket;
  }

  // Return number of elements in basket passed as parameter
  getTotalItems(basket = this.basket) {
    if (basket && basket.length > 0) {
      const totalItemBasket = basket.reduce(
        (accumulator, currentValue) => accumulator + currentValue.qty,
        0
      );
      return totalItemBasket;
    } else {
      return 0;
    }
  }

  // Return the total amount of the basket
  getTotalBasket(basket = this.basket) {
    if (basket && basket.length > 0) {
      const totalBasket = basket.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.qty * currentValue.price,
        0
      );
      return totalBasket;
    } else {
      return 0;
    }
  }

  addBasketItem(movie) {
    if (movie) {
      // If basket empty we add element with qt1 +
      if (this.basket.length == 0) {
        movie.qty = 1;
        this.basket.push(movie);
        this.setBasket([...this.basket]);
      } else {
        // If basket is not, i check if element is inside
        if (this.basket) {
          let elemPresent = false;
          this.basket.map(element => {
            // If element is inside
            if (movie.id == element.id) {
              element.qty += 1;
              this.setBasket([...this.basket]);
              elemPresent = true;
            }
          });
          if (!elemPresent) {
            //Element is not present simple add to basket
            movie.qty = 1;
            this.basket.push(movie);
            this.setBasket([...this.basket]);
          }
        } else {
          console.log("out");
        }
      }
      this.getTotalItems(this.basket);
    } else {
      console.error("---- ATTENTION NO MOVIE PROVIDED TO addBasketItem ----");
    }
  }

  getItemQty(item) {
    if (item) {
      const res = this.basket.find(product => product == item);
      return res.qty;
    } else {
      console.error("---- ATTENTION NO ITEM PROVIDED TO minusBasketItem ----");
    }
  }

  minusBasketItem(item) {
    if (item) {
      // Return all element of my current basket except the one that
      const res = this.basket.map(product => {
        if (product == item) {
          product.qty--;
        }
        return product;
      });
      this.setBasket(res);
    } else {
      console.error("---- ATTENTION NO ITEM PROVIDED TO minusBasketItem ----");
    }
  }

  plusBasketItem(item) {
    if (item) {
      // Return all element of my current basket except the one that
      const res = this.basket.map(product => {
        if (product == item) {
          product.qty++;
        }
        return product;
      });
      this.setBasket(res);
    } else {
      console.error("---- ATTENTION NO ITEM PROVIDED TO addBasketItem ----");
    }
  }

  deleteBasketItem(item) {
    if (item) {
      // Return all element of my current basket except the one that
      const res = this.basket.filter(element => element != item);
      this.setBasket(res);
    } else {
      console.error("---- ATTENTION NO ITEM PROVIDED TO deleteBasketItem ----");
    }
  }
}

export default Basket;
