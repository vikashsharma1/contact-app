import {
  SEND_CONTACT_DETAILS,UPDATE_CONTACT_DETAILS,
  GET_CONTACT_DETAIL_REQUEST, SAVE_CONTACT_DETAILS, REMOVE_CONTACT_DETAILS
} from "./actionConstant";

export const getContactDetail = () => ({
  type: GET_CONTACT_DETAIL_REQUEST
});

export const saveContactDetails = (contacts) => ({
  type: SAVE_CONTACT_DETAILS,
  payload: {contacts}
});

export const sendContactDetails=(contact)=>({
  type:SEND_CONTACT_DETAILS,
  payload:{contact}
});
export const putContactDetails=(contact)=>({
  type:UPDATE_CONTACT_DETAILS,
  payload:{contact}
});
export const deleteContactDetails=(id)=>({
  type:REMOVE_CONTACT_DETAILS,
  payload:{id}
})
