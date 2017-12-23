import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Cell from './Cell';

export default ({ row, rowCells }) => {
  let classNm = '';
  switch (row) {
    case 0:
      classNm = 'top';
      break;
    case 1:
      classNm = 'center';
      break;
    case 2:
      classNm = 'bottom';
      break;
    default:
      classNm = '';
  }
  return (
    <div>
      {
           rowCells.map((cell, i) => (
             <Cell key={`cell_${row}_${i}`} rowClass={classNm} row={row} column={i}/>
      ))}
    </div>
  );
};

