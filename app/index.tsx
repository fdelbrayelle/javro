import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.css';

const store = configureStore();

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () =>
  render(
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  )
);

// const { ipcRenderer } = require('electron');
//
// ipcRenderer.on('path', function(event, store) {
//   console.log('store', event, store);
// });

const { remote } = require('electron');

const argument = remote.getGlobal('sharedObject');

console.log('aaaaaaa', argument);
