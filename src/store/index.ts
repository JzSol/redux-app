import { Action, createStore } from 'redux';

interface State {
  counter: number;
}

interface MyAction extends Action {
  payload?: any;
}

const reducerFn = (state: State = { counter: 0 }, action: MyAction): State => {
  switch (action.type) {
    case 'INC':
      return { counter: state.counter + 1 };
    case 'DEC':
      return { counter: state.counter - 1 };
    case 'ADD':
      return { counter: state.counter + action.payload };
    default:
      return state;
  }
};
const store = createStore(reducerFn);
export default store;
