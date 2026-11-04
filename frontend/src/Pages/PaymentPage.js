import Payment from "../Components/Payment";
import { useLoaderData } from "react-router-dom";
import { getAuthToken } from "../util/auth";
import { json } from "react-router-dom";


function PaymentPage(){

    const order = useLoaderData();

    return(
        <>
            <Payment order={order}/>
        </>
    )
}

export default PaymentPage;

export async function loader({request, params}){
    const token = getAuthToken();
    const id = params.id; 
    console.log("userid in loder.." +id);

    
   
    const response = await fetch(process.env.REACT_APP_BASEURL+'order?id='+id, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token,
        }
        
    });

    console.log("response: " +response);

    if(!response.ok){
     throw json({message: 'Could not fetch event.'}, {status: response.status, statusText: response.statusText});
    }else{
        const resData = await response.json();
        console.log("Response Data.......................: "+resData.order.totalPrice);
        return resData.order;
    }

}