import React from "react";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";
import { BsEarbuds } from "react-icons/bs";

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Skills />
    {/* <Testimonial /> */}
    <Footer />
  </div>
);

export default App;
