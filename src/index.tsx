import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {store} from './store/store'
import { PersistGate } from 'redux-persist/es/integration/react'
import {persistor} from './store/store'
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
            <PersistGate
                persistor={persistor}
                loading={null}
            >
            <BrowserRouter>
                <App />
            </BrowserRouter>
            </PersistGate>
        
    </Provider>
);


