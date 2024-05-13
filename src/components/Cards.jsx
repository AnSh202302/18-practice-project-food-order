import { useEffect, useState } from "react";
import { getAllMeals } from "../http";
import Card from "./Card";

export default function Cards() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    async function fetchMeals() {
      try {
        const meals = await getAllMeals();
        setMeals(meals);
      } catch (error) {
        setIsError({
          message:
            error.message || "Could not fetch places, please try again later.",
        });
      }
      setIsLoading(false);
    }
    fetchMeals();
  }, []);
  return (
    <section>
      {isLoading && <p>Loadong...</p>}
      {isError && <p>Error</p>}
      <ul id="meals">
        {meals.map((meal) => (
          <Card key={meal.id} meal={meal} />
        ))}
      </ul>
    </section>
  );
}
