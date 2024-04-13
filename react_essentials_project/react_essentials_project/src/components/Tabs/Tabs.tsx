export default function Tabs({ children, buttons }: { children: React.ReactNode, buttons: React.ReactNode }) {
    return (
        <>
            <menu>
                {buttons}
            </menu>
            {children}
        </>
    )
}