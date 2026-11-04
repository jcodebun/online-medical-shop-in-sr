import MedicineList from "../Components/MedicineList";
import { useLoaderData, json } from 'react-router-dom';
import { getAuthToken } from "../util/auth";

function MedicineListPage(){
    const medicines  = useLoaderData();
    return (
        <MedicineList medicines={medicines}/>
    )
}

export default MedicineListPage;


export async function loader() {

    const token = getAuthToken();
    const response = await fetch(process.env.REACT_APP_BASEURL+'getmedicine',{
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
    //   console.log("Response Data Price: "+resData.medicines[0].price)
      return resData.medicines;
    }
  }
