import homeImage from "../../assets/react-meals-image.jpg";
import classes from "./HomePicture.module.css";

const HomePicture = () => {
  return (
    <div className={classes["home-img"]}>
      <img src={homeImage} alt="A table with delicious food" />
    </div>
  );
};

export default HomePicture;
