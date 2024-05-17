import Card from "./Card";
import useHttp from "../hook/useHttp";
import Error from "./Error";

const requestConfig = {};

export default function Cards() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }
  if (error) {
    return <Error title="Failed to fatch meals" message={error} />;
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
