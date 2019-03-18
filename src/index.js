import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Game from './game/game';

// const Index = () => {
//   return <div>Hello React KaiApps!</div>;
// };

// ReactDOM.render(<Index />, document.getElementById('index'));


// import App from './view/app';

// ReactDOM.render(<App />, document.getElementById('app'));


// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('app')
);
