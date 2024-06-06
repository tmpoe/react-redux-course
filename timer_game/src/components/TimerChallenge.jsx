import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef()
    const dialog = useRef()
    const [timerStarted, setTimerStarted] = useState(false)

    function handleStart() {
        setTimerStarted(true)
        timer.current = setTimeout(
            () => {
                dialog.current.showModal()
            },
            targetTime * 1000)
    }

    function handleStop() {
        clearTimeout(timer.current)
    }

    return (
        <>
            <ResultModal ref={dialog} targetTime={targetTime} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? "s" : ""}
                </p>
                <button onClick={timerStarted ? handleStop : handleStart}>{timerStarted ? 'Stop' : 'Start'}</button>
                <p className={timerStarted ? "active" : undefined}>{timerStarted ? "Time is running.." : "Timer inactive"}</p>
            </section>
        </>
    );
}