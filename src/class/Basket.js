class Basket {
  constructor() {
    this.basket = [];
  }

  setBasket(basket) {
    this.basket = basket;
  }

  // Return number of elements in basket passed as parameter
  getTotalItems(basket) {
    let totalItems = 0;
    if (basket && basket.length > 0) {
      totalItems = basket.map(element => {
        console.log(element.qty);
        let qtyItem = 0;
        qtyItem = qtyItem + element.qty;
        console.log({ qtyItem });
      });
    }
    console.log(totalItems);
    return totalItems;
  }
}

export default Basket;
