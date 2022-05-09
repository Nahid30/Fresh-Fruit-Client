import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import HomeInside from './components/Home/HomeInside/HomeInside';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import Inventory from './components/Home/Inventory/Inventory';
import Blogs from './components/Blogs/Blogs';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import ManageInventories from './components/ManageInventories/ManageInventories';
import RequireAuth from './components/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import AddNewItem from './components/AddNewItem/AddNewItem';
import ManageItem from './components/ManageItem/ManageItem';
import MyItem from './components/MyItem/MyItem';


function App() {
  return (
    <div>

      <Header></Header>

      
        <ToastContainer></ToastContainer>

        <Routes>
          <Route path='/' element={<HomeInside></HomeInside>}></Route>
          <Route path='/home' element={<HomeInside></HomeInside>}></Route>
          <Route path='/inventory' element={<Inventory></Inventory>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/item/:itemId' element={
            <RequireAuth>
              <ManageInventories></ManageInventories>
            </RequireAuth>
          }></Route>
          <Route path='/addnewitem' element={
            <RequireAuth>
              <AddNewItem></AddNewItem>
            </RequireAuth>
          }></Route>
          <Route path='/manageitem' element={
            <RequireAuth>
              <ManageItem></ManageItem>
            </RequireAuth>
          }></Route>
          <Route path='/myitem' element={
            <RequireAuth>
              <MyItem></MyItem>
            </RequireAuth>
          }></Route>

          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>

      
      <Footer></Footer>

    </div>
  );
}

export default App;
