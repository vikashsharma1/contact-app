import { useState } from "react";

export default function ToDoList() {
  const [item, setItem] = useState('');
  const [itemList, setItemList] = useState([]);
  const [itemToRemove, setItemToRemove] = useState("");
  const [updateFlag, setUpdateFlag] = useState(false);
  const [indexForUpdate, setIndexForUpdate] = useState(-1);
  const [updatedData, setUpdatedData] = useState('');

  const handleChange = (e) => { 
      setItem(e.target.value);
  };
  const onSave = (e) => {
    if (item) {
      e.preventDefault();
      let myList = itemList;
      myList.push(item);
      setItemList(myList);
      setItem('');
    }
  };

  const removeItem = (e) => {
    setItemToRemove(e.target.value);
  }
  const onRemoveSubmit = (e) => {
    e.preventDefault();
    let newList = itemList;
    const itemIndex = newList.indexOf(itemToRemove);
    if (itemIndex > -1) {
      newList.splice(itemIndex, 1);
    }
    setItemList(newList);
    setItemToRemove('');
  };

  const handleEditClick = (e) => {
    setUpdateFlag(true);
    setIndexForUpdate(e.target.value);
  }
  const handleChangeUpdatedData = (e) =>{
    setUpdatedData(e.target.value);
  }
  const updateSubmit = (e) => {
    e.preventDefault();
    if (updatedData && indexForUpdate>-1) {
        let myList = itemList;
        myList[indexForUpdate] = updatedData;
        setItemList(myList);
        setUpdatedData('');
    }
  }

  return (
    <div style={{ marginTop: "10rem" }} className="App">
      <form onSubmit={(e) => onSave(e)}>
        <label>
          Add
          <input value={item} onChange={(e) => handleChange(e)} />
        </label>
          <button type="submit">Submit</button>
      </form>

      <form onSubmit={(e) => onRemoveSubmit(e)}>
        <label>
          Delete
          <input value={itemToRemove} onChange={(e) => removeItem(e)} />
        </label>
        <button type="submit">Submit</button>
      </form>

      {itemList.map((data,i) => <button value={i} onClick={(e)=>handleEditClick(e)}> {data} </button>)}
      <form onSubmit={(e) => updateSubmit(e)}>
        {updateFlag &&
          <div>
            <label>Update<input value={updatedData} onChange={(e) => handleChangeUpdatedData(e)} /></label>
            <button type='submit' >Update</button>
          </div>
        }
      </form>
    </div>
  );
}
