import React, { useState } from "react";

function CategoryFilter({ categories, selectedCategory, handleSelectedCategory }) {

  const handleCategory = (category) => {
    handleSelectedCategory(category)
  }

  const categoryButtons = categories.map(category => (
    <button
      key={category}
      className={category === selectedCategory ? "selected" : null}
      onClick={() => handleCategory(category)}>
      {category}
    </button >
  ))


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
