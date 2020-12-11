import React, { useMemo } from 'react';
import useFood from '../hooks/useFood';
import FoodItem from './FoodItem';

const FoodList: React.FC = () => {
  const { foods } = useFood();
  const renderFoods = useMemo(() => foods.map(food => <FoodItem food={food} key={food.id} />), [foods]);
  return (
    <ul>
      {renderFoods}
    </ul>
  );
};

export default FoodList;
