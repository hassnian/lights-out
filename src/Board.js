import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';

class Board extends Component {
  static defaultProps={
    nRows:5,
    nCols:5,
    chanceLightStartsOn:0.25
  };
  constructor(props) {
    super(props);
    this.state={
      hasWon:false,
      board:this.createBoard()
    }
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    for(let y=0;y<this.props.nRows;y++){
      let row=[];
      for (let x=0;x<this.props.nCols;x++){
        row.push(Math.random()<this.props.chanceLightStartsOn)
      }
      board.push(row)
    }
    return board
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let {ncols, nrows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);


    function flipCell(y, x) {
      // if this coord is actually on board, flip it

      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    // TODO: flip this cell and the cells around it

    // win when every cell is turned off
    // TODO: determine is the game has been won

    //this.setState({board, hasWon});
  }


  /** Render game board or winning message. */

  render() {
    let tblBoard=[];
    for(let y=0;y<this.props.nRows;y++){
      let row=[];
      for (let x=0;x<this.props.nCols;x++){
        let coord=`${y}-${x}`
        row.push(<Cell key={coord} isLit={this.state.board[y][x]}/>)
      }
      tblBoard.push(<tr key={y}>{row}</tr>)
    }
    return(
      <table className="Board">
        <tbody>{tblBoard}</tbody>
      </table>
    )
  }
}


export default Board;
