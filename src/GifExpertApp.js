import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One punch"]);

  // const handleAdd = () => {
  //   // setCategories([...categories, "Naruto"]);
  //   // setCategories(["Naruto", ...categories]);
  //   setCategories((cats) => [...cats, "Naruto"]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((categories) => (
          <GifGrid key={categories} category={categories} />
        ))}
      </ol>
    </>
  );
};
