import { takeEvery, call, fork, put } from 'redux-saga/effects';
import * as actions from '../actions/users';
import axios from 'axios';

export const getUsers = () => {
    return axios.get('/users', {
        params: {
            limit: 1000
        }
    })
}

function* getUsers() {
    try{
        const result = yield call(getUsers);
        yield put(actions.getUserSuccess({
            items: result.data.data
        }));
    } catch(e) {

    }
}

function* watchGetUsersRequest() {
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

const usersSagas = [
    fork(watchGetUsersRequest)
];

export default usersSagas;