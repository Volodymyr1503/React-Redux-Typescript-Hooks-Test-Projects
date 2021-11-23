import axios from "axios"
import { Dispatch } from "redux"
import { ActionTypes } from "../../enums"
import { UserAction } from "../reducers/models"


//https://jsonplaceholder.typicode.com/users
export  const fetchedUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: ActionTypes.FETCH_USERS})
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setTimeout(() => {
                dispatch({type: ActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
            }, 1300)
        } catch (error) {
            dispatch({type: ActionTypes.FETCH_USERS_ERROR, payload: 'Error with fetch'})
        }
    }
}