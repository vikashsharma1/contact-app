import React, { memo, useEffect, useState } from "react";
// import ContactList from "./ContactList";


const AddContact = (props) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const random = () => {
    return Math.random();
  }

  useEffect(()=>{
    console.log('-----AddContact----')
    alert('Contact added successfully');
  })

  const add = (e) => {
    e.preventDefault();
    if (!name || !email || name === "" || email === "") {
      alert("all the field are mandatory");
      return;
    }
    props.addContactHandler({ name: name, email: email, id: random() });
    setName("");
    setEmail("");
  }

  return (
    <div className="ui main">
      <h2 style={{ marginTop: "20px" }}> Add Contact </h2>
      <form className="ui form" onSubmit={e => add(e)}>
        <div className="field">
          <label> Name </label>
          <input type="text" name="name" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="field">
          <label> email </label>
          <input type="text" name="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
          <button className="ui button blue" style= {{ marginTop: "10px" }}> Add </button>
        </div>
      </form>
    </div>

  );
}
export default memo(AddContact);