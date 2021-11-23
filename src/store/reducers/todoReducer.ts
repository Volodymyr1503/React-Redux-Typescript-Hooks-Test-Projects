import { ActionTypes } from "../../enums"
import { TodoAction, TodoState } from "./models"

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
    page: 1,
    limit: 20
}

export const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
    switch(action.type) {
        case ActionTypes.FETCH_TODOS: 
            return {...state, loading: true}
        case ActionTypes.FETCH_TODOS_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case ActionTypes.FETCH_TODOS_ERROR:
            return {...state, loading: false, error: action.payload}
        case ActionTypes.SET_TODO_PAGE: 
            return {...state, loading: false, page: action.payload}
        default:
            return state
    }
}