import { call, put, takeLatest } from "redux-saga/effects";
import { saveContactDetails } from "../Redux/Action/contactAction";
import { SEND_CONTACT_DETAILS } from "../Redux/Action/actionConstant";
import { UPDATE_CONTACT_DETAILS } from "../Redux/Action/actionConstant";
import { REMOVE_CONTACT_DETAILS } from "../Redux/Action/actionConstant";
import { retreiveContacts } from "../api/contactApi";
import { addContact } from "../api/contactApi";
import { updateContact } from "../api/contactApi";
import { deleteContact } from "../api/contactApi";
import { GET_CONTACT_DETAIL_REQUEST } from "../Redux/Action/actionConstant";
import contacts from "../api/contacts";

function* getContactDetailSaga(action) {
  try {
    const { data: contacts } = yield call(retreiveContacts);
    // console.log("in the contactSaga----", contacts);
    yield put(saveContactDetails(contacts));

  } catch (error) {
    console.log('inside getContactDetailSaga ', error);
  }
}

function* postContactDetailSaga(action) {
  try {
    //  console.log("------",action.payload?.contact);
    const { data: contacts } = yield call(addContact, action.payload?.contact);
    console.log("------", contacts);
    yield put(saveContactDetails(contacts));
    
  } catch (error) {
    console.log('inside postContactDetailSaga', error);
  }
}

function* putContactDetailSaga(action) {
  try {
    console.log("------", action.payload?.contact)
    const { data: contacts } = yield call(updateContact, action.payload?.contact);
    yield put(saveContactDetails(contacts));
  } catch (error) {
    console.log('inside putContactDetailSaga', error)
  }
}

function* deleteContactDetailSaga(action) {
  try {
    console.log("------", action.payload?.id);
    const { data: contacts } = yield call(deleteContact, action.payload?.id);
    yield put(saveContactDetails(contacts));
  } catch (error) {
    console.log('inside deleteContactDetailSaga', error)
  }
}

export function* watchgetContactDetailSaga() {
  yield takeLatest(GET_CONTACT_DETAIL_REQUEST, getContactDetailSaga);
}
export function* watchsendContactDetailSaga() {
  yield takeLatest(SEND_CONTACT_DETAILS, postContactDetailSaga);
}
export function* watchupdateContactDetailSaga() {
  yield takeLatest(UPDATE_CONTACT_DETAILS, putContactDetailSaga);
}
export function* watchdeleteContactDetailSaga() {
  yield takeLatest(REMOVE_CONTACT_DETAILS, deleteContactDetailSaga);
}



