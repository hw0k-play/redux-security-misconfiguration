import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { addFood, removeFood, resetFood } from '../reducers/food';

const useFood = () => {
  const foods = useSelector((state: RootState) => state.food.data);
  const dispatch = useDispatch();

  const handleAddFood = useCallback((name: string) => {
    dispatch(addFood(name));
  }, [dispatch]);

  const handleRemoveFood = useCallback((id: string) => {
    dispatch(removeFood(id));
  }, [dispatch]);

  const handleResetFood = useCallback(() => {
    dispatch(resetFood());
  }, [dispatch]);

  return { foods, handleAddFood, handleRemoveFood, handleResetFood };
};

export default useFood;
