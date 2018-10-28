import {createStore, combineReducers} from 'redux';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';

//Redux Store
export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filter: filterReducer
    }),
    //Redux Developer Tool
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
}
