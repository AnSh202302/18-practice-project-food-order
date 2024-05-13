import { currencyFormatter } from "../util/formatting";

export default function Card({ meal }) {
  const { image, name, price, description } = meal;
  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${image}`} alt={name} />
        <div>
          <h3>{name}</h3>
          <p className="meal-item-price">{currencyFormatter.format(price)}</p>
          <p className="meal-item-description">{description}</p>
        </div>
        <p className="meal-item-actions">
          <button>Add To Card</button>
        </p>
      </article>
    </li>
  );
}
