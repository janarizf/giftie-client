
import usersService from "../services/users.service";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await usersService.signIn(formData);

    dispatch({ type: AUTH, data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await usersService.signUp(formData);

    dispatch({ type: 'AUTH', data });

    router.push('/');
  } catch (error) {
    console.log(error);
  }
};