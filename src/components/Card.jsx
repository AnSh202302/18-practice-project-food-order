import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";

export default function Card({ meal }) {
  const { image, name, price, description } = meal;
  const cartCtx = useContext(CartContext);

  function handleAddCardToCart(e) {
    cartCtx.addItem(meal);
  }
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
          <Button onClick={handleAddCardToCart}>Add To Card</Button>
        </p>
      </article>
    </li>
  );
}
