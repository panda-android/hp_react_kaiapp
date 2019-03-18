import React, { Component } from 'react';
import './index.scss';

export default class Square extends React.Component {
  // constructor(props){
  // 	super(props);
  // 	this.state = {
  // 		num: null
  // 	};
  // }

  render() {
    return (
      <button className="square"
        onClick={() => {
          dump("hpkai square onClick i = ");
          this.props.onClick()}
        }
      >
        {this.props.num}
      </button>
    );
  }
}


// function Square(props) {
//   return (
//     <button className="square" onClick={props.onClick}>
//       {props.value}
//     </button>
//   );
// }
// export default class Square;