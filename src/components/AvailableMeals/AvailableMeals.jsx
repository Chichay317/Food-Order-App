import { useContext } from "react";
import CartContext from "../../store/cart-context";
import MealItems from "./MealItems";
import classes from "./AvailableMeals.module.css";
import MealForm from "./MealForm";

const AvailableMeals = (props) => {
  const cartCtx = useContext(CartContext);

  const addedItemsToCart = (amount) => {
    cartCtx.addItems({
      id: props.id,
      totalAmount: amount,
      name: props.name,
      price: props.price,
    });
  };

  return (
    <li className={classes["meal-list"]}>
      <MealItems
        name={props.name}
        description={props.description}
        price={props.price.toFixed(2)}
      />
      <MealForm onAddToCart={addedItemsToCart} />
    </li>
  );
};

export default AvailableMeals;
