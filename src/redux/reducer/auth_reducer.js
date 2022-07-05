import * as ActionType  from '../ActionType'

const initVal = ({
    isLoading : false,
    error: '',
    auth : null,
})

export const auth_reducer = (state=initVal ,action) => {
switch (action.type) {
    case ActionType.AUTH_ERROR:
        return {
            ...state,
            error: action.payload,
            isLoading: false,
            auth: null
        }
        case ActionType.AUTH_LOADING:
        return {
            ...state,
            error: '',
            isLoading: true,
            auth: null
        }
        case ActionType.AUTH_SUCCESS:
            return {
                ...state,
                error: '',
                isLoading: false,
                auth: action.payload
            }

    default:
        return state;
}
}