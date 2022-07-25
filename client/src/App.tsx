import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Login from './pages/Login';
import Post from './pages/Post';
import Posts from './pages/Posts';
import Signup from './pages/Signup';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Header />
          <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
