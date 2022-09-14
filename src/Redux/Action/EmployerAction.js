import {
  GET_CONTACT_DETAIL_REQUEST
} from "./contact_list";


export const ContactDetail = (contactdata) => ({
  type: GET_CONTACT_DETAIL_REQUEST,
  payload: {contactdata}
});