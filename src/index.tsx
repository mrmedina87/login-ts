import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import App from './App';
import Auth from './components/Auth';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Auth />,
  document.getElementById('root') as HTMLElement,
);

registerServiceWorker();
