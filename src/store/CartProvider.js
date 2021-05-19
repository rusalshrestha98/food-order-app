// purpose of this component is to simply manage the Cart Context data and provide
// that context to all components that require access to it
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};

  const removeItemFromCartHandler = (item) => {};

  // prop to be passed to consuming components that are descendants of this Provider
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  // all consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
