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
        case 'USER_LOAD_ERROR':
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}