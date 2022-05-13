import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import ItemDetails from './Components/Item/ItemDetails';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import AddItems from './Pages/AddItems/AddItems';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import LogIn from './Pages/LogIn/LogIn';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyItems from './Pages/MyItems/MyItems';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App relative min-h-screen">
      <div className="pb-14">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/itemdetails/:itemId' element={
            <RequireAuth>
              <ItemDetails></ItemDetails>
            </RequireAuth>
          }></Route>
          <Route path='/manageinventory' element={
            <RequireAuth>
              <ManageInventory></ManageInventory>
            </RequireAuth>
          }></Route>
          <Route path='/additems' element={
            <RequireAuth>
              <AddItems></AddItems>
            </RequireAuth>
          }></Route>
          <Route path='/myitems' element={
            <RequireAuth>
              <MyItems></MyItems>
            </RequireAuth>
          }></Route>
          <Route path='/blog' element={<Blog></Blog>}></Route>
          <Route path='/login' element={<LogIn></LogIn>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
