import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
// import { BrowserRouter as Route } from "react-router-dom";
// import Discover from "./pages/Discover";
// import About from "./pages/About";
// import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Wrapper>
        {/* <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} /> */}
      </Wrapper>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
