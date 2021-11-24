import React,{useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, selectThis] = useState("All");
console.log(items);
  const result = items.filter(item=>{
    if(selectedCategory==="All"){
      return items;
    }else{
      return item.category === selectedCategory
    }
        })
        console.log(result)
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e)=>{
          selectThis(e.target.value)
        }}
      
        name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* You're going to replace items with the new filtered array result */}
        {result.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
