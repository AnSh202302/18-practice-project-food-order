import Card from "./Card";
import useHttp from "../hook/useHttp";

const requestConfig = {};

export default function Cards() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p>Fetching meals...</p>;
  }

  return (
    <section>
      {/* {error && <p>Error</p>} */}
      <ul id="meals">
        {meals.map((meal) => (
          <Card key={meal.id} meal={meal} />
        ))}
      </ul>
    </section>
  );
}
