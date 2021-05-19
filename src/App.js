import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

import CartProvider from "./store/CartProvider";

function App() {
  const [ cartIsShown, setCartIsShown ] = useState(false);

  const showCartHandler = (cartIsShown) => {
    setCartIsShown(true )
  };

  const hideCartHandler = (cartIsShown) => {
    setCartIsShown(false)
  };

  return (
    <CartProvider>
      {cartIsShown ? <Cart onClose={hideCartHandler} /> : null}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
