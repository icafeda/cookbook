import { ProductCard } from "../../../components";
import { useState, useEffect } from "react";
import { getFeaturedProduct } from "../../../services";

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getFeaturedProduct();
        setProducts(data);
      } catch (error) {
        setErrorMsg(`${error.message} - ${error.status}`);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  return (
    <section className="my-10">
      {loading && <p className="text-center text-gray-500">Loading...</p>}

      {!loading && errorMsg && (
        <p className="text-center text-red-600 text-xl">{errorMsg}</p>
      )}

      {!loading && !errorMsg && (
        <div>
          <h1 className="text-2xl text-center font-semibold  mb-5 underline underline-offset-8">
            Featured eBooks
          </h1>
          <div className="flex flex-wrap justify-center lg:flex-row">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};
export default FeaturedProducts;
