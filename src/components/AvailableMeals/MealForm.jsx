import { useRef, useState } from "react";
import Input from "../../UI/Input/Input";
import classes from "./MealForm.module.css";

const MealForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const amount = amountInputRef.current.value;
    const enteredAmount = +amount;

    if (enteredAmount > 5 || amount.trim().length === 0 || enteredAmount < 1) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+Add</button>
      {!amountIsValid && <p>Please enter a valid number (1-5).</p>}
    </form>
  );
};

export default MealForm;
