const getInitCells = () => {
  const cells = [];
  for (let i = 0; i < 3; i += 1) {
    cells[i] = [];
    for (let j = 0; j < 3; j += 1) {
      cells[i][j] = 0;
    }
  }
  return cells;
};
const initialState = {
  cells: getInitCells(),
  player: 1, // player有1和-1
  winner: 0,
  finished: false,
};
function winnerJudge(cells) {
  console.log(1);
  // 橫向判斷
  for (let i = 0; i < 3; i += 1) {
    if (cells[i][0] + cells[i][1] + cells[i][2] === 3) {
      return 1;
    } else if (cells[i][0] + cells[i][1] + cells[i][2] === -3) {
      return -1;
    }
  }
  // 縱向判斷
  for (let i = 0; i < 3; i += 1) {
    if (cells[0][i] + cells[1][i] + cells[2][i] === 3) {
      return 1;
    } else if (cells[0][i] + cells[1][i] + cells[2][i] === -3) {
      return -1;
    }
  }
  // 斜向判斷
  if (cells[0][0] + cells[1][1] + cells[2][2] === 3) {
    return 1;
  } else if (cells[0][0] + cells[1][1] + cells[2][2] === -3) {
    return -1;
  }
  if (cells[0][2] + cells[1][1] + cells[2][0] === 3) {
    return 1;
  } else if (cells[0][2] + cells[1][1] + cells[2][0] === -3) {
    return -1;
  }
  let finished = true;
  for (let i = 0; i < 3; i += 1) {
    for (let j = 0; j < 3; j += 1) {
      if (cells[i][j] === 0) {
        finished = false;
      }
    }
  }
  if (finished === true) {
    return 2;
  }
  return 0;
}

export default (state = initialState, action) => {
  // clone state first, avoid mutate original state
  const cloneState = JSON.parse(JSON.stringify(state));
  const player = cloneState.player;
  switch (action.type) {
    case 'setMark':
      // 只有在沒有設定值時才可以設O或X
      if (cloneState.cells[action.row][action.column] === 0) {
        cloneState.cells[action.row][action.column] = player;
        const winner = winnerJudge(cloneState.cells);
        // 判斷成功了沒
        if (winner !== 0 && winner !== 2) {
          cloneState.winner = winner;
          cloneState.finished = true;
          return cloneState;
        } else if (winner === 2) {
          cloneState.finished = true;
          return cloneState;
        }
        cloneState.player *= -1;
        return cloneState;
      }
      return state;


    default:
      return state;
  }
};
