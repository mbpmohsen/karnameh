import * as types from '../types'

export const addPosts = data => ({type: types.ADD_POSTS, data})
export const addPost = data => ({type: types.ADD_POST, data})

export const addComments = data => ({type: types.ADD_COMMENTS, data})
export const addComment = data => ({type: types.ADD_COMMENT, data})
export const updateComment = data => ({type: types.UPDATE_COMMENT, data})