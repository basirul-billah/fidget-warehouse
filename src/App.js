import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home';
import Inventory from './Pages/Inventory/Inventory';
import LogIn from './Pages/LogIn/LogIn';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
