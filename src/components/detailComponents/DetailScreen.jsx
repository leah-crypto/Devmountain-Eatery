import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Details.module.css";
import DetailImage from "./DetailImage.jsx";
import salmon from "../../assets/salmon.jpg";
import NewRecipeScreen from "../newRecipeScreen/NewRecipeScreen";
// import RecipeCard from "../elements/RecipeCard";

const DetailScreen = () => {
  const { id } = useParams();

  const [recipe, setRecipe] = useState({});
  const url = 'https://recipes.devmoutian.com';

console.log(recipe); //nothing in our obj



  useEffect(() => {
    axios.get(`${url}/recipes/${id}`).then((res) => {
      setRecipe(res.data);
    });
  }, []);
  return (
    <section>
      <div className={styles.ad_banner}
      title={recipe.recipe_name}
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${salmon})`,
        backgroundSize: "cover",
      }}
    >{recipe.recipe_name}</div>
      {/* <DetailImage image={recipe.image_url}  /> */}
     
      <div className={styles.ingredients_container}>
        <h2>Recipe</h2>
        <h4>Prep Time: {recipe.prep_time}</h4>
        <h4>Cook Time: {recipe.cook_time}</h4>
        <h4>Serves: {recipe.serves}</h4>
        <br />
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
      <div className={styles.instruction_container}>
        <h2>Instructions</h2>
        <p style={{ whiteSpace: "pre-wrap" }}>
          {recipe.instructions && JSON.parse(recipe.instructions)}
        </p>
      </div>
    </section>
  );
};

export default DetailScreen;
