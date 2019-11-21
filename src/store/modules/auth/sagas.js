import { toast } from 'react-toastify';
import { takeLatest, call, put, all } from 'redux-saga/effects';
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

    yield put(signInSuccess(token, user));

    history.push('/dashboard');
  } catch (error) {
    toast.error(
      'Falha na autenticação do usuário, verifique os dados informados'
    );
    yield put(signFailure());
  }
}

export default all([takeLatest(TYPES.SIGNIN, signIn)]);
