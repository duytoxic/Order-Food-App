import {combineReducers} from 'redux';
import categories from './listCategories';
import listUser from './listUser';

const rootReducer = combineReducers({
  categories: categories,
  user: listUser,
});

export default rootReducer;
