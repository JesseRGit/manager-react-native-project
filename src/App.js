import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from '@firebase/app';
import '@firebase/auth';
import "@firebase/database";
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDRTrMJwHaxhl03m5hKqrh0jFXCzRvDHhc',
      authDomain: 'managerproject-8b42e.firebaseapp.com',
      databaseURL: 'https://managerproject-8b42e.firebaseio.com',
      projectId: 'managerproject-8b42e',
      storageBucket: 'managerproject-8b42e.appspot.com',
      messagingSenderId: '885450270619'
    };
  firebase.initializeApp(config);
}

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
