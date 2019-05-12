import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';

class Board extends Component {
  static defaultProps={
    nRows:6,
    nCols:6,
    chanceLightStartsOn:0
  };
  constructor(props) {
    super(props);
    this.state={
      hasWon:false,
      board:this.createBoard(),
      flips:0
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
    let hasWon = board.every(row => row.every(cell => !cell));
    console.log(hasWon," is hasWOn");
    this.setState({ board: board, hasWon: hasWon ,flips:this.state.flips+1});
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
      tblBoard.push(<tr key={y}>{row}</tr>);
    }
    return (
      <table className='Board'>
        <tbody>{tblBoard}</tbody>
      </table>
    );
  }
  render() {
    return(
      <div>
        {this.state.hasWon ? (
          <div className='winner'>
            <span className='neon-orange'>YOU</span>
            <span className='neon-blue'>WIN!</span>
            <div>
              <p className="neon-blue">Flips:  
              <span className="neon-orange">{this.state.flips}</span>
              </p>
              </div>
          </div>
          
        ) : (
          <div>
            <div className='Board-title'>
              <div className='neon-orange'>Lights</div>
              <div className='neon-blue'>Out</div>
            </div>
            {this.makeTable()}
            <div>
              <p className="neon-blue">Flips counter:
              <span className="neon-orange">{this.state.flips}</span>
              </p>
              </div>
          </div>
        )}
      </div>
    );
  }
}


export default Board;
