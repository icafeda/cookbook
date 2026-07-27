import { useRef } from "react";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";
import { useLoginRegister } from "../context/LoginRegisterContext";
import { loginService } from "../services"

export const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const email = useRef();
  const password = useRef();
  const { login } = useLoginRegister();


  async function handleLogin(e) {
    e.preventDefault();

    
    const authDetail = {
      email: email.current.value,
      password: password.current.value,
    };

    const data = await loginService(authDetail);
   if (data.accessToken) {
     login(data.user, data.accessToken); // ⭐ BẮT BUỘC
     toast.success("Login successful!");

     const from = location.state?.from || "/";
     navigate(from, { replace: true });
   } else {
     toast.error(data);
   }
  }

    return (
      <main className="min-h-screen dark:bg-slate-900 flex items-center justify-center">
      
        <section className="w-full max-w-lg mx-auto mt-32 bg-white dark:bg-slate-800 p-2 rounded-lg border-2 border-slate-500 dark:border-slate-600  transition-all duration-300">
          <p className="text-2xl text-center font-semibold dark:text-slate-100 mt-5 mb-10 underline underline-offset-8">
            Login
          </p>

          <form
            onSubmit={handleLogin}
            className="space-y-6 px-5 pb-5" action="#">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                ref={email}
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="shubham@example.com"
                required
                autoComplete="off"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your password
              </label>
              <input
                ref={password}
                type="password"
                id="password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>

            <div className="flex flex-col mb-6">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Log In
              </button>
              <button className="mt-3 cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Login As Guest
              </button>
            </div>
          </form>
        </section>
      </main>
    );
  
};
