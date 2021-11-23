import { ActionTypes } from "../../enums"
import { UserAction, UserState } from "./models"


const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch(action.type) {
        case ActionTypes.FETCH_USERS:
            return {...state, loading: true}
        case ActionTypes.FETCH_USERS_SUCCESS:
            return {...state, loading: false, users: action.payload}
        case ActionTypes.FETCH_USERS_ERROR:
            return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}