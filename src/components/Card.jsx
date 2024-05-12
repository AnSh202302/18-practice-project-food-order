export default function Card({ meals }) {
  return (
    <>
      {meals.map((meal) => {
        const { id, image, name, price, description } = meal;
        return (
          <li key={id} className="meal-item">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p className="meal-item-price">${price}</p>
            <p className="meal-item-description">{description}</p>
            <div className="cart-item-actions">
              <button>Add To Card</button>
            </div>
          </li>
        );
      })}
      ;
    </>
  );
}
