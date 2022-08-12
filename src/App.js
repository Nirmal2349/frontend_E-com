import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { Product } from "./components/product";
import { Cart } from "./components/cart";
import { Navbar } from "./components/navbar";
import {Login} from "./components/login"
import { Signup } from "./components/signup";
import { ForgetPassword } from "./components/forgetpassword";

export default function APP() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
      </Routes>
    </div>
  );
}

