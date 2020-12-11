import React from 'react';
import useFood from '../hooks/useFood';
import useUser from '../hooks/useUser';

interface Props {
  food: Food;
}

const FoodItem: React.FC<Props> = ({ food }) => {
  const { handleRemoveFood } = useFood();
  const { currentUser } = useUser();
  return (
    <li>
      {food.name}&nbsp;&nbsp;
      {currentUser?.isAdmin && <span onClick={() => { handleRemoveFood(food.id); }}>x</span>}
    </li>
  );
};

export default FoodItem;