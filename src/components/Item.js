import React, {useState} from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false);
  const cartClass = isInCart ? "in-cart" : "";
  const cartStatus = isInCart ? "Remove From Cart" : "Add to Cart";
  function cartButton(){
    setIsInCart((isInCart)=> !isInCart);
  }
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={cartButton}>{cartStatus}</button>
    </li>
  );
}

export default Item;
