export const TYPES = {
  SIGNIN: '@auth/SIGN_IN_REQUEST',
  SIGNIN_SUCCESS: '@auth/SIGN_IN_SUCCESS',
  SIGN_FAILURE: '@auth/SIGN_FAILURE',
};

export function signInRequest(email, password) {
  return {
    type: TYPES.SIGNIN,
    payload: { email, password },
  };
}

export function signInSuccess(token, user) {
  return {
    type: TYPES.SIGNIN_SUCCESS,
    payload: { token, user },
  };
}

export function signFailure() {
  return {
    type: TYPES.SIGN_FAILURE,
  };
}
