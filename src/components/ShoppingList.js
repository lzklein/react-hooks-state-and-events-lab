import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
const [filterSelection, setFilterSelection] = useState('All');

const handleFilter = (e) => {
  setFilterSelection(e.target.value);
}


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.filter((item) => {
          if(filterSelection != "All"){
          return item.category === filterSelection;} 
          else{
            return item
          }
        }).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
