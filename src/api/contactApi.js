// import contacts from "./contacts";
import api from "./contacts";

export const retreiveContacts = async () => {
  try {
    const response = await api.get("/contacts");
    // console.log(response)
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export const addContact = async (contact) => {
  try {
    // console.log("------",contact);
    const res = await api.post("/contacts", contact);
    return (res);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export const updateContact=async(contact)=>{
  try{
    // console.log("------",contact);
    const res = await api.put(`/contacts/${contact.id}`, contact);
      return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
export const deleteContact=async(id)=>{
  try{
    console.log("------",` /contacts/${id}`)
   const res= await api.delete(`/contacts/${id}`)
    //  const res = contacts.filter((contact) => {
     return res;
  }catch (error){
  console.log(error);
  throw error;
}
}







