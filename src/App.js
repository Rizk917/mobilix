import { Redirect, Router } from "react-router";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import About from "./components/About_us";
import Home from "./components/main";
import ContactUs from "./components/contactUs";
import NewsP from "./components/News-page";
import LogIn from "./components/log-in-phone";
import LgiPop from "./components/log-in-pop";
import SignUpP from "./components/sign-up-phone";
import SignUpD from "./components/SignUpD";


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/aboutus" element={<About />}></Route>
      <Route path="/contactus" element={<ContactUs />}></Route>
      <Route path="/news" element={<NewsP />}></Route>
      <Route path="/login" element={<LogIn />}></Route>
      <Route path="/signup" element={<SignUpP />}></Route>
    </Routes>
  </BrowserRouter>
  <LgiPop />
  </>
  );
}

export default App;
