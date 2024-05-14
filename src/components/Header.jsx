import { useContext } from "react";
import Button from "./UI/Button";
import logo from "/logo.jpg";
import CartContext from "../store/CartContext";

export default function Header() {
  const cartCtx = useContext(CartContext);
  const totalCartItems = cartCtx.items.reduce((totalNumbersOfItems, item) => {
    return totalNumbersOfItems + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Logo" />
        <h1>reactfood</h1>
      </div>
      <nav>
        <Button textOnly>Cart ({totalCartItems})</Button>
      </nav>
    </header>
  );
}
