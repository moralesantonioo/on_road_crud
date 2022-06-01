import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import {app} from "./firebase"
import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App firebaseApp = {app}/>
  </React.StrictMode>
);

