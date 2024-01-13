import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  menuOption: 0,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setMenuOption: (state, action) => {
      state.menuOption = action.payload;
    },
  },
});

export const { setMenuOption } = menuSlice.actions;
export const selectMenuOption = (state) => state.menu.menuOption;
export default menuSlice.reducer;
