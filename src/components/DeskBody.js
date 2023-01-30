import React from "react";
import up from "../images/up.png";
import { lazy } from "react";

class DeskBody extends React.Component {
    render() {
        return <div className="main-hero">
            <h1>Our latest <br></br>updates</h1>
            <div className="updates">
            <div className="item-1"> 
                <a href="#"><div></div></a>
            </div>
            <div className="item-2">
                <a href="#"><div></div></a>
            </div>
            </div>
        </div>
    }
}

export default DeskBody;