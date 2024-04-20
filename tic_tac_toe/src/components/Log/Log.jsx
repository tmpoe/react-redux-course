export default function Log({ gameTurns }) {
    return (
        <ol id="log">
            {gameTurns.map((turn, index) => {
                const { player, square } = turn;
                const { row, col } = square;
                return (
                    <li key={`${row}${col}`}>
                        <p>{`Player ${player} placed on row ${row}, col ${col}`}</p>
                    </li>
                )
            })}
        </ol>
    )
}