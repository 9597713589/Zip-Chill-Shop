import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const found = cart.find(i => i.id === product.id);
    if (found) {
      setCart(
        cart.map(i =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const increase = (id) => {
    setCart(cart.map(i =>
      i.id === id ? { ...i, qty: i.qty + 1 } : i
    ));
  };

  const decrease = (id) => {
    setCart(
      cart
        .map(i =>
          i.id === id ? { ...i, qty: i.qty - 1 } : i
        )
        .filter(i => i.qty > 0)
    );
  };

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <ProductList addToCart={addToCart} />
              <Cart
                cart={cart}
                increase={increase}
                decrease={decrease}
              />
            </>
          }
        />

        {/* LOGIN PAGE */}
        <Route path="/login" element={<Login />} />

        {/* CHECKOUT PAGE */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
