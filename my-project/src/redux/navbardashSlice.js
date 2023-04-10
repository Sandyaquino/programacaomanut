import { createSlice } from "@reduxjs/toolkit";

/* Reducer */

const initialState = {
  dash: [
    {
      name: "Programação da Manutenção",
      href: "/Dashboard/DashboardManutencao",
      current: false,
      icon: (
        <svg
          aria-hidden="true"
          className="w-5 h-5 mr-2 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 23 23"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm4.5 7.5a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0v-2.25a.75.75 0 01.75-.75zm3.75-1.5a.75.75 0 00-1.5 0v4.5a.75.75 0 001.5 0V12zm2.25-3a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0V9.75A.75.75 0 0113.5 9zm3.75-1.5a.75.75 0 00-1.5 0v9a.75.75 0 001.5 0v-9z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      name: "Desligamentos Programados",
      href: "/Dashboard/DashboardDesligamentos",
      current: false,
      icon: (
        <svg
          aria-hidden="true"
          className="w-5 h-5 mr-2 dark:text-blue-500"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
  ],
};

const updateCurrentDash = (state, currentName) => {
  const newMenuDash = state.dash.map((item) => {
    return {
      ...item,
      current: item.name === currentName,
    };
  });
  return { ...state, dash: newMenuDash };
};

export const navbardashSlice = createSlice({
  name: "navbardash",
  initialState,
  reducers: {
    changeMenuDash: (state, action) => {
        return updateCurrentDash(state, action.payload);
    },
  },
});

export const { changeMenuDash } = navbardashSlice.actions;

export const selectUser = (state) => state.dash;

export default navbardashSlice.reducer;