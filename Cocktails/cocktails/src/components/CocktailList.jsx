import React from "react";
import Cocktail from "../components/Cocktail";
import Loading from "./Loading";
import { useGlobalContext } from "../context/Context";

export default function CocktailList() {
  const { loading, searchTerm } = useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (Cocktail.length < 1) {
    return (
      <h2 className="section-title">
        No cocktails matched your search criteria
      </h2>
    );
  }

  return <div>CocktailList</div>;
}
