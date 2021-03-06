import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";
import Solve from "./Solve";

class Board extends Component {
  static defaultProps = {
    nRows: 5,
    nCols: 5,
    chanceLightStartsOn: 0.25
  };
  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard(),
      flips: 0
    };
    this.solve = this.solve.bind(this);
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    let numOfTrues = 0;
    for (let y = 0; y < this.props.nRows; y++) {
      let row = [];
      for (let x = 0; x < this.props.nCols; x++) {
        let state = Math.random() < this.props.chanceLightStartsOn;
        if (state) {
          numOfTrues++;
        }
        row.push(state);
      }
      board.push(row);
    }
    console.log(numOfTrues);
    if (numOfTrues % 2 === 1) {
      return this.isSolvable(board, numOfTrues);
    }

    return board;
  }
  isSolvable(board, numOfTrues) {
    console.log(board);
    let bool = false;
    if (numOfTrues !== 1) {
      bool = true;
    }
    for (let y = 0; y < this.props.nRows; y++) {
      for (let x = 0; x < this.props.nCols; x++) {
        if (board[y][x] === bool) {
          board[y][x] = !bool;
          return board;
        }
      }
    }
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    console.log("Flipping", coord);
    let { nCols, nRows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < nCols && y >= 0 && y < nRows) {
        board[y][x] = !board[y][x];
      }
    }
    //Flip actual and other sides
    flipCell(y, x);
    flipCell(y, x + 1);
    flipCell(y, x - 1);
    flipCell(y + 1, x);
    flipCell(y - 1, x);

    // win when every cell is turned off
    let hasWon = board.every(row => row.every(cell => !cell));
    console.log(hasWon, " is hasWOn");
    this.setState({
      board: board,
      hasWon: hasWon,
      flips: this.state.flips + 1
    });
  }

  /** Render game board or winning message. */

  makeTable() {
    let tblBoard = [];
    for (let y = 0; y < this.props.nRows; y++) {
      let row = [];
      for (let x = 0; x < this.props.nCols; x++) {
        let coord = `${y}-${x}`;
        row.push(
          <Cell
            key={coord}
            isLit={this.state.board[y][x]}
            flipCellsAroundMe={() => this.flipCellsAround(coord)}
          />
        );
      }
      tblBoard.push(<tr key={y}> {row} </tr>);
    }

    return (
      <table className="Board">
        <tbody> {tblBoard} </tbody>
      </table>
    );
  }

  async solve(board) {
    console.log("solving");
    let { nCols, nRows } = this.props;
    // let board = this.state.board;
    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < nCols && y >= 0 && y < nRows) {
        board[y][x] = !board[y][x];
      }
    }
    function flipCellsAroundBoard(coord) {
      let [y, x] = coord.split("-").map(Number);
      flipCell(y, x);
      flipCell(y, x + 1);
      flipCell(y, x - 1);
      flipCell(y + 1, x);
      flipCell(y - 1, x);
    }
    function cleanTop() {
      //TODO::nrows, ncol
      for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
          if (board[y][x] && y != 4) {
            coord = `${y + 1}-${x}`;
            flipCellsAroundBoard(coord);
          }
        }
      }
      return true;
    }
    function bottom() {
      if (board[4][0]) {
        console.log("Pressing d1 e1");
        flipCellsAroundBoard(`${0}-${3}`);
        flipCellsAroundBoard(`${0}-${4}`);
        console.log(board);
      }
      if (board[4][1]) {
        console.log("Pressing B1 and E1. ");
        flipCellsAroundBoard(`${0}-${1}`);
        flipCellsAroundBoard(`${0}-${4}`);
        console.log(board);
      }
      if (board[4][2]) {
        console.log("Pressing B1 and E1. ");
        flipCellsAroundBoard(`${0}-${3}`);
      }
      cleanTop();
    }
    function allFalse() {
      for (let y = 0; y < nRows; y++) {
        for (let x = 0; x < nCols; x++) {
          if (board[y][x]) {
            return false;
          }
        }
      }
      return true;
    }
    let coord;
    if (cleanTop()) {
      bottom();
    } 
    if (allFalse()) {
      this.setState({ hasWon: true });
    }
    console.log(allFalse());
    
    this.setState({ board });
      if(!allFalse()){
        return false
      }
      return true
  }

  render() {
    let board;
do{
      board=this.createBoard();
      this.setState({board:board})
    }
    while(!this.solve(board))
    return (
      <div>
        {this.state.hasWon ? (
          <div className="winner">
            <span className="neon-orange"> YOU </span>
            <span className="neon-blue"> WIN! </span>
            <div>
              <p className="neon-blue">
                Flips:
                <span className="neon-orange"> {this.state.flips} </span>
              </p>
            </div>
          </div>
        ) : (
          <div>
            <div className="Board-title">
              <div className="neon-orange"> Lights </div>
              <div className="neon-blue"> Out </div>
            </div>
            {this.makeTable()}
            <div>
              <p className="neon-blue">
                Flips counter:
                <span className="neon-orange"> {this.state.flips} </span>
              </p>
            </div>
          </div>
        )}
        <Solve solve={this.solve} />
      </div>
    );
  }
}

export default Board;
