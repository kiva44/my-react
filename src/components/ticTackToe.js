// TODO
// 1. кнопка начала игры (обнуления) - ГОТОВО
// 2. количество побед - ГОТОВО
// 3. Кто ходит первым (о или х) - ГОТОВО
// 4. Если игра окончена - дальше не играем - ГОТОВО
// 5. Посмотреть как добавить проход по истории ходов  - https://react.dev/learn/tutorial-tic-tac-toe

import { useEffect, useState } from "react";
import styles from "../index.module.css";

function Cell(props) {
  return (
    <div onClick={props.onCellClick} className={styles.cell}>
      {props.value}
    </div>
  );
}

export default function TicTackToe(props) {
  const winPos = [
    [0, 1, 2],
    [2, 5, 8],
    [6, 7, 8],
    [0, 3, 6],
    [0, 4, 8],
    [2, 4, 6],
    [3, 4, 5],
    [1, 4, 7],
  ];

  const [board, stateBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [turn, stateTurn] = useState("x");
  const [winX, setWinX] = useState(0);
  const [winO, setWinO] = useState(0);


  function newWinner(winner) {

    console.log(winner);

    if (winner === "o") {
      // console.log('winO' + winO);
      return setWinO(winO + 1);

    } else {
      // console.log('winX' + winX);
      return setWinX(winX + 1);
    }

  }


  function newGame() {

    let newBoard = board.map((value) => {
      return value = null;
    });

    stateBoard(newBoard);

  }


  function cellClick(idx) {
    if (board[idx] !== null) {
      return;
    }

    let newBoard = board.map((value, i) => {
      if (idx === i) {
        return turn;
      }

      return value;
    });

    stateBoard(newBoard);

    if (turn === "x") {
      stateTurn("o");
    } else {
      stateTurn("x");
    }
  }

  useEffect(() => {
    let winner = false;
    for (let i = 0; i < winPos.length; i++) {
      let line = winPos[i];

      if (
        board[line[0]] === board[line[1]] &&
        board[line[0]] === board[line[2]] &&
        board[line[0]] !== null
      ) {
        winner = board[line[0]];
        break;
      }
    }

    if (winner) {
      // alert(winner + " is winner");
      newWinner(winner)
      newGame()
    }
  }, [board]);

  return (
    <>
      <div className={styles.board}>
        {board.map((value, i) => {
          return (
            <Cell
              key={i}
              value={value}
              onCellClick={() => {
                cellClick(i);
              }}
            />
          );
        })}
      </div>
      <button onClick={() => {
        newGame()
        setWinO(0)
        setWinX(0)
      }}
      >Начать игру заново</button>
      <button onClick={() => {
        let result = window.confirm("Кто ходит первым? x - да, о - нет", '')
        if (result == true) {
          stateTurn("x")
          newGame()
        }
        else {
          stateTurn("o")
          newGame()
        }
      }}>Кто будет ходить первым?</button>
      <div className={styles.place}>{winX}</div>
      <div className={styles.place}>{winO}</div>
    </>
  );
}
