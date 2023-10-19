import React, { Fragment, useState } from "react";

import Header from "./components/header/Header";
import Description from "./components/description/Description";
import Food from "./components/food/Food";
import Cart from "./components/cart/Cart";
import CartProvider from "./state/CardProvider";

function App() {
  const [viewCart, setViewCart] = useState(false);

  const toggleViewCartHandler = () => {
    setViewCart(prevState => {
      return !prevState; 
    });
  };

  const hideViewCartHandler = () => {
    setViewCart(false);
  };

  return (
    <CartProvider>
      {viewCart && <Cart onClose={hideViewCartHandler} />}
      <Header toggleViewCart={toggleViewCartHandler} />
      <main>
        <Description />
        <Food />
      </main>
    </CartProvider>
  );
}

export default App;
