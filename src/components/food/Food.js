import classes from './Food.module.css';
import FoodContainer from './FoodContainer';
import FoodItem from './FoodItem';
const foodInfo = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

  const Food = () => {
    const foodList = foodInfo.map((food) => (
      <FoodItem
        key={food.id}
        id={food.id}
        name={food.name}
        description={food.description}
        price={food.price}
      />
    ));
  
    return (
      <section className={classes.food}>
        <FoodContainer>{foodList}</FoodContainer>
      </section>
    );
  };
  
  export default Food;