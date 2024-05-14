import Cards from "./components/Cards";
import Header from "./components/Header";
import { CartContextProvider } from "./store/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Header />
      <main>
        <Cards />
      </main>
    </CartContextProvider>
  );
}

export default App;
