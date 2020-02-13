class Basket {
  constructor(basket = [], setBasket) {
    this.basket = basket;
    //this.setBasket = this.setBasket.bind(this);
    this.setBasket = setBasket;
  }

  setBasket(basket) {
    this.basket = basket;
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
      console.error("---- ATTENTION NO BASKET PROVIDED TO getTotalItems ----");
    }
  }

  addBasketItem(movie) {
    if (movie) {
      //Si mon panier est vide
      if (this.basket.length == 0) {
        //Panier vide j'ajouter mon movie
        movie.qty = 1;
        this.basket.push(movie);
        this.setBasket([...this.basket]);
      } else {
        //je parcours mon panier je vérifie si mon élément est déjà présent.

        if (this.basket) {
          let elemPresent = false;
          this.basket.map(element => {
            // Si j'ai une corrrespondance
            if (movie.id == element.id) {
              console.log("Élément présent");
              // Élément déjà présent j'incrémente la quantité
              element.qty += 1;
              this.setBasket([...this.basket]);
              elemPresent = true;
            }
          });
          if (!elemPresent) {
            console.log("Élément pas présent");
            // Mon élément n'est pas présent je l'ajoute simplement au panier
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

  deleteBasketItem(item) {
    if (item) {
      console.log(item);
    } else {
      console.error(
        "---- ATTENTION NO BASKET PROVIDED TO deleteBasketItem ----"
      );
    }
  }
}

export default Basket;
