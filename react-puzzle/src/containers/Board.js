import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Board.css';

import Tile from './Tile';
import BlankTile from './BlankTile';

class Board extends Component {

  render() {

    const board1 = this.props.game.board[0].map((v, i) => {
      if(v) {
        return <Tile y={0} x={i} value={v} key={v} />
      } else {
        return <BlankTile key={v} />
      }
    });
    const board2 = this.props.game.board[1].map((v, i) => {
      if(v) {
        return <Tile y={1} x={i} value={v} key={v} />
      } else {
        return <BlankTile key={v} />
      }
    });
    const board3 = this.props.game.board[2].map((v, i) => {
      if(v) {
        return <Tile y={2} x={i} value={v} key={v} />
      } else {
        return <BlankTile key={v} />
      }
    });
    return(
      <div className="board-edge">
        <div className="top" >
          <div className="corner"></div>
          <div className="horiz-edge vert-indent"></div>
          <div className="corner"></div>
        </div>
        <div className="middle">
          <div className="vert-edge horiz-indent"></div>
          <div className="board">
            {board1}
            {board2}
            {board3}
          </div>
          <div className="vert-edge"></div>
        </div>
        <div className="bottom">
          <div className="corner"></div>
          <div className="horiz-edge"></div>
          <div className="corner"></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    game: store.game
  }
}

export default connect(mapStateToProps)(Board);
