import React, { Component } from "react";
import { connect } from 'react-redux';
import { moveTile } from '../actions/boardActions'
import './Tile.css';
// import reactLogo from '../react.png';

class Tile extends Component {
  tileAction = () => {
    if(!this.props.game.won) {
      this.props.moveTile(this.props.x, this.props.y, this.props.game, this.props.id);
    }
  }

  render() {
    const id = `n${this.props.id}`
    return (
      <div
        id={id}
        className="tile"
        onClick={() => this.tileAction()}
      >
        
      </div>
    )
  }
}

function mapStateToProps(store) {
  return {
    game: store.game
  }
}

export default connect(mapStateToProps, { moveTile })(Tile);
