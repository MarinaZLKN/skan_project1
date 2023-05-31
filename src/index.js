import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";


const initialState = {
    isAuthenticated: false,
    token: null,
    loading: false,
};

function authReducer(state = initialState, action) {

    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload.token,
            };
        case "LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                token: null,
              };
        case "SET_LOADING":
            return {
                ...state,
                loading: action.payload,
            }
        default:
            return state;
    }
}

const store = createStore(authReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
          <App />
          </BrowserRouter>

      </Provider>

  </React.StrictMode>
);

