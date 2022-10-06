import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [newItem, setNewItem] = useState({
    id: uuid(),
    name: "",
    category: "Produce"
  })

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit(newItem);
    setNewItem({
      id: uuid(),
      name: "",
      category: "Produce"
    })
  }

  function handleOnChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setNewItem({
      ...newItem, [name]: value
    })
  }
  return(
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={newItem.name} onChange={handleOnChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={newItem.category} onChange={handleOnChange}>

          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  )
}


export default ItemForm;