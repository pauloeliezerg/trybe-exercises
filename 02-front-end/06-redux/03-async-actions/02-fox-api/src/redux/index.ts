import { legacy_createStore as createStore } from 'redux';

import gallery from './reducers/gallery';

const store = createStore(gallery);

export default store;
