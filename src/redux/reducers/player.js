import { LOGIN } from '../actions';

const INITIAL_STATE = ({
  name: 'joao',
  assertions: 0,
  score: 0,
  gravatarEmail: '',
});

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case LOGIN:
    return ({
      ...state,
      ...action.userData,
    });
  default:
    return state;
  }
};

export default player;
