export const addToCart = (itemId) => ({
    type: 'ADD_TO_CART',
    payload: { itemId },
  });
  
  export const removeItem = (itemId) => ({
    type: 'REMOVE_ITEM',
    payload: { itemId },
  });
  
  export const updateQuantity = (itemId, newQuantity) => ({
    type: 'UPDATE_QUANTITY',
    payload: { itemId, newQuantity },
  });
  