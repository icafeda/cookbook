import { OrderSuccess } from "./components/OrderSuccess";
import { OrderFail } from "./components/OrderFail";
import { useLocation } from "react-router-dom";

export const OrderPage = () => {
  //const { state } = useLocation();
  const { state } = useLocation();

   if (!state) {
     return <OrderFail />;
   }

  return (
    <main>
      {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
    </main>
  );
};


