import React from "react";
import {useRef} from"react";
import { Link } from 'react-router-dom';
import ContactCard from "../ContactCard";
import "./contactList.css";

const ContactList = (props) => {
     console.log(props);
     const inputEl=useRef("");
     const deleteContactHandler = (id) => {
          props.getContactId(id);
      }
      const getSearchterm=()=>{
        props.searchKeyword(inputEl.current.value);
      };
 return (
     <div className="main">
          <h2>
          <div style={{ marginTop: "50px", display: 'flex', borderBottom: '2px solid #D3D3D3' }}>
               <h2>Contact List</h2>
               <Link to="/add" style={{ marginLeft: 'auto'}}>
                    <button className="contact-list-btn" > Add Contact</button>
               </Link>
               </div>
               </h2>
                <div className="search">
                    <div className="icon input">
                         <input 
                         ref = {inputEl}
                         type="text" placeholder="search contact" className="prompts" value={props.term} onchange={getSearchterm}/>
                         <i className="search icon"></i>
                         </div>
                         </div>
               
          <div className="ui celled lis" > 
               {
                    props.contacts.map((contact) => {
                         return (
                              
                              <ContactCard contact={contact}
                                   clickHandler={deleteContactHandler}
                                   key={contact.id} />
                         )}
                    
                    )}</div>
                    </div>
 )};
                    
                         
export default ContactList;
