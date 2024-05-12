import { useEffect, useState } from "react";
import { getAllMeals } from "../http";
import Card from "./Card";

export default function Cards() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  console.log("meals", meals);

  useEffect(() => {
    setIsLoading(true);
    async function fetchMeals() {
      try {
        const meals = await getAllMeals();
        setMeals(meals);
        console.log(meals);
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
      {!isLoading && !isError && (
        <ul id="meals">
          <Card meals={meals} />
        </ul>
      )}
    </section>
  );
}
