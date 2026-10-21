
import { useState } from "react";
import Ecart from "./Components/Ecart";
import Navbar from "./Components/Navbar";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  function addToCart(product) {
    setCart((previousCart) => {
      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <Navbar
        cartCount={cartCount}
        onCartClick={() => setShowCart(!showCart)}
      />

      <Ecart
        onAddToCart={addToCart}
        cart={cart}
        showCart={showCart}
      />
    </>
  );
}

export default App;
