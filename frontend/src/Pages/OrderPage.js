import Order from "../Components/Order";
import { json, redirect } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { getAuthToken } from "../util/auth";

function OrderPage(){

    const medicine  = useLoaderData();

    return(
        <>
        <Order method="POST" medicine={medicine}/>
        </>
    )
}
export default OrderPage;


export async function loader({request, params}){
    const token = getAuthToken();
    const id = params.id; 
    console.log("Medicine id in loader.." +id);

    const response = await fetch(process.env.REACT_APP_BASEURL+'medicine?id='+id, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token,
        }      
    });

    console.log("response: " +response);

    if(!response.ok){
     throw json({message: 'Could not fetch API.'}, {status: response.status, statusText: response.statusText});
    }else{
        const resData = await response.json();
        console.log("Response Data....: "+resData.medicineDto);
        return resData.medicineDto;
    }

}