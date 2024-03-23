import { BrowserRouter } from "react-router-dom";
import React from "react";
import ItemListContainer from "./components/pages/ItemListContainer";
import { Cart } from "./components/common";
import { ItemDetailContainer } from "./components/pages";

import { CheckoutContainer } from "./components/pages/checkout/CheckoutContainer";
import { CartContainer } from "./components/pages/cart/CartContainer";
import CartContextProvider from "./context/CartContext";
import { AppRouter } from "./router/AppRouter";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartContextProvider>
          <AppRouter />
        </CartContextProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
