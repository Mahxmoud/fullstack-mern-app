import React from "react"; 
import ReactDom from "react-dom";
import { Provider } from "react-redux";
// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from 'redux-thunk'
import App from "./App.js"; 
// import reducers from './redux/reducers'
import store from './redux/Store.js'

// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// applyMiddleware(thunk))
ReactDom.render(
    <Provider store={store}>
       <App /> 
    </Provider>, document.getElementById('root'))