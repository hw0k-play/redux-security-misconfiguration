import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../reducers';
import { setUser, resetUser } from '../reducers/user';

const useUser = () => {
  const currentUser = useSelector((state: RootState) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleSetUser = useCallback((user: User) => {
    dispatch(setUser(user));
  }, [dispatch]);

  const handleResetUser = useCallback(() => {
    dispatch(resetUser());
  }, [dispatch]);

  return { currentUser, handleSetUser, handleResetUser };
};

export default useUser;
