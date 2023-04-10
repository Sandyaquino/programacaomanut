import { createSlice } from "@reduxjs/toolkit";

/* Reducer */

const initialState = {
  menu: [
    { name: "Home", href: "/Home", current: false },
    { name: "Dashboard", href: "/Dashboard", current: false },
    { name: "Sobre", href: "/Sobre", current: false },
    { name: "Carteiras", href: "/Carteiras", current: false },
    { name: "Calendario", href: "/Calendario", current: false },
    { name: "Reports", href: "/Reports", current: false },
  ],
};

const updateCurrentMenu = (state, currentName) => {
  const newMenu = state.menu.map((item) => {
    return {
      ...item,
      current: item.name === currentName,
    };
  });
  return { ...state, menu: newMenu };
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    changeMenu: (state, action) => {
        return updateCurrentMenu(state, action.payload);
    },
  },
});


export const { changeMenu } = navbarSlice.actions;

export const selectUser = (state) => state.menu;

export default navbarSlice.reducer;

