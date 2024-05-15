import Cards from "./components/Cards";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Cart />
        <Header />
        <main>
          <Cards />
        </main>
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
