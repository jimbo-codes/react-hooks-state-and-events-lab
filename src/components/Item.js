import React,{useState} from "react";

function Item({ name, category }) {
  const [inCart, addCart] = useState(false);
  return (
    <li className={inCart?"in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={()=>addCart(!inCart)}className="add">{inCart?"Remove From Cart":"Add to Cart"}</button>
    </li>
  );
}

export default Item;
