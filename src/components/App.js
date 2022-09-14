import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import api from "../api/contacts";
import Header from './Header';
import AddContact from './AddContact';
import EditContact from './EditContact';
import ContactList from './ContactList/ContactList';
import ContactDetail from './ContactDetail';
import { connect } from 'react-redux';
import { contactDetail } from '../Redux/Action/EmployAction'


function App(props) {

  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([""]);

  useEffect(() => {
    (async () => {
      // get data from redux
      const allContacts = await retreiveContacts();
      // console.log("--contact---", allContacts);
      setContacts(allContacts);
    })()
  }, []);

  const retreiveContacts = async () => {
    const res = await api.get("/contacts");
    // save into redux
    props.dispatchGetContactDetail(res.data);
  };


  console.log("---contactDataFromStore---", props?.contactDataFromStore?.contactInfo?.contactDetail?.contacts);

  // const {
  //   contacts: tempContacts = []
  // } = props?.contactDataFromStore?.contactInfo;
  

  console.log("----props------", props)
const tempContacts = props?.contactDataFromStore?.contactInfo?.contactDetail?.contacts;

  useEffect(() => {
    setContacts(tempContacts);
  }, [tempContacts]);



  const random = () => {
    return Math.random();
  }

  const addContactHandler = async (contact) => {
    //  setContacts([...contacts, contact]);
    const request = {
      id: random(),
      ...contact,
    }

    const res = await api.post("/contacts", request)
    setContacts([...contacts, res.data]);
  };

  const updateContactHandler = async (contact) => {
    const res = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = res.data;
    setContacts(contacts.map(contact => {
      return contact.id === id ? { ...res.data, } : contact;
    }));
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  const searchHandler = (filterValue) => {
    setSearchTerm(filterValue);
    if (filterValue !== "") {
      const newContactList = contacts.filter(contact =>
        Object.values(contact)
          .join("")
          .toLowerCase()
          .includes(filterValue.toLowerCase())
      );
      setSearchResults(newContactList);
    }
    else {
      setSearchResults(searchResults);
    }
  }

  return (
    <div className="ui container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/edit" element={<EditContact updateContactHandler={updateContactHandler} />} />
          {contacts && <Route path="/" element={<ContactList
            contacts={searchTerm.length < 1 ? contacts : searchResults} getContactId={removeContactHandler}
            term={searchTerm} searchKeyword={searchHandler} />
          }
          />}
          <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>

      </BrowserRouter>
      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} deleteContactHandler={removeContactHandler} />  */}
    </div>
  )
};

const mapStateToProps = (state) => ({
  contactDataFromStore: state
})
const mapDispatchToProps = (dispatch) => ({
  dispatchGetContactDetail: (contact) => dispatch(contactDetail(contact))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

