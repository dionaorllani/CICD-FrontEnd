import { login, register } from '../../api/authApi';

export const loginUser = (credentials) => async (dispatch) => {
  dispatch({ type: 'LOGIN_REQUEST' });
  try {
    const data = await login(credentials);
    dispatch({ type: 'LOGIN_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
  }
};

export const registerUser = (userData) => async (dispatch) => {
  dispatch({ type: 'REGISTER_REQUEST' });
  try {
    const data = await register(userData);
    dispatch({ type: 'REGISTER_SUCCESS', payload: data });
  } catch (error) {
    const errorMessage = error.response && error.response.data && error.response.data.description
      ? 'Email or Username is already registered to an account'
      : 'Registration failed';
    dispatch({ type: 'REGISTER_FAILURE', payload: errorMessage });
  }
};
