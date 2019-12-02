import produce from 'immer';
import { TYPES } from '../actions';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case TYPES.SIGNIN_SUCCESS: {
        draft.profile = action.payload.user;
        break;
      }
      default:
    }
  });
}
