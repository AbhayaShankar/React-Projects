import React from "react";
import { useGlobalContext } from "../context/Context";

export default function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  console.log(setSearchTerm);
  return <div>SearchForm</div>;
}
