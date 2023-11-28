import { products } from '../components/productsData';

const initialState = {
    cartItems: [],
    products: products,
};
  
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return { ...state, products: [...state.products, { id: action.payload.itemId, quantity: 1 }] };
  
      case 'REMOVE_ITEM':
        return {
          ...state,
          products: state.products.map(item =>
            item.id === action.payload.itemId ? { ...item, quantity: 0 } : item
          ),
        };
  
      case 'UPDATE_QUANTITY':
        return {
          ...state,
          products: state.products.map(item =>
            item.id === action.payload.itemId ? { ...item, quantity: action.payload.newQuantity } : item
          ),
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  