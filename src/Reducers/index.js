import counter from './Counter';
import text from './Text';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counter,
    text
});

export default rootReducer;