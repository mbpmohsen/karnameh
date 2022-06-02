import { combineReducers } from 'redux'
import * as types from '../types';

const addPosts = (state = [], {type, data} ) => {
    switch (type) {
        case types.ADD_POSTS:
            return data
        case types.ADD_POST:
            return [...state, data];
        default:
            return state
    }
}

const reducers = {
    posts: addPosts
}

export default combineReducers(reducers)
