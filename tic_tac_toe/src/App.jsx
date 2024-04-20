import { useState } from "react"
import Player from "./components/player/Player"
import GameBoard from "./components/GameBoard/GameBoard"
import Log from "./components/Log/Log"
import GameOver from "./components/GameOver/GameOver"
import { WINNING_COMBINATIONS } from "./winning-combinations"


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];
let winner = null;

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([])
  // have as few states as possible!!!
  let activePlayer = deriveActivePlayer(gameTurns);

  const gameBoard = [...initialGameBoard.map(row => [...row])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {
    const firstSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSymbol = gameBoard[combination[2].row][combination[2].column];
    if (firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol) {
      winner = firstSymbol;
    }

  }
  const draw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, columnIndex) {

    // do not merge states! Do not use activePlayer here
    setGameTurns((prevGameTurns) => {
      const currentPlayer = deriveActivePlayer(prevGameTurns);
      return [{ square: { row: rowIndex, col: columnIndex }, player: currentPlayer }, ...prevGameTurns]
    })

  }

  function handleRematch() {
    setGameTurns([]);
    winner = null;
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="P1" symbol="X" isActive={activePlayer === 'X'} />
          <Player name="P2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        {(winner || draw) && <GameOver winner={winner} handleRematch={handleRematch} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  )
}

export default App
