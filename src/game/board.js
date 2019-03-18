import React, { Component } from 'react';
import './index.scss';
import Square from './square';
import calWinner from './logic/calculateWinner'

export default class Board extends React.Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     squares: Array(9).fill(null),
  //     mIsNext: true,
  //   }
  // }

  // handleClick(i){
  //   const squares = this.state.squares.slice();
  //   if (calWinner(squares) || squares[i]) {
  //     return;
  //   }
  //   squares[i] = this.state.mIsNext ? 'X' : 'O';
  //   this.setState({
  //     squares: squares,
  //     mIsNext: !this.state.mIsNext
  //   });
  // }

  // handleWin(){
  //   let winner = calWinner(this.state.squares);
  //   return winner ?
  //     ('Winner is : '+ winner) :
  //     'Next player: '+(this.state.mIsNext ? 'X' : 'O');
  // }

  renderSquare(i) {
    return (
      <Square
        num = {this.props.squares[i]}
        onClick = {(square) => {
          dump("hpkai Board onClick i = "+i+" square "+square);
          this.props.onClick(i)
          }
        }
      />
    );
  }

  render() {
    // const status = 'Next player: '+(this.state.mIsNext ? 'X' : 'O');
    // let status = this.handleWin();
    return (
      <div>
        // <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}