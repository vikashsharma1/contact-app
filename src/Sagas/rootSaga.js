import { fork } from 'redux-saga/effects';
import {watchdeleteContactDetailSaga, watchgetContactDetailSaga, watchsendContactDetailSaga, watchupdateContactDetailSaga} from './getContactDetailSaga';

export default function* rootSaga() {
    // console.log("----in the employSaga---")
    yield fork(watchgetContactDetailSaga);
    yield fork(watchsendContactDetailSaga);
    yield fork(watchupdateContactDetailSaga);
    yield fork(watchdeleteContactDetailSaga);
}
