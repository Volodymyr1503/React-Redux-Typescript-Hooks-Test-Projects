import axios from "axios"
import { Dispatch } from "redux"
import { ActionTypes } from "../../enums"
import { TodoAction } from "../reducers/models"


//https://jsonplaceholder.typicode.com/users
export  const fetchedTodos = (page = 1, limit = 20) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: ActionTypes.FETCH_TODOS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
                params: {_page: page, _limit: limit}
            });
            setTimeout(() => {
                dispatch({type: ActionTypes.FETCH_TODOS_SUCCESS, payload: response.data})
            }, 1300)
        } catch (error) {
            dispatch({type: ActionTypes.FETCH_TODOS_ERROR, payload: 'Error with fetch todos'})
        }
    }
}

export function setTodoPage(page: number): TodoAction {
    return {type: ActionTypes.SET_TODO_PAGE, payload: page}
}