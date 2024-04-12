import { useState } from 'react'
import { Header } from './components/Header/Header'
import { CoreConcept } from './components/CoreConcept/CoreConcept'
import './App.css'
import { CORE_CONCEPTS, EXAMPLES } from './data.ts'
import TabButton from './components/TabButton/TabButton.tsx';


function App() {

  const [selectedTopic, setSelectedTopic] = useState('components')

  function onSelect(selectedButton: string) {
    setSelectedTopic(selectedButton);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => onSelect("components")}>Components</TabButton>
            <TabButton onSelect={() => onSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => onSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => onSelect("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

