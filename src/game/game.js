import React, { Component } from 'react';
import './index.scss';
import Board from './board';
import 'l10n';
import calWinner from './logic/calculateWinner'
import { SoftKey } from 'kaid';

export default class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      history: [{
        squares : Array(9).fill(null),
      }],
      mIsNext: true,
      stepNumber: 0,
    }
  }

  handleClick(i){
    // let history = this.state.history;
    let history = this.state.history.slice(0, this.state.stepNumber + 1);
    let current = history[history.length - 1];
    let squares = current.squares.slice();
    if (calWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.mIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat(
        [{
          squares: squares,
        }]
      ),
      stepNumber: history.length,
      mIsNext: !this.state.mIsNext
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      mIsNext: (step % 2) === 0,
    });
  }

  render() {

    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calWinner(current.squares);

    // const moves = history.map((step, move) => {
    //   const desc = move ?
    //     'Go to move #' + move :
    //     'Go to game start';
    //   return (
    //     <li key={move}>
    //       <button onClick={() => this.jumpTo(move)}>{desc}</button>
    //     </li>
    //   );
    // });

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.mIsNext ? "X" : "O");
    }

    return (
      <>
        <div className="game">
          <div className="game-board">
            <Board
              squares = {current.squares}
              onClick = {i => {
                this.handleClick(i);
              }}
            />
          </div>
          <div className="game-info">
            <div>{status}</div>
          </div>
        </div>

        <SoftKey className="softkey" left="clear" right="clear-all" />
      </>
    );
  }
}