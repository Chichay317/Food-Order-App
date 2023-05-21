import { useEffect, useState } from "react";
import classes from "./FetchedMeals.module.css";
import AvailableMeals from "./AvailableMeals";
import Card from "../../UI/Card/Card";

const FetchedMeals = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mealsList, setMealsList] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      setError(null);

      const response = await fetch(
        "https://meals-project-9ab7f-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedMeals = [];
      for (const key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,
        });
      }
      setMealsList(loadedMeals);

      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  if (error) {
    return (
      <section>
        <p className={classes.error}>{error}</p>
      </section>
    );
  }

  if (isLoading) {
    return (
      <section>
        <p className={classes.loading}>Loading...</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card className={classes["meal-card"]}>
        <ul>
          {mealsList.map((meal) => (
            <AvailableMeals
              id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
      ;
    </section>
  );
};

export default FetchedMeals;
