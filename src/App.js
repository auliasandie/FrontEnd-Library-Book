import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Details from './Components/Pages/Details';
import {Provider} from 'react-redux';
import store from './Components/Public/store';
//penambahan baru
import Login from './Components/Modal/Login';
import Register from './Components/Modal/Register';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/details/:id_book' component={Details} />
        <Route path='/register' component={Register} />
        <Route exact path="/login" component={Login} /> 
      </Router>
      </Provider> 
//proteksi 
      
    );
  }
}

export default App;

