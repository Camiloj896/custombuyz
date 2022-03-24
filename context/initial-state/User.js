import mock from '../../mocks/user.mock.json';

const USER_INITIAL_STATE = {
    loading: false,
    error: null,
    token: null,
    data: mock
};

export default USER_INITIAL_STATE;