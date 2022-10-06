import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, handleItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onSearchChange(event) {
    setSearch(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") { 
      return true
    } else {
      return item.category === selectedCategory
    }})
    .filter(item => item.name.match(search));

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit}/>
      <Filter 
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange} 
        search={search} 
        onSearchChange={onSearchChange}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

