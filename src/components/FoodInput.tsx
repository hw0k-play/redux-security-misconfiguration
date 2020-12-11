import React, { useState, useCallback } from 'react';
import useFood from '../hooks/useFood';

const FoodInput: React.FC = () => {
  const { handleAddFood } = useFood();

  const [value, setValue] = useState('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, [setValue]);

  const handleClick = useCallback(() => {
    if (value === '') {
      alert('비어있어요!');
      return;
    }

    handleAddFood(value);
    setValue('');
  }, [value, setValue, handleAddFood]);

  return (
    <div>
      <input value={value} onChange={handleChange} />
      <button onClick={handleClick}>음식 추가</button>
    </div>
  );
};

export default FoodInput;
