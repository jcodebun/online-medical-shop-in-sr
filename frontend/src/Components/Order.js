import { getAuthToken } from "../util/auth"
import { Form } from "react-router-dom";
import { getUserData } from "../util/auth";
import { json, redirect } from "react-router-dom";
import React, { useState } from 'react';

function Order({ method, medicine }){
    let [totalPrice, setTotalPrice] = useState(0);
    const token = getAuthToken();
    const userData = getUserData();

    function handleChange(event) {
        let quant = event.target.value;
        totalPrice = quant*medicine.price;
        setTotalPrice(totalPrice);
        console.log("totalPrice: "+totalPrice);
       // console.log(event.target.value);
      }
    return(
        <>
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px;' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Order Medicine</p>

                    <Form classNameName="mx-1 mx-md-4" method={method}>
                    <input id="medicineid" type="hidden" name="medicineid" required defaultValue={medicine? medicine.id : ''} />
                    <input id="userid" type="hidden" name="userid" required defaultValue={userData? userData.id : ''} />

                    

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text"  name="medicineName" id="form3Example1c" className="form-control" required value={medicine.medicineName} readonly />
                          <label className="form-label" for="form3Example1c">Medicine Name</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" onChange={handleChange} name="quantity" id="form3Example3c" required className="form-control"  />
                          <label className="form-label" for="form3Example3c">Quantity</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" name="totalPrice" id="form3Example3c" className="form-control"  value={totalPrice}  readonly/>
                          <label className="form-label" for="form3Example3c">Total Price</label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">{token ? 'Place Order' : 'Place Order'}</button>
                      </div>

                    </Form>

                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src="https://media.istockphoto.com/id/1223737192/vector/medicine-icon-vector-illustration-medicine-vector-illustration-template-medicine-icon-design.jpg?s=612x612&w=0&k=20&c=tyZHi-ZTFsjrQO5dHdftTwRKB3guBaxAkoS-QVoS5Xk="
                      className="img-fluid" alt="Sample image" />
                      
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        
        </>
    )
}

export default Order;


export async function action({ request }) {
    const method = request.method;
    const data = await request.formData();
    const token = getAuthToken();
  
    let orderData = {
    medicineid: data.get('medicineid'),
    userid: data.get('userid'),
    medicineName: data.get('medicineName'),
    quantity: data.get('quantity'),
    totalPrice: data.get('totalPrice')
    }
    console.log("JSON.stringify(medicineData): " + JSON.stringify(orderData));
  
    let url = process.env.REACT_APP_BASEURL+'user/createorder'
  
    console.log("method: " + method)
    console.log("URK: " + url)
  
    var config = {};
  
    if (token) {
      config = {
        'Content-Type' : 'application/json',
        'Authorization': 'Bearer ' + token,
     }
    }
    
    const response = await fetch(url, {
      method: method,
      headers: config,
      body: JSON.stringify(orderData)
    });
  
    if (!response.ok) {
      throw json({ message: 'Could not Add Order' }, { status: 500 });
    } else {
      
        return redirect('/orderHistory');
      
      }
  }
