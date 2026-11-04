import { getAuthToken } from "../util/auth";
import { json } from "react-router-dom";
import PaymentHistory from "../Components/PaymentHistory";
import { useLoaderData } from "react-router-dom";
import { getUserData } from "../util/auth";

function PaymentHistoryPage(){

    const payments = useLoaderData();
    return(
      
       <PaymentHistory payments={payments}/>
    )
}

export default PaymentHistoryPage


export async function loader() {

    const token = getAuthToken();
    const userData = getUserData();

    let url = process.env.REACT_APP_BASEURL+'paymentsbyuser?id='+userData.id
    if(userData.role === 'Admin'){
        url = process.env.REACT_APP_BASEURL+'payments'
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
      // console.log("Response Data Price Payment: "+resData.payments[0].totalPrice)
      return resData.payments;
    }
  }
