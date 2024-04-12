export default function TabButton(props: { children: React.ReactNode, onSelect: () => void, isSelected: boolean }) {

    return (
        <li>
            <button className={props.isSelected ? "active" : ""} onClick={props.onSelect}>
                {props.children}
            </button>
        </li>

    )
}