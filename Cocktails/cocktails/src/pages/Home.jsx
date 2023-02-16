import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
import blob from "../../public/Images/blob.svg";

export default function Home() {
  return (
    <main>
      <SearchForm />
      {/* <img className="blob" src={blob} alt="blob" /> */}
      <CocktailList />
    </main>
  );
}
