import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import registerServiceWorker from './registerServiceWorker';
import App from './App';

import './style.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

registerServiceWorker();
