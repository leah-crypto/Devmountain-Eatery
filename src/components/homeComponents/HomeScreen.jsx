import React from 'react'
import { useEffect } from 'react'
import AdBanner from './AdBanner'
import axios from 'axios';
import { useState } from 'react';
import RecipeContainer from './RecipeContainer'



const HomeScreen = () => { 

  const [recipes, setRecipes] = useState([])
const url = 'https://recipes.devmountain.com/recipes'

  const getRecipes = () => {
    axios.get(`${url}/recipes`)
    .then((res) => {
      setRecipes(res.data)
      console.log(res.data)
    })
  }
  
  useEffect(() => {
    getRecipes()
  }, [])

  return (
    <div>
      <AdBanner />
      <RecipeContainer recipes = {recipes}/>
    </div>
  )


}



export default HomeScreen