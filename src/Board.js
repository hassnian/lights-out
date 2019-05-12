import React, {Component} from "react";
import Cell from "./Cell";
import './Board.css';

class Board extends Component {

  constructor(props) {
    super(props);
    this.state={
      
    }

    // TODO: set initial state
  }

  /** create a board nrows high/ncols wide, each cell randomly lit or unlit */

  createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
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
    // if the game is won, just show a winning msg & render nothing else
    
    // TODO
    
    // make table board
    
    // TODO
    return(
      <table className="Board">
        <tbody>
          <tr>
            <Cell isLit={true}/>
            <Cell isLit={true}/>
            <Cell isLit={true}/>
          </tr>
        </tbody>
      </table>
    )
  }
}


export default Board;
