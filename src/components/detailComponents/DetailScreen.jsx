import React, { useEffect, useState } from "react";
import AdBanner from '../homeComponents/AdBanner';
import salmon from "../../assets/salmon.jpg";
import steak from "../../assets/steak.jpeg";
import classes from "./DetailScreen.module.css"
import {useParams} from "react-router-dom";
import axios from "axios";

const DetailScreen = () => {  
const {id} = useParams()
const [recipe, setRecipe]=useState("")

useEffect(() => {
  axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
    setRecipe(res.data);
    console.log(res.data)
  });
}, []);

  return (
    <section>
      <div
        className={classes.ad_banner}
        style={{
          background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${steak})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className={classes.detailSection}>
        <div className={classes.detail}>
          <div>
            <h2>{recipe.recipe_name}</h2>
            <h4>{recipe.prep_time}</h4>
            <h4>{recipe.cook_time}</h4>
            <h4>{recipe.serves}</h4>
          </div>
          <div>
            <h2>Ingredients</h2>
            {recipe.ingredients &&
              recipe.ingredients.map((ing, index) => {
                return (
                  <h4>
                    {ing.quantity} {ing.ingredient}
                  </h4>
                );
              })}
          </div>
        </div>
        <div className={classes.detailInstruction}>
          <h2>Instruction</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>
            {recipe.instructions && JSON.parse(recipe.instructions)}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailScreen;
