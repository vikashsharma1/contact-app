import React from "react";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  return (
    <div className="item" style={{ display: "flex" }}>
      <img src="../images/avatar-user.png" style={{height:"20px", width:"30px"}}/>
      <div className="content">
        <Link to={{ pathname: `/contact/${id}`}} state={{name:name, email:email}} >
          <div className="header">{name} </div>
          <div> {email} </div>
        </Link>
      </div>
      <i className="trash alternate outline icon" onClick={()=>props.clickHandler(id)}
        style={{ color: "red", marginTop: "7px", marginLeft:"auto",cursor:"pointer"}} >
      </i>
    </div>
    
  )
};


export default ContactCard