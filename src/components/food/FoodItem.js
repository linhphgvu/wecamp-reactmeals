import AddItem from './AddItem';
import classes from './FoodItem.module.css';
import { useContext } from 'react';
import CartContext from '../../state/context';

const FoodItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  }

  return (
    <div>
      <div className={classes.Food}>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{`$${props.price}`}</div>
      </div>
      <div>
        <AddItem id={props.id} onAddToCart={addItemToCartHandler} />
      </div>
    </div>
  );
};

export default FoodItem;
