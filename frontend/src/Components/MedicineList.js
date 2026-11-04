import { Link,  } from "react-router-dom";
import { getUserRole } from "../util/auth";

function MedicineList({medicines}){
    const userRole = getUserRole();
    return (
        <>
        <div className="container">
           <h1>Medicine List</h1>
           <table className="table">
               <thead>
                   <tr>
                     
                       <th scope="col">Medicine Name</th>
                       <th scope="col">Company Name</th>
                       <th scope="col">Quanitiy</th>
                       <th scope="col">Price</th>
                       {userRole === 'Admin'? <th scope="col">Action</th> : ''}
                    
                   </tr>
               </thead>
               <tbody>
                   {   
                   
                   medicines.map((medicine) => (
                        <tr key={medicine.id}>
                        <td>{medicine.medicineName}</td>
                        <td>{medicine.companyName}</td>
                        <td>{medicine.quantity}</td>
                        <td>{medicine.price}</td>
                        <td>
                        {userRole === 'Admin'? 
                           <>
                           <Link to={`/editmedicine/${medicine.id}`} className="m-1 btn btn-primary btn-lg" role="button" aria-disabled="true"> Edit </Link>
                           <Link to={`/deletemedicine/${medicine.id}`} className="m-1 btn btn-danger btn-lg" role="button" aria-pressed="true"> Delete </Link>
                           
                           </> : ''}
                        <Link to={`/order/${medicine.id}`} className="m-1 btn btn-primary btn-lg" role="button" aria-pressed="true"> Order </Link>
                        </td>

                    </tr>
                   ))}
               </tbody>
           </table>
           </div>
       </>
    )
}

export default MedicineList;