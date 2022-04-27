import { useReducer } from 'react';
import { GlobalContext } from './GlobalContext';
import { UserReducer } from './reducer/User';
import USER_INITIAL_STATE from './initial-state/User';
import { ShoppingCartReducer } from './reducer/ShoppingCart';
import SHOPPING_CART_INITIAL_STATE from './initial-state/ShoppingCart';
import { ArtistOfWeekReducer } from './reducer/ArtistOfWeek';
import ARTIRS_OF_WEEK_INITIAL_STATE from './initial-state/ArtistOfWeek';



export const GlobalProvider = ({ children }) => {

    const [userState, userDispatch] = useReducer(UserReducer, USER_INITIAL_STATE);
    const [shoppingCartState, shoppingCartDispatch] = useReducer(ShoppingCartReducer, SHOPPING_CART_INITIAL_STATE);
    const [artistOfWeek, ArtistOfWeekDispatch] = useReducer(ArtistOfWeekReducer, ARTIRS_OF_WEEK_INITIAL_STATE);

    return (
        <GlobalContext.Provider value={{
            userState,
            userDispatch,
            shoppingCartState,
            shoppingCartDispatch,
            artistOfWeek,
            ArtistOfWeekDispatch
        }}>
            { children }
        </GlobalContext.Provider>
    );
}