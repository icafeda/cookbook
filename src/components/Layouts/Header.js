import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Search from "../Sections/Search";
import { useTheme } from "../../context/ThemeContext";
import { useState, useRef, useEffect } from "react";
import { DropdownLoggedIn } from "../Elements/DropdownLoggedIn";
import { DropdownLoggedOut } from "../Elements/DropdownLoggedOut";
import React from "react";
import { useLoginRegister } from "../../context/LoginRegisterContext";
import { useCart } from "../../context";

const Header = () => {
  const { toggleDarkMode } = useTheme();
  const [searchSection, setSearchSection] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  // const token = JSON.parse(sessionStorage.getItem("accessToken"));
  const { token } = useLoginRegister();
  const { cartList } = useCart();
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      // Nếu click không nằm trong menu → đóng
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setDropdown(false);
      }
    }

    if (dropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown]);

  //   const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem("isDarkMode")) || false);
  //   useEffect(() => {
  //    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  //  if (isDarkMode) {
  //    document.documentElement.classList.add("dark");
  //    setIsDarkMode(true);
  //  } else {
  //    document.documentElement.classList.remove("dark");
  //     setIsDarkMode(false);
  //  }

  //   }, [isDarkMode]);

  return (
    <header className="transition-colors duration-300 fixed top-0 left-0 z-40 w-full ">
      <nav className="border-gray-500 ">
        <div className="flex flex-wrap border-b rounded-t-xl border-gray-200  justify-between items-center mx-auto px-2 max-w-7xl py-5 md:px-4">
          <Link to="/" className="flex flex-wrap items-center ">
            <img src={Logo} className="mr-2 h-10 " alt="CodeBook Logo" />
            <span className="self-center text-2xl font-bold whitespace-nowrap">
              CODEBOOK
            </span>
          </Link>

          <div className="flex items-center relative">
            <span
              onClick={toggleDarkMode}
              // onClick={() => {
              //   setIsDarkMode(!isDarkMode);
              // }}
              className="cursor-pointer mr-5 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-gear-wide-connected"
                viewBox="0 0 16 16"
              >
                <path d="M7.068.727c.243-.97 1.62-.97 1.864 0l.071.286a.96.96 0 0 0 1.622.434l.205-.211c.695-.719 1.888-.03 1.613.931l-.08.284a.96.96 0 0 0 1.187 1.187l.283-.081c.96-.275 1.65.918.931 1.613l-.211.205a.96.96 0 0 0 .434 1.622l.286.071c.97.243.97 1.62 0 1.864l-.286.071a.96.96 0 0 0-.434 1.622l.211.205c.719.695.03 1.888-.931 1.613l-.284-.08a.96.96 0 0 0-1.187 1.187l.081.283c.275.96-.918 1.65-1.613.931l-.205-.211a.96.96 0 0 0-1.622.434l-.071.286c-.243.97-1.62.97-1.864 0l-.071-.286a.96.96 0 0 0-1.622-.434l-.205.211c-.695.719-1.888.03-1.613-.931l.08-.284a.96.96 0 0 0-1.186-1.187l-.284.081c-.96.275-1.65-.918-.931-1.613l.211-.205a.96.96 0 0 0-.434-1.622l-.286-.071c-.97-.243-.97-1.62 0-1.864l.286-.071a.96.96 0 0 0 .434-1.622l-.211-.205c-.719-.695-.03-1.888.931-1.613l.284.08a.96.96 0 0 0 1.187-1.186l-.081-.284c-.275-.96.918-1.65 1.613-.931l.205.211a.96.96 0 0 0 1.622-.434zM12.973 8.5H8.25l-2.834 3.779A4.998 4.998 0 0 0 12.973 8.5m0-1a4.998 4.998 0 0 0-7.557-3.779l2.834 3.78zM5.048 3.967l-.087.065zm-.431.355A4.98 4.98 0 0 0 3.002 8c0 1.455.622 2.765 1.615 3.678L7.375 8zm.344 7.646.087.065z" />
              </svg>
            </span>

            <span
              onClick={() => {
                setSearchSection(!searchSection);
              }}
              className="cursor-pointer  mr-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </span>

            <Link to="/cart" className=" mr-5">
              <span className="cursor-pointer  relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-cart4"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
                </svg>

                <span className="text-white text-sm absolute -top-1.5 left-2.5 bg-rose-500 px-1.5 rounded-full">
                  {cartList.length}
                </span>
              </span>
            </Link>

            <span
              onClick={() => setDropdown(!dropdown)}
              className="cursor-pointer  mr-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                />
              </svg>
            </span>
            {dropdown && (
              <div ref={menuRef}>
                {token ? (
                  <DropdownLoggedIn
                    token={token}
                    closeMenu={() => setDropdown(false)}
                  />
                ) : (
                  <DropdownLoggedOut
                    closeMenu={() => setDropdown(false)}
                  />
                )}
              </div>
            )}
          </div>
        </div>
        {searchSection && <Search setSearchSection={setSearchSection} />}
      </nav>
    </header>
  );
};

export default Header;

//   <nav className="bg-white dark:bg-gray-900">
//     <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
//       <Link to="/" className="flex items-center">
//         <img src={Logo} className="mr-3 h-10" alt="CodeBook Logo" />
//         <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//           CodeBook
//         </span>
//       </Link>
//
//       <div className="flex items-center relative">
//         <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
//         <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>

//         <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
//           <span className="text-2xl bi bi-cart-fill relative">

//             <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
//               0
//             </span>
//           </span>
//         </Link>
//         <span className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
//       </div>
//     </div>
//   </nav>
// </header>;
