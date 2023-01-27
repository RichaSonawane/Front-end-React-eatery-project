import React from 'react';
import classes from "./RecipeCard.module.css";
import { useNavigate } from 'react-router-dom';


const RecipeCard = (props) => {
let recipe=props.recipe;

const navigate = useNavigate();

const handleClick = () => {
  navigate(`/recipe/${recipe.recipe_id}`);
};

  return (
    <div>
      <div className={classes.card}>
        <img className={classes.center} src={recipe.image_url} />
        <h3>{recipe.recipe_name}</h3>
        <button className={classes["more_btn"]} onClick={handleClick}>
          See More
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;