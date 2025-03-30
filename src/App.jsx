import { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header/header';
import CoreConcept from './components/CoreConcept';
import TabButtons from './components/TabButtons';
import { EXAMPLES } from './data';



function  Main(){
  return(
    <main>
      <h1>Hello main part</h1>
    </main>
  )
}

function Maths(){
  return (
    <header>
      
    </header>
  )
}

function App() {
  const [selectedTopic , setSelectedTopic ]= useState();
  function handleClick(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  
  
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((coreConcept) => (
            <CoreConcept key={coreConcept.title}{...coreConcept} />))}
          
        </ul>
        </section>
        <section id="examples"> 
        <h2>Examples</h2>
        <menu>
          <TabButtons isSelected={selectedTopic ==="components"} onSelect = {() => handleClick('components')}> Components</TabButtons>
          <TabButtons isSelected={selectedTopic ==="jsx"} onSelect = {() => handleClick('jsx')}> JSX</TabButtons>
          <TabButtons isSelected={selectedTopic ==="props"} onSelect = {() => handleClick('props')}>Props</TabButtons>
          <TabButtons isSelected={selectedTopic ==="state"} onSelect = {() => handleClick('state')}>State</TabButtons>

        </menu>
    {!selectedTopic ? (<p>Please select a topic</p>):(<div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
    {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div> )}
        </section>
      </main>
    </div>
  );
}

export default App;
