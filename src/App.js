import { Redirect, Router } from "react-router";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import About from "./components/About_us";
import Home from "./components/main";
import ContactUs from "./components/contactUs";
import Dashborad from "./components/adminPages/Dashboard";
import ContactUsadmin from "./components/adminPages/contactUsadmin";
import PhonePage from "./components/Phones";
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/aboutus" element={<About />}></Route>
      <Route path="/contactus" element={<ContactUs />}></Route>
      <Route path="/Dashboard" element={<Dashborad />}></Route>
      <Route path="/Phones" element={<PhonePage />}></Route>

      <Route path="/ContactUsadmin" element={<ContactUsadmin />}></Route>



    </Routes>
  </BrowserRouter>

  );
}

export default App;
