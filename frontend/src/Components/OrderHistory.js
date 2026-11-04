import { Link,  } from "react-router-dom";
import { getUserRole } from "../util/auth";

function OrderHistory({orders}){
    const userRole = getUserRole();
    return(
        <>
        <div className="container">
           <h1>Order History</h1>
           <table className="table">
               <thead>
                   <tr>
                     
                       <th scope="col">Medicine Name</th>
                       <th scope="col">Quanitiy</th>
                       <th scope="col">Total Price</th>
                       <th scope="col">Payment Status</th>
                       {userRole === 'Admin'? <th scope="col">Action</th> : ''}
                    
                   </tr>
               </thead>
               <tbody>
                   {   
                   
                   orders.map((order) => (
                        <tr key={order.id}>
                        <td>{order.medicineName}</td>
                        <td>{order.quantity}</td>
                        <td>{order.totalPrice}</td>
                        <td>{order.paymentStatus}</td>
                        
                        <td>
                            {order.paymentStatus === 'Pending'?
                            <Link to={`/payment/${order.id}`} className="m-1 btn btn-primary btn-lg" role="button" aria-disabled="true"> Pay Now </Link>
                            :<Link to='#' className="m-1 btn btn-success btn-lg" role="button" aria-disabled="true"> Paid </Link>}
                           
                        </td> 
                        

                    </tr>
                   ))}
               </tbody>
           </table>
           </div>
       </>

    )
}

export default OrderHistory;