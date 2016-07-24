import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from './MyComponent';
import {StyleRoot} from 'radium';

ReactDOM.render(
    <StyleRoot>
      <MyComponent /> 
    </StyleRoot>,
    document.getElementById('root')  
  );
