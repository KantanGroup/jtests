import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import intl from './intl';
import device from './device';
import grammars from './grammars';
import kanjis from './kanjis';

export default combineReducers({
  user,
  runtime,
  intl,
  device,
  grammars,
  kanjis,
});
