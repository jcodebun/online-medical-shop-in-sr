import { Form } from 'react-router-dom';
import { json, redirect } from 'react-router-dom'
import { getAuthToken } from "../util/auth";
function Signup({ method, user }) {
  const token = getAuthToken();
  return <>
    <section className="vh-100" style={{ backgroundColor: '#eee' }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: '25px;' }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                    <Form classNameName="mx-1 mx-md-4" method={method}>
                    <input id="id" type="hidden" name="id" required defaultValue={user? user.id : ''} />
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="text" name="username" id="form3Example1c" className="form-control" required defaultValue={user? user.username : ''} />
                          <label className="form-label" for="form3Example1c">User Name</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="email" name="email" id="form3Example3c" className="form-control" required defaultValue={user? user.email : ''} />
                          <label className="form-label" for="form3Example3c">Your Email</label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input type="password" name='password' id="form3Example4c" className="form-control" required defaultValue={user? user.password : ''}/>
                          <label className="form-label" for="form3Example4c">Password</label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" className="btn btn-primary btn-lg">{token ? 'Save' : 'Save'}</button>
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
}

export default Signup;


export async function action({ request }) {
  const method = request.method;
  const data = await request.formData();
  const token = getAuthToken();

  let userData = {
    email: data.get('email'),
    password: data.get('password'),
    username: data.get('username'),
    role: "User",
    enabled: true
  }
  console.log("JSON.stringify(eventData): " + JSON.stringify(userData));

  let url = process.env.REACT_APP_BASEURL+'registration'

  console.log("method: " + method)
  console.log("URK: " + url)
  if(method ==="PATCH"){
    url = process.env.REACT_APP_BASEURL+"editUser";
    userData = {
      id: data.get('id'),
      email: data.get('email'),
      password: data.get('password'),
      username: data.get('username'),
      role: "User",
      enabled: true
    }
  }

  console.log("userData: " + JSON.stringify(userData))

  var config = {};

  if (token) {
    config = {
      'Content-Type' : 'application/json',
      'Authorization': 'Bearer ' + token,
   }
  }else{
    config = {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(url, {
    method: method,
    headers: config,
    body: JSON.stringify(userData)
  });

  if (!response.ok) {
    throw json({ message: 'Could not create User' }, { status: 500 });
  } else {
    if (token) {
      return redirect('/userlist');
    }else{
      return redirect('/login');
    }
   
  }

}