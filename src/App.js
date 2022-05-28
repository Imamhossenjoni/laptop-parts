import logo from './logo.svg';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';
import Registration from './Pages/Login/Registration';
import DashBoard from './Pages/DashBoard/DashBoard'
import RequireAuth from './Pages/Login/RequireAuth';
import PartDetails from './Pages/PartDetails';
import OrderProduct from './Pages/OrderProduct';
import MyOrder from './Pages/DashBoard/MyOrder';
import AddReview from './Pages/DashBoard/AddReview';
import Footer from './Pages/Shared/Footer';
import Users from './Pages/DashBoard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddParts from './Pages/DashBoard/AddParts';
import ManageParts from './Pages/DashBoard/ManageParts';
import Payment from './Pages/DashBoard/Payment';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<Registration></Registration>}></Route>
        <Route path='/orderPage' element={
          <RequireAuth>
            <OrderProduct></OrderProduct>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <DashBoard></DashBoard>
          </RequireAuth>
        }>
          <Route index element={<MyOrder></MyOrder>}></Route>
          <Route path='review' element={<AddReview></AddReview>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={
            <RequireAdmin>
              <Users></Users>
            </RequireAdmin>}></Route>
          <Route path='addParts' element={
            <RequireAdmin>
              <AddParts></AddParts>
            </RequireAdmin>}></Route>
          <Route path='manage' element={
      
              <ManageParts></ManageParts>
         }></Route>
        </Route>

        <Route path='/parts/:partId' element={<PartDetails></PartDetails>}></Route>
        {/* <Route path='/booking' element={
          <RequireAuth>
            <BookingModal></BookingModal>
          </RequireAuth>
        }></Route> */}

      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
