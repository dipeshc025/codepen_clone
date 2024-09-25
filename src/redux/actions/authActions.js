import axios from 'axios';

export const signin = (userData) => async (dispatch) => {
    try {
        const response = await axios.post('/api/auth/signin', userData);
        dispatch({ type: 'REGISTER_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'REGISTER_FAIL', payload: error.response?.data.message || 'Sign-in failed' });
    }
};

export const login = (userData) => async (dispatch) => {
    try {
        const response = await axios.post('/api/auth/login', userData);
        dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
        dispatch({ type: 'LOGIN_FAIL', payload: error.response?.data.message || 'Login failed' });
    }
};
