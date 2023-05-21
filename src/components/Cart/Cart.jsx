import { Fragment, useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [orderButtonRemoveHandler, setOrderButtonRemoveHandler] =
    useState(false);

  const removeOrderButton = () => {
    setOrderButtonRemoveHandler(true);
  };

  const hasItems = cartCtx.items.length > 0;

  const addToCartHandler = (meal) => {
    cartCtx.addItems({ ...meal, totalAmount: 1 });
  };

  const removeFromCartHandler = (id) => {
    cartCtx.removeItems(id);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((meal) => (
        <CartItem
          name={meal.name}
          key={meal.id}
          totalAmount={meal.totalAmount}
          price={meal.price}
          onAdd={addToCartHandler.bind(null, meal)}
          onRemove={removeFromCartHandler.bind(null, meal.id)}
        />
      ))}
    </ul>
  );

  const sendCartDataHandler = async (userData) => {
    setIsSubmitting(true);

    await fetch(
      "https://meals-project-9ab7f-default-rtdb.firebaseio.com/cart-data.json",
      {
        method: "POST",
        body: JSON.stringify({ user: userData }),
      }
    );

    setIsSubmitting(false);
    setDidSubmit(true);
  };

  const modalContent = (
    <Fragment>
      {cartItems}
      <div className={classes.total}>
        <span className={classes["total-amount"]}>Total Amount</span>
        <span className={classes["total-price"]}>
          {`$${cartCtx.totalAmount.toFixed(2)}`}
        </span>
      </div>
      {!orderButtonRemoveHandler && (
        <div className={classes.actions}>
          <button className={classes["actions-close"]} onClick={props.onClose}>
            Close
          </button>
          {hasItems && (
            <button
              className={classes["actions-order"]}
              onClick={removeOrderButton}
            >
              Order
            </button>
          )}
        </div>
      )}
      {orderButtonRemoveHandler && (
        <Checkout
          onClose={props.onClose}
          submitCheckoutInfo={sendCartDataHandler}
        />
      )}
    </Fragment>
  );

  const submittingContent = <h2>Sending Cart Data...</h2>;

  const submittedContent = (
    <div>
      <h2>Successfully sent the order!</h2>
      <button onClick={props.onClose} className={classes["submitted-close"]}>
        Close
      </button>
    </div>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && modalContent}
      {isSubmitting && submittingContent}
      {!isSubmitting && didSubmit && submittedContent}
    </Modal>
  );
};

export default Cart;
