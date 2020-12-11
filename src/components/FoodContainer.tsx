import React from 'react';

import FoodList from './FoodList';
import FoodInput from './FoodInput';
import FoodResetButton from './FoodResetButton';
import useUser from '../hooks/useUser';

const FoodContainer = () => {
  const { currentUser } = useUser();
  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>음식 {currentUser?.isAdmin ? '관리' : '리스트'}</h2>
      {currentUser?.isAdmin && <FoodInput />}
      <FoodList />
      {currentUser?.isAdmin && <FoodResetButton />}
    </div>
  );
};

export default FoodContainer;
