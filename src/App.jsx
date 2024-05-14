import Cards from "./components/Cards";
import Header from "./components/Header";
import Modal from "./components/UI/Modal";
import { CartContextProvider } from "./store/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Modal open>Modal</Modal>
      <Header />
      <main>
        <Cards />
      </main>
    </CartContextProvider>
  );
}

export default App;
