import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeskHeader from './deskheader';
import DeskFooter from './deskfooter';
import iphone from '../images/iphone13.png'

import './phones.css'
import { Path } from 'react-router';




function PhonePage() {
  const [phones, setPhones] = useState([]);


useEffect(() => {
    loadphones();
  }, []);

  const loadphones = async () => {
    const result = await axios.get("http://localhost:5000/phones");
    const sortedphones = result.data.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });
    setPhones(sortedphones);
  }
  

  return (
    <div>
      <DeskHeader />
      <div className="grid-container">
        {phones.map(phone => (
          <div className="grid-item" key={phone.id}>
        

            <h3>{phone.phoneModel}</h3>
            <img src={`http://localhost:5000/${phone.image}`} alt={phone.phoneModels} />
          </div>
        ))}
      </div>
      <DeskFooter />
    </div>
  );
}

export default PhonePage;
