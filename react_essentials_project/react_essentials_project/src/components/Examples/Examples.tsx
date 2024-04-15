import { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "../TabButton/TabButton";
import Section from "../Section/Section";
import Tabs from "../Tabs/Tabs";

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState('')

    let tabContent = <p>Please select a topic</p>

    if (selectedTopic) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
            </div>
        )
    }

    function onSelect(selectedButton: string) {
        setSelectedTopic(selectedButton);
    }

    return (
        <>

            <Section id="examples" title="Examples">
                <Tabs buttonsContainer="menu" buttons={
                    <>
                        <TabButton isSelected={selectedTopic === "components"} onClick={() => onSelect("components")}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === "jsx"} onClick={() => onSelect("jsx")}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === "props"} onClick={() => onSelect("props")}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === "state"} onClick={() => onSelect("state")}>State</TabButton>
                    </>
                }>
                    {tabContent}
                </Tabs>
            </Section>
        </>
    )
}
