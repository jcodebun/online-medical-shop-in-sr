import { Form, json, redirect } from "react-router-dom";
import { getAuthToken } from "../util/auth";

function Medicine({method, medicine}) {

    return (
        <>
      <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px;' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Add Medicine</p>

                    <Form method={method}>
                <input id="id" type="hidden" name="id" required defaultValue={medicine? medicine.id : ''} />
                    <div className="form-group">
                        <label for="formGroupExampleInput">Medicine Name</label>
                        <input type="text" required defaultValue={medicine? medicine.medicineName : ''} name="medicineName" className="form-control" id="formGroupExampleInput" placeholder="Enter Medicine Name"/>
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Company Name</label>
                        <input type="text" required defaultValue={medicine? medicine.companyName : ''} name="companyName" className="form-control" id="formGroupExampleInput2" placeholder="Enter Company Name" />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Quantity</label>
                        <input type="text" required defaultValue={medicine? medicine.quantity : ''} name="quantity" className="form-control" id="formGroupExampleInput2" placeholder="Number of Units" />
                    </div>

                    <div className="form-group">
                        <label for="formGroupExampleInput2">Price Per Unit</label>
                        <input type="text" required defaultValue={medicine? medicine.price : ''} name="price" className="form-control" id="formGroupExampleInput2" placeholder="Enter Price Per Unit" />
                    </div>
                  <div class="d-flex justify-content-center" style={{ marginTop: "50px" }}>
                  <button type="submit"
                    class="btn btn-primary btn-block btn-lg gradient-custom-4 text-body">Add Medicine</button>
                  </div>

                </Form>

                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Medicine_Drugs.svg/2560px-Medicine_Drugs.svg.png"
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

export default Medicine;

export async function action({ request }) {
    const method = request.method;
    const data = await request.formData();
    const token = getAuthToken();
  
    let medicineData = {
    medicineName: data.get('medicineName'),
    companyName: data.get('companyName'),
    quantity: data.get('quantity'),
    price: data.get('price'),
    }
    console.log("JSON.stringify(medicineData): " + JSON.stringify(medicineData));
  
    let url = process.env.REACT_APP_BASEURL+'addmedicine'
  
    console.log("method: " + method)
    console.log("URK: " + url)
    if(method ==="PATCH"){
      url = process.env.REACT_APP_BASEURL+"updatemedicine";
      medicineData = {
        id: data.get('id'),
        medicineName: data.get('medicineName'),
        companyName: data.get('companyName'),
        quantity: data.get('quantity'),
        price: data.get('price'),
      }
    }
  
    console.log("medicineData: " + JSON.stringify(medicineData))
  
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
      body: JSON.stringify(medicineData)
    });
  
    if (!response.ok) {
      throw json({ message: 'Could not Add Medicine' }, { status: 500 });
    } else {
      
        return redirect('/medicineList');
      
      }
     
    
  
  }