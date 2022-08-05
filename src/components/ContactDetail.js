import React from 'react';
import { useLocation, useMatch, useParams } from 'react-router-dom';
// import { Link } from "react-router-dom";


const ContactDetail = () => {
  const location =useLocation();
  const{ name, email }=location.state;

  return (
    <div className="main">
      <div className="card centered">
        <div className="image">
          <img src="../images/user.jpg" alt="user" style={{height:"100px", width:"150px", marginTop:"10%"}} /></div>
          <div className="content" >
            <div className="header">{name}</div>
            <div className="description">{email}</div>
          </div>
          <div className="center-btn" >
            {/* <link to="/" >
            <button className="center blue-btn">back to contact list</button>
            </link> */}
          </div>
        </div>
      </div>
   
  );
}
export default ContactDetail;



