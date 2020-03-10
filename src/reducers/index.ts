import {combineReducers} from 'redux';
import {products} from './products';

export const reducer = combineReducers({products});

export type AppState = ReturnType<typeof reducer>;