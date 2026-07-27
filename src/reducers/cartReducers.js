export const cartReducer = (state, action) => {

    const { type, payload } = action;
    switch (type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartList: payload.products,
                totalAmount: payload.totalAmount,
            };
        
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartList: payload.products,
                totalAmount: payload.totalAmount,
            };
        
        case "CLEAR_CART":
            return {
                ...state,
                cartList: [],
                totalAmount: payload.totalAmount,
            };
        
        case "UPDATE_TOTAL_AMOUNT":
            return {
                ...state,
                totalAmount: payload.totalAmount,
            };
        
        case "CHECK_OUT_OF_STOCK":
            return {
                ...state,
                cartList: payload.products,
                totalAmount: payload.totalAmount,
            };
   
        
        default:
            throw new Error(`No case for type ${type} found in cartReducer.`);
    }
};