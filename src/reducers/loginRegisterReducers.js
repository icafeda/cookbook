export const loginRegisterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return {
        ...state,
        user: payload.user,
        token: payload.token,
      };

    case "LOGOUT":
      return {
        ...state,
        user: null,
        token: null,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    default:
      throw new Error(
        `No case for type ${type} found in loginRegisterReducer.`,
      );
  }
};
