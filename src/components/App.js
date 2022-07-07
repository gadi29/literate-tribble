import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header.js";
import Signup from "./Signup.js";
import UserContext from "../context/UserContext";
import Address from "./Address.js";
import ProductPage from "./ProductPage.js";
import Signin from "./Signin.js";
import Cart from "./Cart.js";

function App() {
  const [userCreate, setUserCreate] = React.useState();
  return (
    <UserContext.Provider value={{ userCreate, setUserCreate }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/address" element={<Address />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/cart/:userId" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
