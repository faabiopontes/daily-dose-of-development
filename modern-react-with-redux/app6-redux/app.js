import { createStore, combineReducers } from 'redux';
import reducers from './reducers';
import actions from './actions';

const ourDepartments = combineReducers(reducers);

const store = createStore(ourDepartments);

store.dispatch(actions.createPolicy('Alex', 20));
store.dispatch(actions.createPolicy('Jim', 30));
store.dispatch(actions.createPolicy('Bob', 40));

store.dispatch(actions.createClaim('Alex', 120));
store.dispatch(actions.createClaim('Jim', 50));

store.dispatch(actions.deletePolicy('Bob'));

console.log(store.getState());