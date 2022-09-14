import {
  GET_CONTACT_DETAIL_REQUEST
} from "./contact_list";

export const contactDetail = (contacts) => ({
  type: GET_CONTACT_DETAIL_REQUEST,
  payload: {contacts}
});