import { Header } from './components/Header/Header'
import './App.css'
import CoreConcepts from './components/CoreConcept/CoreConcepts.tsx'
import Examples from './components/Examples/Examples.tsx';


function App() {


  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;

