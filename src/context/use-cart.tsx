import { createContext, useContext } from "react";
import { CartItemProps } from "../atomic/atoms/CartItem";

type CartItem = {
    subtotal: string;
} & CartItemProps

type CartProviderProps = {
    children: React.ReactNode;
};

type CartContextData = {
    items: CartItem[];
};
const CartContextDefaultValues = {
    items: [],
};


const mock = [
    {
        title:"Road Bike",
        amount:"2",
        image:"https://i.imgur.com/zjgFbOM.png",
        price:"2999",
        subtotal: "400",
    },
    {
        title:"SMITH - Trade",
        amount:"2",
        image:"https://i.imgur.com/MUdLCNj.png",
        price:"120",
        subtotal: "400",
    },
     {
        title:"PILOT - Chromoly",
        amount:"2",
        image:"https://i.imgur.com/LkuTy3r.png",
        price:"5000",
        subtotal: "5000",
    },
]

export const CartContext = createContext<CartContextData>(CartContextDefaultValues);
const CartProvider = ({ children }: CartProviderProps) => {
    
    return <CartContext.Provider value={{ items: mock }}>
        {children}
    </CartContext.Provider>
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
