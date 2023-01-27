import React,{useEffect,useState} from 'react'
import AdBanner from './AdBanner';
import axios from "axios";
import Recipe from './Recipe';
import classes from "./HomeScreen.module.css"


const HomeScreen = () => {  
const [recipes, setRecipes]=useState([]);


const getRecipes = () => {
  axios.get("https://recipes.devmountain.com/recipes").then((res) => {
    setRecipes(res.data);
    console.log(res.data);
  });
};

useEffect(() => {
  getRecipes();
}, []);

  return (
    <div>
      <AdBanner />
      <Recipe recipes={recipes}></Recipe>
    </div>
  );
}

export default HomeScreen