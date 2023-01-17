import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Orders from './pages/Orders' ;
import Contact from './pages/Contact';
import { Switch } from 'antd';
import { BrowserRouter as Router, Routes, Route, Navigate as Redirect } from "react-router-dom";
import Navbar from "./components/NavigationBar/navBar";

function App() {
  
  return (
    <Router>
      <Navbar/>
       <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/orders" element={<Orders/>}/>
        <Route path="/contact" element={<Contact/>} />
       </Routes>
    </Router>
  );
}

export default App;
