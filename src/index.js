import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { GlobalStyles } from './global-styles';
import { ApolloProvider } from '@apollo/client';
import client from './routes/apollo';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <GlobalStyles />
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
