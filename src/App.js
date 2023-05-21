import { useState } from "react";
import Navbar from "./components/Navigation/Navbar";
import Cart from "./components/Cart/Cart";
import FetchedMeals from "./components/AvailableMeals/FetchedMeals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const closeCartHandler = () => {
    setCartIsVisible(false);
  };

  const openCartHandler = () => {
    setCartIsVisible(true);
  };

  return (
    <CartProvider>
      <Navbar openModal={openCartHandler} />
      <FetchedMeals />
      {cartIsVisible && <Cart onClose={closeCartHandler} />}
    </CartProvider>
  );
}

export default App;
