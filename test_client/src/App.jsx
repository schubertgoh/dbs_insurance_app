import React, { Component } from "react";
import Login from './pages/Login'
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from "./pages/Users";
import Edit from "./pages/Edit";
import Add from "./pages/Add";


export default class App extends Component {

  render() {
    return (
      <Router>
      <div className="pt-20">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home />} />
          <Route path="/user" element={<Users />} />
          <Route path="/Edit" element={<Edit/>} />
          <Route path="/Add" element={<Add/>} />
        </Routes>
      </div>
      </Router>
    );
  }
}
