/*import Test from './Test';  // Import the Test component correctly
import './App.css';
import Test1 from './Test1';
import Test2 from './Test2';
import Test3 from './Test3'
function App() {
  return (
    <>
      <Test />
      <Test1 />
      <Test2 />
      <Test3 />
       {/* Use capitalized component name }
    </>
  );
}

function App(){
return (
  <div>
    <h2>Welcome to App functional Component</h2>
  </div>
)
}*
import {BrowserRouter,Route,Router,Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
function Header(){
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/signup">Signup</Link></li>
      </ul>
    </div>
  )
}
function App(){
  return(
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>
        </BrowserRouter>
      
    </div>
  )
}*

import {BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import SignUp from './components/SignUp'

function Header(){
  return(
    <div>
<ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/signup">SignUp</Link></li>
</ul>
    </div>
  )
}
function App(){
  return(
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}>Home</Route>
      <Route path="/about" element={<About/>}>About</Route>
      <Route path="/signup" element={<SignUp/>}>SignUp</Route>
      </Routes>      
      </BrowserRouter>
    </div>
  )
}
export default App;

import Test4 from "./Test4";
import Test5 from "./Test5";
import Test6 from "./Test6";
function App(){
  return(
    <div>
      <Test6/>
    </div>
  )
}
export default App;*/
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
//  import './assets/styles/style.css'; // Global styles
function App() {
  return (
    <div>
    <Header/>
    <Body />


    
    <Footer />
    </div>
  );
}
export default App;