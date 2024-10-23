import { useEffect, useState } from "react";
import "./App.css";
import AutoComplete from "./AutoComplete";

function App() {
  const getSuggestions = async (queryString) => {
    const resp = await fetch(
      `https://dummyjson.com/products/search?q=${queryString}`
    );
    if (!resp.ok) {
      throw new Error("Network issue, try later!");
    }
    const res = await resp.json();

    return res.products;
  };

  return (
    <div>
      <h1>AutoComplete</h1>
      <AutoComplete
        placeholder="Search Product"
        fetchSuggestions={getSuggestions}
        searchKey="title"
      />
    </div>
  );
}

export default App;
