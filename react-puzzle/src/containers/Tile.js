import React, { Component } from "react";
import { connect } from 'react-redux';
import { moveTile } from '../actions/boardActions'
import './Tile.css';


class Tile extends Component {

  render() {
    return (
      <div className="tile" onClick={() => this.props.moveTile(this.props.x, this.props.y, this.props.game)}>
        {this.props.value}
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
