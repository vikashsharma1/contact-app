import {GET_CONTACT_DETAIL_REQUEST} from "../Action/contact_list";


const contactReducer = (state = { }, action) => {
    // console.log("in the contactReducer", action.payload)
    switch (action.type) {
        case GET_CONTACT_DETAIL_REQUEST:
            return { contactDetail: action.payload }
        default:
            return state;
    }
}

export default contactReducer;