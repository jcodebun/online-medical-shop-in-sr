function PaymentHistory({payments}){
    return(
        <>
             
        <div className="container">
           <h1>Payment History</h1>
           <table className="table">
               <thead>
                   <tr>
                     
                       <th scope="col">Order Number</th>
                       <th scope="col">Card Name</th>
                       <th scope="col">Total Payment</th>
                     
                    
                   </tr>
               </thead>
               <tbody>
                   {   
                   
                   payments.map((payment) => (
                        <tr key={payment.id}>
                        <td>{payment.id}</td>
                        <td>{payment.cardName}</td>
                        <td>{payment.totalPrice}</td>
                       

                    </tr>
                   ))}
               </tbody>
           </table>
           </div>
       </>
    )
}

export default PaymentHistory;