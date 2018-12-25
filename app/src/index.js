 /* jshint esversion: 6 */
import React from 'react';
import { render } from 'react-dom';

// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';

// 引入 helloWorld.jsx
import HelloWorld from './helloWorld';

const HomeIndex = () => {
  // return 返回数据值
  return (
    <div>
      <HelloWorld/>
    </div>
  );
};

const root = document.querySelector('#root');

render(<HomeIndex/>, root);
