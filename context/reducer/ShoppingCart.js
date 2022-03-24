export const ShoppingCartReducer = (state, action) => {
    switch ( action.type ) {
        case 'SHOPPING_CART_LOADING':
            return {
                ...state,
                loading: true
            }
        case 'SHOPPING_CART_LOAD_SUCCESS':
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case 'SHOPPING_CART_LOAD_ERROR':
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}