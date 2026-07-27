import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ProductCard } from "../../components";
import FilterBar from "./components/FilterBar";
import useTitle from "../../hook/useTitle";
import { useFilter } from "../../context/";
import { getProductList } from "../../services";
import { toast } from "react-toastify";

const ProductList = () => {
  const [loading, setLoading] = useState(true);
  const { products, initialProductList } = useFilter();
  const [showFilter, setShowFilter] = useState(false);
  const search = useLocation().search;
  const searchTerm = new URLSearchParams(search).get("q");
  const [errorMessage, setErrorMessage] = useState("");
  useTitle("All eBooks");

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProductList(searchTerm);
        initialProductList(data);
        setErrorMessage();
      } catch (error) {
        setErrorMessage(`${error.message} - ${error.status}`);
        toast.error(error.message, {
          position: "top-right",
          autoClose: 1700,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          //transition: Bounce,
        });
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);
  return (
    <main className="mt-20">
      <div className="text-center">
        {loading && <p className=" text-red-700 text-bold ">Loading .... </p>}
      </div>
      {!loading && errorMessage && (
        <p className="text-center text-red-600 text-xl">{errorMessage}</p>
      )}

      {!loading && !errorMessage && (
        <section className="my-5">
          <div className="my-5 flex justify-between">
            <span className="text-2xl font-semibold dark:text-slate-100 mb-5">
              All eBooks ({products.length})
            </span>
            <span>
              <button
                onClick={() => setShowFilter(!showFilter)}
                id="dropdownMenuIconButton"
                data-dropdown-toggle="dropdownDots"
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700"
                type="button"
              >
                <svg
                  className="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path>
                </svg>
              </button>
            </span>
          </div>

          <div className="flex flex-wrap justify-center lg:flex-row">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {showFilter && <FilterBar closeup={() => setShowFilter(false)} />}
        </section>
      )}
    </main>
  );
};

export default ProductList;
