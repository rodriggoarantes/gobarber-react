import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { TYPES, signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    if (!user.provider) {
      const erroProvider = 'Usuário não é prestador de serviço';
      console.tron.error(erroProvider);
      toast.error(erroProvider);
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (error) {
    toast.error(
      'Falha na autenticação do usuário, verifique os dados informados'
    );
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'providers', {
      name,
      email,
      password,
      provider: true,
    });

    toast.success(`Prestador (${name}) cadastrado com sucesso!`);
    history.push('/');
  } catch (error) {
    toast.error(
      'Falha no cadastro do prestador, verifique os dados informados'
    );
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;
  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest(TYPES.SIGNIN, signIn),
  takeLatest(TYPES.SIGNUP, signUp),
  takeLatest(TYPES.SIGNOUT, signOut),
]);
