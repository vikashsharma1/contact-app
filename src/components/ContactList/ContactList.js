import React from "react";
// import { useRef } from "react";
import { Link } from 'react-router-dom';
import ContactCard from "../ContactCard";
import "./contactList.css";

const ContactList = (props) => {
     const {
          contacts = {},
          term
     } = props;

     // const inputEl = useRef("");
      const deleteContactHandler = (id) => {
          props.getContactId(id);
     };
     // console.log("---abc--",props);
     const renderContactList = contacts.map((contact )=> {
          return (
               <ContactCard contact={contact}
                    clickHandler={deleteContactHandler}
                    key={contact.id} />
          )
     });
     
     const getSearchTerm = e => {
          props.searchKeyword(e.target.value);
     };

     return (
          <div className="main">
               <h2>
                    <div style={{ marginTop: "50px", display: 'flex', borderBottom: '2px solid #D3D3D3' }}>
                         <h2>Contact List</h2>
                         <Link to="/add" style={{ marginLeft: 'auto' }}>
                              <button className="contact-list-btn" > Add Contact</button>
                         </Link>
                    </div>
               </h2>
               <div className="ui search" >

                    <div style={{ padding: "6px", marginTop: "20px", marginRight: "30px", cursor: "pointer" }}>
                         <div className="ui icon input"  >
                              <input
                                   // ref={inputEl}
                                   type="text"
                                   placeholder="search contact"
                                   className="prompt"
                                   value={term}
                                   onChange={getSearchTerm}
                              />
                              <i className="search icon">
                              </i>
                         </div>
                    </div>

                    <div className="ui celled list"> {renderContactList.length > 0 ? renderContactList : "No contacts Available"} </div>
               </div>
          </div>
     )
};

export default ContactList;
