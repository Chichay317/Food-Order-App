import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <li className={classes["cart-lists"]}>
      <div className={classes["cart-list"]}>
        <h2>{props.name}</h2>
        <div className={classes["cart-buttons"]}>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </div>
      </div>
      <div className={classes["cart-price"]}>
        <p>{`$${props.price.toFixed(2)}`}</p>
        <h3>x {props.totalAmount}</h3>
      </div>
    </li>
  );
};

export default CartItem;
