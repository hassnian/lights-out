import React, { Component } from "react";

export class Solve extends Component {
    constructor(props){
        super(props);
        this.state={

        };
        this.handleSolve=this.handleSolve.bind(this);
    }
  handleSolve() {
      this.props.solve()
  }
  render() {
    return (
      <div>
        <span>Solve the game? </span>
        <button onClick={this.handleSolve}>Solve</button>
      </div>
    );
  }
}

export default Solve;
