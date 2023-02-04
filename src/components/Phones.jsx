import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeskHeader from './deskheader';
import DeskFooter from './deskfooter';
import './phones.css'
import { Path } from 'react-router';
// import "../images"
function PhonePage() {
  const [phones, setPhones] = useState([]);

//   useEffect(() => {
//     axios.get('localhost:5000/phones')
//       .then(res => setPhones(res.data))
//       .catch(err => console.error(err));
//   }, []);


useEffect(() => {
    loadphones();
  }, []);

  const loadphones = async () => {
    const result = await axios.get("http://localhost:5000/phones");
    console.log(result.data);
    setPhones(result.data);
  }

  return (
    <div>
      <DeskHeader />
      <div className="grid-container">
        {phones.map(phone => (
          <div className="grid-item" key={phone.id}>
        {console.log(phones.image)}

            <h3>{phone.phoneModels}</h3>
            <img src={`${phone.image}`} alt={phone.title} />
          </div>
        ))}
      </div>
      <DeskFooter />
    </div>
  );
}

export default PhonePage;
