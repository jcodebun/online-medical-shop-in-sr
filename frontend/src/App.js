import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignupPage from './Pages/SignupPage';
import RootLayout from './Pages/RootLayout';
import WelcomePage from './Pages/WelcomePage';
import {action as signupAction} from './Components/Signup';
import {action as loginAction} from './Pages/LoginPage';
import {tokenLoder, checkAuthLoader} from './util/auth';
import {action as logoutAction} from './Pages/Logout'
import UserListPage from './Pages/UserListPage';
import {loader as userListLoader} from './Pages/UserListPage';
import EditUserPage from './Pages/EditUserPage';
import {loader as userLoader} from './Pages/EditUserPage';
import {loader as deleteUser } from './Components/DeleteUser';
import MedicinePage from './Pages/MedicinePage';
import MedicineListPage from './Pages/MedicineListPage';
import {action as addMedicineAction} from './Components/Medicine';
import {loader as medicineListLoader} from './Pages/MedicineListPage';
import EditMedicinePage, {loader as medicineLoader} from './Pages/EditMedicinePage';
import  {loader as deleteMedicineLoader} from './Components/DeleteMedicine';
import OrderPage, {loader as medicineOrderLoader} from './Pages/OrderPage';
import { action as orderMedicineAction } from './Components/Order';
import OrderHistoryPage, {loader as orderHistoryLoader} from './Pages/OrderHistoryPage';
import PaymentPage, {loader as orderPaymentLoader} from './Pages/PaymentPage';
import {action as paymentAction} from './Components/Payment';
import PaymentHistoryPage, {loader as paymentHistoryLoader} from './Pages/PaymentHistoryPage';
import ErrorPage from './Pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root',
    loader: tokenLoder,
    
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: 'login',
      element: <LoginPage />,
      action: loginAction
    },
    {
      path: 'signup',
      element: <SignupPage />, 
      action: signupAction
      
    },
    {
      path: 'welcome',
      element: <WelcomePage />,
      loader: checkAuthLoader
    },
    {
      path: 'userlist',
      element: <UserListPage />,
      loader: userListLoader,
      action: deleteUser
    },
    {
      path: 'deleteuser/:id',
      element: <deleteUser />,
      loader: deleteUser
    },
    {
       path: 'edituser/:id',
       element: <EditUserPage/>,
       loader: userLoader,
       action: signupAction
    },
    {
      path: 'logout',
      action: logoutAction
    },
    {
      path: 'addMedicine',
      element: <MedicinePage />,
      action:addMedicineAction
    },
    {
      path: 'medicineList',
      element: <MedicineListPage />,
      loader: medicineListLoader
    },
    {
      path: 'editmedicine/:id',
      element: <EditMedicinePage />,
      loader: medicineLoader,
      action: addMedicineAction
    },
    {
      path: 'deletemedicine/:id',
      loader: deleteMedicineLoader
    },
    {
      path: 'order/:id',
      element: <OrderPage />,
      loader:medicineOrderLoader,
      action:orderMedicineAction
    },{
      path:'orderHistory',
      element: <OrderHistoryPage/>,
      loader: orderHistoryLoader
    },{
      path: 'payment/:id',
      element: <PaymentPage />,
      loader: orderPaymentLoader,
      action:paymentAction
    },
    {
      path: 'paymentHistory',
      element: <PaymentHistoryPage />,
      loader: paymentHistoryLoader

    }




  ]
     
  
    }
  
])

function App() {
  return <RouterProvider router={router} /> 
  
}

export default App;
