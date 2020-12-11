import React from 'react';
import useFood from '../hooks/useFood';

const FoodResetButton: React.FC = () => {
  const { handleResetFood } = useFood();
  return (
    <div>
      <button onClick={() => { handleResetFood(); }}>
        모든 음식 삭제
      </button>
    </div>
  );
};

export default FoodResetButton;
