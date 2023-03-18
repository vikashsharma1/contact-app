import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header';
import AddContact from '../AddContact';
import EditContact from '../EditContact';
import ContactList from '../ContactList/ContactList';
import ContactDetail from '../ContactDetail';
import { connect } from 'react-redux';
import { getContactDetail, sendContactDetails } from '../../Redux/Action/contactAction'
import { putContactDetails } from '../../Redux/Action/contactAction';
import { deleteContactDetails } from '../../Redux/Action/contactAction';

import TestProgram from '../TestProgram/ToDoList';

function App(props) {
  // const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([""]);

  useEffect(() => {
    // call action on initial load to get data from Json server through Saga
    props.dispatchGetContactDetail();
  }, []);

  const tempContacts = props?.contactDataFromStore?.contacts;

  // useEffect(() => {
  // }, [tempContacts]);

  const addContactHandler = async (contact) => {
    props.dispatchSendContactDetail(contact);
  };

  const updateContactHandler = async (contact) => {
    console.log("----", contact);
    props.dispatchPutContactDetail(contact);
  };

  const deleteContactHandler = async (id) => {
    props.dispatchDeleteContactDetail(id);
  };

  const searchHandler = (filterValue) => {
    setSearchTerm(filterValue);
    if (filterValue !== "") {
      const newContactList = tempContacts.filter(contact =>
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
          {tempContacts && <Route path="/" element={<ContactList
            contacts={searchTerm.length < 1 ? tempContacts : searchResults} getContactId={deleteContactHandler}
            term={searchTerm} searchKeyword={searchHandler} />
          }
          />}
          <Route path="/contact/:id" element={<ContactDetail />} />
          <Route path="/test" element={<TestProgram/>}/>
        </Routes>

      </BrowserRouter>
      {/* <ContactList contacts={contacts} deleteContactHandler={removeContactHandler} /> */}
    </div>
  )
};

const mapStateToProps = (state) => ({
  contactDataFromStore: state.contactDetails
})
const mapDispatchToProps = (dispatch) => ({
  dispatchGetContactDetail: () => dispatch(getContactDetail()),
  dispatchSendContactDetail: (contact) => dispatch(sendContactDetails(contact)),
  dispatchPutContactDetail: (contact) => dispatch(putContactDetails(contact)),
  dispatchDeleteContactDetail: (id) => dispatch(deleteContactDetails(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

