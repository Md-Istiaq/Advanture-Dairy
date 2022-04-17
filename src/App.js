
import './App.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import CheckOut from './Component/CheckOut/CheckOut';
import Blogs from './Component/Blogs/Blogs';
import AboutMe from './Component/AboutMe/AboutMe';
import Login from './Component/LogIn/Login';
import Register from './Component/Register/Register';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/checkout' element={<CheckOut/>}></Route>
      <Route path='/blogs' element={<Blogs/>}></Route>
      <Route path='/aboutme' element={<AboutMe/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
