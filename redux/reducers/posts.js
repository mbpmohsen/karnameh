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

const addComments = (state = [], {type, data} ) => {
    switch (type) {
        case types.ADD_COMMENTS:
            return data
        case types.ADD_COMMENT:
            return [...state, data];
        case types.UPDATE_COMMENT:
            const posts = state.filter(comment => comment.id !== data.id);
            return [...posts, data];
        default:
            return state
    }
}

const reducers = {
    posts: addPosts,
    comments: addComments
}

export default combineReducers(reducers)
