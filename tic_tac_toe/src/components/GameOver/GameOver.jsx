export default function GameOver({ winner, handleRematch }) {
    return (
        <div id="game-over">
            {winner && <p>{`${winner} wins!`}</p>}
            {!winner && <p>It's a draw</p>}
            <button onClick={handleRematch}>Rematch</button>
        </div>
    )
}