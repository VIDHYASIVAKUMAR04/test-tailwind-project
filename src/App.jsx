import React from "react";
import Game from "../src/components/Game";
import Landingpage from "./components/Landingpage";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./Styles/Style.css";
import Local from "./components/Local";

const App = () => {
return (
<div>
{/* <Landingpage/>  */}
<Navbar/>
<Home/>
<About/>
<Work/>
<Testimonial/>
<Contact/>
<Footer/>
<Local/>
{/* <Game /> */}
</div>

);
}

export default App;
