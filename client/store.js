import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk'
import {createStore, applyMiddleware, compose} from 'redux'

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import combineReducers from './reducers'; // the value from combineReducers

const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, combineReducers);

export const store = createStore(pReducer, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
));

export const persistor = persistStore(store);
