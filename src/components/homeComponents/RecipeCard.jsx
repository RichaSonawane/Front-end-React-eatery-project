import React from 'react';
import classes from "./RecipeCard.module.css"

const RecipeCard = (props) => {
let recipe=props.recipe;

  return (
    <div>
      <div className={classes.card}>
        <img
          className={classes.center}
          src={recipe.image_url}
        />
        <h3>{recipe.recipe_name}</h3>
        <button className={classes["more_btn"]}>See More</button>
      </div>
      
    </div>
  );
}

export default RecipeCard;