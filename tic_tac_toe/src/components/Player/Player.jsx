import { useState } from 'react'

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(name);
    let buttonText = isEditing ? 'Save' : 'Edit';

    const handleEdit = () => {
        setIsEditing(() => !isEditing);
    }

    const handleChange = (e) => {
        setPlayerName(e.target.value);
    }

    let playerNameField = isEditing ? <input type="text" value={playerName} required onChange={handleChange} /> : <span className="player-name">{playerName}</span>;

    return (
        <li>
            <span className="player">
                {playerNameField}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEdit}>{buttonText}</button>
        </li>)
}