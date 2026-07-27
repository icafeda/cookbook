export const themeInitialState = {
  darkMode: false,
};

export const themeReducer = (state, action) => {
  switch (action.type) {
    case "SET_DARK_MODE":
      return { ...state, darkMode: action.payload };

    case "TOGGLE_DARK_MODE":
      return { ...state, darkMode: !state.darkMode };

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};
