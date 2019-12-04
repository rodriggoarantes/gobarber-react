/* eslint-disable camelcase */
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { TYPES, updateProfileSuccess, updateProfileFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { id, name, email, avatar_id, ...rest } = payload.data;

    const restWithPass = rest.oldpass ? rest : {};
    const profile = { name, email, avatar_id, ...restWithPass };

    const response = yield call(api.put, `users/${id}`, profile);

    toast.success('Perfil atualicado com sucesso!');

    yield put(updateProfileSuccess(response.data));
  } catch (error) {
    toast.error('Erro ao atualizar perfil, confir aos dados informados!');
    yield put(updateProfileFailure());
  }
}

export default all([takeLatest(TYPES.UPDATE_REQUEST, updateProfile)]);
