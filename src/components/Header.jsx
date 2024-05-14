import Button from "./UI/Button";
import logo from "/logo.jpg";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Logo" />
        <h1>reactfood</h1>
      </div>
      <nav>
        <Button textOnly>Cart ()</Button>
      </nav>
    </header>
  );
}
