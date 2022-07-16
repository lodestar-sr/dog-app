import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers';
import store from './store';
import * as serviceWorker from './serviceWorker';

import './styles/global.scss';
import 'tailwindcss/tailwind.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

if (module.hot) {
  module.hot.accept('./containers', render);
}

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app
serviceWorker.unregister();
