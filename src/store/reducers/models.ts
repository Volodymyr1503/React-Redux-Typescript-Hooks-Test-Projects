import { ActionTypes } from "../../enums";


//Models for userReducer
export interface UserState {
    users: any[],
    loading: boolean,
    error: null | string
}
export interface FetchUsersAction {
    type: ActionTypes.FETCH_USERS
}
export interface FetchUsersSuccessAction {
    type: ActionTypes.FETCH_USERS_SUCCESS,
    payload: any[]
}
export interface FetchUsersErrorAction {
    type: ActionTypes.FETCH_USERS_ERROR,
    payload: string
}
export type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction;






//Models for todoReducer
export interface TodoState {
    todos: any[],
    loading: boolean,
    error: null | string,
    page: number,
    limit: number
}
interface FetchTodoAction {
    type: ActionTypes.FETCH_TODOS
}
interface FetchTodoSuccessAction {
    type: ActionTypes.FETCH_TODOS_SUCCESS,
    payload: any[]
}
interface FetchTodoErrorAction {
    type: ActionTypes.FETCH_TODOS_ERROR,
    payload: string
}
interface SetTodoPage {
    type: ActionTypes.SET_TODO_PAGE,
    payload: number
}
export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | SetTodoPage