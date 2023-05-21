import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }

    setIsHighlighted(true);

    const timer = setTimeout(() => {
      setIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const numberofCartItems = cartCtx.items.reduce((curNum, items) => {
    return curNum + items.totalAmount;
  }, 0);

  return (
    <button
      className={`${classes["cart-button"]} ${
        isHighlighted ? classes.bump : ""
      }`}
      onClick={props.onOpen}
    >
      <CartIcon />
      <h3>Your Cart</h3>
      <h3 className={classes["cart-button-count"]}>{numberofCartItems}</h3>
    </button>
  );
};

export default HeaderCartButton;
