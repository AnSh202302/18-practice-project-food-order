export async function getAllMeals() {
  const res = await fetch("http://localhost:3000/meals");
  if (!res.ok) {
    throw new Error("Failed to fetch meals");
  }
  const resData = await res.json();
  return resData;
}

// export async function postOrders(items, customerData) {
//   const res = await fetch("http://localhost:3000/orders", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       body: JSON.stringify({
//         order: {
//           items,
//           customer: customerData,
//         },
//       }),
//     },
//   });
// }
