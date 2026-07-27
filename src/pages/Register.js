import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { registerService } from "../services";

export const Register = () => {
  const navigate = useNavigate();

  async function handleRegister(e) {
    e.preventDefault();
    // Add your registration logic here
    const authDetail = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };

    const data = await registerService(authDetail);
    
 data.accessToken
   ? toast.success("Registration successful!") && navigate("/login")
   : toast.error("Registration failed: " + data.message);

 if (data.accessToken) {
   sessionStorage.setItem("accessToken", JSON.stringify(data.accessToken));
   sessionStorage.setItem("cbid", JSON.stringify(data.user.id));
 }
 
  }
  return (
    <main className="min-h-screen dark:bg-slate-900 flex items-center justify-center">
      <section className="w-full max-w-lg mx-auto mt-32 bg-white dark:bg-slate-800 p-2 rounded-lg border border-gray-500 dark:border-slate-600  transition-all duration-300">
        <p className="text-2xl text-center font-semibold dark:text-slate-100 mt-5 mb-10 underline underline-offset-8">
          Register
        </p>
        <form
          onSubmit={handleRegister}
          className="space-y-6 px-5 pb-5"
          action="#"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your name
            </label>
            <input
              type="name"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Shubham Sarda"
              required
              autoComplete="off"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border-1 border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
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
              type="password"
              id="password"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
              minLength="7"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register
          </button>
        </form>
      </section>
    </main>
  );
};
