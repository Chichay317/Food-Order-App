import { Fragment } from "react";
import MealBox from "../Home/MealBox";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Navbar.module.css";

const Navigation = (props) => {
  return (
    <Fragment>
      <nav className={classes.nav}>
        <h2>ReactMeals</h2>
        <HeaderCartButton onOpen={props.openModal} />
      </nav>
      <MealBox />
    </Fragment>
  );
};

export default Navigation;
