import { Redirect, Router } from "react-router";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import About from "./components/About_us";
import Home from "./components/main";
import ContactUs from "./components/contactUs";


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/aboutus" element={<About />}></Route>
      <Route path="/contactus" element={<ContactUs />}></Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
