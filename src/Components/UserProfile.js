import React, { useContext } from 'react';
import UserContext from '../Contexts/UserContext';
import { Route } from 'react-router-dom';
import CreatePost from './CreatePost';
import '../App.css';

const UserProfile = props => {
  const userInfo = useContext(UserContext);
  //   const user = useState(localStorage.getItem("username"));

  const paramItemId = props.match.params.id;
  const getUser = userInfo.filter(list => {
    return list.id === Number(paramItemId);
  })[0];

  return (
    <div className='user'>
      <div className='user-header'>
        <div className='user-text-container'>
        
        </div>
      </div>
      <div className='create-post'>
        <h2>My Posts</h2>
        <Route
          to='createpost'
          render={props => {
            return <CreatePost {...props} user={userInfo} />;
          }}
        />
      </div>
    </div>
  );
};

export default UserProfile;
