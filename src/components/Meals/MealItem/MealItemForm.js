import { useRef, useState } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    // prevent default browser reloading
    event.preventDefault();
    // grabs the current value of the input HTML element in string format
    const enteredAmount = amountInputRef.current.value;
    // converts string enteredAmount value into a number
    const enteredAmountNumber = +enteredAmount;
    // if any of these conditions are correct, do not continue with the rest of the function execution
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    // add the entered number of items to the cart
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid &&  <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
