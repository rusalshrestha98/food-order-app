// cart modal that diplays all the items in the cart + the total price
import { useContext } from "react";

import Modal from "./../UI/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartContext.removeItem(id);
  };

  const cartItemAddHandler = item => {
    cartContext.addItem({...item, amount: 1})
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)} // bind: preconfigures the function for future execution
          onAdd={cartItemAddHandler.bind(null, item)} // bind: preconfigures the function for future execution
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {/* only show order button if the cart has items */}
        {hasItems ? <button className={classes.button}>Order</button> : null}
      </div>
    </Modal>
  );
};

export default Cart;
