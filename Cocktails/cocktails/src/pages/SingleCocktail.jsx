import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  async function getCocktail() {
    try {
      const res = await fetch(`${url}${id}`);
      const data = await res.json();
      console.log(data);
      if (data.drinks) {
        const singleDrink = data.drinks;
        {
          singleDrink.map((drink) => {
            const {
              id: idDrink,
              category: strAlcoholic,
              img: strDrinkThumb,
              ingrd1: strIngredient1,
              ingrd2: strIngredient2,
              ingrd3: strIngredient3,
              ingrd4: strIngredient4,
            } = drink;

            return (
              <>
                <h1>{category}</h1>
                <p>{ingrd1}</p>
              </>
            );
          });
        }
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getCocktail();
  }, []);

  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h2>single cocktail page </h2>
    </div>
  );
};

export default SingleCocktail;
