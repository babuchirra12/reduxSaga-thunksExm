import { getUsersFetch, getUsersSuccess } from "./action";

export function getUserRequest(){
    return function(dispatch){
        dispatch(getUsersFetch());
        return fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(users =>dispatch(getUsersSuccess(users)));
    }
}