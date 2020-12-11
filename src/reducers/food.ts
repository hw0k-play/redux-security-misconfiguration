import { ActionType, createReducer, action } from 'typesafe-actions';
import nanoid from 'nanoid';

const ADD_FOOD = 'food/ADD_FOOD';
const REMOVE_FOOD = 'food/REMOVE_FOOD';
const RESET_FOOD = 'food/RESET_FOOD';

export const addFood = (name: string) => action('food/ADD_FOOD', { id: nanoid(), name });
export const removeFood = (id: string) => action('food/REMOVE_FOOD', id);
export const resetFood = () => action('food/RESET_FOOD');

const actions = { addFood, removeFood, resetFood } as const;

type FoodAction = ActionType<typeof actions>;

interface State {
  data: Food[];
}

const getInitialState: () => State = () => ({
  data: [
    {
      id: 'W7gK2OJqlv20-CZy2FPXa',
      name: '천하돈까스'
    },
    {
      id: '32dF0mIQjemy-a83jFLco',
      name: '돝고기'
    },
    {
      id: 'zy8wtdAmcF12-kaEq5v14',
      name: '바스버거'
    },
  ]
});

const getResettedState: () => State = () => ({
  data: []
});

const initialState = getInitialState();

const reducer = createReducer<State, FoodAction>(initialState, {
  [ADD_FOOD]: (state, action) => ({
    data: state.data.concat(action.payload)
  }),
  [REMOVE_FOOD]: (state, action) => ({
    data: state.data.filter(food => food.id !== action.payload)
  }),
  [RESET_FOOD]: (state, action) => getResettedState(),
});

export default reducer;
