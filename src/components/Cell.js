import { connect } from 'react-redux';
import React, { Component } from 'react';
import { mapStateToProps, mapDispatchToProps } from '../actions/actions';


class Cell extends Component {
  render() {
    let columnClass;
    // 有沒有被設定過了
    const playerVal = this.props.cells[this.props.row][this.props.column];
    let player;
    if (playerVal === 0) {
      player = `player-${this.props.player === 1 ? 1 : 2}`;
    } else {
      player = `player-${playerVal === 1 ? 1 : 2}`;
    }


    switch (this.props.column) {
      case 0:
        columnClass = 'left';
        break;
      case 1:
        columnClass = 'middle';
        break;
      case 2:
        columnClass = 'right';
        break;
      default:
        columnClass = '';
    }
    return (
      <span>
        <input className={`${player} ${columnClass}  ${this.props.rowClass}`}
          onClick={() => this.props.setMark(this.props.row, this.props.column)}
          id={`block-${this.props.row}-${this.props.column}`} type="radio"/>
        <label htmlFor={`block-${this.props.row}-${this.props.column}`} ></label>
      </span>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cell);

