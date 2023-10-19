import classes from './AddItem.module.css'
import Input from './Input'
import { useRef, useState } from 'react';

const AddItem = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = event => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
    setAmountIsValid(true);
  }

  return <form className={classes.add} onSubmit={submitHandler}>
    <Input
      label="Amount"
      ref={amountInputRef}
      input={{
        id: props.id,
        type: "number",
        step: "1",
        defaultValue: "1"
      }}
    />
    <button>+ Add</button>
    {!amountIsValid && <p>Please enter a valid Amount (1-5).</p>}
  </form>;
};

export default AddItem;