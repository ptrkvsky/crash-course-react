const basketReducer = (basket, action) => {
  console.log(basket, action);
  /*
  switch (action.type) {
    case "ADD_ELEMENT":
      console.log(basket, action);
      action.element.qty = 1;
      // basket.push(action.element);
      return true;
    case "REMOVE_ELEMENT":
      return true;
    default:
      return basket;
  }
  */
};

export default basketReducer;
