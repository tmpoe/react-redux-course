import { useState } from "react";

export default function TimerChallenge({ title, targetTime }) {
    const [timerExpired, setTimerExpired] = useState(false)
    const [timerStarted, setTimerStarted] = useState(false)
    function handleStart() {
        setTimerStarted(true)
        setTimeout(() => setTimerExpired(true), targetTime * 1000)
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && <p>You lost</p>}
            <p classname="challenge-time">
                {targetTime} second{targetTime > 1 ? "s" : ""}
            </p>
            <button onClick={handleStart}>{timerStarted ? 'Stop' : 'Start'}</button>
            <p className={timerStarted ? "active" : undefined}>{timerStarted ? "Time is running.." : "Timer inactive"}</p>
        </section>
    );
}