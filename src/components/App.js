import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList/ContactList';
import ContactDetail from './ContactDetail';


function App() {
  const [contacts, setContacts] = useState([]);
 
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
  };
  
  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem("contacts"))
    if (retrieveContacts) {
      setContacts(retrieveContacts);
    }
    }, []);

  useEffect(() => {
     if (contacts && contacts.length>0) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
     }

  },[contacts]);

 return (
    <div className="ui container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler}/>}/>
          <Route path="/"  element={<ContactList contacts={contacts} getContactId={removeContactHandler} />}/>
          <Route path="/contact/:id" element={<ContactDetail />}/>
        </Routes>
        
      </BrowserRouter>
      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} deleteContactHandler={removeContactHandler} />  */}
    </div>
    )
};

export default App;
