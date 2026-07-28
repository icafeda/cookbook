import { createContext, useContext, useReducer } from "react";
import { loginRegisterReducer } from "../reducers/loginRegisterReducers";
import { CartContext } from "./CartContext";

const loginRegisterInitiateState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
};

const LoginRegisterContext = createContext(loginRegisterInitiateState);

export const LoginRegisterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    loginRegisterReducer,
    loginRegisterInitiateState,
  );

  const { clearCart } = useContext(CartContext);

  // -- ACTIONS -- //
  function login(user, token) {
    const login = {
      user,
      token,
    };
    dispatch({
      type: "LOGIN",
      payload: {
        ...login,
      },
    });
  }

  function setUser(user) {
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  }

  function logout() {
    clearCart();
    dispatch({
      type: "LOGOUT",
    });
  }

  const value = {
    user: state.user,
    token: state.token,
    login,
    logout,
    setUser,
  };

  return (
    <LoginRegisterContext.Provider value={value}>
      {children}
    </LoginRegisterContext.Provider>
  );
};

export const useLoginRegister = () => useContext(LoginRegisterContext);
