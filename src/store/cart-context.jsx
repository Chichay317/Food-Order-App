import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItems: () => {},
  deleteItems: () => {},
});

export default CartContext;
