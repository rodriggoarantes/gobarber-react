import { takeLatest, call, put, all } from 'redux-saga/effects';
import history from '~/services/history';
import api from '~/services/api';
import { TYPES, signInSuccess } from './actions';

export function* signIn({ payload }) {
  const { email, password } = payload;

  /*
  const response = yield call(api.post, 'sessions', {
    email,
    password,
  });

  const { token, user } = response.data;

  if (!user.provider) {
    console.tron.error('Usuário não é prestador de serviço');
    return;
  }
  */

  yield put(signInSuccess(123, { login: 'rodrigo' }));

  history.push('/dashboard');
}

export default all([takeLatest(TYPES.SIGNIN, signIn)]);
