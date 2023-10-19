import classes from './FoodContainer.module.css';

const FoodContainer = props => {
  return <div className={classes.FoodContainer}>{props.children}</div>
};

export default FoodContainer;