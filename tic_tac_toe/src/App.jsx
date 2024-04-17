import Player from "./components/player/Player"
import GameBoard from "./components/GameBoard/GameBoard"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="P1" symbol="X" />
          <Player name="P2" symbol="O" />
        </ol>
        <GameBoard />
      </div>
    </main>
  )
}

export default App
