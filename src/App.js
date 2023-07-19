// import image from "./assets/image.jpg";
import React from "react";
import "./style.css";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About/about";
import Footer from "./components/footer";
import Post from "./components/Post";
import Product from "./components/Product/Product";
import Service from "./components/Service/service";

function App() {
  return (
    <div>
      <header className="App-header">
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
        <Link to="/products">Products</Link>
        <Link to="/post">Post</Link>
      </header>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />} />
        <Route path="/products" element={<Product />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
