import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import { memoReducer } from './memo/Store';

// Redux Persistの設定
const persistConfig = {
  key: 'memo',
  storage: storage,
  blacklist: ['message', 'mode', 'fdata'],
  whitelist: ['data']
};

// persistReducerの作成
const persistedReducer = persistReducer(persistConfig, memoReducer);

// ストア、パーシスターの作成
let store = createStore(persistedReducer);
let pstore = persistStore(store);

// 表示をレンダリング
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<p>loading...</p>} persistor={pstore}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default pstore;