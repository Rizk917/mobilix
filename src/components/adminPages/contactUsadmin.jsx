import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import './adminarticles.css'

export default function Home() {
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:5000/contactus");
    console.log(result.data);
    setUsers(result.data);
  }

  const deleteUser = async (id) => {
     await axios.delete(`http://localhost:5000/contactus/${id}`);
    loadUsers();
  };

  return (
    <div className="container">
        <h1>Dashboard</h1>
      <div className="center" >
        <h1>Contact US</h1>
        <table>
          <thead>
            <tr>
              <th scope="col" >index</th>
              <th scope="col" >Full Name</th>
              <th scope="col">email</th>
              <th scope="col">message</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                
                <th scope="row" >
                  {index + 1}
                </th>
                <td>{user.fullName}</td>
                <td>{user.mail}</td>
                <td>{user.Message}</td>
        
                <td>

                  <button
                    className="button2"
                    onClick={() => deleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}