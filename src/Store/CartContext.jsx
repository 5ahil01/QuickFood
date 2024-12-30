import { createContext, useReducer } from "react";

export const cartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function CartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];
    if (existingItemIndex > -1) {
      const existingItem = state.items[existingItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingItemIndex];
    const updatedItems = [...state.items];

    if (existingCartItem.quantity > 1) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems.splice(existingItemIndex, 1);
    }

    return { ...state, items: updatedItems };
  }
  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(CartReducer, { items: [] });
  const cartCtx = {
    items: cart.items,
    addItem: (item) => dispatch({ type: "ADD_ITEM", item }),
    removeItem: (id) => dispatch({ type: "REMOVE_ITEM", id }),
  };

  return (
    <cartContext.Provider value={cartCtx}>{children}</cartContext.Provider>
  );
}
