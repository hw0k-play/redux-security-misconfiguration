import React from 'react';
import useUser from '../hooks/useUser';
import UserInfo from './UserInfo';
import Login from './Login';

const UserContainer: React.FC = () => {
  const { currentUser } = useUser();
  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>유저</h2>
      {currentUser ? <UserInfo user={currentUser} /> : <Login /> }
    </div>
  );
};

export default UserContainer;
