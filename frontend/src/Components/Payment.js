import { Form } from "react-router-dom";
import { getAuthToken } from "../util/auth";
import { json, redirect } from 'react-router-dom'


function Payment({ order }) {


    return (
        <>
            <section>
                <div className="container my-5 py-5">
                    <div className="row d-flex justify-content-center py-5">
                        <div className="col-md-7 col-lg-5 col-xl-4">
                            <div className="card" style={{ borderRadius: '15px;' }}>
                                <div className="card-body p-4">
                                    <Form method="POST">

                                        <input id="orderid" type="hidden" name="orderid" required defaultValue={order ? order.id : ''} />
                                        <input id="userid" type="hidden" name="userid" required defaultValue={order ? order.userid : ''} />
                                        <h3>Order Number: {order.id}</h3>

                                        <div className="d-flex justify-content-between align-items-center mb-3">

                                            <div className="form-outline">
                                                <input type="text" id="totalPrice" name="totalPrice" className="form-control form-control-lg" siez="17"
                                                    value={order.totalPrice} readOnly />
                                                <label className="form-label" htmlFor="typeText">Total Price</label>
                                            </div>

                                            <div className="form-outline">
                                                <input type="text" id="cardNumber" name="cardNumber" className="form-control form-control-lg"
                                                    placeholder="1234 5678 9012 3457" />
                                                <label className="form-label" htmlFor="typeText">Card Number</label>
                                            </div>

                                        </div>

                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <div className="form-outline">
                                                <input type="text" id="typeName" name="cardName" className="form-control form-control-lg"
                                                    placeholder="Cardholder's Name" />
                                                <label className="form-label" htmlFor="typeName">Cardholder's Name</label>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-between align-items-center pb-2">
                                            <div className="form-outline">
                                                <input type="text" id="typeExp" name="expiry" className="form-control form-control-lg" placeholder="MM/YYYY"
                                                />
                                                <label className="form-label" htmlFor="typeExp">Expiration</label>
                                            </div>
                                            <div className="form-outline">
                                                <input type="password" id="typeText2" name="cvv" className="form-control form-control-lg"
                                                    placeholder="&#9679;&#9679;&#9679;" />
                                                <label className="form-label" htmlFor="typeText2">Cvv</label>
                                            </div>
                                            <div className="form-outline">
                                                <button type="submit" className="btn btn-info btn-lg btn-rounded">Pay
                                                    <i className="fas fa-arrow-right"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Payment;

export async function action({ request }) {
    const method = request.method;
    const data = await request.formData();
    const token = getAuthToken();

    let paymentData = {
        orderid: data.get('orderid'),
        userid: data.get('userid'),
        cardNumber: data.get('cardNumber'),
        cardName: data.get('cardName'),
        totalPrice: data.get('totalPrice'),
        expiry: data.get('expiry'),
        cvv: data.get('cvv')
    }
    console.log("JSON.stringify(paymentData): " + JSON.stringify(paymentData));

    let url = process.env.REACT_APP_BASEURL+'user/createpayment'

    console.log("method: " + method)
    console.log("URK: " + url)

    var config = {};

    if (token) {
        config = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
        }
    }

    const response = await fetch(url, {
        method: method,
        headers: config,
        body: JSON.stringify(paymentData)
    });

    if (!response.ok) {
        throw json({ message: 'Could not Add Order' }, { status: 500 });
    } else {

        return redirect('/paymentHistory');

    }
}