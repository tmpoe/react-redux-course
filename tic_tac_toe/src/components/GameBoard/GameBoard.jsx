const initialGameBorad = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard() {
    return (
        <ol id="game-board">
            {initialGameBorad.map((row, i) => (
                <li key={i}>
                    <ol>
                        {row.map((cell, j) => (
                            <li key={j}>
                                <button>{cell}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    )
}