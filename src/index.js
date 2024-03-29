import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.css';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import { store } from 'redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <App />
    </BrowserRouter>
  </Provider>
);
