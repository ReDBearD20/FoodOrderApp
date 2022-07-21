import React from "react";
import mealsImage from "../../assets/mealsImage.jpeg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onCartClick} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="table full of lasagna" />
      </div>
    </React.Fragment>
  );
};

export default Header;
