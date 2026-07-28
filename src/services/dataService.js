import { HttpError } from "../utils/HttpError"


export async function getUserService(token, cbid) {
    const requestOption = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
     const response = await fetch(
       `${process.env.REACT_APP_HOST}/600/users/${cbid}`,
       requestOption,
     );
  
   if (!response.ok) {
     throw HttpError(response.statusText, response.status);
   }
  const data = await response.json();
    return data;
}

export async function getUserOrder(token, cbid) {

    const requestOption = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
 const response = await fetch(
   `${process.env.REACT_APP_HOST}/660/orders?user.id=${cbid}`,
   requestOption,
 );

  if (!response.ok) {
    throw HttpError(response.statusText, response.status);
  }

 const data = await response.json();
    return data;
}

export async function createOrder(cartList, totalAmount,cbid, userData, token) {
    const order = {
          cartList: cartList,
          amount_paid: totalAmount,
          quantity: cartList.length,
          user: {
            id: cbid,
            name: userData?.name,
            email: userData?.email,
          },
        };
          
        const response = await fetch(
          `${process.env.REACT_APP_HOST}/660/orders`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(order),
          },
        );
    
  if (!response.ok) {
    throw HttpError(response.statusText, response.status);
  }
  
    const data = await response.json();
    
    return data;
}