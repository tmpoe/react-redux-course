/* eslint-disable @typescript-eslint/no-explicit-any */
export default function Tabs(
    { children, buttons, buttonsContainer = "menu" }: { children: React.ReactNode, buttons: React.ReactNode, buttonsContainer: React.ComponentType<any> | string }) {
    const ButtonsContainer = buttonsContainer;
    return (
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}