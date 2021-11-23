import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import UserActionCreators from '../store/action-creators'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(UserActionCreators, dispatch)
}