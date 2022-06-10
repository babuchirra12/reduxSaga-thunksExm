import React from 'react'
//import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { 
  getUsersFetch 
} from './action';
// import {getUserRequest }from "./thunks" 

function App() {
  const dispatch = useDispatch();
  // useEffect(()=> {
  //   disPatch(getUserRequest())
  // }, [])
const users = useSelector(state => state.myFirstReducer.users);
  return (
    <div>
      <button onClick={() => dispatch(getUsersFetch())}>Get Users</button>
      <div>Users:{users.map((user => (<div key={user.name}>{user.name}</div>)))}</div>
    </div>
  );
}

export default App;