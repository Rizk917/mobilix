import React from "react";
import house from '../images/house.png';
import heart from '../images/heart.png';
import phones from '../images/phones.png';
import news from '../images/news.png';

function FooterPhone(props) {
        return <footer onClick={()=>props.setShow(false)}>
        <a href="#">
          <img src={house} className="house"></img>
        </a>
        <a href="#">
          <img src={heart} className="heart"></img>
        </a>
        <a href="#">
          <img src={phones} className="phones"></img>
        </a>
        <a href="#">
          <img src={news} className="news">

          </img>
        </a>
      </footer>
}

export default FooterPhone;