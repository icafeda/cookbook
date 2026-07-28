import { createContext, useContext, useReducer } from "react";
import { loginRegisterReducer } from "../reducers/loginRegisterReducers";
import { CartContext } from "./CartContext";

//Lây token và user ra
// ⭐ Lấy user/token từ localStorage an toàn
const rawUser = localStorage.getItem("user");
const rawToken = localStorage.getItem("token");

const loginRegisterInitiateState = {
  user: rawUser && rawUser !== "undefined" ? JSON.parse(rawUser) : null,
  token: rawToken && rawToken !== "undefined" ? rawToken : null,
};

const LoginRegisterContext = createContext({});

export const LoginRegisterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    loginRegisterReducer,
    loginRegisterInitiateState,
  );

  const { clearCart } = useContext(CartContext);

  // -- ACTIONS -- //
  function login(user, token) {
    // ⭐ Lưu vào localStorage
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    // const login = {
    //   user,
    //   token,
    // };
    dispatch({
      type: "LOGIN",
      payload: { user, token },
    });
  }

  function setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
    dispatch({
      type: "SET_USER",
      payload: user,
    });
  }

  function logout() {
    clearCart();
    // ⭐ Xóa localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("token");

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
