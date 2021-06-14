import api from '../services/api';

// * Đặt tên action kiểu domain/eventName --------------------------------------
export const SIGN_UP = 'user/sign-up';
export const SIGN_IN = 'user/sign-in';

// * Actions -------------------------------------------------------------------

export const SignIn = (Email, Password) => {
  return async dispatch => {
    const {data} = await api.get('/orderfood/api/users');

    const resData = data.reduce((preVal, curVal) => {
      return [
        ...preVal,
        {
          id: curVal.id,
          email: curVal.email,
          password: curVal.password,
        },
      ];
    }, []);
    dispatch({
      type: SIGN_UP,
      payload: {
        resData,
      },
    });
  };
};

export const SignUp = (Email, Password) => {
  return async dispatch => {
    const {data} = await api.post('/orderfood/api/users', {
      email: Email,
      password: Password,
    });

    dispatch({
      type: SIGN_UP,
      payload: {
        email: data.email,
        password: data.password,
      },
    });
  };
};

// * Selectors -----------------------------------------------------------------

export const selectUserId = state => {
  return state.users.id;
};

// * Reducers ------------------------------------------------------------------

const initialState = {};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case SIGN_IN:
      return {
        ...state,
        listUser: payload.data,
      };
    case SIGN_UP:
      return {
        ...state,
        listUser: payload.data,
      };

    default:
      return state;
  }
};
