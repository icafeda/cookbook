import { Link} from "react-router-dom";
import { useLoginRegister } from "../../context/LoginRegisterContext";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { getUserService } from "../../services";

export const DropdownLoggedIn = ({ closeMenu }) => {
  const { logout, setUser} = useLoginRegister();
  //const cbid = user?.id;

  //  localStorage.setItem("token", data.accessToken);
  //  localStorage.setItem("user", JSON.stringify(data.user));
  const rawUser = localStorage.getItem("user");
  const cbid = rawUser?.id
   const rawToken = localStorage.getItem("token");
  
  useEffect(() => {
    async function fetchData() {
      const data = await getUserService(rawToken, cbid);
      data.email ? setUser(data) : logout();

      console.log(cbid);
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div
      id="dropdownAvatar"
      className="select-none	absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
    >
      <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
        <div className="font-medium truncate">{rawUser?.email}</div>
      </div>
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownUserAvatarButton"
      >
        <li>
          <Link
            to="/products"
            onClick={closeMenu}
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            All eBooks
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard"
            onClick={closeMenu}
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Dashboard
          </Link>
        </li>
      </ul>
      <div className="py-1">
        <span
          onClick={() => {
            logout();
            toast.success("Logout successful!");
            closeMenu();
          }}
          className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Log out
        </span>
      </div>
    </div>
  );
};
