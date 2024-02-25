import { Navbar } from "./components/layout/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ItemListContainer from "./components/pages/ItemListContainer";
import { Cart } from "./components/common";
import { ItemDetailContainer } from "./components/pages";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
