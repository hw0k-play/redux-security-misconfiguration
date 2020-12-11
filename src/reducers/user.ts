import { ActionType, createReducer, action } from 'typesafe-actions';

const SET_USER = 'user/SET_USER';
const RESET_USER = 'user/RESET_USER';

export const setUser = (user: User) => action('user/SET_USER', user);
export const resetUser = () => action('user/RESET_USER');

const actions = { setUser, resetUser } as const;

type UserAction = ActionType<typeof actions>;

interface State {
  currentUser: User | null;
}

const getInitialState: () => State = () => ({
  currentUser: null
});

const initialState = getInitialState();

const reducer = createReducer<State, UserAction>(initialState, {
  [SET_USER]: (state, action) => ({
    currentUser: action.payload
  }),
  [RESET_USER]: (state, action) => getInitialState(),
});

export default reducer;
