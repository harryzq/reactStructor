import { injectReducer } from '../../redux/reducerUtils';
import { store } from '../../router/router';
import Example from './Example';
import reducer, { key } from './reducer';

injectReducer(store, { key, reducer });

export default Example;