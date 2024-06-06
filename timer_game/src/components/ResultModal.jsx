import { forwardRef } from 'react'

const ResultModal = forwardRef(function ResultModal({ result, targetTime }, ref) {
    <dialog ref={ref} className="result-modal">
        <h2>
            You {result}!
        </h2>
        <p>The target time was <strong>{targetTime} seconds</strong>.</p>
        <p>You stopped the timer with <strong>X seconds left</strong></p>
        <form method="dialog">
            <button type="submit">Close</button>
        </form>
    </dialog>
})

export default ResultModal