import React from "react";
import { Feature } from "./Feature";
import { Product } from "./Product.1";

export function Home() {
  return (
    <div>
      <div className="banner">
        <h4>Trade-in offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>save more with coupons & upto 70% off!</p>
        <button className="btw__shop">Shop</button>
      </div>
      {/* <div>
        <img src="https://swall.teahub.io/photos/small/356-3567567_paradise-valley-arizona-luxury-homes.jpg" />
      </div> */}

      <Feature />
      <Product />
    </div>
  );
}
