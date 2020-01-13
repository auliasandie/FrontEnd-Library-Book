import {combineReducers} from 'redux';

import {book} from './book';

const appReducer = combineReducers({
    book: book.getBook});

export default appReducer;