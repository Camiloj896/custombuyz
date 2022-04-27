import USER_INITIAL_STATE from './../../initial-state/User';

const Auth = () => (dispatch, params) => {
    
    dispatch({
      type: 'USER_LOADING',
    });

    const { data } = USER_INITIAL_STATE;

    const userData = data.filter(user => user.email === params.email && user.password === params.password);

    if (userData.length > 0) {
        dispatch({
            type: 'USER_AUTH',
            payload: 'User_token',
        });
    } else {
        dispatch({
            type: 'USER_LOAD_ERROR',
            payload: {
                statusCode: 401,
                snackBarType: 'danger',
                snackBarMessage: 'the User or password is invalid'
            },
        });
    }

    // axiosInstance().get("tickers/")
    // .then(({ data }) => {
    //   dispatch({
    //     type: 'CRIPTO_COINS_LOAD_SUCCESS',
    //     payload: data.data,
    //   });
    // })
    // .catch((err) => {
    //   dispatch({
    //     type: 'CRIPTO_COINS_LOAD_ERROR',
    //     payload: err.response,
    //   });
    // });
};

export default Auth;