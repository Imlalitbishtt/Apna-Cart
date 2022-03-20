import React from "react";
export default function Badge(props) {
  return (
    <p>
      <img src="cart.png" width={40} alt="image" />
      <sup className="h3 text-dark">{props.productList.length}</sup>
    </p>
    
    
  );
}
