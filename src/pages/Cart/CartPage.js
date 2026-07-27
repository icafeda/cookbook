import { CartEmpty } from "./components/CartEmpty";
import { CartList } from "./components/CartList";

import { useCart } from "../../context/CartContext";



const CartPage = () => {
  const { cartList } = useCart();

  return (
    <main className="pt-20">
      {cartList.length ? <CartList /> : <CartEmpty />}
    </main>
  );
};

export default CartPage;
