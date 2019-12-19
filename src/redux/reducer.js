import postArray from '../data/posts'
import { combineReducers } from 'redux'

function comments(state={}, action) {
    console.log('comments reducer')
    switch(action.type) {
        case 'ADD_COMMENT': 
        if (!state[action.postId]) {
            return {...state, [action.postId]: [action.comment]}
        } else
            return {...state, [action.postId]: [...state[action.postId], action.comment]}

        case 'LOAD_COMMENTS': return action.comments

        default: return state
    }
    return state
}

function posts(state = postArray, action) {
    console.log('post reducer')
    switch(action.type) {
        case 'REMOVE_POST': return [...state.slice(0, action.index), ...state.slice(action.index + 1)]
        case 'ADD_POST': return [action.post, ...state]
        case 'LOAD_POSTS': return action.posts
        default: return state
    }
}

const rootReducer = combineReducers({posts, comments})

export default rootReducer