import { useState } from "react"
import Player from "./components/player/Player"
import GameBoard from "./components/GameBoard/GameBoard"

function App() {
  const [activePlayer, setActivePlayer] = useState('X')
  const [gameTurns, setGameTurns] = useState([])

  function handleSelectSquare(rowIndex, columnIndex) {
    setActivePlayer((prevActivePlayer) => {
      return prevActivePlayer === 'X' ? 'O' : 'X'
    })

    // do not merge states! Do not use activePlayer here
    setGameTurns((prevGameTurns) => {
      let currentPlayer = 'X';

      if (prevGameTurns.length > 0 && prevGameTurns[0].player === 'X') {
        currentPlayer = 'O';
      }
      return [{ square: { row: rowIndex, col: columnIndex }, player: currentPlayer }, ...prevGameTurns]
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="P1" symbol="X" isActive={activePlayer === 'X'} />
          <Player name="P2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      </div>
    </main>
  )
}

export default App
