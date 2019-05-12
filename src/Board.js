import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';

class Board extends Component {
  static defaultProps={
    nRows:6,
    nCols:6,
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
    console.log("Flipping",coord);
    let {nCols, nRows} = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);
  

    function flipCell(y, x) {
      // if this coord is actually on board, flip it
      if (x >= 0 && x < nCols && y >= 0 && y < nRows) {
        board[y][x] = !board[y][x];
      }
    }
    //Flip actual and other sides
    flipCell(y,x)
    flipCell(y,x+1)
    flipCell(y,x-1)
    flipCell(y+1,x)
    flipCell(y-1,x)
   
    

    // win when every cell is turned off
    // TODO: determine is the game has been won
    let hasWon=false;
    this.setState({board, hasWon});
  }


  /** Render game board or winning message. */

  render() {
    let tblBoard=[];
    for(let y=0;y<this.props.nRows;y++){
      let row=[];
      for (let x=0;x<this.props.nCols;x++){
        let coord=`${y}-${x}`
        row.push(<Cell flipCellsAroundMe={()=>this.flipCellsAround(coord)} key={coord} isLit={this.state.board[y][x]}/>)
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
