import React, { useState, useEffect } from "react";
import { useCart } from "../context";
import { useParams } from "react-router-dom";
import { Rating } from "../components";
import useTitle from "../hook/useTitle";
import { getProduct } from "../services";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const { addToCart, cartList, removeFromCart } = useCart();
  const { idRoute } = useParams();
  const [product, setProduct] = useState({});
  useTitle(product.name);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);

  const isInCart = cartList.some((item) => item.id === product.id);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProduct(idRoute);
        setProduct(data);
        setErrorMsg();
      } catch (error) {
        setErrorMsg(error.message);
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
  }, [idRoute]);

  return (
    <main className="mt-20 dark:bg-gray-900">
      {loading && <p className="text-center text-gray-500">Loading...</p>}
      
      {!loading && errorMsg && (
        <p className="text-center text-red-600 text-xl">{errorMsg}</p>
      )}

      {!loading && !errorMsg && (
        <section section>
          <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">
            {product.name}
          </h1>

          <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">
            {product.overview}
          </p>
          <div className="flex flex-wrap justify-around">
            <div className="max-w-xl my-3">
              <img
                className="rounded"
                src={product.image_local}
                alt={product.name}
              />
            </div>
            <div className="max-w-xl my-3">
              <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                <span className="mr-1">$</span>
                <span className="">{product.price}</span>
              </p>
              <p className="my-3">
                <span>
                  <Rating rating={product.rating} />
                </span>
              </p>
              <p className="my-4 select-none">
                {product.best_seller && (
                  <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                    {product.best_seller ? "BEST SELLER" : null}
                  </span>
                )}
                {product.in_stock && (
                  <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                    {product.in_stock ? "IN STOCK" : "OUT OF STOCK"}
                  </span>
                )}
                {!product.in_stock && (
                  <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                    OUT OF STOCK
                  </span>
                )}
                <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">
                  {product.size} MB
                </span>
              </p>
              <p className="my-3">
                <div className="flex flex-wrap gap-2">
                  <button
                    disabled={!product.in_stock || isInCart}
                    onClick={() => addToCart(product)}
                    className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-700
                  `}
                  >
                    {isInCart ? (
                      `Added (${cartList.length})`
                    ) : (
                      <>
                        Add to Cart <i className="ml-1 bi bi-plus-lg"></i>
                      </>
                    )}
                  </button>

                  <button
                    disabled={!isInCart || !product.in_stock}
                    onClick={() => removeFromCart(product)}
                    className="inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800
                  disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-red-600"
                  >
                    Remove Item <i className="ml-1 bi bi-trash3"></i>
                  </button>
                </div>
                {/* <button className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}  disabled={ product.in_stock ? "" : "disabled" }>Remove Item <i className="ml-1 bi bi-trash3"></i></button> */}
              </p>
              <p className="text-lg text-gray-900 dark:text-slate-200">
                {product.long_description}
              </p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetail;
