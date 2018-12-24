 /* jshint esversion: 6 */
import React from 'react';
import { render } from 'react-dom';

// 引入 helloWorld.jsx
import HelloWorld from './helloWorld';

const root = document.querySelector('#root');

render(<HelloWorld name="Tom"/>, root);
