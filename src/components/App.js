import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import api from '../api/contacts'
import AddContact from './AddContact';
import EditContact from './EditContact';
import ContactList from './ContactList/ContactList';
import ContactDetail from './ContactDetail';
import { connect } from 'react-redux';
import { getContactDetail,sendContactDetails} from '../Redux/Action/contactAction'
import { putContactDetails } from '../Redux/Action/contactAction';
import { deleteContactDetails } from '../Redux/Action/contactAction';
import contacts from '../api/contacts';


function App(props) {

  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([""]);

  useEffect(() => {
      // call action to get data from Json server through Saga
      props.dispatchGetContactDetail();
    }, []);

  const tempContacts = props?.contactDataFromStore?.contacts;

  useEffect(() => {
    // get data from redux
    // console.log("---tempContacts--", tempContacts);
    setContacts(tempContacts);
  }, [tempContacts]);



  const random = () => {
    return Math.random();
  }

  const addContactHandler = async (contact) => {
    setContacts([...contacts, contact]);
    const request = {
      id: random(),
      ...contact,
    }
    props.dispatchSendContactDetail(contact);
};

  const updateContactHandler = async (contact) => {
    // const res = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = res.data;
   setContacts(contacts.map(contact => {
      return contact.id === id ? { ...res.data, } : contact;
     }));
     props.dispatchPutContactDetail(contact);
  };

  const removeContactHandler = async (id) => {
    //await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
 
    });
    props.dispatchDeleteContactDetail(id);
    setContacts(newContactList);
    // props.dispatchDeleteContactDetail(id);

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
      {/* <AddContact addContactHandler={addContactHandler} */}
      {/* <ContactList contacts={contacts} deleteContactHandler={removeContactHandler} /> */}
    </div>
  )
};

const mapStateToProps = (state) => ({
  contactDataFromStore: state.contactDetails
})
const mapDispatchToProps = (dispatch) => ({
  dispatchGetContactDetail: () => dispatch(getContactDetail()),
  dispatchSendContactDetail:(contact)=>dispatch(sendContactDetails(contact)),
  dispatchPutContactDetail:(contact)=>dispatch(putContactDetails(contact)),
  dispatchDeleteContactDetail:(id)=>dispatch(deleteContactDetails(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

