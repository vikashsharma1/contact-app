import React from "react";
import { Link } from 'react-router-dom';
import ContactCard from "../ContactCard";
import "./contactList.css";


const ContactList = (props) => {
     // console.log(props);

     const deleteContactHandler = (id) => {
          props.getContactId(id);
          
     };


          return (
               <div className="main">
                    <div style={{marginTop:"50px", display:'flex', borderBottom:'2px solid #D3D3D3'}}>
                         <h2>Contact List</h2>
                         <Link to="/add" style={{ marginLeft:'auto'}}>
                              <button className="contact-list-btn" > Add Contact</button>
                         </Link>
                    </div>
                    <div className="ui celled lis">
                         {
                        props.contacts.map((contact) => {
                              return (
                                   <ContactCard contact={contact}
                                        clickHandler={deleteContactHandler}
                                        key={contact.id} />
                              );
                        })
                    }</div>
               </div>
          )
     };
export default ContactList;
