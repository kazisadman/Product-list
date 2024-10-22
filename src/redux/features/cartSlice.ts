import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TCartState } from "../../types/cart.type";

const initialState: TCartState = {
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cartState",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<number>) => {
      state.totalQuantity += 1;
      state.totalPrice += action.payload;
    },
  },
});

export const { addItemToCart } = cartSlice.actions;
export default cartSlice.reducer;
