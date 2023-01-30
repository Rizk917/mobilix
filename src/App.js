import './App.css';
import Header from './components/Header';
import Brands from './components/pop-brands';
import Cards from './components/Cards';
import FooterPhone from './components/footer';
import Menu from './components/menu';
import DeskHeader from './components/deskheader';
import DeskBody from './components/DeskBody';
import DeskFooter from './components/deskfooter';
import { useState } from 'react';


function Home() {
  const [show, setShow] = useState(false)
  
  
  return (
    <div className="main">
      {/* <route path="/home element={</Home>}"/> */}
      <div className="desktop-view">
        <DeskHeader />
        <DeskBody />
        <DeskFooter />
      </div>
      <div className="phone-view">
        <Menu className={show ? 'main-open' : 'menu-back'} setShow={setShow}/>
        <Header setShow={setShow}/>
        <Brands setShow={setShow}/>
        <Cards setShow={setShow}/>
      </div>
        <FooterPhone setShow={setShow}/>
    </div>
  );
}

function close() {
  let change = document.querySelector(".main-menu");
      change.classList.toggle("main-close")
  console.log("AKAL")
}

export default Home;
