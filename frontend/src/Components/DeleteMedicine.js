import { json, redirect } from 'react-router-dom';
import { getAuthToken } from "../util/auth";
export async function loader({request, params}){
    //Action to delete the User
    const token = getAuthToken();
    const id = params.id; 
    console.log("id in loader to delete " +id);
    const response = await fetch(process.env.REACT_APP_BASEURL+'deletemedicine?id='+id, {
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    });

    console.log("response Delete: " +response);

    if(!response.ok){
     throw json({message: 'Could not fetch event.'}, {status: response.status, statusText: response.statusText});
    }else{

       // const resData = await response.json();
      
       // console.log("response: " +resData);
        return redirect('/medicineList');
    }

    
}
