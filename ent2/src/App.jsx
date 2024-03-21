import { Navbar } from "./components/layout/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ItemListContainer from "./components/pages/ItemListContainer";
import { Cart } from "./components/common";
import { ItemDetailContainer } from "./components/pages";
import { Footer } from "./components/layout/Footer";
import { Layout } from "./components/layout/Layout";
import { CheckoutContainer } from "./components/pages/checkout/CheckoutContainer";
import { CartContainer } from "./components/pages/cart/CartContainer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/checkout" element={<CheckoutContainer />} />
          </Route>
          <Route path="*" element={<h1>404 not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
