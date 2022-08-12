import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import { NavLink } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { data } from "./Data";

export function Product() {
  const data = [
    {
      brandname: "Peter England",
      image: "./assets/products/f1.jpg",
      price: "Rs.399",
      productname: "Abstract Casual Shirt",
    },
    {
      brandname: "Allen Solly",
      image: "assets/products/f2.jpg",
      price: "Rs.299",
      productname: "Abstract Casual Shirt",
    },
    {
      brandname: "Indian Terrain",
      image: "assets/products/f3.jpg",
      price: "Rs.499",
      productname: "Abstract Casual Shirt",
    },
    {
      brandname: "Wrangler",
      image: "assets/products/f4.jpg",
      price: "₹Rs.399",
      productname: "Abstract Casual Shirt",
    },
    {
      brandname: "Van Heusen",
      image: "assets/products/f5.jpg",
      price: "Rs.199",
      productname: "Abstract Casual Shirt",
    },
    {
      brandname: "Levis",
      image: "assets/products/f6.jpg",
      price: "Rs.249",
      productname: "Denim",
    },
    {
      brandname: "Tommy Hilfiger",
      image: "assets/products/f7.jpg",
      price: "Rs.349",
      productname: "Palazzo",
    },
    {
      brandname: " Camera Gimbal",
      image: "assets/products/f8.jpg",
      price: "Rs.199",
      productname: "Tops",
    },
  ];
  const [value, setValue] = useState(2);

  return (
    <div className="section-p1 product_style">
      <h2>Feature Products</h2>
      <p>Summer Collection New Modern Design</p>
      <div className="pro-container">
        {data.map((data) => (
          <div className="pro">
            <img src={data.image} alt="product__image" />
            <div className="description">
              <span>{data.brandname}</span>
              <h5>{data.productname}</h5>
              <div className="start_style">
                <Box
                  sx={{
                    "& > legend": { mt: 2 },
                  }}
                >
                  <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                  />
                </Box>
              </div>
              <h4>{data.price}</h4>
            </div>
            <button className="cart__btw">
              <NavLink to="/cart">
                <AddShoppingCartIcon />
              </NavLink>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
