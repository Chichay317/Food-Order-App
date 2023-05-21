import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const [formIsValid, setFormIsValid] = useState(true);
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const submitCheckoutForm = (event) => {
    event.preventDefault();

    const nameInput = nameInputRef.current.value;
    const streetInput = streetInputRef.current.value;
    const postalCodeInput = postalCodeInputRef.current.value;
    const cityInput = cityInputRef.current.value;

    if (
      nameInput.trim().length === 0 ||
      streetInput.trim().length === 0 ||
      postalCodeInput.trim().length === 0 ||
      cityInput.trim().length === 0
    ) {
      setFormIsValid(false);
      return;
    }

    props.submitCheckoutInfo({
      name: nameInput,
      street: streetInput,
      postalCode: postalCodeInput,
      city: cityInput,
    });
  };

  return (
    <form onSubmit={submitCheckoutForm}>
      <div className={classes["form-group"]}>
        <label htmlFor="text">Your Name</label>
        <input id="text" type="text" ref={nameInputRef} />
        {!formIsValid && (
          <p className={classes.error}>Please enter a valid value!</p>
        )}
      </div>

      <div className={classes["form-group"]}>
        <label htmlFor="text">Street</label>
        <input id="text" type="text" ref={streetInputRef} />
        {!formIsValid && (
          <p className={classes.error}>Please enter a valid value!</p>
        )}
      </div>

      <div className={classes["form-group"]}>
        <label htmlFor="text">Postal Code</label>
        <input id="text" type="text" ref={postalCodeInputRef} />
        {!formIsValid && (
          <p className={classes.error}>Please enter a valid value!</p>
        )}
      </div>

      <div className={classes["form-group"]}>
        <label htmlFor="text">City</label>
        <input id="text" type="text" ref={cityInputRef} />
        {!formIsValid && (
          <p className={classes.error}>Please enter a valid value!</p>
        )}
      </div>

      <div className={classes["checkout-buttons"]}>
        <button onClick={props.onClose}>Cancel</button>
        <button type="submit">Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
