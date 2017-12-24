import { connect } from 'react-redux';
import React from 'react';
import { mapStateToProps } from './actions/actions';
import Row from './components/Row';
import './App.css';

const App = ({ cells, winner, finished }) => {
  let end = finished ? 'end' : 'none';
  let showWinner = '';
  if (finished) {
    end = 'end';
    if (winner === 1) {
      showWinner = 'Player O wins.';
    } else if (winner === -1) {
      showWinner = 'Player X wins.';
    } else {
      showWinner = 'It is a tie.';
    }
  }
  return (
      <div className={'tic-tac-toe'}>
        {
           cells.map((row, i) => (
             <Row key={`line_${i}`} row={i} rowCells={row}/>
        ))}
        <div className={end}>
		      <h3>{showWinner}</h3><a href="" >Restart</a>
		    </div>
      </div>
  );
};

export default connect(mapStateToProps)(App);
