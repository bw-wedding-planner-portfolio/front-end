import React, { useState, useContext, useEffect } from 'react';
import { axiosWithAuth } from './Authentication/axiosWithAuth';
import UserContext from '../Contexts/UserContext';
import { ProtectedLink } from '../App';

export default function Login(props) {
  const {userInfo, setUserInfo} = useContext(UserContext);
  const userStorage = useState(localStorage.getItem("username"));
  const [id, setid] = useState(props.currentUser);

  //   console.log(userStorage[0])

  useEffect(() => {
    Object.values(props.currentUser).map(list => {
      return setid(list.id);
    });
  }, [props.currentUser]);

  //   const [getUserInfo, setGetUserInfo] = useState(currentUser)


  console.log('login', props.currentUser);

  const [user, getUser] = useState({
    username: '',
    password: ''
  });

  // console.log("userid", props.currentUser[0]);

  const handleSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
      .post('/auth/login', user)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        props.history.push(`/protected/${id}`);
        console.log("login form submitted",props);
      })
      .catch(err => {
        localStorage.removeItem('token');
        console.log('Invalid Login', err);
      });
      
  };
  console.log("props",props);

  const handleChanges = e => {
    getUser({ ...user, [e.target.name]: e.target.value });
    localStorage.setItem("username", user.username);
  };

  return (
    <div className='form-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='username'
          name='username'
          onChange={handleChanges}
          value={user.username}
          className='field-container'
        />
        <input
          type='text'
          placeholder='password'
          name='password'
          onChange={handleChanges}
          value={user.password}
          className='field-container'
        />

        <input type='submit' />
      </form>
    </div>
  );
}
