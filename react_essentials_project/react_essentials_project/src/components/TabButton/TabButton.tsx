export default function TabButton(props: { children: React.ReactNode, onSelect: () => void }) {

    return (
        <li>
            <button className="tab-button" onClick={props.onSelect}>
                {props.children}
            </button>
        </li>

    )
}