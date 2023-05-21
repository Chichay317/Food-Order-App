import { Fragment } from "react";
import HomePicture from "./HomePicture";
import MealSummary from "./MealSummary";

const MealBox = () => {
  return (
    <Fragment>
      <HomePicture />
      <MealSummary />
    </Fragment>
  );
};

export default MealBox;
