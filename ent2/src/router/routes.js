import { Item } from "../components/common";
import { ItemDetailContainer, ItemListContainer } from "../components/pages";
import { CartContainer } from "../components/pages/cart/CartContainer";
import { CheckoutContainer } from "../components/pages/checkout/CheckoutContainer";

export const routes = [

    {
        id: "home",
        path: "/",
        Element: ItemListContainer

    },

    {
        id: "category",
        path: "/category/:category",
        Element: ItemListContainer

    },

    {
        id: "detail",
        path: "/item:id",
        Element:ItemDetailContainer

    },

    {
        id: "cart",
        path: "/cart",
        Element: CartContainer

    },
    {
        id: "checkout",
        path: "/checkout",
        Element: CheckoutContainer

    }
]

