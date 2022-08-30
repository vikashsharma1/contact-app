import React, { memo, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import ContactList from "./ContactList";


const EditContact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const location = useLocation();
  
  const {
    name: name1,
    email: email1,
    id
  } = location.state;
 

  useEffect(() => {
  setName(name1);
  setEmail(email1);
  },[]);

  const update = (e) => {
    e.preventDefault();
    if (!name || !email || name === "" || email === "") {
      alert("All the field are mandatory");
      return;
    }
    props.updateContactHandler({ name: name, email: email, id: id });
    setName(name);
    setEmail(email);
  };

  return (
    <div className="ui main">
      <h2 style={{ marginTop: "40px" }}> Edit Contact </h2>
      <form className="ui form" onSubmit={e => update(e)}>
        <div className="field">
          <label> Name </label>
          <input type="text" name="name1" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="field">
          <label> email </label>
          <input type="text" name="email1" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />

          <button className="ui button blue" style={{ marginTop: "10px" }}> Update </button>
        </div>

      </form>

    </div>

  );
}



export default memo(EditContact);