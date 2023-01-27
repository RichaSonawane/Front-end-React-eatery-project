import React, { useState } from "react";
import classes from "./HomeScreen.module.css";
import { VscSearch } from "react-icons/vsc";
import { BiSearchAlt2 } from "react-icons/bi";
import RecipeCard from "./RecipeCard";

const Recipe = (props) => {
  const [search, setSearch] = useState("");

  let recipes = props.recipes;
  const recipeDisplay = recipes
    .filter((recipe, index) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = search.toLowerCase();
      return title.includes(searchParams);
    })
    .map((recipe, index) => {
      return <RecipeCard key={index} recipe={recipe} />;
    });

  return (
    <section className={classes["recipe_section"]}>
      <h2>Search a recipe</h2>
      <span className={classes.search_bar}>
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a Recipe"
        />
      </span>
      <div className={classes["recipe_container"]}>
        {recipeDisplay ? recipeDisplay : <h2>No Recipes :(</h2>}
      </div>
    </section>
  );
};
export default Recipe;
