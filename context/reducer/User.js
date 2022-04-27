export const UserReducer = (state, action) => {
    switch ( action.type ) {
        case 'USER_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'USER_LOAD_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case 'USER_AUTH':
            return {
                ...state,
                token: action.payload,
                loading: false,
                error: false,
            }
        case 'USER_REGISTER':
            return {
                ...state,
                loading: false,
                data: [
                    ...state.data,
                    action.payload
                ]
            }
        case 'USER_LOAD_ERROR':
            return {
                ...state,
                error: action.payload,
                loading: false
            }
        default:
            return state;
    }
}