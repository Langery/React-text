 /* jshint esversion: 6 */
import React from 'react';
import { render } from 'react-dom';

// 引入HomeIndex.jsx
import BoxIndex from './components/Home/Box';
import Btn from './layouts/Botton';
import CheckBoxIndex from './layouts/CheckBox';

const MainIndex = () => {
  return (
    <div>
      <BoxIndex/>
      <Btn/>
      <CheckBoxIndex/>
    </div>
  );
};

const root = document.querySelector('#root');
render(<MainIndex/>, root);
