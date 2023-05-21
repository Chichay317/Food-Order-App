import classes from "./MealItems.module.css";

const MealItems = (props) => {
  return (
    <div className={classes["meal-items"]}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <h4>{`$${props.price}`}</h4>
    </div>
  );
};

export default MealItems;
