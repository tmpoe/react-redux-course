interface TabButtonGroupProps extends React.ComponentPropsWithoutRef<"button"> {
    children: React.ReactNode;
    isSelected: boolean;
}


export default function TabButton({ children, isSelected, ...props }: TabButtonGroupProps) {

    return (
        <li>
            <button type="button" className={isSelected ? "active" : ""} {...props}>
                {children}
            </button>
        </li>

    )
}