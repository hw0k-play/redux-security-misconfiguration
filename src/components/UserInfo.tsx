import React, { useCallback } from 'react';
import useUser from '../hooks/useUser';

interface Props {
  user: User
}

const UserInfo: React.FC<Props> = ({ user }) => {
  const { handleResetUser } = useUser();

  const handleLogout = useCallback(() => {
    alert('로그아웃했어요.');
    handleResetUser();
  }, [handleResetUser]);
  return (
    <div>
      <p>이름: {user.name}</p>
      <p>나이: {user.age}</p>
      {user.isAdmin ? <p>관리자</p> : <p>일반 유저</p>}
      <button onClick={handleLogout}>로그아웃</button>
    </div>
  );
};

export default UserInfo;
