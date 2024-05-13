export async function getAllMeals() {
  const res = await fetch("http://localhost:3000/meals");
  if (!res.ok) {
    throw new Error("Failed to fetch meals");
  }
  const resData = await res.json();
  return resData;
}
