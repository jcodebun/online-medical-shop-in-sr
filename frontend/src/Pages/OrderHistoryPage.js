import OrderHistory from "../Components/OrderHistory"
import { useLoaderData, json } from 'react-router-dom';
import { getAuthToken } from "../util/auth";
import { getUserData } from "../util/auth";

function OrderHistoryPage(){

    const orders  = useLoaderData();

    return(
        <>
        <OrderHistory orders={orders}/>
        </>
    )
}

export default OrderHistoryPage

export async function loader() {

    const token = getAuthToken();
    const userData = getUserData();

    let url = process.env.REACT_APP_BASEURL+'orderbyuser?id='+userData.id
    if(userData.role === 'Admin'){
        url = process.env.REACT_APP_BASEURL+'orderlist'
    }
    

    const response = await fetch(url,{
        method: "GET",
        headers: {
          'Authorization': 'Bearer ' + token,
        }
      });
  
    if (!response.ok) {
      // return { isError: true, message: 'Could not fetch events.' };
      // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
      //   status: 500,
      // });
      throw json(
        { message: 'Could not fetch List.' },
        {
          status: 500,
        }
      );
    } else {
      const resData = await response.json();
       //console.log("Response Data Price: "+resData.orders[0].totalPrice)
      return resData.orders;
    }
  }
