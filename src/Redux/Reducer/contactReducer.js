import {SEND_CONTACT_DETAILS, SAVE_CONTACT_DETAILS, UPDATE_CONTACT_DETAILS, REMOVE_CONTACT_DETAILS} from "../Action/actionConstant";


const contactReducer = (state = { }, action) => {
    // console.log("in the contactReducer", action.payload)
    switch (action.type) {
        case SAVE_CONTACT_DETAILS:
            return action.payload;
            case SEND_CONTACT_DETAILS:
                return action.payload;
                case UPDATE_CONTACT_DETAILS:
                    return action.payload;
                    case REMOVE_CONTACT_DETAILS:
                        return action.payload;
        default:
            return state;
        }
    }

export default contactReducer;