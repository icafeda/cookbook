import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducers/cartReducers";
import { toast } from "react-toastify";

const cartInitiateState = {
  cartList: [],
  totalAmount: 0,
};


export const CartContext = createContext(cartInitiateState);


export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, cartInitiateState);

    function addToCart(product) {
      // kiểm tra sản phẩm đã có trong giỏ chưa
      const isExist = state.cartList.some((item) => item.id === product.id);

      if (isExist) {
        toast.error("Sản phẩm đã có trong giỏ!");
        return;
      }
      const updatedList = state.cartList.concat(product);
      const updatedTotalAmount = state.totalAmount + product.price;

      dispatch({
        type: "ADD_TO_CART",
        payload: {
          products: updatedList,
          totalAmount: updatedTotalAmount,
        },
      });
    }
    function removeFromCart(product) {
      const updatedList = state.cartList.filter(
        (item) => item.id !== product.id,
      );
      const updatedTotalAmount = state.totalAmount - product.price;

      dispatch({
        type: "REMOVE_FROM_CART",
        payload: {
          products: updatedList,
          totalAmount: updatedTotalAmount,
        },
      });
    }

    function clearCart() { 
        dispatch({
            type: "CLEAR_CART",
            payload: {
                products: null,
                totalAmount: 0,

            }
        })
    }
    
  function checkOUTOFSTOCK(product) { 
    if (!product.in_stock) { 
      toast.error("Sản phẩm đã hết hàng!");
      return;
    }
    
    dispatch({
      type: "CHECK_OUT_OF_STOCK",
      payload: {
        products: product,
        totalAmount: state.totalAmount,
      },
    });
  }



    const value = {
    cartList: state.cartList,
        totalAmount: state.totalAmount,
        addToCart,
        removeFromCart,
        clearCart,
        checkOUTOFSTOCK,
    };

 
    
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => { 
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};



