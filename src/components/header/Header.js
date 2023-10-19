import React from "react";

import CartButton from "./CartButton";

import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

const Header = props => {
  return <React.Fragment>
    <header className={classes.header}>
      <h1>React Meals</h1>
      <CartButton toggleViewCart={props.toggleViewCart} />
    </header>
    <div className={classes["main-image"]}>
      <img src={mealsImage} alt="" />
    </div>
  </React.Fragment>;
};

export default Header;