import { useEffect, useState } from "react";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty"
import { useLoginRegister } from "../../context";
import { getUserOrder } from "../../services";

export const DashboardPage = () => {
    // const orders = [];
    const { token, user } = useLoginRegister();
    const cbid = user?.id;
    const [orders, setOrders] = useState([]);


    useEffect(() => { 

        async function getOrrder() { 
        const data = await  getUserOrder (token, cbid)
            setOrders(data);
        }
        getOrrder();
    },[token, cbid])

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>

      <section>
        { orders.length && orders.map((order) => (
          <DashboardCard key={order.id} order={order} />
        ))}
              
      </section>

      <section>
        { !orders.length && <DashboardEmpty /> }
      </section>

    </main>
  )
}
