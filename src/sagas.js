import{call,put, takeEvery, throttle} from 'redux-saga/effects';
import { GET_USERS_FETCH, getUsersSuccess } from './action';

function* workGetUsersFetch(){
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
    const users = yield response.json();
    yield put(getUsersSuccess(users));
}
function* mySaga(){
    // yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
    yield throttle('2000', GET_USERS_FETCH, workGetUsersFetch)
}
export default mySaga;