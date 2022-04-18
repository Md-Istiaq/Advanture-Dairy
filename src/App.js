
import './App.css';
import Header from './Component/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home/Home';
import CheckOut from './Component/CheckOut/CheckOut';
import Blogs from './Component/Blogs/Blogs';
import AboutMe from './Component/AboutMe/AboutMe';
import Login from './Component/LogIn/Login';
import Register from './Component/Register/Register';
import RequirAuth from './Component/RequirAuth/RequirAuth';
import PageNotFound from './Component/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/checkout' element={
        <RequirAuth>
          <CheckOut/>
        </RequirAuth>
      }></Route>
      <Route path='/blogs' element={<Blogs/>}></Route>
      <Route path='/aboutme' element={<AboutMe/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='*' element={<PageNotFound/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
